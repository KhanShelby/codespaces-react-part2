import { useRef, useState } from 'react';

const BmiText=({bmi})=>{
    if(bmi<18.5)
        return (<h1>UnderWeight</h1>);
    if(bmi>30)
        return (<h1>OverWeight</h1>);
    return (<h1>Normal</h1>);
}
export default function Bmi(){
    const w_inputRef = useRef(null);
    const h_inputRef = useRef(null);
    const [Bmi,setBmi] = useState(0);
    const callBmi=()=>{
        let w=w_inputRef.current.value;
        let h=h_inputRef.current.value/100;
        setBmi( w / Math.pow(h,2));
    }

    return (<>
        <h2>BMI calculator</h2>

        Weight: <input type="text" 
            ref={w_inputRef} />kg. <br/>
        Height: <input type="text"
            ref={h_inputRef} />cm. <br/>

        <button onClick={()=>callBmi()}>calculate</button><br/>
        Bmi value: {Bmi.toFixed(2)} 
        <BmiText bmi={Bmi}/>
        
        </>
    );
    
}