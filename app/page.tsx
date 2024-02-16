
import Balance from "@/components/Statistics/Balance";
import Ratio from "@/components/Statistics/Ratio";
import Margin from "@/components/Statistics/Margin"
import Expense from "@/components/Statistics/Expense";

export default function Home() {
  return (
    <div className="my-4 mx-9 box-border ">

      <div className="mb-6">
        <h1 className="text-2xl font-bold">Hi, welcome back!</h1>
        <p className="text-gray-500">Your finance performance and monitoring dashboard tamplate</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-max">

        <Margin />

        <Balance
          balance={780560}
          cardNumber="5345553444545637"
          cardHolder="Alicia Christensen"
          accountType="Savings"
        />

        <Ratio />

        <Expense />
      </div>
    </div>

  );
}
