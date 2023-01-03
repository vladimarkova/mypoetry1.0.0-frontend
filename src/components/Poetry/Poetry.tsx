import { useState } from 'react';
import styles from './Poetry.module.scss';

// const poetryBackgroundImageUrl = "/mypoetry_logo.jpeg";
interface IPoetry {
    content: string;
    user?: string;
    date?: string;
}

const Poetry = ({ poetry, showFav = true } : { poetry?: IPoetry, showFav?: boolean }) => {
    const [favorite, setFavorite]= useState(false);

    return (
        <div className={styles.main}>
             {/* backgroundImage: `url(${poetryBackgroundImageUrl})` */}
            <div className={styles.poetryCard}>
                {showFav && <div className={styles.favorite} onClick={() => setFavorite(!favorite)}>
                    {/* <img src="icons/favorite_small.svg" alt="Favorite" /> */}
                    {favorite ? 
                        (<div className={styles.fav}><i id="fav" className="fa-solid fa-heart fa-xl"></i></div>) : 
                        (<div className={styles.notFav}><i className="fa-regular fa-heart fa-xl"></i></div>)}
                </div>}
                <div className={styles.content}>
                    { poetry?.content }
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius consequuntur atque velit laudantium laboriosam. Deleniti, totam ratione aperiam autem reiciendis maiores officia quibusdam repellendus, magnam aspernatur minus unde debitis ad dolorem natus numquam sapiente quidem molestias quos! Animi doloremque reprehenderit molestiae veritatis voluptatum beatae recusandae odit ea unde alias?
                    {/* <br></br>
                    И няма да пиша днес.
                    <br></br>
                    Не, няма. А само ще слушам.
                    <br></br>
                    Какво ли ще бъде наред?
                    <br></br>
                    Какво ли отново ще търсим?
                    <br></br>
                    <br></br>
                    Но е красиво дори.
                    <br></br>
                    Красиво и светло. И леко и мило сълзи.
                    <br></br> 
                    И живеем във днес. Толкова ние, толкова честни.
                    <br></br>
                    А изгревът пак взел е превес. Над бури и облаци и други небесни.
                    <br></br>
                    <br></br>
                    Не, няма да пиша днес.
                    <br></br>
                    А само ще чувствам.
                    <br></br>
                    Защото това е нашият лек.
                    <br></br>
                    Това е да бъдеш. И просто да слушаш!
                    <br></br>
                    <br /> */}
                    <div className={styles.heart}>
                    ❤
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.date}>
                        { poetry?.date || '24.12.2021'}
                    </div>
                    <div className={styles.author}>
                        { poetry?.user || 'Влади М.' }
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default Poetry
