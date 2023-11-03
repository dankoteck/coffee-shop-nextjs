"use client";

import { useCallback, useState } from "react";
import { cn } from "~/lib/utils";

type Props = {
  sizes: string[];
};

export default function ButtonSelectSize({ sizes }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelectIndex = useCallback(
    (idx: number) => () => {
      setSelectedIndex(idx);
    },
    []
  );

  return (
    <div className="flex items-center gap-6">
      {sizes.map((size, idx) => (
        <button
          key={size}
          onClick={onSelectIndex(idx)}
          className={cn(
            "transition duration-200 border-solid border-2 border-transparent rounded-[10px] bg-[#141921] py-[10px] px-7 text-[#AEAEAE] text-[12px] leading-5 font-medium",
            { "border-[#D17842]": selectedIndex === idx }
          )}
        >
          {size}
        </button>
      ))}
    </div>
  );
}
