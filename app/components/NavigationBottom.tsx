"use client";

import Image from "next/image";

import HomeIcon from "~/assets/icons/home.svg";
import BagIcon from "~/assets/icons/bag.svg";
import HeartIcon from "~/assets/icons/heart.svg";
import NotificationIcon from "~/assets/icons/notification.svg";

export default function NavigationBottom() {
  return (
    <div className="bg-transparent w-full p-6 flex items-center justify-between">
      <Image src={HomeIcon} alt="Home" width={24} height={24} />
      <Image src={BagIcon} alt="Bag" width={24} height={24} />
      <Image src={HeartIcon} alt="Heart" width={24} height={24} />
      <Image src={NotificationIcon} alt="Notification" width={24} height={24} />
    </div>
  );
}
