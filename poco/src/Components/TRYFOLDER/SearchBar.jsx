import { SearchIcon } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
    const [input,setInput] = useState("")
    const fetchData = (value)=>{
        fetch("www.themealdb.com/api/json/v1/1/search.php")
        .then((response) => response.json())
        .then((json) =>{
            console.log(json);
            const result = json.filter((user) =>{
                return user && user.name && user.name.toLowerCase().includes(value)
            }) 
            console.log(result);
        });
    }

    const handleChange = (value) =>{
        setInput(value)
        fetchData(value)
    }

  return (
    <div className="pt-[4vh] flex flex-col items-center justify-center w-screen8/9 bg-amber-300 mx-auto">
        <div className="flex items-center gap-3 bg-amber-100 rounded-xl p-3">
            <span><SearchIcon className="text-blue-400"/></span>
            <input type="text" className="outline-none" placeholder="Type to Search..." value={input} onChange={(e) =>{handleChange(e.target.value)}} />
            </div>  
        <div >SearchResults</div>
    </div>
  )
}
