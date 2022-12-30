import styles from './Navbar.module.scss';

const Navbar = () => {
    return (
        <nav>
            <div className={styles.logo}>
                <img src="mypoetry_logo.jpeg" alt="My Poetry logo" />
                <h5>My Poetry</h5>
            </div>
            <div className={styles.info}>
                Стани автор
            </div>
        </nav>
    )
  }
  
  export default Navbar
  