"use client";

import {
  House,
  Plus,
  X,
  ImageIcon,
  FingerprintIcon,
  IdCard,
  Wrench,
  HeartPulse,
  Car,
  ShoppingCart,
  Coins,
  Check,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
const categoryIcons = [
  { name: "home", Icon: House },
  { name: "fingerprint", Icon: FingerprintIcon },
  { name: "image", Icon: ImageIcon },
  { name: "id-card", Icon: IdCard },
  { name: "tool", Icon: Wrench },
  { name: "healt", Icon: HeartPulse },
  { name: "vehicle", Icon: Car },
  { name: "shop", Icon: ShoppingCart },
  { name: "invest", Icon: Coins },
];
const categoryColors = [
  {
    name: "blue",
    value: "#0166FF",
  },
  {
    name: "sky",
    value: "#01B3FF",
  },
  {
    name: "lime",
    value: "#41CC00",
  },
  {
    name: "yellow",
    value: "#F9D100",
  },
  {
    name: "orange",
    value: "#FF7B01",
  },
  {
    name: "purple",
    value: "#AE01FF",
  },
  {
    name: "red",
    value: "#FF0101",
  },
];
export function RecordsCategory() {
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState("home");
  const [color, setColor] = useState("#000");
  const [categories, setCategories] = useState([]);
  const [newInput, setNewinput] = useState("");

  function loadList() {
    fetch(`http://localhost:5000/category`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }

  useEffect(() => {
    loadList();
  }, []);


  function createNew() {
    if (!newInput) return;

    fetch(`http://localhost:5000/category`, {
      method: "POST",
      body: JSON.stringify({ name: newInput, color: color, icon, icon }),
      headers: {
        "Content-type": "Application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(() => {
        setNewinput("")
        loadList();
        setOpen(false)
      });
  }

  function ChangeInput(event){
    setNewinput(event.target.value)
  }

  function enter(event) {
    if (event.key === "Enter") {
      createNew();
    }
  }

  return (
    <div className="font-normal text-base text-[#1f2937] flex flex-col gap-4 w-[250px]">
      <div className="flex justify-between text-[#1F2937] font-normal text-base">
        <div className="font-semibold">Category</div>
        <div className="opacity-20 cursor-pointer">Clear</div>
      </div>
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <div key={category.id} className="w-[250px] h-[32px] flex justify-between">
            <div className="flex gap-2 px-3 py-1 justify-center items-center">
              <Eye className="size-5 text-slate-400"/>
              <div className="font-normal text-normal text-[#1F2937]">{category.name}</div>
            </div>
            <div className="size-5"><Image src={"right-arrow.svg"} width={20} height={20} alt={"right"}/></div>
          </div>
        ))}
      <div onClick={() => setOpen(true)} className="flex gap-2 px-3 py-1 items-center cursor-pointer w-[156.9px]">
        <div>
          <Plus className="text-[#0166FF] size-5" />
        </div>
        <div>Add Category</div>
      </div></div>
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
                  <Button
                    variant="outline"
                    className="w-[84px] h-[48px] rounded-[8px] bg-[#F9FAFB] border border-[#D1D5DB] px-4 py-3 flex justify-between"
                  >
                    {categoryIcons.map(({ name, Icon }) => (
                      <div key={name}>
                        {icon === name && <Icon style={{ color: color }} />}
                      </div>
                    ))}
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
                <PopoverContent className="!max-h-[336px] !rounded-[8px] !p-6 flex flex-col gap-6">
                  <div className="grid grid-cols-6 gap-6">
                    {categoryIcons.map(({ name, Icon }) => (
                      <div key={name}>
                        <Icon onClick={() => setIcon(name)} />
                      </div>
                    ))}
                  </div>
                  <div className="border-b opacity-10 border-black"></div>
                  <div className="flex gap-4 w-[264px]">
                    {categoryColors.map(({ name, value }) => (
                      <div
                        onClick={() => setColor(value)}
                        key={name}
                        className="w-6 h-6 rounded-full flex justify-center items-center"
                        style={{ backgroundColor: value }}
                      >
                        {color === value && (
                          <Check className="text-white size-4" />
                        )}
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
              <div>
                <input
                  className="rounded-[8px] px-4 py-3 font-normal text-base border border-gray-300 bg-[#f9fafb] outline-none w-[350px] h-12"
                  onKeyDown={enter}
                  value={newInput}
                  onChange={ChangeInput}
                  type="text"
                  placeholder="Name"
                />
              </div>
            </div>
            <Button
              onClick={createNew}
              className="bg-green-600 hover:bg-green-800 rounded-full"
            >
              Add
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
