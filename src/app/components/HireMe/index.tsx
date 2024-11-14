'use client'
import React from 'react';
import styles from './styles.module.css'
import Image from 'next/image';
// import { Container } from './styles';
import ImageLogo from '@/assets/images/apenasG.png'
import { redirectToWhatsApp } from '@/utils/RedirectWhatsapp';
const HireMe: React.FC = () => {
    return (
        <section className={styles.container}>
            <Image src={ImageLogo} alt='imagem da logo' className={styles.logo} />
            <article className={styles.articleContainer}>
                <h1>Por que Me contratar?</h1>
                <p>Olá! Meu nome é Gabriel Rosa, sou desenvolvedor web com experiência em tecnologias como React, Next.js e .NET. Sou apaixonado por tecnologia e focado em criar soluções eficientes e de alta qualidade. Tenho uma abordagem prática e orientada a resultados, sempre buscando melhorar a experiência do usuário e a performance dos projetos em que atuo.

                    Estou pronto para contribuir com minha experiência e dedicação para ajudar sua empresa a alcançar novos resultados. Obrigado pela oportunidade!</p>
                <div className={styles.containerProject}>
                    <div>
                        <p style={{fontSize: 20}}>15+</p>
                        <p><strong>Projetos Completos</strong></p>
                    </div>
                    <div>
                        <p style={{fontSize: 20}}>30+</p>
                        <p><strong>Projetos que participei</strong></p>
                    </div>
                </div>
                <a className={styles.hrefRedirect} onClick={redirectToWhatsApp}>
                    Contrata-me
                </a>
            </article>
        </section>
    );
}

export default HireMe;