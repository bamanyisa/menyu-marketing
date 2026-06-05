import type { Metadata } from "next";

import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";

export const metadata: Metadata = {
  title: "FAQ | Menyu",
  description: "Answers to common questions about Menyu.",
};

export default function FAQPage() {
  return (
    <Background variant="bottom">
      <FAQ
        className="py-28 lg:pt-44 lg:pb-32"
        className2="max-w-xl lg:grid-cols-1"
        headerTag="h1"
      />
    </Background>
  );
}
