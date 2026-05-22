import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const questions = [
  {
    question: "How do I create my menu?",
    answer:
      "Sign up for free, then import a photo or PDF of your existing menu. Menyu extracts the items automatically — you review and confirm, then your menu is live.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most restaurants are live in under 5 minutes. You can always go back and fine-tune the details after your first publish.",
  },
  {
    question: "Can I update prices or items after publishing?",
    answer:
      "Yes — you can edit your menu at any time from the dashboard. Changes go live immediately, and your QR code always points to the latest version.",
  },
  {
    question: "Can customers order from my Menyu menu?",
    answer:
      "Menyu is a digital display menu, not an ordering platform. Customers view your menu on their phone — they still order the usual way at your restaurant.",
  },
  {
    question: "How does the QR code work?",
    answer:
      "Every menu includes a QR code you can download and print. When a customer scans it, they land directly on your mobile-friendly menu page.",
  },
  {
    question: "Does the QR code change if I update my menu?",
    answer:
      "No — your QR code stays the same. It always links to your live menu, so printed materials never go out of date.",
  },
  {
    question: "What does the Pro plan include?",
    answer:
      "Pro removes Menyu branding from your menu page, unlocks unlimited sections and items, lets you set custom brand colors, and gives you priority support.",
  },
  {
    question: "Is there a free trial for Pro?",
    answer:
      "The Free plan has no time limit and no credit card required. When you're ready to upgrade, Pro is $9/month with no long-term commitment.",
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got questions?
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got questions?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              Can&apos;t find what you&apos;re looking for?{" "}
              <Link href="/contact" className="underline underline-offset-4">
                Get in touch
              </Link>
              .
            </p>
          </div>

          <div className="text-start">
            <Accordion type="single" collapsible className="w-full">
              {questions.map((item, i) => (
                <AccordionItem key={i} value={`${i}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
