import { ChangeEvent, useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        if(email && password) {
            const isLogged = await auth.signin(email, password)
            if(isLogged) {
                navigate('/')
            }else {
                alert("Tente logar novamente")
            }
        }
    }

        return(
            <div>
                <h2>Pagina Logins</h2>

                <input type="text" value={email} onChange={handleEmailInput} placeholder="Email"/>
                <input type="password" value={password} onChange={handlePasswordInput} placeholder="Email"/>

                <button onClick={handleLogin}>Logar</button>

            </div>
        )

}


