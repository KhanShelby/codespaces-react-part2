import { useEffect, useState } from "react";
function Item({name,isPack}){
    return (<li>
        {isPack ? name +' ✓' : name} {/*{name} {isPack && '✓'}*/}
    </li>);
}
export default function ItemList(){
    const [keyword,setKeyword]=useState("");
    useEffect(()=>{
        console.log("this component is loaded")

        return ()=>{
            alert("component unloaded!")
        }
    },[]);
    const items=[{name:"Sunglases" ,isPack:false}
        ,{name:"Sunblock",isPack:true}
        ,{name:"Swimsuit",isPack:true}
        ,{name:"Pizza",isPack:false}
        ,{name:"Umbrella",isPack:false}
        ,{name:"Water",isPack:true}];

    const filterList=items.filter(i=>i.name.toLowerCase().includes(keyword.toLowerCase()));
    const itemsList = filterList.map(i=><Item key={i.name} name={i.name} isPack={i.isPack}/>);
   
    return(<>
        <input type="text" value={keyword} onChange={e=>setKeyword(e.target.value)}/>
        <ui>
            {itemsList}
        </ui></>);
}
