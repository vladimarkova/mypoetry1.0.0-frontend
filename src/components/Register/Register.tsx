import { useState } from 'react';
import styles from './Register.module.scss';

const Register = () => {
    const [inputs, setInputs] = useState({ username: "", names: "", password: "", passwordRepeat: "" });
    
    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
    const handleSubmit = (event: any) => {
        event.preventDefault();
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
                        <button onClick={handleSubmit}>Запиши</button>
                    </form>
                </div>
            </div>
        </div>
    )
  }
  
  export default Register
  