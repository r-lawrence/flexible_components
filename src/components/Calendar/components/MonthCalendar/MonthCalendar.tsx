import * as React from "react";

import DayMonthYearController from '../utils/DayMonthYearController'
import MonthView from "../utils/MonthView";

const LazyStyles:any = React.lazy(() => import("./Theme"))

export const MonthCalendar = ({defaultS, inputs, setInputs}:any) => {
  const today = new Date(Date.now())
  return (
    <>
      <React.Suspense fallback={<></>}>
         {defaultS ? 
           <LazyStyles></LazyStyles> 
         :
           <></>
        }
      </React.Suspense>
      <div role="MonthCalendar" className="month-calendar-container"> 
        <DayMonthYearController today={today} inputs={inputs} setInputs={setInputs}/>
        <MonthView inputs={inputs} setInputs={setInputs}/>
      </div>
    </>
  )
}
