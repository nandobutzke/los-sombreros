import { createContext, ReactNode, useContext, useState } from 'react';

interface BackToHomeProviderProps {
    children: ReactNode;
}

interface BackToHomeContextData {
    isOtherPage: boolean;
    alterPage: (isOtherPageValue: boolean) => void
}

const BackToHomeContext = createContext<BackToHomeContextData>(
    {} as BackToHomeContextData
);

export function BackToHomeProvider({children}: BackToHomeProviderProps) {
    const [isOtherPage, setIsOtherPage] = useState(false);
    
    function alterPage(isOtherPageValue: boolean) {
        setIsOtherPage(isOtherPageValue);
    }

    return (
        <BackToHomeContext.Provider value={{ isOtherPage, alterPage }}>
            {children}
        </BackToHomeContext.Provider>
    );
}

export function useBackToHome() {
    const context = useContext(BackToHomeContext);

    return context;
}