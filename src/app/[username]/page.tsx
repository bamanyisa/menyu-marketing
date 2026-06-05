import { notFound } from "next/navigation";

import type { Metadata } from "next";

import MenuPage, { type MenuData } from "./_components/MenuPage";

export const runtime = "edge";

const RESERVED = new Set([
  "about",
  "contact",
  "pricing",
  "faq",
  "privacy",
  "blog",
  "docs",
  "api",
  "app",
  "admin",
  "dashboard",
  "login",
  "signup",
  "register",
]);

type Props = { params: Promise<{ username: string }> };

async function fetchMenu(username: string): Promise<MenuData | null> {
  try {
    const res = await fetch(
      `https://api.mymenyu.com/v1/menu/${encodeURIComponent(username)}`,
      { next: { revalidate: 60 } },
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  const data = await fetchMenu(username);
  if (!data) return { title: "Menu not found" };

  const { seo } = data;
  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.og_title,
      description: seo.og_description,
      images: seo.og_image ? [{ url: seo.og_image }] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.og_title,
      description: seo.og_description,
      images: seo.og_image ? [seo.og_image] : [],
    },
  };
}

export default async function Page({ params }: Props) {
  const { username } = await params;

  if (RESERVED.has(username.toLowerCase())) notFound();

  const data = await fetchMenu(username);
  if (!data) notFound();

  return (
    <>
      {data.seo.schemas?.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <MenuPage data={data} />
    </>
  );
}
