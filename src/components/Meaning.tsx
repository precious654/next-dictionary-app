"use client";
import React from 'react'
import Word from '@/components/Word'
import { useAppSelector } from '@/redux/store'

export default function Meaning() {

  const word = useAppSelector((state) => state.wordReducer.value.word);
  console.log(word);

  return (
    <div>
      <Word />
    </div>
  )
}
