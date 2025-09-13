import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from 'next/router';
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, []);
  
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex justify-center items-center min-h-screen font-[family-name:var(--font-geist-sans)]`}
    >
      <p>Loading Your Resource...</p>
    </div>
  );
}
