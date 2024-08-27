"use client";

import { Fingerprint, House, Plus, X, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

export function RecordsCategory() {
    const categoryIcons = [
        { name: "home",
            icon: House,
        },
        { name: "fingerprint",
            icon: Fingerprint,
        },
        { name: "image",
            icon: ImageIcon,
        },
    ]
  const [open, setOpen] = useState(false);

  return (
    <div className="font-normal text-base text-[#1f2937]">
      <div></div>
      <div
        onClick={() => setOpen(true)}
        className="flex gap-2 px-3 py-1 items-center cursor-pointer w-[156.9px]"
      >
        <div>
          <Plus className="text-[#0166FF] size-5" />
        </div>
        <div>Add Category</div>
      </div>
      <Dialog open={open}>
        <DialogContent className="max-w-[494px] h-[236px] p-0 flex flex-col justify-center">
          <div className="h-[68px] p-[20px_24px] flex items-center border-b border-b-slate-200 justify-between">
            <div className="font-semibold text-xl text-slate-900">
              Add Category
            </div>
            <div>
              <X onClick={() => setOpen(false)} />
            </div>
          </div>
          <div className="w-[494px] h-[168px] p-6 flex flex-col justify-between">
            <div className="flex gap-3">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-[84px] h-[48px] rounded-[8px] bg-[#F9FAFB] border border-[#D1D5DB] px-4 py-3 flex justify-between">
                      <House />
                      <div className="size-6">
                        <Image
                          src={"arrow-drop-down.svg"}
                          height={24}
                          width={24}
                        />
                      </div>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80"></PopoverContent>
              </Popover>
              <div>
                <input className="rounded-[8px] px-4 py-3 font-normal text-base border border-gray-300 bg-[#f9fafb] outline-none w-[350px] h-12" type="text" placeholder="Name"/>
              </div>
            </div>
            <Button onClick={() => setOpen(false)} className="bg-green-600 hover:bg-green-800 rounded-full">Add</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
