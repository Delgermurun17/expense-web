"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", Income: 400, Expense: 80 },
  { month: "February", Income: 305, Expense: 200 },
  { month: "March", Income: 237, Expense: 120 },
  { month: "April", Income: 73, Expense: 190 },
  { month: "May", Income: 209, Expense: 130 },
  { month: "June", Income: 214, Expense: 140 },
  { month: "July", Income: 431, Expense: 234 },
  { month: "August", Income: 234, Expense: 189 },
  { month: "September", Income: 312, Expense: 215 },
  { month: "October", Income: 187, Expense: 112 },
  { month: "November", Income: 314, Expense: 245 },
  { month: "December", Income: 415, Expense: 341 },
]

const chartConfig = {
  Income: {
    label: "Income",
    color: "#84CC16",
  },
  Expense: {
    label: "Expense",
    color: "#F97316",
  },
}

export function Chart() {
  return (
    <ChartContainer config={chartConfig} className="w-[542px] h-[162px]">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="Income" fill="var(--color-Income)" radius={4} />
        <Bar dataKey="Expense" fill="var(--color-Expense)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
