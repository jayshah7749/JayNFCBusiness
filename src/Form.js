import './App.css';
import React, { useState } from "react";

function Form() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const saveInfo = () => {
        console.log("To do")
    }

    return (
        <div>
            <div>
            </div>
        </div>
    )
}

export default Form;