
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", offline: 186, web: 80 },
  { month: "February", offline: 305, web: 200 },
  { month: "March", offline: 237, web: 120 },
  { month: "April", offline: 73, web: 190 },
  { month: "May", offline: 209, web: 130 },
  { month: "June", offline: 214, web: 140 },
]

const chartConfig = {
  offline: {
    label: "Offline",
    color: "hsl(208, 100%, 51%)",
  },
  web: {
    label: "Web",
    color: "hsl(241, 91%, 45%)",
  },
} satisfies ChartConfig

export function Device() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Customers by Device</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="offline"
              type="monotone"
              stroke="var(--color-offline)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="web"
              type="monotone"
              stroke="var(--color-web)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        
      <div className="flex justify-around gap-4 mt-4">
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4"
              style={{ backgroundColor: chartConfig.offline.color }}
            ></div>
            <span className="text-sm text-gray-700 font-medium">Offline selling</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4"
              style={{ backgroundColor: chartConfig.web.color }}
            ></div>
            <span className="text-sm text-gray-700 font-medium">Web Sales</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
