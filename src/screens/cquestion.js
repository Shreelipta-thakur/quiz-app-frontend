import React from 'react'
import "./c.css"
import Navbar from './navbar'

export default function cquestion() {
  return (
    <>
    <Navbar/>
    <div>
      <div class="question-bank">
    <h2>C Program Question Bank</h2>
    
    <div class="question">
        <h3>Question 1: What is a variable in C?</h3>
        <p>A variable in C is a named location in memory that holds a value.</p>
    </div>
    
    <div class="question">
        <h3>Question 2: Explain the difference between `printf()` and `scanf()` functions.</h3>
        <p>`printf()` is used for output (printing to the console), while `scanf()` is used for input (reading from the console).</p>
    </div>
    
    <div class="question">
        <h3>Question 3: What is the difference between `int` and `float` data types in C?</h3>
        <p>`int` is used to store integer values, while `float` is used to store floating-point (decimal) values.</p>
    </div>
    
   

</div>

    </div>
    </>
  )
}
