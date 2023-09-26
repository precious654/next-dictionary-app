"use client";
import React from 'react';
import { Icon } from '@iconify/react';
import styles from "./word.module.css";
import { Mooli } from 'next/font/google';

const mooli = Mooli({
  weight: ["400"],
  subsets: ["latin"]
})

export default function Word() {

  const playAudio = (src: string) => {
    const audioFile = new Audio(src);
    audioFile.play();
  }

  const file: string = "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3";

  return (
    <div className={styles.word}>
      <div>
        <h1 className={mooli.className}>Hello</h1>
        <p>/ndjffjfjfjf/</p>
      </div>
      <button onClick={() => playAudio(file) }>
        <Icon icon="bi:play-circle-fill" color="#f2f" height={26} />
      </button>
    </div>
  )
}
