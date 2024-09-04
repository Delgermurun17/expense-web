"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Image from "next/image";
import { categoryIcons } from "./CategoryData";

export function RecordSHalf() {
  const latest = "Latest first";
  const newest = "Newest first";
  const [value, setValue] = useState(newest);
  const [popOpen, setPopOpen] = useState(false);
  const [transiction, setTransiction] = useState([]);

  function loadList() {
    fetch(`http://localhost:5000/record`)
      .then((res) => res.json())
      .then((data) => {
        setTransiction(data);
      });
  }

  useEffect(() => {
    loadList();
  }, []);

  return (
    <div className="mt-10 w-[894px] flex flex-col gap-[16px]">
      <div className="flex justify-between">
        <div>Last 30 days</div>
        <div>
          <Popover open={popOpen} onOpenChange={setPopOpen}>
            <PopoverTrigger asChild>
              <Button
                aria-expanded={popOpen}
                className="w-[180px] h-12 bg-white hover:bg-white text-black text-base font-semibold rouned-[8px] border border-gray-300 p-[12px_16px] flex justify-between"
              >
                <div>{value}</div>
                <div className="size-6">
                  <Image
                    src={"arrow-drop-down.svg"}
                    height={24}
                    width={24}
                    alt="down"
                  />
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="text-base font-normal p-0 w-[160px]">
              <div
                className="h-8 text-center content-center cursor-pointer hover:bg-gray-100 border-b border-b-gray-300"
                onClick={() => {
                  setValue(latest);
                  setPopOpen(false);
                }}
              >
                {latest}
              </div>
              <div
                className="h-8 text-center content-center cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setValue(newest);
                  setPopOpen(false);
                }}
              >
                {newest}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="min-h-[980px] flex flex-col gap-6">
        <div className="h-12 border border-gray-200 rounded-xl p-[12px_24px] bg-white flex justify-between">
          <div className="flex gap-[16px]">
            <input
              className="size-6 rounded border border-[#1F2937]"
              type="checkbox"
            />
            <div className="font-normal text-base">Select all</div>
          </div>
          <div className="font-semibold text-base text-slate-400">35,500₮</div>
        </div>
        <div>
          <div>Today</div>
          <div className="flex-col flex gap-3">
            {transiction.map((trans) => (
              <div
                className="flex bg-white h-16 w-full rounded-xl border border-gray-200 p-[12px_16px] justify-between"
                key={trans.id}
              >
                <div className="flex gap-4 items-center">
                  <input
                    className="size-6 rounded border border-[#1F2937]"
                    type="checkbox"
                  />
                  <div
                    className={`flex justify-center items-center size-10 rounded-full ${
                      trans.type === "EXPENSE" ? "bg-[#FF4545]" : "bg-[#23E01F]"
                    }`}
                  >
                    {categoryIcons.map(({ name, Icon }) => (
                      <div key={name}>
                        {trans.icon === name && <Icon className="text-white" />}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div>{trans.name}</div>
                    <div>
                    {trans.date[0]}
                    {trans.date[1]}
                    {trans.date[2]}
                    {trans.date[3]}
                    {trans.date[4]}
                    </div>
                  </div>
                </div>
                <div className={`flex gap-2 justify-center items-center text-base font-semibold ${trans.type === 'EXPENSE' ? "text-[#F54949]" : "text-[#23E01F]"}`}>
                  <div>{trans.type === 'EXPENSE' ? <div>-</div> : <div>+</div>}</div>
                  <div>{trans.amount}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>Yesterday</div>
      </div>
    </div>
  );
}
