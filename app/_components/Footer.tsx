import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center items-center py-6 min-w-full border-t-[0.1px] border-[#ffffff38]">
      <div className="flex justify-between w-11/12 text-lg">
        <div className="flex gap-2">
          <Image src="/gho-logo.svg" alt="GHO" width={30} height={30} />
          <h2>Powered by GHO</h2>
        </div>
        <h2>Made by Ghost frens</h2>
      </div>
    </div>
  );
}
