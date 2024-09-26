export default function MouseEvent(){
    return (<h1
    onClick={e=>alert("onClick")}
    onMouseEnter={e=>alert("onMouseEnter")}
    onMouseOver={e=>("onMouseOver")}
    onMouseDown={e=>("onMouseDown")}
    onMouseUp={e=>("onMouseUp")} 
    >Click Me</h1>)
}