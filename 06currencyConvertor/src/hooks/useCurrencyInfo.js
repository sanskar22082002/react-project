
import {useEffect, useState} from "react"

function useCurrencyInfo(currency){ //useCurrencyInfo is also a hook ,generaly any hook we use we add use in that but not compulsory in this
    const [data, setdata] = useState({})
    useEffect(()=> {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json`
)//fetch karwana kaha hai, api call
        .then((res) => res.json())// convert it to json, res => response
        .then((res)=> setdata(res[currency]))// to hold data, problem is hold dat in normal so we use thsi this way
        console.log(data)
    }, [currency])//when there is change in currency that we use currency here
    console.log(data)
    return data // toh set nahi pange dat ko toh eske ek functionality hai which is below,method hi return hogaya
    
}
 export default useCurrencyInfo//method hi return hogaya 