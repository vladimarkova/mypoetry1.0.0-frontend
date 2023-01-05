import { useEffect, useState } from 'react';
import Poetry from '../Poetry/Poetry';
import styles from './PoetryList.module.scss';
import { IPoetry } from '../../interfaces/poetry';

const firstPoetry: IPoetry = {
    content: `Ей за такива моменти
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
    Но как боли, боли, нали...`,
    user: 'Vladi Markova',
    date: '05-01-2023',

};

const secondPoetry: IPoetry = {
    content: `И няма да пиша днес.
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
    Това е да бъдеш. И просто да слушаш!`,
    user: 'John Doe',
    date: '03-01-2023',
};

const thirdPoetry: IPoetry = {
    content: `Една раздяла, тъй, на прага
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
    Аз обичам, вече по-добре!`,
    user: 'Penka Chavdarova',
    date: '01-01-2023',
};

const PoetryList = () => {
    const poetryList = [firstPoetry, secondPoetry, thirdPoetry];
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselInfiniteScroll = () => {
        if (currentIndex === poetryList.length - 1) {
            return setCurrentIndex(0);
        }
        return setCurrentIndex(currentIndex + 1);
    }

    useEffect(() => {
        const interval = setInterval(() => { carouselInfiniteScroll() }, 15000);
        // clean up function
        return () => clearInterval(interval);
    });

    return (
        <div className={styles.carouselContainer}>
                { poetryList.map((poetry, index) => {
                    return <div className={styles.carouselItem} style={{ transform: `translate(-${currentIndex * 100}%)` }} key={index}>
                        <Poetry poetry={poetry} />
                    </div>
                }) }
            </div>
    )
  }
  
  export default PoetryList
  