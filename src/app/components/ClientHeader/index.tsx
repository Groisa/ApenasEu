'use client';

import { HeaderContantesTitle } from '@/app/contants/headerContates';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css'
import G from '../../../assets/images/apenasG.png'
import { usePathname } from 'next/navigation';
import { useWindowSize } from '@/app/customHook/useWindoo';
import { RiMenuFold4Fill } from 'react-icons/ri';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
// import { Container } from './styles';

const ClientHeader: React.FC = () => {
    const router = usePathname()
    const { height, width } = useWindowSize()
    const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false)
    const [openMenuMobileKey, setOpenMenuMobileKey] = useState<number>(0)

  
    useEffect(() => {
        const querySelector = document.querySelectorAll('.anime')

        if (openMenuMobileKey) {
       
            setTimeout(() => {
                querySelector.forEach((values) => {
                    values.className = `${styles.titleHref} animate__animated animate__shakeY`

                })
            }, 1000)
        }
    }, [openMenuMobileKey])
    return (
        <>
            <section className={`${styles.contentHeader} animate__animated animate__rubberBand`}>
                {
                    width && width > 768 ? HeaderContantesTitle.map((title, index) => (
                        <>
                            {
                                index === 3 && (
                                    <Image src={G} alt="imagem de uma letra g estilizada" height={55} />
                                )
                            }
                            <a className={title.href === router ? styles.selected : ""}>{title.title}</a>
                        </>
                    ))
                        : (
                            <>
                                <HiOutlineMenuAlt2 size={28}
                                    className={`${styles.icon} ${openMenuMobile && styles.openMenu} `}
                                    onClick={() => {
                                        setOpenMenuMobile(e => !e)
                                        setOpenMenuMobileKey(e => e + 1)

                                    }} />
                                <Image src={G} alt="imagem de uma letra g estilizada" height={55} />
                            </>
                        )
                }

            </section>
            <div className={`${styles.leftMenu} ${openMenuMobile && styles.open} `} key={openMenuMobileKey}>
                {HeaderContantesTitle.map((title, index) => (
                    <React.Fragment>
                        {
                            index === 3 && (
                                <Image className={'anime animate__animated animate__backInDown'} src={G} alt="imagem de uma letra g estilizada" height={55} />
                            )
                        }
                        <a className={`${styles.titleHref} anime animate__animated animate__backInDown`}>{title.title}</a>
                    </React.Fragment>))
                }
            </div>
        </>
    );
}

export default ClientHeader;