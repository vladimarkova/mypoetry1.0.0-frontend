
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import styles from './Login.module.scss';

const Login = () => {
    const [inputs, setInputs] = useState({ username: "", password: "" });
    
    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (!inputs.username || !inputs.password) {
            toast.error('Invalid input!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        toast("Wow so easy!");
        console.log(inputs);
    }

    return (
        <div className={styles.main}>
            <div className={styles.formContainer}>
                <div className={styles.headings}><h3>Вход</h3></div>
                <div className={styles.loginForm}>
                    <form>
                        <label>
                            <h3>Потребителско име</h3>
                            <input name="username" type="text" value={inputs.username} onChange={handleChange} required />
                        </label>
                        <label>
                            <h3>Парола</h3>
                            <input name="password" type="password" value={inputs.password} onChange={handleChange} required />
                        </label>
                        <button onClick={handleSubmit}>Вход</button>
                    </form>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </div>
            </div>
        </div>
    )
  }
  
  export default Login
  