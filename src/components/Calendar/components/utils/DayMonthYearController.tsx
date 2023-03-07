import * as React from "react"
import ChevronRight from "../utils/ChevronRight"
import ChevronLeft from "../utils/ChevronLeft";
import {DropDown} from "../../../DropDown/index"
const allMonths = [
  "January", 
  "February", 
  "March", 
  "April", 
  "May", 
  "June", 
  "July", 
  "August", 
  "September", 
  "October", 
  "November", 
  "December"
];

const CalendarMonthYearController = ({inputs, setInputs, today}:any) => {
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()


  const handleYearChange = (e:any) => {

    const activeDay:any = document.querySelector(".active")
   

    if (activeDay && activeDay.innerHTML !== inputs.day) {
      activeDay.classList.remove("active")
    
    } 

    setInputs({...inputs, year: Number(e.target.value)})
  }

  const handleYearClear = (e: any) => {
    setInputs({...inputs, year: ""})
  }

  const handleChevronLeft = (e:any) => {

    const activeDay:any = document.querySelector(".active")
   

    if (activeDay) {
      activeDay.classList.remove("active")
    
    } 

    let newMonth = Number(inputs.month) - 1

    if (newMonth === - 1) {
      newMonth = 11
    } 
    setInputs({...inputs, month: newMonth, day: null})
  }

  const handleChevronRight = (e:any) => {
  
    let newMonth = Number(inputs.month) + 1
    
    if (newMonth === 12) {
      newMonth = 0
    } 

    const activeDay:any = document.querySelector(".active")
   

    if (activeDay && activeDay.innerHTML !== inputs.day) {
      activeDay.classList.remove("active")
    
    } 

    setInputs({...inputs, month: newMonth, day: null})
  }

  const handleTodayDisplay =(e:any) => {
    const activeDay:any = document.querySelector(".active")
   

    if (activeDay && activeDay.innerHTML !== inputs.day) {
      activeDay.classList.remove("active")
    
    } 
    setInputs({month: today.getMonth(), day: null, year: today.getFullYear()})
  }

  const handleDropDownChange = (selection:any) => {

    const selectionIndex = allMonths.indexOf(selection)

    const activeDay:any = document.querySelector(".active")
   

    if (activeDay && activeDay.innerHTML !== inputs.day) {
      activeDay.classList.remove("active")
    
    } 



    setInputs({...inputs, month: selectionIndex})
  }

  return (
  <div className="month-calendar-current-month-year-day-container">
    <ChevronLeft click={handleChevronLeft}/>
    <span onClick={(e)=>handleTodayDisplay(e)} className="month-calendar-current-day">
      Today
    </span>

    <DropDown items={allMonths} currentSelection={allMonths[inputs.month]} setSelection={handleDropDownChange}/>
     
    {/* <DropDown items={allMonths} currentSelection={allMonths[inputs.month]} stateKey={"month"} setInputs={setInputs} inputs={inputs}/> */}
   
    <div className="current-year-container">
      <input className="current-year" onClick={(e) => handleYearClear(e)} onChange={(e) => handleYearChange(e)} value={inputs.year} maxLength={4}></input>
    </div>
    <ChevronRight click={handleChevronRight} />
  </div>

  )
}

export default CalendarMonthYearController