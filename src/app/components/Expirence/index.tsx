import React from 'react';

// import { Container } from './styles';
import styles from './styles.module.css'

import Image1 from '@/assets/images/Group 12 (2).png'
import Image2 from '@/assets/images/Group 13.png'
import Image from 'next/image';
const ExpirenceArray = [
    {
        title: 'Desenvolvedor Web',
        company: 'Secondmind , Conselheiro Lafaiete',
        period: '2022 - Atual',
        description: 'Desenvolvedor Web com experiência em criação e manutenção de websites e aplicativos web, utilizando HTML, CSS e JavaScript. Habilidade em desenvolvimento front-end e back-end, com foco na construção de interfaces intuitivas e funcionais. Comprometido com a melhoria contínua e com a adaptação às tendências do mercado para oferecer soluções modernas e eficientes.'
    },
    {
        title: 'Desenvolvedor Web',
        company: 'Ge-Tect , Congonhas',
        period: 'FreeLancer',
        description: 'Desenvolvedor Web freelancer especializado em criação e manutenção de websites e aplicativos web personalizados, utilizando HTML, CSS e JavaScript. Experiência tanto no front-end quanto no back-end, com foco em construir interfaces intuitivas e funcionais que atendem às necessidades específicas de cada cliente. Comprometido em entregar soluções modernas e eficazes, sempre alinhadas às últimas tendências do mercado.'
    }
]

const Expirence: React.FC = () => {
    return (
        <section className={styles.container}>
            <h2>Minha <strong>Experiência</strong></h2>
            <article className={styles.expirenceContainer}>
                {
                    ExpirenceArray.map((exp, index) => (
                        <div key={index} className={styles.experience}>
                            <div className={styles.divisor}>
                                <h4>{exp.company}</h4>
                                <p>{exp.period}</p>
                            </div>
                            {
                                <Image src={index % 2 === 0 ? Image1 : Image2} alt="imagem de divisão" />
                            }
                            <div className={styles.divisor}>
                                <h4>{exp.title}</h4>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))
                }
            </article>
        </section >
    );
}

export default Expirence;