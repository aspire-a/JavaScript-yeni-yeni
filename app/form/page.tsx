'use client';
import {FormEvent, useState} from "react";

export default function Home() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [buttonState, setButtonState] = useState(0);

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

    function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
    }

    return (
        <>
            <h1>YTE</h1>
            <h2>Login</h2>
            <p>Fill the form</p>

            <form className="FormStyle">
                <Email/>
                <Password password={password} handlePasswordChange={handlePasswordChange}/>
                <Button buttonState={buttonState}/>
            </form>
        </>
    )
}


function Email() {
    return (
        <label>
            Email:
            <input type="email" id="mail" className="input" name="usermail" required/>
        </label>
    )
}

 interface PasswordProps {
     password: string;
    handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Password({password, handlePasswordChange}:PasswordProps) {
    return (
        <label>
            Password:
            <input type="password" id="pwd" className="input" name="password" onChange={handlePasswordChange} required/>
        </label>
    )
}

function Button({buttonState}: {buttonState: number}) {
    return (
        <button type="submit" disabled={ buttonState === 0}>Bana Bas</button>
    )
}
