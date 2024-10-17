
'use client'
import React, { useEffect } from 'react';

// import { Container } from './styles';
import styles from '../styles.module.css'
import { useWindowScroll } from '@/app/customHook/useWindoSrool';

const TitleUper: React.FC = () => {
    const scroll = useWindowScroll()

    useEffect(() => {
        const title = document.querySelector('#title')
        if (scroll > 100) {
            if (title) {
                title.className = `${styles.title} animate__animated  animate__backOutUp`
            }
        } else {
            if (title) {
                title.className = `${styles.title} animate__animated animate__backInDown`
            }
        }
    }, [scroll])

    return (
        <article className={styles.containerTitleUp}>
            <h1 id={'title'} className={styles.title}>Eu sou o <strong>Gabriel</strong><br /> Desenvolvedor Front</h1>
        </article>
    );
}

export default TitleUper;