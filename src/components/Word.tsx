"use client";
import React from 'react';
import styles from "./word.module.css";
import { Mooli } from 'next/font/google';

const mooli = Mooli({
  weight: ["400"],
  subsets: ["latin"]
})

interface propType {
  word: string,
  phonetics: string,
}

export default function Word(props: propType) {

  return (
    <div className={styles.word}>
      <h1 className={mooli.className}>{props.word}</h1>
      <p>{props.phonetics}</p>
    </div>
  )
}
