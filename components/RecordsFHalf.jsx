import Image from "next/image";
import { Button } from "./ui/button";

export function RecordsFHalf() {
  return (
    <div className="w-[282px] h-[1080px] bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-[24px_16px] gap-6 mt-6">
      <div className="flex flex-col gap-6 w-[250px]">
        <div className="font-semibold text-2xl text-black">Records</div>
        <div>
          <Button variant="btn" size="add" className="flex gap-1 h-8">
            <div className="size-5 p-[2.5px]">
              <Image alt="+" width={15} height={15} src={"/plus.svg"} />
            </div>
            <div className="font-normal text-base">Add</div>
          </Button>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
