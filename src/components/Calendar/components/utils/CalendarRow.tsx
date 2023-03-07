import React from "react";

let count = 1;

//
const CalendarRow  = ({days, inputs, setInputs}:any) => {
  // console.log("days --->", days)
  const setDateActive = (e:any) => {
    setInputs({...inputs, day: Number(e.target.innerHTML)})
  }


  const handleSelectDay = (e:any) => {
    // "here we need to handle when a day is selected"



    // if (!Array.from(e.target.classList).includes("active")) {
    //   e.target.classList.add("active")
    // } else 
    // console.log(e.target.classList)
    // if (!e.    console.log(e.target.classList)target.className.includes("active")) {
    //   e.target.classList.push("active")
    // }


    const activeDay:any = document.querySelector(".active")



    if (activeDay) {

      activeDay.classList.remove("active")

    console.log(activeDay)
    
    } 

    e.target.classList.add("active")

    setInputs({...inputs, day: Number(e.target.innerHTML)}) 

  }        

  const currentMonthYear = inputs.month === new Date(Date.now()).getMonth() && inputs.year === new Date(Date.now()).getFullYear()

  return (
    <tr className = {`month-calendar-row-${count}`}>
      {days.map((day:any, i:number) => {
        // if (i === 6 && day === null) {
        //   console.log("hitting")
        //   return
        // }

        let td;

        if (day) {
          count ++

          // here we need to handle when the day is "today"

          if (currentMonthYear && day === new Date(Date.now()).getDate()) {
            //select the current day
            td = <td key={`day-${i}`} className="day todayActive" onClick={(e) => handleSelectDay(e)}>{day}</td>  
          } else {
            td = <td key={`day-${i}`} className="day" onClick={(e) => handleSelectDay(e)}>{day}</td>  
          }
          
          return td 
        } else {
          count ++
          return <td key={`day-${i}`}></td>
        }
      })}
    </tr>
  )
}

export default CalendarRow