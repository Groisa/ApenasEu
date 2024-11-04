'use client'
import React from 'react';
// import { Container } from './styles';
import styles from './styles.module.css'
const Projects: React.FC = () => {
    return (
        <section className={styles.container}>
            <article className={styles.header}>
                <h2>Projetos Principais</h2>
                <button>
                    <p>Ver Tudo</p>
                </button>
            </article>
        </section>
    );
}

export default Projects;