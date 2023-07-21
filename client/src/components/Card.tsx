import { Currency } from "../utils/Currency"
import { Tag } from "./Tag";
import moment from 'moment';
import { useNavigate } from 'react-router-dom'

interface Props {
   id: number,
   label: string,
   category: string,
   value: number,
   timestamp: string,
   type: string
}

export function Card({ id, label, category, value, timestamp, type }: Props) {
   const navigate = useNavigate();

   const onEdit = (id: number) => {
      navigate('edit/' + id);
   }

   return (
      <div onClick={() => onEdit(id)} className="transaction-item">
         <div className="category-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path d="M18.0049 7H21.0049C21.5572 7 22.0049 7.44772 22.0049 8V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V4C2.00488 3.44772 2.4526 3 3.00488 3H18.0049V7ZM4.00488 9V19H20.0049V9H4.00488ZM4.00488 5V7H16.0049V5H4.00488ZM15.0049 13H18.0049V15H15.0049V13Z"></path></svg>
         </div>
         <div className="d-flex justify-content-between align-items-center w-100">
            <div className="d-flex flex-column">
               <div className="trx-title">{label}</div>
               <div className="card p-1" style={{ width: 'fit-content' }}>
                  <Tag category={category} />
               </div>
            </div>
            <div className="d-flex flex-column text-right">
               <span className={type === "income" ? 'text-success' : 'text-danger'}>{type === "income" ? '+' : '-'} <Currency country="Indonesia" value={value} /></span>
               <small className="fs-date">{moment(timestamp).format("LLL")}</small>
            </div>
         </div>
      </div>
   )
}