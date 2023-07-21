interface Country {
   name: string,
   currency: string
}

const list: Country[] = [
   {
      name: "Indonesia",
      currency: "Rp"
   },
   {
      name: "United State",
      currency: "USD"
   }
];

interface Props {
   country: string,
   value: number
}

export function Currency({ country, value }: Props) {
   const getCountry = list.find(l => l.name === country);
   if (!getCountry) return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

   return `${getCountry.currency} ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
}