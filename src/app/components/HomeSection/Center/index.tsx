'use client'

import React, { useEffect } from 'react';

// import { Container } from './styles';
import styles from '../styles.module.css'

import Persona from '../../../../assets/images/comfundo.png'
import Qot from '../../../../assets/images/qot.png'
import Stars from '../../../../assets/images/stars.png'
import Image from 'next/image';
import { useWindowScroll } from '@/app/customHook/useWindoSrool';
import { useWindowSize } from '@/app/customHook/useWindoo';

const Center: React.FC = () => {

    let expirenceDate = new Date(new Date().setFullYear(new Date().getFullYear() - 2019)).getFullYear();

    const scroll = useWindowScroll()

    const { width } = useWindowSize()
    return (
        <article className={styles.containerCenter}>
            <div className={`${styles.suportMessage} ${styles.alignLeft} ${width && width > 768 && scroll > 130 ? styles.marginTop : styles.margin}`}>
                <Image src={Qot} alt='Imagem de persona gabriel rosa' />

                <p>Os a experiência excepcional de Gabriel garante o sucesso do seu site. Altamente recomendado</p>
            </div>
            <div className={styles.containerPersona}>
                <Image src={Persona} alt='Imagem de persona gabriel rosa' />

            </div>
            <div className={`${styles.suportMessage} ${width && width > 768 && scroll > 130 ? styles.marginTop : styles.margin} ${width && width <= 768 && styles.left}`}>
                <Image src={Stars} alt='Imagem de persona gabriel rosa' />
                <h2 className={styles.expirenceTitle}>{expirenceDate} Anos <p>experiência</p></h2>
            </div>
        </article >
    );
}

export default Center;