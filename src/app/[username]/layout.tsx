import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${geist.variable} font-[family-name:var(--font-geist)]`}>
      {children}
    </div>
  );
}
