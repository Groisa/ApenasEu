'use client'
import React, { useEffect } from 'react';
// import { Container } from './styles';
import styles from './styles.module.css'

import Brain from '../../../assets/images/cerebro.png'
import Image from 'next/image';
import { useWindowScroll } from '@/app/customHook/useWindoSrool';
import { redirectToWhatsApp } from '@/utils/RedirectWhatsapp';
const Projects: React.FC = () => {
    const scroll = useWindowScroll()

    useEffect(() => {
        const headerdata = document.querySelector('#header') 
        if (scroll > 1762) {
           if(headerdata)
            headerdata.className = `${styles.header} animate__animated animate__jackInTheBox`;
        }else {
            if(headerdata) {
                headerdata.className = `${styles.header}`
            }
        }
    }, [scroll]);
    return (
        <section className={styles.container}>
            <article className={`${styles.header}`} id='header' >
                <h2>Desenvolvendo software sob medida que faz a diferença</h2>
                <p>
                    Se você precisa de um software personalizado e que realmente funcione, estamos prontos para ajudar!
                </p>
                <button onClick={redirectToWhatsApp}>Pedir Orçamento</button>
                <Image src={Brain} alt='Brain' className={styles.imageBrain} />
            </article>
        </section>
    );
}

export default Projects;