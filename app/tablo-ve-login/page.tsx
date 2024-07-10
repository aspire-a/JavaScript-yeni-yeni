'use client';
import './page.css'
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";
import {useState} from "react";

export default function Home() {
    return (
        <>
            <h1>YTE</h1>
            <h2>Login</h2>
            <p>Fill the form</p>

            <form className="FormStyle">
                <Email/>
                <Password/>
                <Button/>
            </form>


            <br/>
            <br/>


            <div className="parent">
                <Row/>
                <Row1/>
                <Row2/>
            </div>

            <br/>
            <br/>

            <div className="parent">
                <RowTekli place={1}/>
                <RowTekli place={2}/>
                <RowTekli place={3}/>
            </div>

            <br/>
            <br/>

            <div className="parent">
                <ColorTable/>
            </div>


            <br/>
            <br/>

            <div className="parentForquestion3">
                <ColorTable2/>
            </div>

            <br/>
            <br/>

            <div className="parentForquestion3">
                <ColorTable3/>
            </div>

        </>
    );
}

function Email() {
    return (
        <label>
            Email:
            <input type="email" id="mail" className="input" name="usermail" required/>
        </label>
    )
}

function Password() {
    return (
        <label>
            Password:
            <input type="password" id="pwd" className="input" name="password" required/>
        </label>
    )
}

function Button() {
    return (
        <button type="submit">Bana Bas</button>
    )
}

function Row() {
    return (
        <div className="rowLeft">
            <div className="left" onClick={() => alert("Yesil")}>
            </div>
        </div>
    )
}

function Row1() {
    return (
        <div className="rowCenter">
            <div className="center" onClick={() => alert("Sarı")}>
            </div>
        </div>
    )
}

function Row2() {
    return (
        <div className="rowRight">
            <div className="right" onClick={() => alert("Yesil")}>
            </div>
        </div>
    )
}

interface Props {
    place: number
}

function RowTekli({place}: Props) {

    return (
        <div className={(place === 1 ?
            "rowLeft" : (place === 2 ?
                "rowCenter" : "rowRight"))}>
            <div className={(place === 1 ? "left" : (place === 2 ? "center" : "right"))}>
            </div>
        </div>
    )
}

function ColorTable() {
    const [colorLeft, setColorLeft] = useState(0);
    const [colorCenter, setColorCenter] = useState(1);
    const [colorRight, setColorRight] = useState(2);

    function ClickLeft() {
        setColorLeft((colorLeft + 1) % 3);
    }

    function ClickCenter() {
        setColorCenter((colorCenter + 1) % 3);
    }

    function ClickRight() {
        setColorRight((colorRight + 1) % 3);
    }

    return (
        <>
            <div className={(colorLeft === 0 ? "rowLeft" : (colorLeft === 1 ? "rowCenter" : "rowRight"))}>
                <div onClick={ClickLeft}
                     className={(colorLeft === 0 ? "left" : (colorLeft === 1 ? "center" : "right"))}>
                </div>
            </div>

            <div className={(colorCenter === 0 ? "rowLeft" : (colorCenter === 1 ? "rowCenter" : "rowRight"))}>
                <div onClick={ClickCenter}
                     className={(colorCenter === 0 ? "left" : (colorCenter === 1 ? "center" : "right"))}>
                </div>
            </div>

            <div className={(colorLeft === 2 ? "rowLeft" : (colorLeft === 1 ? "rowCenter" : "rowRight"))}>
                <div onClick={ClickLeft}
                     className={(colorLeft === 2 ? "left" : (colorLeft === 1 ? "center" : "right"))}>
                </div>
            </div>
        </>
    )

}

function ColorTable2() {
    const [colorEdges, setColorEdges] = useState(0);
    const [colorCenter, setColorCenter] = useState(0);
    const [colorBackground, setColorBackground] = useState(0);

    function ClickEdges() {
        setColorEdges((colorEdges + 1) % 3);
    }

    function ClickCenter() {
        setColorCenter((colorCenter + 1) % 3);
    }

    function ClickBackground() {
        setColorBackground((colorBackground + 1) % 3);
    }

    return (
        <>
            <div>
                <div onClick={ClickEdges}
                     className={(colorEdges === 0 ? "cellGreen" : (colorEdges === 1 ? "cellYellow" : "cellBlue"))}></div>
                <div onClick={ClickBackground}
                     className={(colorBackground === 0 ? "cellBlue" : (colorBackground === 1 ? "cellYellow" : "cellGreen"))}></div>
                <div onClick={ClickBackground}
                     className={(colorBackground === 0 ? "cellBlue" : (colorBackground === 1 ? "cellYellow" : "cellGreen"))}></div>

            </div>

            <div>
                <div onClick={ClickBackground}
                     className={(colorBackground === 0 ? "cellBlue" : (colorBackground === 1 ? "cellYellow" : "cellGreen"))}></div>
                <div onClick={ClickCenter}
                     className={(colorCenter === 0 ? "cellYellow" : (colorCenter === 1 ? "cellGreen" : "cellBlue"))}></div>
                <div onClick={ClickBackground}
                     className={(colorBackground === 0 ? "cellBlue" : (colorBackground === 1 ? "cellYellow" : "cellGreen"))}></div>
            </div>

            <div>
                <div onClick={ClickBackground}
                     className={(colorBackground === 0 ? "cellBlue" : (colorBackground === 1 ? "cellYellow" : "cellGreen"))}></div>
                <div onClick={ClickBackground}
                     className={(colorBackground === 0 ? "cellBlue" : (colorBackground === 1 ? "cellYellow" : "cellGreen"))}></div>
                <div onClick={ClickEdges}
                     className={(colorEdges === 0 ? "cellGreen" : (colorEdges === 1 ? "cellYellow" : "cellBlue"))}></div>
            </div>
        </>
    )

}

