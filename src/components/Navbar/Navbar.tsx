import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss';

const Navbar = () => {
    return (
        <nav>
            <div className={styles.leftSide}>
                <div className={styles.logo}>
                    <img src="mypoetry_logo.jpeg" alt="My Poetry logo" />
                    <h5>My Poetry</h5>
                </div>
                <div className={styles.addPoetry}>
                    <Link to='/poetries' style={{ color: 'white', textDecoration: 'none'}}>Стихове</Link>
                </div>
                {/* TODO: If user */}
                <div className={styles.addPoetry}>
                    <Link to='/add-poetry' style={{ color: 'white', textDecoration: 'none'}}>Добави стих</Link>
                </div>
            </div>
            <div className={styles.info}>
                Стани автор
            </div>
        </nav>
    )
  }
  
  export default Navbar
  