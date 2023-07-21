import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../config/Api';
import { Transaction } from '../utils/Entities';
import { Summary } from '../components/Summary';
import { History } from '../components/History';

export function Home() {
   const navigate = useNavigate();
   const [trx, setTrx] = useState<Transaction[]>([]);
   const [income, setIncome] = useState<number>(0);
   const [expense, setExpense] = useState<number>(0);

   useEffect(() => {
      api.get("transactions")
         .then(response => {
            let list: Transaction[] = [];
            let countIncome: number = 0;
            let countExpense: number = 0;

            for (const data of response.data) {
               let obj: Transaction = {
                  id: data.id,
                  label: data.label,
                  value: data.value,
                  type: data.type,
                  category: data.category,
                  createdAt: data.createdAt,
                  updatedAt: data.updatedAt
               }
               list.push(obj);
               if (data.type === "INCOME") countIncome += parseInt(data.value);
               if (data.type === "EXPENSE") countExpense += parseInt(data.value);
            }

            setTrx(list);
            setIncome(countIncome);
            setExpense(countExpense);

         }).catch(error => console.log(error));

   }, []);

   return (
      <div className="d-flex justify-content-center">
         <div className="wrapper">
            <Summary income={income} expense={expense} />
            <History trxList={trx} />

            <div className="d-flex justify-content-center">
               <button onClick={() => navigate('create')} className="create-btn bg-white">+</button>
            </div>
         </div>
      </div>
   )
}