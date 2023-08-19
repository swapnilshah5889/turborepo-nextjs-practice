import { Typography, Button, TextField } from "@mui/material"
import { useState } from "react";

export function SignUp(props) {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");



    return (
        <div>
            <label htmlFor="email">Email :</label>
            <input type="text" id="email" onChange={ (event) => {
                console.log(event.target.value);
                setUserName(event.target.value);
            }}></input>
            <br />
            <label htmlFor="password">Password :</label>
            <input type="text" id="password" onChange={ (event) => {
                console.log(event.target.value);
                setPassword(event.target.value);
            }}/>
            <br />
            <button type="submit" onClick={async () => {
                props.onClick(username, password);
            }}>Submit</button>
        </div>
    );
}