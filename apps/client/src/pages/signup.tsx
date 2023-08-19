import { SignUp } from "ui";

export default function SigninPage() {
    return <>
        <SignUp 
            onClick={(username, password) => {
                alert(username);
            }}
        />
    </>
}