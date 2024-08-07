import styles from './Cards.module.css';
import Card from '../Card/Card';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Cards() {
    const cards = [
        { title: "Junior Frontend Developer", place: "Москва", price: "100.000₽", about: "Требуется Junior Frontend разработчик", id: 1 },
        { title: "Middle Frontend Developer", place: "Краснодар", price: "150.000₽", about: "Требуется Middle Frontend разработчик", id: 2 },
        { title: "Senior Frontend Developer", place: "Санкт-Петербург", price: "230.000₽", about: "Требуется Senior Frontend разработчик", id: 3 },
        { title: "DevOps Developer", place: "Москва", price: "120.000₽", about: "Требуется DevOpv разработчик", id: 4 },
        { title: "Junior Fullstack Developer", place: "Красноярск", price: "130.000₽", about: "Требуется Junior Fullstack разработчик", id: 5 },
        { title: "Middle Backend Developer", place: "Калининград", price: "165.000₽", about: "Требуется Middle Backend разработчик", id: 6 },
    ];

    const location = useLocation();
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        const idFromPath = location.pathname.split('/')[1];
        setCurrentId(idFromPath ? parseInt(idFromPath) : null);
    }, [location]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.cards}>
                {cards.map((card) => (
                    <Card 
                        key={card.id}
                        title={card.title}
                        place={card.place}
                        price={card.price}
                        id={card.id}
                        about={card.about}
                        isVisible={currentId === card.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default Cards;
