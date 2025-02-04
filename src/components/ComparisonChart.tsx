"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import useFetch from "@/hooks/useFetch";

const chartConfig: ChartConfig = {
  last_year: {
    label: "Last Year",
    color: "hsl(208, 100%, 51%)",
  },
  this_year: {
    label: "This Year",
    color: "hsl(241, 91%, 45%)",
  },
};

// Function to format Y-axis values (e.g., 5000 -> "5k")
const formatYAxis = (tick: number) => `${tick / 1000}k`;

export function ComparisonChart() {
  interface ChartDataItem {
    month: string;
    last_year: number;
    this_year: number;
  }

  const { data, loading, error } = useFetch<ChartDataItem[]>(`${import.meta.env.VITE_BE_URL}/two`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const chartData = data ? data.map((item) => ({
    month: item.month,
    last_year: item.last_year,
    this_year: item.this_year,
  })) : [];

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            
            {/* X-Axis: Month Labels */}
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            

            <YAxis
              tickFormatter={formatYAxis}
              ticks={[0, 10000, 20000,30000,40000]}
              tickLine={false}
              axisLine={false}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="last_year" fill="var(--color-last_year)" radius={4} />
            <Bar dataKey="this_year" fill="var(--color-this_year)" radius={4} />
          </BarChart>
        </ChartContainer>
        <div className="flex justify-around gap-4 mt-4">
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4"
              style={{ backgroundColor: chartConfig.last_year.color }}
            ></div>
            <span className="text-sm text-gray-700 font-medium">Last year</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4"
              style={{ backgroundColor: chartConfig.this_year.color }}
            ></div>
            <span className="text-sm text-gray-700 font-medium">This year</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
