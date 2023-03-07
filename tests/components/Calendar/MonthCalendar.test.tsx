import React from "react"
import {MonthCalendar} from "../../../src/components/index"
import {cleanup, findByText, render, screen, act, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

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

describe("MonthCalendar", () => {


  beforeEach(() => {
    const themeMock = () => {
      return <>styles have been added</>
    }

    jest.mock("../../../src/components/Calendar/components/MonthCalendar/Theme.tsx", () => {
      return themeMock
      
    })
  })

  afterEach(() => {
    cleanup()
    jest.clearAllMocks()


  })

  test("provided inputs/setInputs (via React.Use state) and defualtStyles of false, should render calendar without default styles", async () => {
    const setInputsMock = jest.fn()
    const date = new Date()
    const user = userEvent.setup()

    const mockInputs = {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
    }

    await act( async () => {
      render(<MonthCalendar defaultS={false} inputs={mockInputs} setInputs={setInputsMock}/>)
    })

    expect(() => screen.getByText("styles have been added")).toThrow()
    expect(screen.getByRole("MonthCalendar")).toBeInTheDocument()

  })

  test("provided inputs/setInputs (via React.Use state) and defualtStyles of true, should render calendar with styles", async () => {
    // const component = renderer(<MonthCalendar></MonthCalendar>)
    const setInputsMock = jest.fn()
    const date = new Date()
    const user = userEvent.setup()

    const mockInputs = {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
    }


    await act( async () => {
      render(<MonthCalendar defaultS={true} inputs={mockInputs} setInputs={setInputsMock}/>)
    })

    expect(screen.getByText("styles have been added")).toBeInTheDocument()
    expect(screen.getByRole("MonthCalendar")).toBeInTheDocument()

  })
})