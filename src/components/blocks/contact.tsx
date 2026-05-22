import React from "react";

import Link from "next/link";

import { ContactForm } from "@/components/blocks/contact-form";
import { DashedLine } from "@/components/dashed-line";

export default function Contact() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-2xl">
        <h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Get in touch
        </h1>
        <p className="text-muted-foreground mt-4 text-center leading-snug font-medium lg:mx-auto">
          Have a question or need help? Email us at{" "}
          <Link
            href="mailto:hello@mymenyu.com"
            className="text-foreground underline underline-offset-4"
          >
            hello@mymenyu.com
          </Link>{" "}
          or send a message below.
        </p>

        <DashedLine className="my-12" />

        <div className="mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
