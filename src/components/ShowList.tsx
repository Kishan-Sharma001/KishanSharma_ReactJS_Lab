import React ,{useEffect, useState} from 'react'
import IProducts from '../model/IProduct';
import { getItems } from '../service/dataservice';
import ExpenseTracker from './ExpenseTracker';

function ShowList(){
   const [items , setItems]= useState<IProducts[]>([])
   const [showForm,setShowForm]= useState<boolean>(false)
   const [sum , setSum] = useState<number>(0)
   const [rahulspent, setRahulspent] = useState<number>(0)
   const [rameshspent, setRameshspent] = useState<number>(0)
   const [error, setError] = useState<Error | null>(null);

   var rahulspent1: number = 0;
   var rameshspent1: number = 0; var rahulspent1: number = 0;
  var rameshspent1: number = 0;

   const CalShares = (data: IProducts[]) => {
    data.map((sams) =>
      sams.payeeName === "Rahul"
        ? (rahulspent1 = rahulspent1 + sams.price)
        : (rameshspent1 = rameshspent1 + sams.price)
    );
    setRahulspent(rahulspent1);
    setRameshspent(rameshspent1);
  };

   useEffect(() =>{

    const fetchItem =async () => {
        try{
            const data =await getItems();
            setItems(data)
           
        setSum(data.reduce((result, v) => (result = result + v.price), 0));
        CalShares(data);
        }
        catch (error:any){
            console.log("error occured")
        };
        
        fetchItem()
    }
   } )

   const sucess =()=>{
    setShowForm(false)
   }

   const cancel =()=>{
    setShowForm(false)
   }

return(

    <>
    <header>Expense Tracker </header>
    <button id="Add-button" onClick={()=>setShowForm(true)}>Add</button>

    {showForm&& 
     <div className='form'>
        <ExpenseTracker onClose={cancel} onTrue ={sucess} ></ExpenseTracker>
        </div>}

    <div className="use-inline header-color">Date</div>
    <div className="use-inline header-color">Product Purchased</div>
    <div className="use-inline header-color">Price</div>
    <div className="use-inline header-color">payee</div>


    <>
    {
      items && items.map((eachitems, ind)=>{
        <div key={ind}>
             <div className="use-inline ">{eachitems.setDate}</div>
    <div className="use-inline ">{eachitems.product}</div>
    <div className="use-inline ">{eachitems.price}</div>
    <div className="use-inline ">{eachitems.payeeName}</div>
        </div>
      }


      )  
    }

<hr />
      <div className="use-inline ">Total: </div>
      <span className="use-inline total">{sum}</span> <br />
      <div className="use-inline ">Rahul paid: </div>
      <span className="use-inline total Rahul">{rahulspent}</span> <br />
      <div className="use-inline ">Ramesh paid: </div>
      <span className="use-inline total Ramesh">{rameshspent}</span> <br />
      <span className="use-inline payable">
        {rahulspent > rameshspent ? "Pay Rahul " : "Pay Ramesh"}
      </span>
      <span className="use-inline payable price">
        {" "}
        {Math.abs((rahulspent - rameshspent) / 2)}
      </span>
      {error && <>{error?.message}</>}
    </>


  </>
)
}

export default ShowList;