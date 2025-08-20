import { Metadata } from "@/components/common/metadata";
import Image from "next/image";
import Link from "next/link";

const SocialMedia = [
  {
    name: "Facebook",
    icon: "/svg/socials/icons8-facebook.svg",
    url: "https://www.facebook.com/9lapak.new",
  },
  {
    name: "Youtube",
    icon: "/svg/socials/icons8-youtube.svg",
    url: "https://www.youtube.com/@9lapak",
  },
  {
    name: "X",
    icon: "/svg/socials/icons8-x-logo.svg",
    url: "https://x.com/9lapakofficial",
  },
];

const LinkAlternatif = [
  {
    name: "Link Alternatif 1",
    href: "https://www.9lapakgacor3.xyz/",
  },
  {
    name: "Link Alternatif 2",
    href: "https://www.9lapakgacor4.xyz/",
  },
  {
    name: "Link Alternatif 3",
    href: "https://www.9lapakgacor5.xyz/",
  },
];

export default function Home() {
  return (
    <div className="max-w-2xl bg-neutral-900 min-h-screen text-white mx-auto">
      <Metadata title="9Lapak: Link Alternatif - Bonus Melimpah main Sekarang" description="9LAPAK Merupakan Situs Judi Slot Online Agen 9LAPAK Yang Menyediakan Link Login Alternatif Terpercaya Anti Blokir Dengan Teknologi Server Canggih Dan Berpeluang Menang Besar." />
      {/* Banner */}
      <div className="w-full aspect-[1920/1280] relative mb-20">
        <Image
          src={"/img/banner-9l.jpg"}
          fill
          alt=""
          className="object-cover object-center"
        />
        <div className="absolute left-1/2 -bottom-16 -translate-x-1/2">
          <Image
            src={"/img/logo-9l.jpg"}
            width={150}
            height={150}
            alt=""
            className="rounded-full bg-neutral-900 p-2"
          />
        </div>
      </div>

      <div className="max-w-lg mx-auto">
        <div className="flex flex-col gap-6 mt-16 px-6 pb-10">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-3xl">9LAPAK</h1>
            <p>
              Dengan beragam permainan slot gacor, bonus jackpot terbesar, serta
              layanan pelanggan 24/7 yang profesional, kami siap memberikan
              pengalaman bermain terbaik.
            </p>
          </div>
          <Link
            href="https://www.9lapakgacor2.xyz/register?code=KBIXBD5D"
            className="relative hover:scale-105 transition-all duration-150 active:ring-2 active:ring-red-700 active:ring-offset-2 active:ring-offset-neutral-900 bg-gradient-to-b from-red-600 to-red-800 font-bold text-lg text-center rounded-xl p-3"
          >
            <Image
              src={"/img/logo-square.png"}
              width={36}
              height={36}
              alt=""
              className="absolute top-2 left-2 rounded-lg"
            />
            <p>Daftar Akun VIP 👑</p>
          </Link>

          <hr className="border-t border-neutral-700" />

          <div className="w-full flex flex-col items-center gap-4 text-center">
            {LinkAlternatif.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="w-full relative hover:scale-105 transition-all duration-150 active:ring-2 active:ring-gray-700 active:ring-offset-2 active:ring-offset-neutral-900 bg-gradient-to-b from-gray-600 to-gray-800 font-bold text-lg text-center rounded-xl p-3"
              >
                <Image
                  src={"/img/logo-square.png"}
                  width={36}
                  height={36}
                  alt=""
                  className="absolute top-2 left-2 rounded"
                />
                <p>{item.name}</p>
              </Link>
            ))}
          </div>

          <hr className="border-t border-neutral-700" />

          <Link
            href="https://pola9lapak.store/"
            className="relative hover:scale-105 transition-all duration-150 active:ring-2 active:ring-blue-700 active:ring-offset-2 active:ring-offset-neutral-900 bg-gradient-to-b from-blue-600 to-blue-800 font-bold text-lg text-center rounded-xl p-3"
          >
            <Image
              src={"/img/logo-square.png"}
              width={36}
              height={36}
              alt=""
              className="absolute top-2 left-2 rounded"
            />
            <p>Live RTP Terupdate ⚡</p>
          </Link>

          <div className="flex justify-center gap-2">
            {SocialMedia.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                className="flex bg-white rounded-full p-2 justify-center hover:scale-105 transition-all duration-200 items-center"
              >
                <Image src={social.icon} width={40} height={40} alt="" />
              </Link>
            ))}
          </div>

          <footer className="mx-auto">
            <span className="text-neutral-400 text-xs">
              © 2025 9Lapak. All Rights Reserved.
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
}
