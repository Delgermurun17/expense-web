"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function RecordsAdd() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState('expense'); 
  const expense = 'expense';
  const income = 'income';

  return (
    <div>
      <Button
        onClick={() => setOpen(true)}
        variant="btn"
        size="add"
        className="flex gap-1 h-8"
      >
        <div className="size-5 p-[2.5px]">
          <Image alt="+" width={15} height={15} src={"/plus.svg"} />
        </div>
        <div className="font-normal text-base">Add</div>
      </Button>
      <Dialog onValueChange={(value) => setShow(value)} open={open}>
        <DialogContent className="sm:max-w-[792px] p-0 flex flex-col justify-center">
          <div className="h-[68px] p-[20px_24px] flex items-center border-b border-b-slate-200 justify-between">
            <div className="font-semibold text-xl text-slate-900">
              Add Record
            </div>
            <div>
              <X onClick={() => setOpen(false)} />
            </div>
          </div>
          <div className="h-[444px] flex">
            <div className="w-full h-full p-[20px_24px_24px] flex flex-col gap-5">
              <div className="w-[348px] h-10 rounded-[100px] bg-gray-100 flex">
                <div
                  onClick={() => setShow(expense)}
                  className={`w-full h-full text-center rounded-[20px] content-center cursor-pointer ${show === expense ? 'bg-[#0166FF] text-white' : 'bg-[#F3F4F6]'}`}
                >
                  Expense
                </div>
                <div
                  onClick={() => setShow(income)}
                  className={`w-full h-full text-center rounded-[20px] content-center cursor-pointer ${show === income ? 'bg-[#16A34A] text-white' : 'bg-[#F3F4F6]'}`}
                >
                  Income
                </div>
              </div>
              <div>
                <div className={`w-[348px] h-10 rounded-[100px] text-base text-white font-normal text-center content-center ${show === expense ? 'bg-[#0166FF]' : 'bg-[#16A34A]'}`}>
                  Add record
                </div>
              </div>
            </div>
            <div className="w-full h-full p-[18px_24px_24px] text-base font-normal text-[#1f2937] flex flex-col gap-[22px]">
              <div className="flex flex-col gap-2">
                <div className="leading-[18px]">Payee</div>
                <div>
                  <input
                    type="text"
                    placeholder="Write here"
                    className="rounded-[8px] px-4 py-3 font-normal text-base border border-gray-300 bg-[#f9fafb] outline-none w-[348px] h-12"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="leading-[18px]">Note</div>
                <div>
                  <textarea
                    className="p-4 rounded-[8px] border border-gray-300 w-full h-[280px] bg-gray-100 outline-none resize-none"
                    placeholder="Write here"
                  />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
