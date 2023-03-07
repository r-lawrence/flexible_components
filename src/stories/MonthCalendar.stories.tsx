import React from 'react';
import { MonthCalendar } from '../components/Calendar';


const FakeMainComponent = () => {

  let date = new Date(Date.now())

  const [dateState, setDateState] = React.useState({
    year: date.getFullYear(),
    month: date.getMonth(),
    day: null
  })
  return (<MonthCalendar defaultS={true} inputs={dateState} setInputs={setDateState}/>)
}

export default {
  component: MonthCalendar,
  title: 'flexible-components/MonthCalendar',
};


const template = (args:any) => <FakeMainComponent/>
{/* <Calendar dateState={dateState} setDateState={setDateState}/> */}
export const Default = template.bind({})