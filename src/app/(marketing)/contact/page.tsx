import type { Metadata } from "next";

import { Background } from "@/components/background";
import Contact from "@/components/blocks/contact";

export const metadata: Metadata = {
  title: "Contact",
};

const Page = () => {
  return (
    <Background>
      <Contact />
    </Background>
  );
};

export default Page;
