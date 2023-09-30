"use client";
import React from 'react'
import { Icon } from '@iconify/react';
import {motion} from 'framer-motion'
import Word from '@/components/Word'
import { useAppSelector } from '@/redux/store'
import styles from "./meaning.module.css"


export default function Meaning() {

  const word = useAppSelector((state) => state.wordReducer.value.word);

  const playAudio = () => {
    const audio = word[0].phonetics.filter( (item: any) => item.audio !== "");
    const audioFile = new Audio(audio[0].audio);
    audioFile.play();
  }

  return (
    <>
      {word.length > 0 && 
        <motion.div
        initial={{y: 60, opacity: 0}}
        animate={{y: 20, opacity: 1}}
        transition={{ ease: "linear",duration: 1}}
        className={styles.word}
        >
          <Word word={word[0].word} phonetics={word[0].phonetic}/>

          <button onClick={playAudio}>
            <Icon icon="bi:play-circle-fill" color="#f2f" height={30} />
          </button>
        </motion.div>
      }
    </>
    
  )
}
