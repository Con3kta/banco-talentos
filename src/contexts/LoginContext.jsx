import { createContext, useState } from "react";

export const LoginContext = createContext();

const handleBlockScroll = () => {
    document.body.style.overflow = 'hidden';
}

const handleUnblockScroll = () => {
    document.body.style.overflow = 'auto';
}

export const LoginProvider = ({ children }) => {
    const [showOffCanvas, setShowOffCanvas] = useState(false);

    showOffCanvas ? handleBlockScroll() : handleUnblockScroll();

    return (
        <LoginContext.Provider value={{
            showOffCanvas,
            setShowOffCanvas,
            handleBlockScroll,
            handleUnblockScroll
        }}>
            {children}
        </LoginContext.Provider>
    )
}