import { FormEvent, useRef } from 'react';
import { FormTransaction } from '../utils/Entities';
import api from '../config/Api';
import { useNavigate } from 'react-router-dom'
import { Form } from '../components/Form';

export function Create() {

   const navigate = useNavigate();

   const labelRef = useRef<HTMLInputElement>(null);
   const valueRef = useRef<HTMLInputElement>(null);
   const typeRef = useRef<HTMLSelectElement>(null);
   const categoryRef = useRef<HTMLInputElement>(null);


   const submitForm = (event: FormEvent) => {
      event.preventDefault();

      const form: FormTransaction = {
         label: labelRef.current!.value,
         value: parseInt(valueRef.current!.value),
         type: typeRef.current!.value,
         category: categoryRef.current!.value,
      }

      api.post("transactions", form)
         .then(() => {
            alert("Transaction Created!");
            navigate("/");
         })
         .catch(error => {
            console.log(error);
            alert("Error!");
         });
   }

   return (
      <>
         <h4 className='text-center mb-4'>Create Transaction</h4>
         <div className="d-flex justify-content-center">
            <Form
               onSubmit={submitForm}
               labelRef={labelRef}
               valueRef={valueRef}
               typeRef={typeRef}
               categoryRef={categoryRef}
               deleteButton={false}
            />
         </div>
      </>
   )
}