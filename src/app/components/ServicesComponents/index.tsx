'use client'

import React, { useEffect } from 'react';

import styles from './styles.module.css'
import image1 from '../../../assets/images/Frame 61.png'
import image2 from '../../../assets/images/Frame 60.png'
import image3 from '../../../assets/images/Frame 59.png'
import Image from 'next/image';
import { useWindowScroll } from '@/app/customHook/useWindoSrool';
// import { Container } from './styles';

const arrayImages = [
    image1, image2, image3
]

const ServicesComponents: React.FC = () => {
    const scroll = useWindowScroll()

    useEffect(() => {
        console.log(scroll)
        const title = document.querySelectorAll('#imageData')
        if (scroll > 800) {
            if (title) {
                title.forEach((values) => {
                    values.className = `${styles.image} animate__animated animate__bounceInLeft`
                })
            }
        }else {
            if (title) {
                title.forEach((values) => {
                    values.className = `${styles.image} `
                })
            }
        }
    }, [scroll])
    return (
        <section className={styles.container}>
            <article className={`${styles.articleContainer} ${styles.mediaContainer}`}>
                <h2>Meus Serviços</h2>
                <p className={styles.containerMessage}>Conheça minhas soluções exclusivas: Serviços personalizados para atender às suas necessidades com excelência.</p>
            </article>
            <article className={styles.articleContainer}>
                {
                    arrayImages.map((image, index) => (
                        <div key={index} className={styles.imageContainer}>
                            <Image id='imageData' src={image} alt='Imagem de um serviço' className={styles.image} />
                        </div>
                    ))

                }
            </article>
        </section>

    );
}

export default ServicesComponents;