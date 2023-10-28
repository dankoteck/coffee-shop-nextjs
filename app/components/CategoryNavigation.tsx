"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import menuNavigation from "~/static/json/menu-navigation";
import { cn } from "~/lib/utils";
import { useEffect } from "react";

export default function CategoryNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  const isActive = (val: string) => {
    return category?.toLowerCase().trim() === val;
  };

  useEffect(() => {
    if (!category) {
      router.push(`${pathname}?category=all`);
    }
  }, [pathname, router, category]);

  return (
    <ul className="scrollbar w-overflow pr-[60px] flex gap-5 items-center">
      {menuNavigation.map((item) => (
        <li key={item.label} className="flex flex-col gap-1.5 items-center">
          <Link
            href={"?category=" + item.value}
            className={cn(
              "text-[#52555A] font-semibold text-[14px] leading-5",
              { "text-[#D17842]": isActive(item.value) }
            )}
          >
            {item.label}
          </Link>

          <span
            className={cn("w-2 h-2 invisible bg-[#D17842] rounded-full", {
              visible: isActive(item.value),
            })}
          />
        </li>
      ))}
    </ul>
  );
}
