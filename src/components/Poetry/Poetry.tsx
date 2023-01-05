import { useState } from 'react';
import styles from './Poetry.module.scss';
import { IPoetry } from '../../interfaces/poetry';

// const poetryBackgroundImageUrl = "/mypoetry_logo.jpeg";

// const firstPoetry = `Ей за такива моменти
// И ей за такива съдби
// Аз мечтая, събирам копнежи
// Дъждът за слънце мълви

// А колко е красиво само
// Колко е било, но даже и преди
// Един докоснат спомен, рамо
// Една жена, и мъж, и няколко сълзи

// Една Земя, по Коледа, и пролет
// Беше някога красиво, може би
// Аз не смея вече да говоря
// Но как боли, боли, нали...`;

const replaceWithBr = (str?: string) => {
    return str? str.replace(/\n/g, "<br />") : '';
  }

const Poetry = ({ poetry, showFav = true } : { poetry?: IPoetry, showFav?: boolean, showAnimation?: boolean }) => {
    const [favorite, setFavorite]= useState(false);

    return (
        <div className={styles.main}>  
            <div className={styles.poetryCard}>
                {showFav && <div className={styles.favorite} onClick={() => setFavorite(!favorite)}>
                    {favorite ? 
                        (<div className={styles.fav}><i id="fav" className="fa-solid fa-heart fa-xl"></i></div>) : 
                        (<div className={styles.notFav}><i className="fa-regular fa-heart fa-xl"></i></div>)}
                </div>}
                <div className={styles.content}>
                    <p dangerouslySetInnerHTML={{__html: (replaceWithBr(poetry?.content))}} />
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
