import { useEffect, useState } from 'react';
import styles from './About.module.scss';

const About = () => {
    const data = ["1", "2", "3", "4", "5"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselInfiniteScroll = () => {
        if (currentIndex === data.length - 1) {
            return setCurrentIndex(0);
        }
        return setCurrentIndex(currentIndex + 1);
    }

    useEffect(() => {
        const interval = setInterval(() => { carouselInfiniteScroll() }, 3000);
        // clean up function
        return () => clearInterval(interval);
    });

    return (
        <div className={styles.carouselContainer}>
            About
            { data.map((item, index) => {
                return <h1 className={styles.carouselItem} style={{ transform: `translate(-${currentIndex * 100}%)` }} key={index}>
                    {item}
                </h1>
            }) }
        </div>
    )
  }
  
  export default About
  