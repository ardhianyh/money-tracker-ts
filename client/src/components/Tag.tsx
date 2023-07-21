interface Props {
   category: string
}

export function Tag({ category }: Props) {
   return (
      <div className="d-flex align-items-center">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path d="M10.9042 2.1001L20.8037 3.51431L22.2179 13.4138L13.0255 22.6062C12.635 22.9967 12.0019 22.9967 11.6113 22.6062L1.71184 12.7067C1.32131 12.3162 1.32131 11.683 1.71184 11.2925L10.9042 2.1001ZM13.7327 10.5854C14.5137 11.3664 15.78 11.3664 16.5611 10.5854C17.3421 9.80433 17.3421 8.538 16.5611 7.75695C15.78 6.9759 14.5137 6.9759 13.7327 7.75695C12.9516 8.538 12.9516 9.80433 13.7327 10.5854Z"></path></svg>
         <small className="tag-title mr-1">{category}</small>
      </div>
   )
}