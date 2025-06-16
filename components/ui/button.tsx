"use client"

import { motion } from "motion/react"

export const Button = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.button
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="relative overflow-hidden rounded-xl bg-white px-6 py-2 font-medium text-black shadow-lg transition-shadow hover:shadow-xl"
        >
            <span className="relative z-10">{children}</span>
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={{
                    background: "linear-gradient(110deg, transparent 20%, #ff00c3, #00fff3, transparent 80%)",
                    backgroundSize: "200% 100%",
                }}
                variants={{
                    rest: { backgroundPosition: "200% 0", opacity: 0 },
                    hover: { 
                        backgroundPosition: "-200% 0", 
                        opacity: 0.6,
                        transition: {
                            backgroundPosition: { duration: 1.8, ease: "linear" },
                            opacity: { duration: 0.3, ease: "easeIn" }
                        }
                    }
                }}
                initial="rest"
                whileHover="hover"
            />
        </motion.button>
    )
}