import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

import Icon from "../icon"

type RatioItem = {
  icon: string,
  title: string,
  ratio: number,
  goal: number,
  decription: string,
  color: string,
}

const RatioItem = (props: RatioItem) => {
  const { icon, title, ratio, goal, decription, color } = props

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <Icon className="text-9xl text-gray-300" name={icon} />
      <div>
        <p className="mb-1 text-base font-semibold">{title}</p>
        <p className="text-2xl font-semibold mb-1">{ratio}</p>
        <Progress value={ratio * 10} className={`mb-2 ${color}`} />
        <p className="text-xs text-gray-400 mb-3">Quick Ratio Goal: {goal} or higher</p>
        <p className="text-xs">{decription}</p>
      </div>
    </div>
  )
}

export default function Ratio() {
  return (
    <Card className="w-full shadow-md px-2 py-6">
      <CardContent className="flex flex-col justify-center gap-6">
        <RatioItem
          icon="chart-line-outline"
          title="QUICK RATIO"
          ratio={8.8}
          goal={0.2}
          decription="Measure your Current Assets + Account Receiveable / Current Liabilites"
          color="text-yellow-600"
        />
        <RatioItem
          icon="chart-area-outline"
          title="CURRENT RATIO"
          ratio={2.8}
          goal={0.2}
          decription="Measure your Current Assets / Current Liabilites"
          color="text-green-800"
        />
      </CardContent>
    </Card>
  )
}
