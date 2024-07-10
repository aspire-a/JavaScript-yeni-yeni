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
            <h1>Nice</h1>
        </>
    )
}
