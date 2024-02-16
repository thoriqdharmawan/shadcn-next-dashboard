import { Card, CardContent } from "@/components/ui/card"

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
    <div className="flex gap-6">
      <Icon className="text-9xl text-gray-300" name={icon} />
      <div>
        <p className="mb-1 text-md font-semibold">{title}</p>
        <p className="text-xl">{ratio}</p>
        <p className="text-xs text-gray-400 mb-3">Quick Ratio Goal: {goal} or higher</p>
        <p className="text-sm">{decription}</p>
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
          title="Quick Ratio"
          ratio={9.8}
          goal={0.2}
          decription="Measure your Current Assets + Account Receiveable / Current Liabilites"
          color=""
        />
        <RatioItem
          icon="chart-area-outline"
          title="Current Ratio"
          ratio={9.8}
          goal={0.2}
          decription="Measure your Current Assets / Current Liabilites"
          color=""
        />
      </CardContent>
    </Card>
  )
}
