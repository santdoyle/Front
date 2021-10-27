import React from "react";

const ErrorMsg = (props) => {
    return (
        <div className="form-signin">
            <div className="alert alert-warning" role="alert">
            <h4 className="alert-heading">Error {props.code}</h4>
                <p>{props.message}</p>
                <p className="mb-0">
                    <a href={props.action}>Iniciar sesión</a>
                </p>
            </div>
        </div>  
    )
}

export default ErrorMsg