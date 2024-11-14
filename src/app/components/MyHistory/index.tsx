'use client'

import React from 'react';
import styles from './styles.module.css'
import Image from 'next/image';
// import { Container } from './styles';
import BannerImage from '@/assets/images/Group 3 (1).png'
import { redirectToWhatsApp } from '@/utils/RedirectWhatsapp';
const MyHistory: React.FC = () => {
    return (
        <section className={styles.container}>

            <article className={styles.articleContainer}>
                <h1>Minha História?</h1>
                <div className={styles.containerProject}>
                    <p>Sou Gabriel, desenvolvedor front-end com 4,5 anos de experiência em desenvolvimento web e mobile. Apaixonado por tecnologia desde cedo, tenho especialização em Next.js, React, Node.js, TypeScript e React Native. Minha experiência abrange programação orientada a objetos, bancos de dados e o desenvolvimento de aplicações de alta qualidade com experiências fluídas e intuitivas. Por meio de projetos pessoais, me mantenho atualizado com as tendências do setor e aprimoro minhas habilidades constantemente.</p>

                </div>
                <a className={styles.hrefRedirect} onClick={redirectToWhatsApp}>
                    Contrata-me
                </a>
            </article>
            <div className={styles.containerBanner}>
                <Image
                    className={styles.imageBanner}
                    src={BannerImage}
                    alt='Imagem de banner'
                />
            </div>
        </section>
    );
}

export default MyHistory;