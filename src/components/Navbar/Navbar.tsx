import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss';

const Navbar = () => {
    return (
        <nav>
            <div className={styles.leftSide}>
                <div className={styles.logo}>
                    <img src="mypoetry_logo.jpeg" alt="My Poetry logo" />
                    <Link to='/' style={{ color: 'white', textDecoration: 'none'}} className={styles.navLink}><h5>My Poetry</h5></Link>
                </div>
                {/* <div className={styles.addPoetry}>
                    <Link to='/poetries' style={{ color: 'white', textDecoration: 'none'}}>Стихове</Link>
                </div> */}
                {/* TODO: If user */}
                <div className={styles.addPoetry}>
                    <Link to='/poetries' style={{ color: 'white', textDecoration: 'none'}} className={styles.poetryLink}><h5>Моите стихове</h5></Link>
                </div>
                <div className={styles.addPoetry}>
                    <Link to='/add-poetry' style={{ color: 'white', textDecoration: 'none'}} className={styles.poetryLink}><h5>Добави стих</h5></Link>
                </div>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.info}>
                    <Link to='/' style={{ color: 'white', textDecoration: 'none'}} className={styles.poetryLink}><h5>Стани автор</h5></Link>
                </div>
                <div className={styles.info}>
                    <Link to='/about' style={{ color: 'white', textDecoration: 'none'}} className={styles.poetryLink}><h5>About</h5></Link>
                </div>
            </div>
        </nav>
    )
  }
  
  export default Navbar
  