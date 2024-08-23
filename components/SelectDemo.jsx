import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-96 h-16 font-semibold text-base text-[#1F2937] bg-[#F3F4F6] border-[#D1D5DB]">
        <SelectValue placeholder="Select a currency" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Currency</SelectLabel>
          <SelectItem value="mnt">MNT - Монгол төгрөг</SelectItem>
          <SelectItem value="usd">USD - Америк доллар</SelectItem>
          <SelectItem value="krw">KRW - Солонгос вон</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
