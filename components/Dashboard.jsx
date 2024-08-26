import Image from "next/image";
import { Logo } from "./Logo";
import { Chart } from "./ChartDemo";
import { ChartPie } from "./ChartPie";

export function Dashboard() {
  return (
    <div className="bg-[#F3F4F6]">
      <div className="flex flex-col gap-6 w-[1200px] m-auto pb-10">
        {/* First label */}
        <div className="flex gap-6 justify-center pt-8">
          {/* First card */}
          <div
            style={{ backgroundImage: `url("/Noise.png")` }}
            className="card w-full h-[216px] rounded-[18px]"
          >
            <div className="relative top-8 left-8 text-white">
              <Logo />
            </div>
            <div className="relative top-24 left-8">
              <div className="opacity-50 font-normal text-base text-white">
                Cash
              </div>
              <div className="font-semibold text-2xl text-white">
                10,000,000
              </div>
            </div>
            <div className="size-10 relative left-[312px] top-[60px]">
              <Image src={"/dial.svg"} width={40} height={40} />
            </div>
          </div>
          {/* Second card */}
          <div className="w-full h-[216px] rounded-xl bg-white">
            <div className="h-14 p-[12px_24px] flex gap-2 items-center border-b border-b-slate-200">
              <div className="size-2 bg-[#84CC16] rounded-sm"></div>
              <div className="font-semibold text-base text-slate-900">
                Your Income
              </div>
            </div>
            <div className="p-[20px_24px_24px_24px] flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex gap-1 font-semibold text-4xl text-black">
                  <div>1,200,000</div>
                  <div>₮</div>
                </div>
                <div className="font-normal text-lg text-slate-500">
                  Your Income Amount
                </div>
              </div>
              <div className="flex gap-2">
                <div className="size-6 flex justify-center items-center">
                  <Image src={"up.svg"} width={19.5} height={19.5} />
                </div>
                <div className="font-normal text-lg text-black">
                  32% from last month
                </div>
              </div>
            </div>
          </div>
          {/* Last card */}
          <div className="w-full h-[216px] rounded-xl bg-white">
            <div className="h-14 p-[12px_24px] flex gap-2 items-center border-b border-b-slate-200">
              <div className="size-2 bg-[#0166FF] rounded-sm"></div>
              <div className="font-semibold text-base text-slate-900">
                Total Expenses
              </div>
            </div>
            <div className="p-[20px_24px_24px_24px] flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex gap-1 font-semibold text-4xl text-black">
                  <div>-1,200,000</div>
                  <div>₮</div>
                </div>
                <div className="font-normal text-lg text-slate-500">
                  Your Income Amount
                </div>
              </div>
              <div className="flex gap-2">
                <div className="size-6 flex justify-center items-center">
                  <Image src={"down.svg"} width={19.5} height={19.5} />
                </div>
                <div className="font-normal text-lg text-black">
                  32% from last month
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Second label */}
        <div className="flex gap-6 justify-center">
          {/* First item */}
          <div className="w-full h-[284px] bg-white rounded-xl">
            <div className="h-14 p-[12px_24px] flex items-center border-b border-b-slate-200">
              <div className="font-semibold text-base text-slate-900">
                Income - Expense
              </div>
            </div>
            <div className="p-[32px_24px]">
              <Chart />
            </div>
          </div>
          {/* Second item */}
          <div className="w-full h-[284px] bg-white rounded-xl">
            <div className="h-14 p-[12px_24px] flex items-center border-b border-b-slate-200">
              <div className="font-semibold text-base text-slate-900">
                Income - Expense
              </div>
            </div>
            <div className="w-[588px] h-[228px]">
              <div className="flex p-[12px_24px]">
                <div className="flex flex-col gap-4 font-normal text-sm text-gray-900">
                  <div className="flex">
                    <div className="flex gap-2 w-[153px] items-center">
                      <div className="bg-[#1C64F2] size-3 rounded-md"></div>
                      <div>Bills</div>
                    </div>
                    <div className="w-[120px]">5'000'000₮</div>
                    <div className="w-16 text-end">15.50%</div>
                  </div>
                  <div className="flex">
                    <div className="flex gap-2 w-[153px] items-center">
                      <div className="bg-[#E74694] size-3 rounded-md"></div>
                      <div>Food</div>
                    </div>
                    <div className="w-[120px]">5'000'000₮</div>
                    <div className="w-16 text-end">15.50%</div>
                  </div>
                  <div className="flex">
                    <div className="flex gap-2 w-[153px] items-center">
                      <div className="bg-[#FDBA8C] size-3 rounded-md"></div>
                      <div>Shopping</div>
                    </div>
                    <div className="w-[120px]">5'000'000₮</div>
                    <div className="w-16 text-end">15.50%</div>
                  </div>
                  <div className="flex">
                    <div className="flex gap-2 w-[153px] items-center">
                      <div className="bg-[#16BDCA] size-3 rounded-md"></div>
                      <div>Insurance</div>
                    </div>
                    <div className="w-[120px]">5'000'000₮</div>
                    <div className="w-16 text-end">15.50%</div>
                  </div>
                  <div className="flex">
                    <div className="flex gap-2 w-[153px] items-center">
                      <div className="bg-[#F2901C] size-3 rounded-md"></div>
                      <div>Clothing</div>
                    </div>
                    <div className="w-[120px]">5'000'000₮</div>
                    <div className="w-16 text-end">15.50%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Last label */}
        <div className="w-full min-h-[456px] rounded-xl bg-white">
          <div className="h-14 p-[12px_24px] flex items-center border-b border-b-slate-200">
            <div className="font-semibold text-base text-slate-900">
              Last Records
            </div>
          </div>
          <div>
          <div className="h-12 border-b border-b-gray-200 p-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}