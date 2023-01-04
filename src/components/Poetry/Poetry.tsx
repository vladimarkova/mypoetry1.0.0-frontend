import { useEffect, useState } from 'react';
import styles from './Poetry.module.scss';

// const poetryBackgroundImageUrl = "/mypoetry_logo.jpeg";
interface IPoetry {
    content: string;
    user?: string;
    date?: string;
}

const firstPoetry = `Ей за такива моменти
И ей за такива съдби
Аз мечтая, събирам копнежи
Дъждът за слънце мълви

А колко е красиво само
Колко е било, но даже и преди
Един докоснат спомен, рамо
Една жена, и мъж, и няколко сълзи

Една Земя, по Коледа, и пролет
Беше някога красиво, може би
Аз не смея вече да говоря
Но как боли, боли, нали...`;

const secondPoetry = `И няма да пиша днес.
Не, няма. А само ще слушам. 
Какво ли ще бъде наред?
Какво ли отново ще търсим?

Но е красиво дори. 
Красиво и светло. И леко и мило сълзи. 
И живеем във днес. Толкова ние, толкова честни. 
А изгревът пак взел е превес. Над бури и облаци и други небесни. 

Не, няма да пиша днес. 
А само ще чувствам. 
Защото това е нашият лек. 
Това е да бъдеш. И просто да слушаш!`;

const thirdPoetry = `Една раздяла, тъй, на прага
Една ръка, протегната за две
Защо ли плаках, тиха, даже неразбрала
Този свят корав за тебе е, дете 

Този път не ще забравя
Този път усещам, че дойде
Краят на една забава
На една игра със моето сърце

Някак по-студена станах
Със усмивката любима на лице
И светът красив като измама
Аз обичам, вече по-добре!`;

console.log(firstPoetry);

const replaceWithBr = (str?: string) => {
    return str? str.replace(/\n/g, "<br />") : '';
  }

const Poetry = ({ poetry, showFav = true, showAnimation = true } : { poetry?: IPoetry, showFav?: boolean, showAnimation?: boolean }) => {
    const poetries = [firstPoetry, secondPoetry, thirdPoetry];
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselInfiniteScroll = () => {
        if (currentIndex === poetries.length - 1) {
            return setCurrentIndex(0);
        }
        return setCurrentIndex(currentIndex + 1);
    }

    useEffect(() => {
        const interval = setInterval(() => { carouselInfiniteScroll() }, 3000);
        // clean up function
        return () => clearInterval(interval);
    });

    const [favorite, setFavorite]= useState(false);

    return (
        <div className={styles.main}>
            {showAnimation ? <div className={styles.carouselContainer}>
                { poetries.map((item, index) => {
                    return <div className={styles.carouselItem} style={{ transform: `translate(-${currentIndex * 100}%)` }} key={index}>
                        {/* backgroundImage: `url(${poetryBackgroundImageUrl})` */}
                        <div className={styles.poetryCard}>
                            {showFav && <div className={styles.favorite} onClick={() => setFavorite(!favorite)}>
                                {/* <img src="icons/favorite_small.svg" alt="Favorite" /> */}
                                {favorite ? 
                                    (<div className={styles.fav}><i id="fav" className="fa-solid fa-heart fa-xl"></i></div>) : 
                                    (<div className={styles.notFav}><i className="fa-regular fa-heart fa-xl"></i></div>)}
                            </div>}
                            <div className={styles.content}>
                                <p dangerouslySetInnerHTML={{__html: (replaceWithBr(poetry?.content) || replaceWithBr(item))}} />
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
                }) }
            </div> :  
            <div className={styles.poetryCard}>
                {showFav && <div className={styles.favorite} onClick={() => setFavorite(!favorite)}>
                    {/* <img src="icons/favorite_small.svg" alt="Favorite" /> */}
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
            </div>}
        </div>
    )
  }
  
  export default Poetry
