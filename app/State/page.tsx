'use client';
import {useState} from "react";

export default function Home() {
    return(
        <div className="ButtonStyle">
            <h1>They update seperately</h1>
            <MyButton/>
            <MyButton/>
            <MyButton/>
        </div>
    )
}

function MyButton(){
    const [count, setCount] = useState(0);

    function ClickIncrement(){
        setCount(count + 1)
    }

    return(
        <button onClick={ClickIncrement}>Clicked {count} times</button>
    )
}