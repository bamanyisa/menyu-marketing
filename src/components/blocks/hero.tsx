import Image from "next/image";

import { QrCode, Pencil, Smartphone, Zap } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Ready in minutes",
    description: "Import a photo or PDF and get your menu live fast.",
    icon: Zap,
  },
  {
    title: "Edit anytime",
    description: "Update prices, items, and sections whenever you need.",
    icon: Pencil,
  },
  {
    title: "QR code included",
    description: "Every menu comes with a scannable QR code, ready to print.",
    icon: QrCode,
  },
  {
    title: "Works on every phone",
    description: "Mobile-friendly by default. No app download needed.",
    icon: Smartphone,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        <div className="flex-1">
          <p className="text-muted-foreground mb-4 text-sm font-medium uppercase tracking-widest">
            Built for restaurants
          </p>
          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl">
            Create a beautiful digital menu and QR code in minutes.
          </h1>

          <p className="text-muted-foreground mt-5 text-xl md:text-2xl">
            Import a menu photo or PDF, review the extracted items, and share a
            mobile-friendly menu page your customers can scan.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <a href="#">Create Free Menu</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#">See an example</a>
            </Button>
          </div>
        </div>

        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24">
        <div className="relative h-[793px] w-full">
          <Image
            src="/hero.webp"
            alt="Menyu dashboard — manage your restaurant menu"
            fill
            className="rounded-2xl object-cover object-left-top shadow-lg max-lg:rounded-tr-none"
            priority
          />
        </div>
      </div>
    </section>
  );
};
