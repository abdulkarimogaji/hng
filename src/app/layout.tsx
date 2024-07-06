import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import logoPic from "../../public/logo.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HNG Project",
  description: "I don't want to go into the trenches",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white min-h-screen flex flex-col py-4">
          <header>
            <div className="bg-[#F1F2F3] max-w-2xl mx-auto rounded-[30px] p-4 flex items-center justify-between">
              <Link href={"/"}>
                <Image src={logoPic} alt="" height={48} width={160} />
              </Link>
              <ul className="flex space-x-6 text-[#808190] font-medium">
                <li>
                  <Link
                    href={""}
                    className="hover:text-gray-800 hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="hover:text-gray-800 hover:underline"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="hover:text-gray-800 hover:underline"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
              <div className="flex items-center gap-8">
                <Link
                  href={"/login"}
                  className="font-medium py-2.5 px-6 bg-[#3538CD] text-white rounded-3xl"
                >
                  Login
                </Link>
                <Link href={"/cart"}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2H3.30616C3.55218 2 3.67519 2 3.77418 2.04524C3.86142 2.08511 3.93535 2.14922 3.98715 2.22995C4.04593 2.32154 4.06333 2.44332 4.09812 2.68686L4.57143 6M4.57143 6L5.62332 13.7314C5.75681 14.7125 5.82355 15.2031 6.0581 15.5723C6.26478 15.8977 6.56108 16.1564 6.91135 16.3174C7.30886 16.5 7.80394 16.5 8.79411 16.5H17.352C18.2945 16.5 18.7658 16.5 19.151 16.3304C19.4905 16.1809 19.7818 15.9398 19.9923 15.6342C20.2309 15.2876 20.3191 14.8247 20.4955 13.8988L21.8191 6.94969C21.8812 6.62381 21.9122 6.46087 21.8672 6.3335C21.8278 6.22177 21.7499 6.12768 21.6475 6.06802C21.5308 6 21.365 6 21.0332 6H4.57143ZM10 21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20C9.55228 20 10 20.4477 10 21ZM18 21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21C16 20.4477 16.4477 20 17 20C17.5523 20 18 20.4477 18 21Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </header>
          {children}
          <div className="flex-grow" />
          <footer className="">
            <div className="bg-[#F1F2F3] rounded-[50px] container mx-auto py-20 px-32">
              <div className="flex justify-between">
                <div className="flex flex-col justify-between">
                  <Link href={"/"}>
                    <Image src={logoPic} alt="" height={48} width={160} />
                  </Link>
                  <p className="text-xl font-medium">Created @2024</p>
                </div>
                <div className="grid grid-cols-3 gap-8 font-medium text-[#808190]">
                  <div>
                    <p className="text-[#202024]">Shop</p>
                    <ul className="space-y-4 mt-3">
                      <li>Totebags</li>
                      <li>T-Shirts</li>
                      <li>Oversized T-shirt</li>
                      <li>Hoodies</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-[#202024]">Customer</p>
                    <ul className="space-y-4 mt-3">
                      <li>Partnership</li>
                      <li>Selling</li>
                      <li> Providing</li>
                      <li>Affiliate</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-[#202024]">Security</p>
                    <ul className="space-y-4 mt-3">
                      <li>Cookies</li>
                      <li>T & C</li>
                      <li>Payments</li>
                      <li>Privacy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
