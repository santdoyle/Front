import React from "react";
import LoginForm from "../components/layout/loginForm";

function loginScreen(){
    return(
        <div className="form-signin">
           <LoginForm /> 
        </div>
    )
}

export default loginScreen