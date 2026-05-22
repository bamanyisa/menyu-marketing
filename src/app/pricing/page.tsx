import React from "react";

import type { Metadata } from "next";

import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { Pricing } from "@/components/blocks/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple pricing for Menyu. Start free, upgrade to Pro when you need more.",
};

const Page = () => {
  return (
    <Background>
      <Pricing className="py-28 lg:pt-44 lg:pb-32" />
      <FAQ className="pt-0" />
    </Background>
  );
};

export default Page;
