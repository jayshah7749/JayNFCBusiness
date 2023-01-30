import './App.css';
import React, { useState } from "react";

function Form() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const saveInfo = () => {
        console.log("To do")
        if (firstName !== null && lastName !== null && email !== null && phoneNumber !== null) {

        } else {
            console.log("All or some fields are empty and try again.")
        }
    }

    return (
        <div>
            <div>
            </div>
        </div>
    )
}

export default Form;