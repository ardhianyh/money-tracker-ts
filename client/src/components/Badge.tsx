import { Currency } from "../utils/Currency"

interface Type {
   title: string,
   value: number,
   type: string
}

export function Badge({ title, value, type }: Type) {
   return (
      <div className={`type-item ${type === "income" ? 'bg-success' : 'bg-danger'} text-white`}>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60"><path d="M11.6363 13.0515L5.97949 7.39468L7.39371 5.98047L13.0506 11.6373L18.0003 6.68758V18.0013H6.6866L11.6363 13.0515Z" fill="rgba(255,255,255,1)"></path></svg>
         <div className="type-content-box">
            <div className="type-content-flex">
               <p className="mb-0">{title}</p>
            </div>
            <h5 className="mb-0">
               <Currency country="Indonesia" value={value} />
            </h5>
         </div>
      </div>
   )
}