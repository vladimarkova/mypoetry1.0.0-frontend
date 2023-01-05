import { useEffect, useState } from 'react';
import Poetry from '../Poetry/Poetry';
import styles from './Carousel.module.scss';

const Carousel = ({ listItems }: { listItems: any[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselInfiniteScroll = () => {
        if (currentIndex === listItems.length - 1) {
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
            { listItems.map((item, index) => {
                return <div className={styles.carouselItem} style={{ transform: `translate(-${currentIndex * 100}%)` }} key={index}>
                    {/* TODO: find a way to generalize this to work with every component with 'items' optional prop being passed to it */}
                    <Poetry poetry={item} /> 
                </div>
            }) }
         </div>
    )
  }
  
  export default Carousel
  