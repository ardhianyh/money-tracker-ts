export interface FormTransaction {
   label: string,
   value: number,
   type: string,
   category: string
}

export interface Transaction {
   id: number,
   label: string,
   value: number,
   type: string,
   category: string,
   createdAt: string,
   updatedAt: string
}