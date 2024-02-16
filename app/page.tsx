import { ReactNode, lazy } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Balance from "@/components/Statistics/Balance";

const Margin = lazy(() => import("@/components/Statistics/Margin"))

type WrapperProps = {
  children: ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="flex justify-between gap-4">
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <div className="my-4 mx-9 box-border ">

      <div className="mb-6">
        <h1 className="text-2xl font-bold">Hi, welcome back!</h1>
        <p className="text-gray-500">Your finance performance and monitoring dashboard tamplate</p>
      </div>

      <div className="grid grid-cols-2 gap-4 h-max">
        <Wrapper>
          <Margin
            title="GROSS PROFIT MARGIN"
            description="The profit you make on each dollar of sales for your business"
            className="text-purple-700"
            value={75}
          />
          <Margin
            title="NET PROFIT MARGIN"
            description="Meassure your business at generating profit"
            className="text-blue-500"
            value={68}
          />
        </Wrapper>

        <Balance
          balance={780560}
          cardNumber="5345553444545637"
          cardHolder="Alicia Christensen"
          accountType="Savings"
        />

        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>

  );
}
