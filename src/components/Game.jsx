import React ,{useState} from 'react'
import './Game.css'
import Board from './Board'
import { calculateWinner } from '../helper'
export default function Game() {
    const[board,setBoard] = useState(Array(9).fill(null))
    const[xIsNext,setXIsNext]= useState(true)
    const winner = calculateWinner(board)

const handleClick= (index) =>{
    const boardCopy = [...board]
     if(winner || boardCopy[index])return
     boardCopy[index] =xIsNext ? 'X': 'O'
     setBoard(boardCopy)
     setXIsNext(!xIsNext)
}
    return (
    <div className='wrapper'>
    <Board squares={board} click={handleClick}/>
    </div>
  )
}
