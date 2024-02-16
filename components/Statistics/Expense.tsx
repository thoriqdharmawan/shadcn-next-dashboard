import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { formatCurrency } from "@/lib/helper"

import Icon from "../icon"

type ExpenseItem = {
  title: string,
  color: string,
  balance: number,
  comparation: number,
}

const ExpenseItem = (props: ExpenseItem) => {
  const { title, balance, color, comparation } = props

  const comparationClass = comparation > 0.7 ? 'text-green-500' : 'text-red-600'

  return (
    <Card>
      <CardHeader className="pb-1">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Icon name="chart-bar" className={`text-5xl ${color}`} />

        <p className="text-2xl font-semibold mt-2">
          <span className="text-gray-500 font-light">$</span>
          {formatCurrency(balance)}
          <span className="text-lg font-light">.00</span>
        </p>

        <p className="text-xs">
          <span className={`${comparationClass} font-bold`}>{comparation}% </span>higher vs previous month
        </p>

      </CardContent>
    </Card>
  )
}

export default function Expense() {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 h-max">
      <ExpenseItem title="TOTAL INCOME" balance={8230} comparation={18.2} color="text-purple-700" />
      <ExpenseItem title="TOTAL EXPENSE" balance={32370} comparation={0.7} color="text-blue-500" />
      <ExpenseItem title="ACCOUNTS RECEIVEABLE" balance={9112} comparation={0.8} color="text-cyan-600" />
      <ExpenseItem title="ACCOUNTS PAYABLE" balance={8216} comparation={0.8} color="text-rose-500" />
    </div>
  )
}
