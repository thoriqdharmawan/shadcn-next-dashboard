import { Card, CardContent } from "@/components/ui/card"
import { censorCreditCardNumber, formatCurrency } from "@/lib/helper"
import { ReactNode } from "react"

type BalanceItem = {
  label: string,
  className?: string,
  children: ReactNode
}

type BalanceProps = {
  balance: number,
  cardNumber: string,
  cardHolder: string,
  accountType: string,
}

const BalanceItem = ({ label, className = '', children }: BalanceItem) => {
  return (
    <div className={className}>
      <p className="text-gray-500 text-xs mb-2">{label}</p>
      {children}
    </div>
  )
}

export default function Balance(props: BalanceProps) {
  const { balance, cardNumber, cardHolder, accountType } = props

  return (
    <Card className="px-2 py-6 bg-gradient-to-t from-gray-200">
      <CardContent className="w-full flex flex-col gap-6 pb-0 justify-between">
        <BalanceItem label="YOUR BALANCE">
          <p className="text-4xl font-semibold">
            <span className="text-gray-500 font-light">$</span>
            {formatCurrency(balance)}
            <span className="text-xl font-light">.00</span>
          </p>
        </BalanceItem>
        <BalanceItem label="YOUR ACCOUNT NUMBER">
          <p className="text-xl">{censorCreditCardNumber(cardNumber)}</p>
        </BalanceItem>
        <div className="flex flex-row w-full">
          <BalanceItem className="w-1/2" label="CARD HOLDER">
            <p className="text-lg">{cardHolder}</p>
          </BalanceItem>
          <BalanceItem className="w-1/2" label="ACCOUNT TYPE">
            <p className="text-lg">{accountType}</p>
          </BalanceItem>
        </div>
      </CardContent>
    </Card>
  )
}
