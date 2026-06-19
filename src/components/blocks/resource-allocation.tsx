import Image from "next/image";

import { DashedLine } from "../dashed-line";

import { cn } from "@/lib/utils";

const topItems = [
  {
    title: "A menu page that feels as good as your restaurant.",
    description:
      "Every restaurant gets a mobile-friendly menu page with their brand colours, logo, and social links.",
    images: [
      {
        src: "/resource-allocation/menu.webp",
        alt: "Public menu page showing restaurant header and menu items",
        width: 1080,
        height: 870,
        imageClassName: "max-h-64 w-auto",
      },
    ],
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 md:[&>.image-container]:translate-x-2",
    fade: [""],
  },
  {
    title: "Put your menu where customers already click.",
    description:
      "Add your menu link to Instagram, TikTok, WhatsApp, Google Maps, and QR codes with one beautiful page.",
    images: [
      { src: "/logos/instagram-icon.svg", alt: "Instagram", width: 48, height: 48 },
      { src: "/logos/tiktok-icon.svg", alt: "TikTok", width: 48, height: 48 },
      { src: "/logos/whatsapp-icon.svg", alt: "WhatsApp", width: 48, height: 48 },
      { src: "/logos/facebook-icon.svg", alt: "Facebook", width: 48, height: 48 },
      { src: "/logos/youtube-icon.svg", alt: "YouTube", width: 48, height: 48 },
      { src: "/logos/google-maps-color.svg", alt: "Google Maps", width: 48, height: 48 },
      { src: "/logos/instagram-icon.svg", alt: "Instagram", width: 48, height: 48 },
      { src: "/logos/tiktok-icon.svg", alt: "TikTok", width: 48, height: 48 },
    ],
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 md:[&>.title-container]:translate-x-2 xl:[&>.title-container]:translate-x-4 [&>.title-container]:translate-x-0",
    fade: [],
  },
];

const bottomItems = [
  {
    title: "QR codes ready to print.",
    description:
      "Print it, frame it, or stick it on tables - customers scan and see your menu instantly.",
    images: [
      {
        src: "/resource-allocation/qr.webp",
        alt: "QR code card with Scan & Share CTA",
        width: 305,
        height: 280,
        imageClassName: "max-h-64 w-auto",
      },
    ],
    className:
      "[&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 md:[&>.image-container]:translate-x-2",
    fade: ["bottom"],
  },
  {
    title: "Beautiful dish pages, automatically.",
    description:
      "Food photos, descriptions, and prices — all laid out for you.",
    images: [
      {
        src: "/resource-allocation/menu-card.webp",
        alt: "Menu category card showing food items with photos and prices",
        width: 1080,
        height: 825,
        imageClassName: "max-h-64 w-auto",
      },
    ],
    className:
      "[&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 md:[&>.image-container]:translate-x-2",
    fade: ["bottom"],
  },
  {
    title: "Up and running in minutes.",
    description:
      "Set up your business profile, add your details, and go live — no technical knowledge needed.",
    images: [
      {
        src: "/resource-allocation/onboarding.webp",
        alt: "Onboarding form — set up your business",
        width: 1056,
        height: 1108,
        imageClassName: "max-h-96 w-auto",
      },
    ],
    className:
      "[&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 md:[&>.image-container]:translate-x-2",
    fade: ["bottom"],
  },
];

export const ResourceAllocation = () => {
  return (
    <section
      id="resource-allocation"
      className="overflow-hidden pb-28 lg:pb-32"
    >
      <div className="">
        <h2 className="container text-center text-2xl tracking-tight text-balance sm:text-3xl md:text-4xl lg:text-5xl">
          Everywhere customers find you
        </h2>

        <div className="mt-8 md:mt-12 lg:mt-20">
          <DashedLine
            orientation="horizontal"
            className="container scale-x-105"
          />

          {/* Top Features Grid - 2 items */}
          <div className="relative container flex max-md:flex-col">
            {topItems.map((item, i) => (
              <Item key={i} item={item} isLast={i === topItems.length - 1} />
            ))}
          </div>
          <DashedLine
            orientation="horizontal"
            className="container max-w-7xl scale-x-110"
          />

          {/* Bottom Features Grid - 3 items */}
          <div className="relative container grid max-w-7xl md:grid-cols-3">
            {bottomItems.map((item, i) => (
              <Item
                key={i}
                item={item}
                isLast={i === bottomItems.length - 1}
                className=""
              />
            ))}
          </div>
        </div>
        <DashedLine
          orientation="horizontal"
          className="container max-w-7xl scale-x-110"
        />
      </div>
    </section>
  );
};

type ResourceItem = {
  title: string;
  description: string;
  images: { src: string; alt: string; width: number; height: number; imageClassName?: string }[];
  className: string;
  fade: string[];
};

interface ItemProps {
  item: ResourceItem;
  isLast?: boolean;
  className?: string;
}

const Item = ({ item, isLast, className }: ItemProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-5 overflow-hidden px-0 py-6 md:px-6 md:py-8",
        className,
        item.className,
      )}
    >
      <div className="title-container text-balance">
        <h3 className="inline font-semibold">{item.title} </h3>
        <span className="text-muted-foreground"> {item.description}</span>
      </div>

      {item.fade.includes("bottom") && (
        <div className="from-muted/80 absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent md:hidden" />
      )}
      {item.images.length > 4 ? (
        <div className="relative overflow-hidden">
          <div className="flex flex-col gap-5">
            {/* First row - right aligned */}
            <div className="flex translate-x-4 justify-end gap-5">
              {item.images.slice(0, 4).map((image, j) => (
                <div
                  key={j}
                  className="bg-background grid aspect-square size-16 place-items-center rounded-2xl p-2 lg:size-20"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="object-contain object-left-top"
                  />
                  <div className="from-muted/80 absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l to-transparent" />
                </div>
              ))}
            </div>
            {/* Second row - left aligned */}
            <div className="flex -translate-x-4 gap-5">
              {item.images.slice(4).map((image, j) => (
                <div
                  key={j}
                  className="bg-background grid aspect-square size-16 place-items-center rounded-2xl lg:size-20"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="object-contain object-left-top"
                  />
                  <div className="from-muted absolute inset-y-0 bottom-0 left-0 z-10 w-14 bg-linear-to-r to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="image-container grid grid-cols-1 gap-4">
          {item.images.map((image, j) => (
            <Image
              key={j}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={cn("mx-auto rounded-lg border object-contain object-top", image.imageClassName ?? "max-h-64 w-auto")}
            />
          ))}
        </div>
      )}

      {!isLast && (
        <>
          <DashedLine
            orientation="vertical"
            className="absolute top-0 right-0 max-md:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute inset-x-0 bottom-0 md:hidden"
          />
        </>
      )}
    </div>
  );
};
