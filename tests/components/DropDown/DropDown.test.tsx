import React from "react"
import { DropDown } from "../../../src/components"

import {cleanup, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe("DropDown", () => {
  let mockItems:Array<any>, mockCurrentSelection:any, mockSetSelection:any 
  const user = userEvent.setup()
  beforeEach(() => {
    mockItems = ["foo", "bar", "baz"]
    mockCurrentSelection = "baz"
    mockSetSelection = jest.fn()
  })

  afterEach(() => {
    cleanup()
  })

  test("given an array of items, a current selection, and a setSelection function, renders drop down appriopriately", () => {

    const {container} = render(<DropDown items={mockItems} currentSelection={mockCurrentSelection} setSelection={mockSetSelection}/>)
    const options = container.querySelectorAll("option")
    const selectEle:any= container.querySelector("select")

    Array.from(options).forEach((option:any) => {
      expect(mockItems.includes(option))
    })

    expect(selectEle.value).toBe("baz")
  })

  test("when a new selection is made, calls setSelection with new selection", async() => {
    const {container}:any = render(<DropDown items={mockItems} currentSelection={mockCurrentSelection} setSelection={mockSetSelection}/>)
    const option = screen.getAllByRole("option", {name: "foo"})
    const selectEle:any = container.querySelector("select")
    const newSelection = "foo"

    mockSetSelection.mockImplementationOnce(() => newSelection)
    await user.selectOptions(selectEle, option)

    expect(mockSetSelection).toHaveBeenCalledWith(newSelection)
  })
})
