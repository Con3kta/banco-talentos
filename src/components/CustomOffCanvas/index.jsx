import React, { useContext, useEffect, useState } from 'react'
import './styles.css'
import { LoginContext } from '../../contexts/LoginContext';
import { AnimatePresence, motion } from "framer-motion"
import { IoClose } from "react-icons/io5";

export default function CustomOffCanvas({ children }) {
    const { showOffCanvas, setShowOffCanvas } = useContext(LoginContext);

    return (
        <AnimatePresence>
            {showOffCanvas &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className='off-canvas-container off-canvas-overlay'
                >
                    {children ?
                        <motion.main
                            initial={{ translateX: 1300, opacity: 0 }}
                            animate={{ translateX: 0, opacity: 1 }}
                            exit={{ translateX: 1300, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="off-canvas-content"
                        >
                            <div className="off-canvas-header">
                                <IoClose onClick={() => setShowOffCanvas(false)} className='off-canvas-close-icon' />
                            </div>
                            <div className="off-canvas-body">
                                {children}
                            </div>
                            <div className="off-canvas-footer">

                            </div>
                        </motion.main> : <IoClose onClick={() => setShowOffCanvas(false)} className='off-canvas-close-icon' />}
                </motion.div>
            }
        </AnimatePresence>
    )
}
