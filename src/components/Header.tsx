import React from 'react'
import '@/styles/header.scss'
import { motion } from "framer-motion";

interface HeaderProps {
    title: string;
    desc: string;
}

const Header = ({title, desc}: HeaderProps) => {
    return (
        <div className='Header'>
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 3 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0},
                    }}
                >
                    {title}
                </motion.h1>

            <p>{desc}</p>
        </div>
    )
}

export default Header