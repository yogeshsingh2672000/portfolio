import React from 'react'

function Experience() {
  return (
    <div id="experience" className="bg-[#778DA9] px-[20px] md:px-[50px] lg:px-[100px] py-[40px] md:py-[50px] lg:py-[100px]">
            <div className="dev-toolkit-heading pb-[40px] md:pb-[60px] text-[32px] md:text-[48px]">
                Experience &#40;~1.5 years&#41;
            </div>
            <div className='flex flex-col md:flex-row overflow-auto gap-[10px] md:gap-[20px] justify-center md:justify-start items-center hidescrollbar'>
                <div className="bg-[#67809F] px-[10px] flex flex-col justify-between py-[20px] items-center min-w-[300px] md:min-w-[350px] max-w-[500px] w-full h-[500px] rounded-[20px]">
                    <div className="text-center">
                        <div className="font-bold"><span className="text-lg">SDE</span> @ Conciselabs</div>
                        <div className="text-white">Oct 2022 - Present</div>
                    </div>
                    <div className="text-center">Developed a complete project from scratch, build a <strong>Adaptive</strong> UI with a modern interface, resulting in <strong>increased</strong> user satisfaction and retention. Build and maintained a <strong>Rest</strong> <strong>API</strong> using Node.js and Express.js</div>
                    <a href="https://conciselabs.io/" target="_blank"><img className="w-8 h-8" src="/icons/exitlink.png" alt="exitlink" /></a>
                </div>
                <div className="bg-[#67809F] px-[10px] flex flex-col justify-between py-[20px] items-center min-w-[300px] md:min-w-[350px] max-w-[500px] w-full h-[500px] rounded-[20px]">
                    <div className="text-center">
                        <div className="font-bold"><span className="text-lg">SDE</span> - Intern @ Letsdressup Pvt. Ltd.</div>
                        <div className="text-white">Jan 2022 - June 2022</div>
                    </div>
                    <div className="text-center">Designed and developed complete UI for Inventory Management System using Laravel, Bootstrap, jQuery, PHP, with a customisable <strong>workflow</strong> for all the stakeholders, Inventory Manager, Designers, Workers, etc. Implemented highly scalable architecture using EC2 instances and <strong>MySQL</strong> to handle large amounts of data with low <strong>latency</strong></div>
                    <a href="https://letsdressup.in/" target="_blank"><img className="w-8 h-8" src="/icons/exitlink.png" alt="exitlink" /></a>
                </div>
                <div className="bg-[#67809F] px-[10px] flex flex-col justify-between py-[20px] items-center min-w-[300px] md:min-w-[350px] max-w-[500px] w-full h-[500px] rounded-[20px]">
                    <div className="text-center">
                        <div className="font-bold"><span className="text-lg">Python Developer Intern</span> - Arity Technologies</div>
                        <div className="text-white">Nov 2021 - Dec 2021</div>
                    </div>
                    <div className="text-center">Developed <strong>Python</strong> script to populate the data using the Excel sheets with highly efficient way, considering all the edge cases and also implemented <strong>bulk import</strong> feature using <strong>Python</strong> and <strong>Pandas</strong></div>
                    <img className="w-8 h-8 cursor-not-allowed opacity-[0.3]" src="/icons/exitlink.png" alt="exitlink" />
                </div>
            </div>
        </div>
  )
}

export default Experience