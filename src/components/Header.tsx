'use client';
import React from 'react'
import { Icon } from '@iconify/react';
import styles from './header.module.css';
import { Gowun_Dodum } from 'next/font/google';
import { Montserrat } from 'next/font/google';

const gowun = Gowun_Dodum({
    weight: ["400"],
    subsets: ["latin"]
});

const montserrat = Montserrat({
    weight: ["100", "200", "300", "400"],
    subsets: ["latin"]
})

export default function Header() {

    const[icon, setIcon] = React.useState("ph:sun-light");

    const toggle = () => {
        if(icon == "ph:sun-light") {
            setIcon("ph:moon-light")
        } else{
            setIcon("ph:sun-light")
        }
    }

  return (
    <header className={styles.header}>
        <div className={styles.icon}>
            <button onClick={toggle}>
                <Icon icon={icon} height={30}/>
            </button>
        </div>

        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Icon icon="mdi-light:book" height={27}/>
                <p className={gowun.className}>Dictionary</p>
            </div>
            <form className={styles.form}>
                <input type="text" placeholder='enter text...' className={montserrat.className}/>
                <button className={styles.formicon}>
                    <Icon icon="ic:twotone-search" height={20}/>
                </button>
            </form>
        </nav>
        
        <div className={styles.vertical}></div>
    </header>
  )
}
