import { useState, useEffect } from 'react';
interface WindowProps {
    width: number | undefined;
    height: number | undefined;
}
export const useWindowScroll = () => {
    const [scrollY, setScrollY] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return scrollY;
}