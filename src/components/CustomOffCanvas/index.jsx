import React, { useContext, useEffect, useState } from 'react'
import './styles.css'
import { LoginContext } from '../../contexts/LoginContext';
import { motion } from "framer-motion"

export default function CustomOffCanvas({ children }) {
    const { setShowOffCanvas } = useContext(LoginContext);

    useEffect(() => {
        const handleBlockScroll = () => {
            document.body.style.overflow = 'hidden';
        }

        handleBlockScroll();

        const handleUnblockScroll = () => {
            document.body.style.overflow = 'auto';
        }

        return () => {
            handleUnblockScroll()
        };
    }, [])

    return (
        <motion.div
            animate={{ translateX: [1300, 0], opacity: [0, 1] }}
            transition={{ duration: 0.3 }}
            className='off-canvas-container off-canvas-overlay'
        >
            <main className="off-canvas-content">
                <div className="off-canvas-header">
                    <h1>Off canvas Header</h1>
                    <button onClick={() => setShowOffCanvas(false)}>Fechar</button>
                </div>
                <div className="off-canvas-body">
                    {children}
                </div>
                <div className="off-canvas-footer">

                </div>
            </main>
        </motion.div>
    )
}
