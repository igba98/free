'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={`flex flex-row justify-between items-center py-4 px-12 sticky top-0 mb-6 transition-colors duration-300 ${
      isScrolled ? 'bg-white' : 'bg-[#0F256E]'
    }`}>
      <section className="flex flex-row items-center gap-2">
        <Image src={isScrolled ? "/export-black.svg" : "/export.svg"} alt="My Logo" width={150} height={60} />
        <h1 className={`text-4xl font-medium ${isScrolled ? 'text-black' : 'text-white'}`}>Developers</h1>
      </section>
      <section>
        <Link
          href={"/"}
          className={`text-[16px] font-semibold px-6 py-2 rounded-md ${
            isScrolled ? 'text-white bg-[#0F256E]' : 'text-white bg-[#00CC83]'
          }`}
        >
          Hire a Developer
        </Link>
      </section>
    </main>
  );
}
