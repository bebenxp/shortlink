import { Metadata } from "@/components/common/metadata";
import Image from "next/image";
import Link from "next/link";

const SOCIAL_MEDIA = [
  {
    name: "Facebook",
    icon: "/svg/socials/facebook-logo.svg",
    url: "https://www.facebook.com",
  },
  {
    name: "Instagram",
    icon: "/svg/socials/instagram-logo.svg",
    url: "https://www.instagram.com",
  },
  {
    name: "Telegram",
    icon: "/svg/socials/telegram-logo.svg",
    url: "https://www.telegram.com",
  },
];

export default function Home() {
  return (
    <div className="max-w-lg min-h-screen text-white mx-auto">
      <Metadata title="Home" />
      {/* Banner */}
      <div className="w-full aspect-[1920/763] relative">
        <Image
          src={"/img/banner.jpg"}
          fill
          alt=""
          className="object-cover object-center"
        />
        <div className="absolute left-1/2 -bottom-12 -translate-x-1/2">
          <Image
            src={"/img/logo.jpg"}
            width={100}
            height={100}
            alt=""
            className="rounded-full"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 mt-16 px-4 pb-10">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-3xl">WELCOME TO 9LAPAK</h1>
          <p>
            Welcome to our platform! This is a sample description used for
            layout or content testing purposes.
          </p>
        </div>
        <div className="relative bg-boston-university-red font-bold text-lg text-center rounded-lg p-3">
          <Image
            src={"/img/logo-square.jpg"}
            width={36}
            height={36}
            alt=""
            className="absolute top-2 left-2 rounded"
          />
          <p>Description for Button</p>
        </div>
        <hr className="border-t border-gray-600" />
        <div className="w-full flex flex-col items-center gap-4 text-center">
          <div className="w-full relative bg-black font-bold text-lg text-center rounded-lg p-3">
            <Image
              src={"/img/logo-square.jpg"}
              width={36}
              height={36}
              alt=""
              className="absolute top-2 left-2 rounded"
            />
            <p>Description for Button</p>
          </div>
          <div className="w-full relative bg-black font-bold text-lg text-center rounded-lg p-3">
            <Image
              src={"/img/logo-square.jpg"}
              width={36}
              height={36}
              alt=""
              className="absolute top-2 left-2 rounded"
            />
            <p>Description for Button</p>
          </div>
          <div className="w-full relative bg-black font-bold text-lg text-center rounded-lg p-3">
            <Image
              src={"/img/logo-square.jpg"}
              width={36}
              height={36}
              alt=""
              className="absolute top-2 left-2 rounded"
            />
            <p>Description for Button</p>
          </div>
        </div>
        <hr className="border-t border-gray-600" />
        <div className="w-full relative bg-blue-800 font-bold text-lg text-center rounded-lg p-3">
          <Image
            src={"/img/logo-square.jpg"}
            width={36}
            height={36}
            alt=""
            className="absolute top-2 left-2 rounded"
          />
          <p>Description for Button</p>
        </div>
        <div className="flex justify-center gap-2">
          {SOCIAL_MEDIA.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              className="w-8 h-8 flex justify-center items-center bg-black rounded-full"
            >
              <Image src={social.icon} width={16} height={16} alt="" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
