import { useState, useEffect } from 'react';
interface WindowProps {
    width: number | undefined;
    height: number | undefined;
}
export const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState<WindowProps>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {

        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }


        handleResize();


        window.addEventListener('resize', handleResize);


        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}