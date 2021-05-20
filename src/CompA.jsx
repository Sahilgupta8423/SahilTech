import { CompassCalibration } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import CompB from './CompB'
const CompA = () => {
  const [num, setNum] =useState()
  const [name, setName] =useState()
  const [moves, setMoves] =useState()
  useEffect(() => {
    async function getData(){
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      console.log(res.data.name)
      setName(res.data.name)
      setMoves(res.data.moves.length)
    }
    getData()
  })
  return (
    <>
    <h1>You choosed {num} value</h1>
    <h1>My name is {name} </h1>
    <h1>I have {moves} moves</h1>
      <select className='mt-3 ml-3' value={num} onChange={(event) => {
        setNum(event.target.value)
      }}>
        <option value='1'>1</option>
        <option value='25'>25</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>
    </>
  );
};
export default CompA;