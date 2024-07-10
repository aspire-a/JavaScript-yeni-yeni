'use client';
import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";

export default function Home() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [buttonState, setButtonState] = useState(0);

    const router = useRouter();

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

    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        router.push(name)
    }

    return (
        <>
            <h1>YTE</h1>
            <h2>Login</h2>
            <p>Fill the form</p>

            <form className="FormStyle">
                <Email/>

                <label>
                    Name:
                    <input id="name" className="input" name="username" onChange={handleNameChange} required/>
                </label>

                <Password password={password} handlePasswordChange={handlePasswordChange}/>
                <button onClick={handleButtonClick} disabled={buttonState === 0}>Bana Bas</button>

            </form>
        </>
    )
}


function Email() {
    return (
        <label>
            Email:
            <input type="email" id="mail" className="input" name="usermail"/>
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