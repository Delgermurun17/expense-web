"use client"
import Image from "next/image";
import { Button } from "./ui/button";
import { RecordsCategory } from "./RecordsCategory";
import { useRouter } from "next/navigation";

export function RecordsFHalf() {
  const router = useRouter()
  return (
    <div className="flex flex-col w-[282px] min-h-[1080px] bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-[24px_16px] gap-6 mt-6">
      <div className="flex flex-col gap-6 w-[250px]">
        <div className="font-semibold text-2xl text-black">Records</div>
        <div>
          <Button
            onClick={() => router.push(`?record=add`)}
            variant="btn"
            size="add"
            className="flex gap-1 h-8"
          >
            <div className="size-5 p-[2.5px]">
              <Image alt="+" width={15} height={15} src="/plus.svg" />
            </div>
            <div className="font-normal text-base">Add</div>
          </Button>
        </div>
      </div>
      <div>
        <form>
          <input
            type="search"
            className="h-8 w-[250px] border border-gray-300 bg-gray-100 px-4 py-1 rounded-[8px] font-normal text-base text-[#1F2937] outline-none"
            placeholder="Search"
          />
        </form>
      </div>
      <div className="flex flex-col gap-4">
        <div className="font-semibold text-base text-[#1f2937]">Types</div>
        <div>
          <div className="flex gap-2 px-3 py-1 items-center">
            <div>
              <input
                className="size-4 rounded-full border border-[#374151]"
                type="radio"
              />
            </div>
            <div className="font-normal text-base text-[#1f2937]">All</div>
          </div>
          <div className="flex gap-2 px-3 py-1 items-center">
            <div>
              <input
                className="size-4 rounded-full border border-[#374151]"
                type="radio"
              />
            </div>
            <div className="font-normal text-base text-[#1f2937]">Income</div>
          </div>
          <div className="flex gap-2 px-3 py-1 items-center">
            <div>
              <input
                className="size-4 rounded-full border border-[#374151]"
                type="radio"
              />
            </div>
            <div className="font-normal text-base text-[#1f2937]">Expense</div>
          </div>
        </div>
      </div>
      <RecordsCategory />
      <div></div>
    </div>
  );
}
