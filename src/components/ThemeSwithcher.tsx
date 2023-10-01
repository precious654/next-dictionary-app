"use client";
import React from 'react'
import { Icon } from '@iconify/react';
import styles from './header.module.css';
import { useTheme } from 'next-themes';

export default function ThemeSwithcher() {

    const[icon, setIcon] = React.useState("ph:moon-light");
    const {theme, setTheme} = useTheme();

    const toggle = () => {
        if(icon == "ph:sun-light") {
            setIcon("ph:moon-light")
            setTheme("light");
        } else{
            setIcon("ph:sun-light");
            setTheme("dark");
        }
    }

  return (
    <div className={styles.icon}>
        <button onClick={toggle}>
            <Icon icon={icon} height={30} color="#B2BEB5"/>
        </button>
    </div>
  )
}
