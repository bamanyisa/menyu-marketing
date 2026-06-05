"use client";

import { useState } from "react";

import { Globe, MapPin, ImagePlus, Share2, Check } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

interface MenuItem {
  id: number;
  name: string;
  description: string | null;
  price: string | null;
  image_url: string | null;
  available: boolean;
}

interface MenuCategory {
  id: number;
  name: string;
  description: string | null;
  items: MenuItem[];
}

interface Restaurant {
  id: number;
  name: string;
  username: string;
  description: string | null;
  address: string | null;
  logo_url: string | null;
  cover_image_url: string | null;
  cover_position: string | null;
  brand_color: string;
  currency_code: string;
}

interface SocialLink {
  key: string;
  url: string;
}

export interface MenuData {
  restaurant: Restaurant;
  categories: MenuCategory[];
  social_links: SocialLink[];
  seo: {
    title: string;
    description: string;
    og_title: string;
    og_description: string;
    og_image: string | null;
    schemas: Record<string, unknown>[];
  };
  menu_url: string;
  show_cta: boolean;
  growth_cta_text: string | null;
  register_url: string;
}

const socialIconByKey: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  x: FaXTwitter,
  tiktok: FaTiktok,
  youtube: FaYoutube,
  website: Globe,
  maps: MapPin,
};

const socialLabelByKey: Record<string, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  x: "X",
  tiktok: "TikTok",
  youtube: "YouTube",
  website: "Website",
  maps: "Maps",
};

export default function MenuPage({ data }: { data: MenuData }) {
  const { restaurant, categories, social_links, show_cta, growth_cta_text, register_url } = data;
  const brandColor = restaurant.brand_color ?? "#cc3500";
  const currencyCode = restaurant.currency_code;

  const [copied, setCopied] = useState(false);

  function handleShare() {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: restaurant.name, url });
    } else {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  }

  return (
    <>
      <style>{`
        :root { --brand: ${brandColor}; }
        .brand-bg { background-color: ${brandColor}12; }
        .brand-btn { background-color: ${brandColor}; color: #fff; }
        .brand-btn:hover { background-color: ${brandColor}dd; }
        .brand-icon:hover { border-color: ${brandColor}; color: ${brandColor}; }
      `}</style>
      <div className="brand-bg min-h-screen px-3 py-4 text-stone-900">
        <main className="mx-auto max-w-lg space-y-3">

          {/* Header card */}
          <div className="overflow-hidden rounded-lg bg-white shadow-sm">
            {/* Cover */}
            <div className="relative h-28 w-full bg-stone-200">
              {restaurant.cover_image_url ? (
                <img
                  src={restaurant.cover_image_url}
                  alt={restaurant.name}
                  className="h-full w-full object-cover"
                  style={
                    restaurant.cover_position
                      ? { objectPosition: restaurant.cover_position }
                      : undefined
                  }
                />
              ) : null}
              <button
                onClick={handleShare}
                className="absolute top-2.5 right-2.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/80 text-stone-600 shadow-sm backdrop-blur-sm transition hover:bg-white"
                aria-label="Share menu"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-green-600" />
                ) : (
                  <Share2 className="h-3.5 w-3.5" />
                )}
              </button>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="h-16 w-16 rounded-full border-[3px] border-white shadow-sm overflow-hidden bg-stone-100 flex items-center justify-center">
                  {restaurant.logo_url ? (
                    <img
                      src={restaurant.logo_url}
                      alt={restaurant.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-lg font-semibold text-stone-400">
                      {restaurant.name?.[0]?.toUpperCase() ?? "?"}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="px-4 pb-4 pt-11 text-center">
              <h1 className="text-lg font-semibold tracking-tight">{restaurant.name}</h1>
              {restaurant.address ? (
                <p className="mt-0.5 text-xs text-stone-500">{restaurant.address}</p>
              ) : null}
              {restaurant.description ? (
                <p className="mt-1 text-sm text-stone-600">{restaurant.description}</p>
              ) : null}

              {social_links.length > 0 && (
                <div className="mt-3 flex flex-wrap justify-center gap-2.5">
                  {social_links.map((link) => {
                    const Icon = socialIconByKey[link.key] ?? Globe;
                    const label = socialLabelByKey[link.key] ?? link.key;
                    return (
                      <a
                        key={link.key}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="brand-icon inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-600 shadow-sm transition hover:-translate-y-0.5"
                        aria-label={`Open ${label}`}
                        title={label}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Menu categories */}
          {categories.map((category) => (
            <div
              key={category.id}
              className="overflow-hidden rounded-lg border border-stone-100 bg-white shadow-sm"
            >
              <div className="border-b border-stone-100 px-4 py-2.5">
                <h2 className="font-semibold text-sm">{category.name}</h2>
                {category.description ? (
                  <p className="mt-0.5 text-xs text-stone-500">{category.description}</p>
                ) : null}
              </div>

              <div className="px-4 pb-3">
                {(category.items ?? []).map((item, idx) => (
                  <div key={item.id}>
                    {idx > 0 ? (
                      <div className="my-2.5 h-px bg-border" />
                    ) : (
                      <div className="mt-2.5" />
                    )}
                    <div className="flex items-center gap-3">
                      <div className="flex aspect-square w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-stone-200 bg-stone-100">
                        {item.image_url ? (
                          <img
                            src={item.image_url}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <ImagePlus className="h-5 w-5 text-stone-300" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1 text-start">
                        <p className="font-medium text-sm">{item.name}</p>
                        {item.description ? (
                          <p className="line-clamp-2 text-xs text-stone-600">
                            {item.description}
                          </p>
                        ) : null}
                      </div>
                      {item.price !== null ? (
                        <div className="ms-auto shrink-0 text-right">
                          <p className="text-sm font-semibold text-stone-800">
                            {currencyCode} {Number(item.price).toLocaleString()}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Branding CTA */}
          {show_cta && (
            <div className="rounded-lg bg-white shadow-sm overflow-hidden">
              <div className="border-t border-gray-100 px-5 py-3 flex justify-center">
                <a
                  href={register_url}
                  className="brand-btn inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition"
                >
                  {growth_cta_text}
                </a>
              </div>
            </div>
          )}

        </main>
      </div>
    </>
  );
}
