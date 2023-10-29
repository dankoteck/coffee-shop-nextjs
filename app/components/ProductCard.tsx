import Image from "next/image";
import Link from "next/link";
import { Product } from "~/static/json/products";
import StarIcon from "~/assets/icons/star.svg";

type Props = {
  item: Product;
};

export default function ProductCard({ item }: Props) {
  return (
    <Link href={`/product/${item.id}`}>
      <div className="w-fit p-3 rounded-[23px] bg-card flex flex-col gap-3">
        <div className="w-[126px] aspect-square relative">
          {item.images && (
            <Image
              fill
              className="rounded-[16px]"
              src={item.images[0]}
              alt={item.title}
            />
          )}
          <div className="absolute right-0 top-0 flex gap-1 items-center justify-center rounded-bl-[26px] rounded-tr-[16px] px-3 bg-[#00000099] text-white font-semibold text-[10px] leading-5">
            <Image src={StarIcon} alt="Rating star" width={10} height={10} />
            {item.star}
          </div>
        </div>

        <div className="flex flex-col gap-1.5 text-white font-normal">
          <p className="text-[13px] leading-5">{item.category}</p>
          <p className="text-[9px] leading-5">{item.title}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 font-semibold text-[15px] leading-5">
              <span className="text-[#D17842]">$</span>
              <span className="text-white">{item.price}</span>
            </div>
            <button className="text-white rounded-[7px] bg-[#D17842] px-2 font-normal text-lg">
              +
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
