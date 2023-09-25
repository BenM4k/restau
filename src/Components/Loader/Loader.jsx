import React from 'react';
import { motion } from 'framer-motion';
import './Loader.scss';

const Loader = () => {
    const variants = {
        start: {
            x: '-40px'
        },
        end: {
            x: '40px',
            transition: {
                ease: 'easeIn',
                repeat: true,
            }
        }
    }
    return (
        <div className="loader-container">
            <motion.div variants={variants} initial='start' animate='end' />
        </div>
    )
}

export default Loader