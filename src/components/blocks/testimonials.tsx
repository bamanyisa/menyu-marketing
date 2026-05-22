import { DashedLine } from "../dashed-line";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const items = [
  {
    quote: "We printed the QR code the same day we signed up. Customers started scanning it at lunch.",
    author: "Sarah Nakato",
    role: "Owner",
    restaurant: "Café Bites, Kampala",
  },
  {
    quote: "Updating prices used to mean reprinting everything. Now I just log in and change it in seconds.",
    author: "David Ochieng",
    role: "Manager",
    restaurant: "The Nairobi Grill",
  },
  {
    quote: "Our menu looks professional now. Customers comment on it — they appreciate being able to read it on their phone.",
    author: "Amara Diallo",
    role: "Owner",
    restaurant: "Terrasse de Bamako",
  },
  {
    quote: "Setup was genuinely fast. I had a working menu page before I finished my coffee.",
    author: "James Mwangi",
    role: "F&B Director",
    restaurant: "Serena Lodges",
  },
  {
    quote: "We printed the QR code the same day we signed up. Customers started scanning it at lunch.",
    author: "Sarah Nakato",
    role: "Owner",
    restaurant: "Café Bites, Kampala",
  },
  {
    quote: "Updating prices used to mean reprinting everything. Now I just log in and change it in seconds.",
    author: "David Ochieng",
    role: "Manager",
    restaurant: "The Nairobi Grill",
  },
  {
    quote: "Our menu looks professional now. Customers comment on it — they appreciate being able to read it on their phone.",
    author: "Amara Diallo",
    role: "Owner",
    restaurant: "Terrasse de Bamako",
  },
  {
    quote: "Setup was genuinely fast. I had a working menu page before I finished my coffee.",
    author: "James Mwangi",
    role: "F&B Director",
    restaurant: "Serena Lodges",
  },
];

export const Testimonials = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  return (
    <>
      <section className={cn("overflow-hidden py-28 lg:py-32", className)}>
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
              Restaurants love it
            </h2>
            <p className="text-muted-foreground max-w-md leading-snug">
              From solo cafés to multi-location groups — restaurants use Menyu
              to give customers a better way to browse the menu.
            </p>
          </div>

          <div className="relative mt-8 -mr-[max(3rem,calc((100vw-80rem)/2+3rem))] md:mt-12 lg:mt-20">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {items.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="xl:basis-1/3.5 grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%]"
                  >
                    <Card className="bg-muted h-full overflow-hidden border-none">
                      <CardContent className="flex h-full flex-col justify-between gap-10 p-6">
                        <blockquote className="font-display text-lg leading-snug font-medium md:text-xl lg:text-2xl">
                          &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>
                        <div className="space-y-0.5">
                          <div className="text-primary font-semibold">
                            {testimonial.author}, {testimonial.role}
                          </div>
                          <div className="text-muted-foreground text-sm">
                            {testimonial.restaurant}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex gap-3">
                <CarouselPrevious className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
                <CarouselNext className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <DashedLine
        orientation="horizontal"
        className={cn("mx-auto max-w-[80%]", dashedLineClassName)}
      />
    </>
  );
};
