'use client';
import {FormEvent, useState} from "react";

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
        </>
    )
}


function Email() {

    const[email, setEmail] = useState("");

    return (
        <label>
            Email:
            <input type="email" id="mail" className="input" name="usermail" required/>
        </label>
    )
}

function Password() {

    const [password, setPassword] = useState("");

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
