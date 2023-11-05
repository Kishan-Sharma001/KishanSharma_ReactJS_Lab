import axios from "axios"
import IProducts from "../model/IProduct"

const getItems  = () =>{


    return  axios.get<IProducts[]> (`http://localhost:3001/items`)
    .then (res=>res.data)
}


const postItems =(newItem:Omit<IProducts,'id'> )=>{

    return axios.post<IProducts>(`http://localhost:3001/items`,newItem,
    {
        headers:
        {
            'Content-Type':'appliction/json'
        }
    })
    .then (res=>res.data)

}

export{
    getItems, postItems
}