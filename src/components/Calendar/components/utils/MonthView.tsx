import * as React from "react"
import CalendarRow from "../utils/CalendarRow"


const MonthView = ({inputs, setInputs}:any) => {


  const generateWeek = (weekNumber: any) => {
    const amountOfDaysInMonth = 32 - new Date(inputs.year, inputs.month, 32).getDate()
    const totalDaysInAMonthArr:any = Array.from({length: 32}, (_, i) => i + 1)
    const firstDayIndex = new Date(inputs.year, inputs.month).getDay();
  
    let final:any = [];

    if (7 - firstDayIndex === 0) {
      final = totalDaysInAMonthArr
    } else {
      let diff = 7 - firstDayIndex 
      let amount = 7 - diff

      final = Array.from({length: amount}, (_:any, i:any) => null).concat(totalDaysInAMonthArr.splice(0, amountOfDaysInMonth))
     
    }

    if (final.length < 42) {
      final = final.concat(Array.from({length: 42 - final.length}, (_:any, i:any) => null))
    }

    switch(weekNumber) {
      case 1:
        return final.slice(0, 7)
      case 2:
        return final.slice(7, 14)
      case 3:
        return final.slice(14, 21)
      case 4:
        return final.slice(21, 28) 
      case 5:
        return final.slice(28, 35)
      case 6:
        return final.slice(35, final.length - 1)        
    }
    return final
  }
    const week6 = generateWeek(6)
    return (
        <table className="month-calendar-date-table">
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody className="month-calendar-table-body">
            <CalendarRow inputs={inputs} setInputs={setInputs} days={generateWeek(1)}/>
            <CalendarRow inputs={inputs} setInputs={setInputs} days={generateWeek(2)}/>
            <CalendarRow inputs={inputs} setInputs={setInputs} days={generateWeek(3)}/>
            <CalendarRow inputs={inputs} setInputs={setInputs} days={generateWeek(4)}/>
            <CalendarRow inputs={inputs} setInputs={setInputs} days={generateWeek(5)}/>
            {week6[0] !== null ? <CalendarRow inputs={inputs} setInputs={setInputs} days={week6}/>:<></>}
            
          </tbody>
        </table> 
      )


}

export default MonthView