import { cn } from "@/lib/utils";
import Image from "next/image";

import React from "react";
import { BentoGrid, BentoGridItem } from "./../../../components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";


export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Easy UPI Services",
    description: "All UPI services available with ease of cashout.",
    header: (
      <div className="relative h-48 w-full">
        <Image
          src="/online-payments.png"
          alt="Design"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    ),
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Secured Transaction",
    description: "Guarantee of instant money and secure transaction.",
    header:  (
      <div className="relative h-48 w-full">
        <Image
          src="/shield.png"
          alt="Design"
          fill
          className="object-scale-down rounded-xl"
        />
      </div>
    ),
  className: "md:col-span-1",
  icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
{
  title: "Full-proof Investment",
    description: "Secure investment with easy returns.",
      header: (
      <div className="relative h-48 w-full">
        <Image
          src="/return-on-investment.png"
          alt="Design"
          fill
          className="object-scale-down rounded-xl"
        />
      </div>
    ),
        className: "md:col-span-1",
          icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
{
  title: "24/7 Cutomer Support.",
    description:
  "Easy and Fast Customer Support",
    header: (
      <div className="relative h-48 w-full">
        <Image
          src="/capture.PNG"
          alt="Design"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    ),
      className: "md:col-span-2",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
