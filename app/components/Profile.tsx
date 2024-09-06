import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <main className="flex flex-col items-center w-[500px] gap-[10px]">
      <Image
        src="/shot.png"
        alt="Gianluca Vaccarini"
        width={400}
        height={400}
      />
      <div className="flex flex-row p-4 px-4 border-l-[6px] border-[#00CC83] rounded-lg justify-start items-center gap-4">
        <div>
          <h1>
            Gianluca is <span className="text-[#00CC83]">available</span> for
            hire
          </h1>
        </div>
        <Link
          href="/Hire-Gianluca"
          className="bg-[#00CC83] hover:bg-green-600 px-6 font-medium py-2 text-white rounded-md"
        >
          Hire Gianluca
        </Link>
      </div>
    </main>
  );
}
