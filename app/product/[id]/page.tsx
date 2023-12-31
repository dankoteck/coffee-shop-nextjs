import Image from "next/image";
import { notFound } from "next/navigation";

import FlameIcon from "~/assets/icons/flame.svg";
import IcedIcon from "~/assets/icons/iced.svg";
import LocationIcon from "~/assets/icons/location.svg";
import StarIcon from "~/assets/icons/star.svg";
import HeartIcon from "~/assets/icons/heart.svg";

import Products from "~/static/json/products";

import ButtonSelectSize from "./ButtonSelectSize";

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  // Should be done with calling to API
  const product = Products.find((item) => item.id === Number(params.id));

  if (!product) {
    notFound();
  }

  return (
    <section className="l-container">
      <div className="h-[60%] relative bg-[#D9D9D9]">
        {product?.images && (
          <Image
            fill
            src={product.images[0]}
            alt={product.title}
            className="object-cover aspect-square"
          />
        )}
        <div className="absolute left-0 right-0 bottom-0 h-fit px-6 py-[30px] flex justify-between items-center text-white bg-[#00000080] rounded-tl-3xl rounded-tr-3xl">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-xl leading-5">
                {product.category}
              </p>
              <p className="font-normal text-xs leading-5 text-[#AEAEAE]">
                {product.title}
              </p>
            </div>

            <div className="flex items-center gap-1">
              <Image src={StarIcon} alt="Rating star" width={24} height={24} />
              <span className="font-semibold text-base leading-5">
                {product.star}
              </span>
              <span className="leading-5 ml-1 font-normal text-[10px] text-[#AEAEAE]">
                ({product.rating.toLocaleString()})
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-6 items-center">
              <div className="bg-[#141921] rounded-[10px] text-[#AEAEAE] flex flex-col items-center relative w-14 h-14 p-2">
                <Image
                  src={product.type === "Hot" ? FlameIcon : IcedIcon}
                  alt={product.title + product.type}
                  className="w-7 h-7 object-contain"
                />

                <p className="text-[10px] leading-5 font-medium">
                  {product.type}
                </p>
              </div>

              <div className="bg-[#141921] rounded-[10px] text-[#AEAEAE] flex flex-col items-center relative w-14 h-14 p-2">
                <Image
                  src={LocationIcon}
                  alt={product.title + product.origin}
                  className="w-7 h-7 object-contain"
                />

                <p className="text-[10px] leading-5 font-medium">
                  {product.origin}
                </p>
              </div>
            </div>

            <p className="bg-[#141921] text-center text-[10px] leading-5 px-6 py-3 rounded-[10px] text-[#AEAEAE]">
              {product.roasted}
            </p>
          </div>
        </div>

        <div className="w-[35px] h-[35px] bg-[#21262E] rounded-[10px] z-10 absolute top-6 right-6 bg-liked-button flex items-center justify-center">
          <Image
            src={HeartIcon}
            alt={product.title}
            style={{
              filter:
                "invert(22%) sepia(85%) saturate(1517%) hue-rotate(337deg) brightness(121%) contrast(98%)",
            }}
            className="object-cover"
          />
        </div>
      </div>

      <div className="p-5 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-[#AEAEAE]">Description</p>
          {/* Using repeat cuz description is too short loll. */}
          <p className="text-xs leading-5 font-normal text-white">
            {product.description.repeat(5)}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-[#AEAEAE]">Size</p>
          <ButtonSelectSize sizes={product.sizes} />
        </div>

        <div className="flex items-center justify-between py-6">
          <div className="flex flex-col gap-2">
            <span className="text-[#AEAEAE] text-center text-[12px] leading-5">Price</span>
            <div className="flex items-center gap-1 font-semibold text-xl leading-5">
              <span className="text-[#D17842]">$</span>
              <span className="text-white">{product.price}</span>
            </div>
          </div>

          <button className="w-[240px] h-[60px] rounded-[20px] bg-[#D17842] text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