const Array = [
    [1, 0, 0],
    [0, 2, 0],
    [0, 0, 1]
]

function ColorTable3() {
    const [colorArray, setColorArray] = useState(Array);

    function ClickBlue() {
        const updatedArray = Array.map(x => x.map(y => y === 0 ? ((y + 1) % 3) : y));
        setColorArray(updatedArray)
    }

    function ClickGreen() {
        const updatedArray = Array.map(x => x.map(y => y === 1 ? ((y + 1) % 3) : y));
        setColorArray(updatedArray)
    }

    function ClickYellow() {
        const updatedArray = Array.map(x => x.map(y => y === 2 ? ((y + 1) % 3) : y));
        setColorArray(updatedArray)
    }

    return (
        <>
            <div>
                <div onClick={(colorArray[0][0] === 0 ? ClickBlue: (colorArray[0][0] === 1 ? ClickGreen : ClickYellow))}
                     className={(colorArray[0][0] === 0 ? "cellBlue" : (colorArray[0][0] === 1 ? "cellGreen" : "cellYellow"))}></div>

                <div onClick={(colorArray[0][1] === 0 ? ClickBlue: (colorArray[0][1] === 1 ? ClickGreen : ClickYellow))}
                     className={(colorArray[0][1] === 0 ? "cellBlue" : (colorArray[0][1] === 1 ? "cellGreen" : "cellYellow"))}></div>

                <div onClick={(colorArray[0][2] === 0 ? ClickBlue: (colorArray[0][2] === 1 ? ClickGreen : ClickYellow))}
                     className={(colorArray[0][2] === 0 ? "cellBlue" : (colorArray[0][2] === 1 ? "cellGreen" : "cellYellow"))}></div>

            </div>

            <div>
                <div onClick={(colorArray[1][0] === 0 ? ClickBlue: (colorArray[1][0] === 1 ? ClickGreen : ClickYellow))}
                     className={(colorArray[1][0] === 0 ? "cellBlue" : (colorArray[1][0] === 1 ? "cellGreen" : "cellYellow"))}></div>

                <div onClick={(colorArray[1][1] === 0 ? ClickBlue: (colorArray[1][1] === 1 ? ClickGreen : ClickYellow))}
                     className={(colorArray[1][1] === 0 ? "cellBlue" : (colorArray[1][1] === 1 ? "cellGreen" : "cellYellow"))}></div>

                <div onClick={(colorArray[1][2] === 0 ? ClickBlue: (colorArray[1][2] === 1 ? ClickGreen : ClickYellow))}
                     className={(colorArray[1][2] === 0 ? "cellBlue" : (colorArray[1][2] === 1 ? "cellGreen" : "cellYellow"))}></div>
            </div>

            <div>
                <div onClick={(colorArray[2][0] === 0 ? ClickBlue: (colorArray[2][0] === 1 ? ClickGreen : ClickYellow))}
                     className={(colorArray[2][0] === 0 ? "cellBlue" : (colorArray[2][0] === 1 ? "cellGreen" : "cellYellow"))}></div>

                <div onClick={(colorArray[2][1] === 0 ? ClickBlue: (colorArray[2][1] === 1 ? ClickGreen : ClickYellow))}
                     className={(colorArray[2][1] === 0 ? "cellBlue" : (colorArray[2][1] === 1 ? "cellGreen" : "cellYellow"))}></div>

                <div onClick={(colorArray[2][2] === 0 ? ClickBlue: (colorArray[2][2] === 1 ? ClickGreen : ClickYellow))}
                     className={(colorArray[2][2] === 0 ? "cellBlue" : (colorArray[2][2] === 1 ? "cellGreen" : "cellYellow"))}></div>
            </div>
        </>
    )
}
