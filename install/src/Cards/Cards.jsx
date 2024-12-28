import React from 'react'

export const Cards = ({ name ,imageSrc, price, desc }) => {
    return (
        
            <div className={styles.divContainer}>
                <img className={styles.img} src={imageSrc} />
                <h2>{name}</h2>
                <h3>{price}</h3>
                <h4>{desc}</h4>
            </div>
        
    )
}
import styles from './Card.module.css';