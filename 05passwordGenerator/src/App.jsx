import { useCallback, useState ,useEffect, useRef} from 'react'



function App() {
  const [length, setlength]= useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkllmnopqrstuvwxyz"
    if (numberAllowed) str+= "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for(let i =1; i<= length; i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass )

  }, [length, numberAllowed, charAllowed, setPassword])//yaha par jitni dependencies hai yaha par aur possible run hoga uss method ko optimize kar lo
  //if we not give setPassword it will work,it given for optimization and here password why we not password? because it will in infinite loop because jitni bhi dependencies we will call again ,optimization means store cache memory
// do'nt compare useCallback array with useEffect array
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()//if we want current value not copy null value then we give ?.select
    passwordRef.current?.setSelectionRange(0, 25)// for more optmization upto length 3 it will copy
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(()=>{//ismein kuch bhi problem hui toh dobra se run hojayega, run ye karta hai, page load hota first time par ye call hota hai
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, setPassword] )
  return (
    
       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
          <h1 className='text-white text-center my-3'>Password Generator</h1>
       <div className='flex shadow rounded-lg overflow-hidden mb-4'>
           <input type="text" value={password} className='="outline-none w-full py-1 px-3'
           placeholder='Password'
           readOnly
           ref={passwordRef}/>
           <button
           onClick={copyPasswordToClipboard}
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
           

       </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setlength(e.target.value)}}
            />
            <label>Length: {length}</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            
            onChange={ ()=>{
              setNumberAllowed((prev)=> !prev)
            }}
            />
            <label htmlFor="numberInput">Numbers</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            
            onChange={ ()=>{
              setNumberAllowed((prev)=> !prev)
            }}
            />
            <label htmlFor="characterInput">Characters</label>

          </div>
        </div>
       </div>

    
  )
}

export default App
