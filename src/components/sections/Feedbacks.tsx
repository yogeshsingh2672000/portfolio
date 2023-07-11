import React from 'react'

function Feedbacks() {
  return (
    <div id="feedback" className="bg-[#778DA9] py-[20px] md:py-[80px] lg:py-[100px] min-h-[600px] grid grid-cols-1 md:grid-cols-2 gap-[20px] px-[20px] md:px-[40px] lg:px-[100px]">
      <div className="bg-[#67809F] grid gap-[40px] place-items-center rounded-[38px]">
        <p>demo image</p>
        <p>feedback</p>
        <p>company name</p>
      </div>
      <div className="bg-[#67809F] grid gap-[40px] place-items-center rounded-[38px]">
        <p>demo image</p>
        <p>feedback</p>
        <p>company name</p>
      </div>
    </div>
  )
}

export default Feedbacks