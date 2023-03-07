import React from "react";

const ChevronLeft = ({click}:any) =>
<svg onClick={(e) => click(e)}id="chevron-left"xmlns="http://www.w3.org/2000/svg" height="20" width="20">
  <title>previous month</title>
  <path d="m12 15-5-5 5-5 1.062 1.062L9.125 10l3.937 3.938Z"/>
</svg>
export default ChevronLeft