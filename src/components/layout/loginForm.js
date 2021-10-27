import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router";

const LoginForm = () => {
    const history = useHistory()
    const [state, setState] = useState({
        email: '',
        password: '',
        respMsg: null,
    })

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const sendData = async (e) => {
        e.preventDefault()
        if(state.email && state.password){
            const data = {
                email: state.email,
                password: state.password
            }

            const respLogin = await axios.post('http://localhost:5050/login', data)

            if(respLogin.data.info.code === 200){
                setState(prevState => ({
                    ...prevState,
                    respMsg: [respLogin.data.info.message, 'success']
                }))

                localStorage.setItem('token', respLogin.data.token)
                redirect()
            }else{
                setState(prevState => ({
                    ...prevState,
                    respMsg: [respLogin.data.info.message, 'warning']
                }))
            }
                        
        }
    }

    const redirect = () => {
        history.push('/posts'); 
    }

    return(
        <form>
            <img className="mb-4" src="/conexa.png" alt="" width="72" height="57" />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            {state.respMsg === null
                ?
                    null
                :
                    <div className={`alert alert-${state.respMsg[1]} mt-2`} style={{display: state.respMsg ? 'block' : 'none' }} role="alert">
                        {state.respMsg[0]}
                    </div>   
            }
            
            <div className="form-floating">
                <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    value={state.email}
                    onChange={handleChange}
                    placeholder="name@example.com" 
                />
                <label for="floatingInput">Your Email</label>
            </div>
            <div className="form-floating">
                <input 
                    type="password" 
                    className="form-control" 
                    id="password"
                    value={state.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
            </div>
            
            <button 
                className="w-100 btn btn-lg btn-primary" 
                type="submit"
                onClick={sendData} >
                Sign in 
            </button>
            <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
        </form>
    )
}

export default LoginForm