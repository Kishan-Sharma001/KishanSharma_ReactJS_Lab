import React ,{useState} from 'react'
import { postItems } from '../service/dataservice';




type Props={
    onTrue:any,
    onClose:any
}
export default function <ExpenseTracker>({onTrue ,onClose}:Props) {

function setDefaultDate(){

    const today = new Date();
    return (
        `${today.getFullYear()}-${("0"+(today.getMonth()+1)).slice(-2)}-${("0"+(today.getDate()+1)).slice(-2)}`
    )
}

    const[payeeName, setPayeeName] =useState("");
    const[product, setProductName] =useState("");
    const[price, setPriceValue] =useState(0);
    const[setDate, setDateValue] =useState(setDefaultDate());

   async function handleSubmit(event:React.FormEvent<HTMLFormElement>){
  
    event.preventDefault()
    const finalItem = {payeeName,product,price,setDate}
    const data = await postItems(finalItem)
    console.log(data)
    onTrue();


   }

   
   function setPayee(event:React.ChangeEvent<HTMLSelectElement>){

    setPayeeName(event.target.value);


   }

   function setProduct(event:React.ChangeEvent<HTMLInputElement>){

    setProductName(event.target.value);


   }

   function setPrice(event:React.ChangeEvent<HTMLInputElement>){

    setPriceValue(parseInt(event.target.value));


   }

   function setDateFun(event:React.ChangeEvent<HTMLInputElement>){

    setDateValue(event.target.value);


   }

  return (
    <div>
      <section>

        <h1>ADD NEW ITEM</h1>
        <p>Read below instruction before proceding</p>
            <br />
            make sure you fill all the details where * is marked
       
      </section>

      <form onSubmit={handleSubmit}>
        <article>
            <p>Name</p>
            <select name= 'Name' id='Name' required value={payeeName} onChange={setPayee}>

                <option value='' defaultChecked>Choose</option>
                <option value='Rahul'>Rahul</option>
                <option value='Ramesh'>Ramesh</option>
                
            </select>

        </article>

        <article>
            <p>Product Purchased</p>
            <input  type='text' name= 'prduct' id='product' required value={product} onChange={setProduct} />

        </article>

        <article>
            <p>Price</p>
            <input  type='number' name= 'price' id='price' required value={price} onChange={setPrice} />
      </article>

      <article>
            <p>Date</p>
            <input  type='date' name= 'date' id='date' required value={setDate} onChange={setDateFun} />
      </article>


      </form>
    </div>
  )
}
