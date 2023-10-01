'use client';
import React from 'react'
import { Icon } from '@iconify/react';
import styles from './header.module.css';
import { Gowun_Dodum, Montserrat } from 'next/font/google';
import {motion} from 'framer-motion';
import { getWord } from '@/redux/wordSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';

const gowun = Gowun_Dodum({
    weight: ["400"],
    subsets: ["latin"]
});

const montserrat = Montserrat({
    weight: ["100", "200", "300", "400"],
    subsets: ["latin"]
})

export default function Header() {

    const[word, setWord] = React.useState("");

    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (event: any) => {
        setWord(event?.target.value);
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
        dispatch(getWord(data));
    }

  return (
    <motion.header 
    initial={{y: 0, opacity: 0}}
    animate={{y: 10, opacity: 1}}
    transition={{ ease: "linear",duration: 1}}
    className={styles.header}
    >
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Icon icon="mdi-light:book" height={27}/>
                <p className={gowun.className}>Dictionary</p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder='enter text...' 
                className={montserrat.className}
                name='word'
                value={word}
                onChange={handleChange}
                />
                <button className={styles.formicon}>
                    <Icon icon="ic:twotone-search" color="#333333" height={20}/>
                </button>
            </form>
        </nav>
        
        <div className={styles.vertical}></div>
    </motion.header>
  )
}
