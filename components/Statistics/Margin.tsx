import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type MarginProps = {
  title: string,
  description: string,
  className: string,
  value: number,
}

export default function Margin(props: MarginProps) {
  const { title, description, value, className } = props

  return (
    <Card className="w-full shadow-md">
      <CardHeader className="mb-2">
        <CardTitle className=" text-base">{title}</CardTitle>
        <CardDescription className="line-clamp-2 text-gray-400 text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <div className="relative w-32 h-32">
          <svg className="absolute inset-0" viewBox="0 0 36 36">
            <circle className="stroke-current text-gray-300" cx="18" cy="18" r="15.9154943092" fill="transparent" stroke-width="3"></circle>
            <circle className={`stroke-current ${className}`} cx="18" cy="18" r="15.9154943092" fill="transparent" stroke-width="3" stroke-dasharray={value}></circle>
          </svg>

          <div className={`absolute inset-0 flex items-center justify-center text-lg font-semibold ${className}`}>
            {value}%
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
