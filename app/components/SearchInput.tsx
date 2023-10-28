"use client";
import Image from "next/image";
import SearchIcon from "~/assets/icons/search-icon.svg";

type Props = {
  placeholder?: string;
};

export default function SearchInput({ placeholder }: Props) {
  return (
    <div className="relative w-[330px] h-[45px]">
      <span className="absolute content-[''] text-white z-10 top-[calc(50%-10px)] left-5">
        <Image src={SearchIcon} alt="search-icon" />
      </span>

      <input
        className=" py-[12px] px-6 pl-14 w-full rounded-[15px] text-white focus:outline-none bg-[#141921] placeholder:text-[#52555A] placeholder:text-[10px] placeholder:leading-5"
        placeholder={placeholder}
      />
    </div>
  );
}
