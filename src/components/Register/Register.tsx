import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import styles from './Register.module.scss';

const Register = () => {
    const [inputs, setInputs] = useState({ username: "", names: "", password: "", passwordRepeat: "" });
    const [file, setFile] = useState<any>();
    
    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleFileUpload = (event: any) => {
        setFile(URL.createObjectURL(event.target.files[0]));
    }
    
    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (!inputs.username || !inputs.names || !inputs.password || !inputs.passwordRepeat || inputs.password !== inputs.passwordRepeat) {
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
                <div className={styles.headings}><h3>Регистрация</h3></div>
                <div className={styles.registerForm}>
                    <form>
                        <label>
                            <h3>Потребителско име</h3>
                            <input name="username" type="text" value={inputs.username} onChange={handleChange} required />
                        </label>
                        <label>
                            <h3>Три имена</h3>
                            <input name="names" type="text" value={inputs.names} onChange={handleChange} required />
                        </label>
                        <label>
                            <h3>Парола</h3>
                            <input name="password" type="password" value={inputs.password} onChange={handleChange} required />
                        </label>
                        <label>
                            <h3>Повтори парола</h3>
                            <input name="passwordRepeat" type="password" value={inputs.passwordRepeat} onChange={handleChange} required />
                        </label>
                        <label className={styles.customFileUpload}>
                            <h3>Снимка на профила</h3>
                            <div className={styles.content}>
                                <i id="upload" className="fa-solid fa-upload fa-xl"></i>
                                <input type="file" onChange={handleFileUpload} style={{display:'none'}} />
                                {file && <img src={file} alt="Profile pic" />}
                            </div>
                        </label>
                        <button onClick={handleSubmit}>Запиши</button>
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
  
  export default Register
  