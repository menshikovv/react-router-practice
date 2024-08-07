import styles from './Card.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ title, place, price, id, about }) {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    const handleCardClick = () => {
        setIsVisible(true);
        navigate(`/${id}`);
    }

    const handleClosePopup = (event) => {
        event.stopPropagation();
        setIsVisible(false);
        navigate(`/`);
    }

    return (
        <div className={styles.wrapper} onClick={handleCardClick}>
            <div className={styles.content}>
                <h3>Вакансия: {title}</h3>
                <h3>Место работы: {place}</h3>
                <h3>Доход: {price}</h3>
            </div>
            {isVisible && (
                <div className={styles.popup} onClick={handleClosePopup}>
                    <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
                        <h3>Вакансия: {title}</h3>
                        <h3>Место работы: {place}</h3>
                        <h3>Доход: {price}</h3>
                        <p>Описание: {about}</p>
                        <div className={styles.buttonContainer}>
                            <button>Откликнуться</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Card;
