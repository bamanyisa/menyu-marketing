"use client";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Free forever — no credit card required",
    features: [
      "Mobile-friendly menu page",
      "QR code ready to print",
      "Unlimited sections and items",
      "Import from photo or PDF",
      "Custom brand colors",
    ],
    cta: "Create Free Menu",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/ month",
    description: "Everything in Free, without the Menyu badge",
    features: [
      "Mobile-friendly menu page",
      "QR code ready to print",
      "Unlimited sections and items",
      "Import from photo or PDF",
      "Custom brand colors",
      "No Menyu branding",
    ],
    cta: "Upgrade to Pro",
    highlight: true,
  },
];

export const Pricing = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-3xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Simple pricing
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            Start free and upgrade when you need more. No hidden fees, no
            contracts.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-2 lg:mt-20">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.highlight ? "outline-primary origin-top outline-4" : ""}
            >
              <CardContent className="flex flex-col gap-7 px-6 py-5">
                <div className="space-y-2">
                  <h3 className="text-foreground font-semibold">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground text-sm">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted-foreground flex items-center gap-1.5"
                    >
                      <Check className="size-5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-fit"
                  variant={plan.highlight ? "default" : "outline"}
                  asChild
                >
                  <a href="#">{plan.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
