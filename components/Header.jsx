"use client";

import Image from "next/image";
import { Nav } from "./Nav";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { RecordsAdd } from "./RecordsAdd";
import { UserButton } from "@clerk/nextjs";

export function Header() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between w-[1200px] h-[72px] mx-auto p-[16px_0px]">
      <div className="flex items-center gap-6">
        <div className="size-10 p-[6.3px]">
          <Image alt="logo" src={"logo.svg"} width={27.79} height={27.4} />
        </div>
        <Nav />
      </div>
      <div className="flex items-center gap-6">
        <div
          onClick={() => router.push(`?record=add`)}
          className="bg-[#0166ff] px-3 py-1 rounded-[20px] text-base font-normal text-white flex gap-1 items-center cursor-pointer"
        >
          <div className="size-5 p-[2.5px]">
            <Image alt="+" width={15} height={15} src={"/plus.svg"} />
          </div>
          <div>Record</div>
        </div>
        <div>
         <UserButton />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <RecordsAdd />
        </Suspense>
      </div>
    </div>
  );
}
