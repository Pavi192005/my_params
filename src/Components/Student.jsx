import React from 'react'
import {useParams} from 'react-router-dom'

function Student() {
    const {id}= useParams()
    const students = {
  101: "Pavithra",
  102: "Lalli"
}
  return (
    <>
      <h1>Student details</h1>
      <h2>Student id:{id}</h2>
      <h2>Student Name:{students[id]}</h2>
    </>
  )
}

export default Student
