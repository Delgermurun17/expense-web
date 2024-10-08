"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { categoryIcons } from "./CategoryData";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { Toaster } from "./ui/sonner";

export function RecordsAdd() {
  const [show, setShow] = useState("EXPENSE");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [popOpen, setPopOpen] = useState(false);
  const [note, setNote] = useState("");
  const [payee, setPayee] = useState("");
  const [amount, setAmount] = useState("");
  const [catid, setCatid] = useState("");
  const expense = "EXPENSE";
  const income = "INCOME";
  const router = useRouter();
  const searchParams = useSearchParams();
  const record = searchParams.get("record");
  const open = record === "add";
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [amountError, setAmountError] = useState(false);
  const [catidError, setCatidError] = useState(false);
  function reset() {
    setAmount("");
    setCatid("");
    setSelectedCategory(null);
    setShow("EXPENSE");
    setPayee("");
    setNote("");
    setAmountError(false);
    setCatidError(false);
  }

  function loadList() {
    fetch(`http://localhost:5000/category`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => {
        console.error("Failed to fetch categories", error);
      });
  }

  useEffect(() => {
    const now = new Date();
    setDate(now.toISOString().split("T")[0]);
    setTime(now.toTimeString().split(" ")[0].substring(0, 5));

    const timeInterval = setInterval(() => {
      const now = new Date();
      setTime(now.toTimeString().split(" ")[0].substring(0, 5));
    }, 1);

    const categoryInterval = setInterval(loadList, 1000);

    loadList();
    return () => {
      clearInterval(timeInterval);
      clearInterval(categoryInterval);
    };
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCatid(category.id);
    setPopOpen(false);
  };

  function createRecord() {
    let valid = true;
    if (!amount) {
      setAmountError(true);
      valid = false;
    }
    if (!catid) {
      setCatidError(true);
      valid = false;
    }
    if (!valid) return;

    fetch(`http://localhost:5000/record`, {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
        categoryid: catid,
        type: show,
        date: date,
        time: time,
        payee: payee,
        note: note,
      }),
      headers: {
        "Content-type": "Application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(() => {
        router.push(`?`);
        reset();
        toast("Record added.");
      });
  }

  return (
    <>
      <Dialog onValueChange={(value) => setShow(value)} open={open}>
        <DialogContent className="sm:max-w-[792px] p-0 flex flex-col justify-center">
          <div className="h-[68px] p-[20px_24px_24px] flex items-center border-b border-b-slate-200 justify-between">
            <div className="font-semibold text-xl text-slate-900">
              Add Record
            </div>
            <div>
              <X
                className="cursor-pointer"
                onClick={() => {
                  router.push(`?`);
                  reset();
                }}
              />
            </div>
          </div>
          <div className="h-[444px] flex">
            <div className="w-full h-full p-[20px_24px_24px] flex flex-col gap-5">
              <div className="w-[348px] h-10 rounded-[100px] bg-gray-100 flex">
                <div
                  onClick={() => setShow(expense)}
                  className={`w-full h-full text-center rounded-[20px] content-center cursor-pointer ${
                    show === expense
                      ? "bg-[#0166FF] text-white"
                      : "bg-[#F3F4F6]"
                  }`}
                >
                  Expense
                </div>
                <div
                  onClick={() => setShow(income)}
                  className={`w-full h-full text-center rounded-[20px] content-center cursor-pointer ${
                    show === income ? "bg-[#16A34A] text-white" : "bg-[#F3F4F6]"
                  }`}
                >
                  Income
                </div>
              </div>
              <div className="flex flex-col h-full justify-between">
                <div className="h-[268px] flex flex-col justify-between font-normal text-base text-gray-900">
                  <div
                    className={`w-full h-[76px] bg-gray-100 p-[12px_16px] border border-gray-300 rounded-lg ${
                      amountError === true ? "border-red-600" : ""
                    }`}
                  >
                    <div>Amount</div>
                    <div className="flex gap-2 text-gray-400 font-normal text-xl">
                      <div>₮</div>
                      <input
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        type="number"
                        className="bg-transparent outline-none text-black"
                        placeholder="000.00"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="leading-[18px]">Category</div>
                    <div className="w-full h-12 rounded-lg">
                      <Popover open={popOpen} onOpenChange={setPopOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={`w-full h-12 bg-gray-100 flex justify-start ${
                              catidError === true ? "border-red-500" : ""
                            }`}
                            aria-label="Category selection"
                            aria-expanded={popOpen}
                            aria-controls="category-popover"
                          >
                            {selectedCategory ? (
                              <>
                                {categoryIcons.map(({ name, Icon }) => (
                                  <div key={name}>
                                    {selectedCategory.icon === name && (
                                      <Icon
                                        style={{
                                          color: selectedCategory.color,
                                        }}
                                      />
                                    )}
                                  </div>
                                ))}
                                <div className="pl-3 text-base font-normal text-black">
                                  {selectedCategory.name}
                                </div>
                              </>
                            ) : (
                              <div className="font-normal text-base text-slate-400">
                                Find or choose category
                              </div>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          id="category-popover"
                          className="w-[356px] max-h-[392px] !p-0"
                        >
                          <ScrollArea className="max-h-72 w-full rounded-md border">
                            {categories.map((cat) => (
                              <div
                                onClick={() => handleCategorySelect(cat)}
                                className="flex h-14 p-4 hover:bg-slate-100 items-center cursor-pointer"
                                key={cat.id}
                                aria-label={`Select category ${cat.name}`}
                              >
                                {categoryIcons.map(({ name, Icon }) => (
                                  <div key={name}>
                                    {cat.icon === name && (
                                      <Icon style={{ color: cat.color }} />
                                    )}
                                  </div>
                                ))}
                                <div className="pl-3 text-base font-normal text-black">
                                  {cat.name}
                                </div>
                              </div>
                            ))}
                          </ScrollArea>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-full flex flex-col gap-2">
                      <div className="leading-[18px]">Date</div>
                      <div className="w-full h-12 bg-gray-100 flex justify-center rounded-lg border border-gray-300">
                        <input
                          className="bg-transparent outline-none text-lg"
                          onChange={(e) => setDate(e.target.value)}
                          aria-label="Date"
                          type="date"
                          value={date}
                        />
                      </div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <div className="leading-[18px]">Time</div>
                      <div className="w-full h-12 bg-gray-100 flex justify-center rounded-lg border border-gray-300">
                        <input
                          className="bg-transparent outline-none text-lg"
                          onChange={(e) => setTime(e.target.value)}
                          aria-label="Time"
                          type="time"
                          value={time}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  onClick={createRecord}
                  className={`w-[348px] h-10 rounded-[100px] text-base text-white font-normal text-center content-center cursor-pointer ${
                    show === expense ? "bg-[#0166FF]" : "bg-[#16A34A]"
                  }`}
                >
                  Add record
                </div>
              </div>
            </div>
            <div className="w-full h-full p-[18px_24px_24px] text-base font-normal text-[#1f2937] flex flex-col gap-[22px]">
              <div className="flex flex-col gap-2">
                <div className="leading-[18px]">Payee</div>
                <div>
                  <input
                    value={payee}
                    onChange={(e) => setPayee(e.target.value)}
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
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="p-4 rounded-[8px] border border-gray-300 w-full h-[280px] bg-gray-100 outline-none resize-none"
                    placeholder="Write here"
                  />
                </div>
              </div>
            </div>
          </div>
          <Toaster />
        </DialogContent>
      </Dialog>
    </>
  );
}
