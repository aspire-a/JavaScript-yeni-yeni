'use client'
import Link from "next/link";
import {useState} from "react";
import {router} from "next/client";

export default function Home() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [buttonState, setButtonState] = useState(0);

    function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.currentTarget.value)
    }

    function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword((prevState) => {
            if(prevState.length > 4){
                setButtonState(1)
            } else {
                setButtonState(0)
            }
            return e.target.value;
        });
    }

    function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
        alert("SAved")
    }

    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }


    return (
        <>
            <form>

                <label>
                    Email:
                    <input type="email" id="mail" className="input" name="usermail" onChange={handleEmailChange}
                           required/>
                </label>

                <label>
                    Name:
                    <input id="name" className="input" name="username" onChange={handleNameChange} required/>
                </label>

                <label>
                    Password:
                    <input type="password" id="pwd" className="input" name="password" onChange={handlePasswordChange}
                           required/>
                </label>

                <button onClick={handleButtonClick}>Sign Up</button>

            </form>
        </>
    );
}
