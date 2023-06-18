import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({children}) => {
    const [showOffCanvas, setShowOffCanvas] = useState(false);

    return (
        <LoginContext.Provider value={{
            showOffCanvas,
            setShowOffCanvas,
        }}>
            {children}
        </LoginContext.Provider>
    )
}