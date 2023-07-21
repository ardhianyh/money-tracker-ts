import { Transaction } from "../utils/Entities";
import { Card } from "./Card";

interface Props {
   trxList: Transaction[]
}
export function History({ trxList }: Props) {
   return (
      <>
         <h5 className="mt-4 mb-3">History</h5>
         <div className="transactions">
            {trxList.map((data, key) => <Card key={key} id={data.id} label={data.label} category={data.category} value={data.value} timestamp={data.createdAt} type={data.type.toLocaleLowerCase()} />)}
         </div>
      </>
   )
}