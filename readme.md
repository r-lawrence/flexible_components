# Flexible-Components
A react specific resuable component library, built to make life easier when developing react applications.
#

## Usage
> each component is similiar to a functional component in which it can receive properties.  In context of this libary, they are called attributes.  Each component has a specific set of attributes that can be passed to it.


```
Import * as React
Import {[specificComponent]} from "r-lawrence/flexible_components"

const SampleComponent = () => {
  const [inputs, setInputs] = React.useState({})
  return <[specificComponent] inputs={inputs} setInputs={setInputs}/>
  
}
```

## Availible Components 

- MonthCalendar
- DropDown

| Component   | Input Values | attributes |
| ----------- | -------------- | -----------|
| MonthCalendar | day: string <br> year: string <br> month: string | inputs: state object <br> setInputs: method |
| DropDown | [value]: string <br> | items: array of strings <br> selectionType: string <br> inputs: object <br> setInputs: method |











