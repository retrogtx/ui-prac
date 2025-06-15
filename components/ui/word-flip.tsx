"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

export const WordFlip = ({ words }: {words: string[]}) => {
    const [currentWord, setCurrentWord] = useState(words[0])
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true)
            setTimeout(() => {
                setCurrentWord(words[(words.indexOf(currentWord) + 1) % words.length])
                setIsAnimating(false)
            }, 500)
        }, 500)

        return () => clearInterval(interval)
    }, [currentWord, words])

    return (
        <div className="flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentWord}
                    className="text-4xl font-bold"
                    initial={{ opacity: 0, filter: 'blur(8px)', scale: 0.95 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                    exit={{ opacity: 0, filter: 'blur(8px)', scale: 1.05 }}
                    transition={{ 
                        duration: 0.3,
                        ease: [0.4, 0, 0.2, 1],
                        opacity: { duration: 0.3 },
                        filter: { duration: 0.3 },
                        scale: { duration: 0.3 }
                    }}
                >
                    {currentWord}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}