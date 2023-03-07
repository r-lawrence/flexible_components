import React from "react";


const ChevronRight = ({click}:any) =>

<svg onClick={(e) => click(e)}id="chevron-right"xmlns="http://www.w3.org/2000/svg" height="20" width="20">
  <title>next month</title>
  <path d="m8 15-1.062-1.062L10.875 10 6.938 6.062 8 5l5 5Z"/>
</svg>

export default ChevronRight