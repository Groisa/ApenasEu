import React from 'react';


import styles from './styles.module.css'
import TitleUper from './TitleUper/index.';
import Center from './Center';
// import { Container } from './styles';

const HomeSection: React.FC = () => {
    return (
        <section className={styles.container}>
            <TitleUper />
            <Center />
        </section>
    );
}

export default HomeSection;