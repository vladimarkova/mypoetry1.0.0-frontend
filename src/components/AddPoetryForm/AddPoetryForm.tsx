import { useState } from 'react';
import Poetry from '../Poetry/Poetry';
import styles from './AddPoetryForm.module.scss';

const dummyUser = {
    id: 1,
    name: 'Vladi Markova'
}

const AddPoetryForm = () => {
    const [poetry, setPoetry] = useState({ content: '', user: dummyUser.name, date: '3.12.2023' });
    const handleSubmit = () => {
        console.log(poetry);
    }

    return (
        <div className={styles.main}>
            <div className={styles.formContainer}>
                <div className={styles.headings}><h3>Добави стих</h3></div>
                <div className={styles.userInfo}>
                    <img src="mypoetry_logo.jpeg" alt="User profile" />
                    <h5>{ dummyUser.name }</h5>
                </div>
                <div className={styles.formContent}>
                    <textarea rows={10} cols={50} value={poetry.content} onChange={(e) => setPoetry({ ...poetry, content: e.target.value })} placeholder="Публикувайте стих..." />
                    <input type="date" onChange={(e) => setPoetry({ ...poetry, date: e.target.value })} />
                    <button disabled={!poetry.content} onClick={handleSubmit}>Публикувай</button>
                </div>
            </div>
            <div className={styles.poetryPreview}>
             <Poetry poetry={poetry} showFav={false}/>
            </div>
        </div>
    )
  }
  
  export default AddPoetryForm
  