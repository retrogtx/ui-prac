"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"

export type CardProps = {
    name: string
    details: React.ReactNode | string
    placeholderText?: string
}

export const Card = ({ name, details, placeholderText = "Hover to reveal" }: CardProps) => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, scale: 0.9, filter: "blur(8px)" }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="relative w-80 max-w-full rounded-xl bg-white p-6 shadow-xl"
                >
                    <button
                        onClick={() => setIsOpen(false)}
                        aria-label="Close card"
                        className="absolute right-3 top-1 text-2xl font-bold text-gray-400 transition-colors hover:text-gray-600 focus:outline-none"
                    >
                        &times;
                    </button>

                    <h1 className="flex justify-center items-center mb-6 text-2xl font-extrabold tracking-tight text-slate-800">
                        {name}
                    </h1>

                    <HoverReveal placeholder={placeholderText} details={details} />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

type HoverRevealProps = {
    placeholder: string
    details: React.ReactNode | string
}

const HoverReveal = ({ placeholder, details }: HoverRevealProps) => (
    <motion.div
        className="relative h-40 w-full cursor-pointer select-none"
        initial="rest"
        animate="rest"
        whileHover="hover"
    >
        <motion.div
            variants={{ rest: { opacity: 1, y: 0, scale: 1 }, hover: { opacity: 0, y: -14, scale: 0.98 } }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex h-full w-full items-center justify-center rounded-lg bg-gray-100 text-lg font-medium text-gray-500"
        >
            {placeholder}
        </motion.div>

        <motion.div
            variants={{
                rest: { opacity: 0, y: 18, filter: "blur(6px)" },
                hover: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center rounded-lg bg-gray-100 p-5 text-gray-700"
        >
            {typeof details === "string" ? (
                <div
                    className={`space-y-1 text-left text-base leading-relaxed text-slate-700`}
                >
                    {details
                        .split(/\r?\n/)
                        .map((line) => line.trim())
                        .filter(Boolean)
                        .map((line, idx) => (
                            <span key={idx} className="block">
                                {line}
                            </span>
                        ))}
                </div>
            ) : (
                <div
                    className={`space-y-1 text-left text-base leading-relaxed text-slate-700`}
                >
                    {details}
                </div>
            )}
        </motion.div>
    </motion.div>
)