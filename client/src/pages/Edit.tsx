import { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import api from "../config/Api";
import { FormTransaction } from "../utils/Entities";
import { Form } from "../components/Form";

type Params = {
   id: string
}

export function Edit() {
   const navigate = useNavigate();
   const { id } = useParams<Params>();
   const [data, setData] = useState<FormTransaction>();

   const labelRef = useRef<HTMLInputElement>(null);
   const valueRef = useRef<HTMLInputElement>(null);
   const typeRef = useRef<HTMLSelectElement>(null);
   const categoryRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      api.get('transactions/' + id)
         .then(response => {
            const obj: FormTransaction = {
               label: response.data.label,
               value: response.data.value,
               type: response.data.type,
               category: response.data.category,
            };
            setData(obj);
         })
         .catch(error => console.log(error));

   }, []);

   const submitForm = (event: FormEvent) => {
      event.preventDefault();

      const form: FormTransaction = {
         label: labelRef.current!.value,
         value: parseInt(valueRef.current!.value),
         type: typeRef.current!.value,
         category: categoryRef.current!.value,
      }

      api.put("transactions/" + id, form)
         .then(() => {
            alert("Transaction Updated!");
            navigate("/");
         })
         .catch(error => {
            console.log(error);
            alert("Error!");
         });
   }

   const deleteTrx = () => {
      if (!confirm("Are you sure delete this transaction?")) {
         return;
      }

      api.delete("transactions/" + id)
         .then(() => {
            alert("Transaction Deleted!");
            navigate("/");
         })
         .catch(error => {
            console.log(error);
            alert("Error!");
         });
   }

   return (
      <>
         <h4 className='text-center mb-4'>Edit Transaction</h4>
         <div className="d-flex justify-content-center">
            <Form
               onSubmit={submitForm}
               labelRef={labelRef}
               valueRef={valueRef}
               typeRef={typeRef}
               categoryRef={categoryRef}
               deleteButton={true}
               onDelete={deleteTrx}
               initialData={data}
            />
         </div>
      </>
   )
}