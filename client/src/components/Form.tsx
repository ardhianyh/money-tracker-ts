import React, { FormEvent } from "react"
import { useNavigate } from "react-router-dom";
import { FormTransaction } from "../utils/Entities";

interface Props {
   onSubmit: (event: FormEvent) => void;
   deleteButton: boolean;
   onDelete?: (event: React.MouseEvent<HTMLButtonElement>) => void;
   labelRef: React.ForwardedRef<HTMLInputElement>;
   valueRef: React.ForwardedRef<HTMLInputElement>;
   typeRef: React.ForwardedRef<HTMLSelectElement>;
   categoryRef: React.ForwardedRef<HTMLInputElement>;
   initialData?: FormTransaction;
}

export function Form({ onSubmit, onDelete, deleteButton, labelRef, valueRef, typeRef, categoryRef, initialData }: Props) {

   const navigate = useNavigate();

   return (
      <div className="d-flex justify-content-center">
         <form className="wrapper" onSubmit={onSubmit}>
            <div className="form-group">
               <label htmlFor="label">Label</label>
               <input ref={labelRef} type="text" id="label" name='label' className="form-control" defaultValue={initialData?.label} required />
            </div>
            <div className="form-group mt-2">
               <label htmlFor="amount">Amount</label>
               <input ref={valueRef} type="number" id="amount" name='value' className="form-control" defaultValue={initialData?.value} required />
            </div>
            <div className="form-group mt-2">
               <label htmlFor="type">Type</label>
               <select ref={typeRef} name="type" id="type" className="form-control" defaultValue={initialData?.type} required>
                  <option value="" disabled>-</option>
                  <option value="INCOME">Income</option>
                  <option value="EXPENSE">Expense</option>
               </select>
            </div>
            <div className="form-group mt-2">
               <label htmlFor="category">Category</label>
               <input ref={categoryRef} type="text" id="category" name='category' className="form-control" defaultValue={initialData?.category} required />
            </div>
            <button onClick={() => navigate("/")} type='button' className="btn btn-secondary w-100 mt-4">Back</button>
            <button type='submit' className="btn btn-success w-100 mt-1">Submit</button>
            {deleteButton && (
               <>
                  <hr />
                  <button onClick={onDelete} type='button' className="btn btn-danger w-100 mt-4">Delete</button>
               </>
            )}
         </form>
      </div>
   )
}