import * as React from "react";
/*
given an array of items, current selection, and a set function, populates the dropdown correctly */

export const DropDown = ({items, currentSelection, setSelection}:any) => {
  return (
    <>
      <select className="drop-down-container" value={currentSelection} onChange={(e) => setSelection(e.target.value)}>
        {items.map((option:any, i:any) => {
           return(<option value={option} key={`option-${i}`}>{option}</option>)
        })}
      </select>
    </>
  )
}

// export const DropDown = ({items, currentSelection, stateKey, setInputs, inputs}:any) => {
 
//   const handleMonthSelect = (e:any) => {
//     console.log(stateKey)
//     setInputs({...inputs, [stateKey]: items.indexOf(e.target.value)})
//   }

//   return (
//     <>
//       <select className="drop-down-container" value={currentSelection} onChange={(e) => handleMonthSelect(e)}>
//         {items.map((option:any, i:any) => {
//            return(<option value={option} key={`option-${i}`}>{option}</option>)
//         })}
//       </select>
//     </>
//   )
// }

// export const DropDown = ({items, selectionType, inputs, setInputs}:any) => {
//   console.log(moveBy)

//   const handleMonthSelect = (e:any) => {
//     setInputs({...inputs, [selectionType]: items.indexOf(e.target.value)})
//   }

//   return (
//     <div className="drop-down-container">
//       <select onChange={(e) => handleMonthSelect(e)}>
//         <option>{items[inputs.month]}</option>
//         {items.map((option :any, i:any) => {
          
//           if (option === items[inputs[selectionType]]) {
//             return
//           }
//           return(<option key={`option-${i}`}>{option}</option>)

//         })}
//       </select>
//     </div>
//   )
// }



