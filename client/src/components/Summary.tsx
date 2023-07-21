import { Badge } from "./Badge";

interface Props {
   income: number;
   expense: number;
}

export function Summary({ income, expense }: Props) {
   return (
      <div className="d-flex justify-content-between align-items-center">
         <Badge title="Income" value={income} type="income" />
         <Badge title="Expense" value={expense} type="expense" />
      </div>
   )
}