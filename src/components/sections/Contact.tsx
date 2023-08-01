import { Tooltip, Button } from "@material-tailwind/react";
import { useState } from "react";

function Contact() {
    const [copyState, setCopyState] = useState("yogeshkr")

    function copyToClipboard(text: string) {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text);
          setCopyState("Copied")
          setTimeout(()=>{
            setCopyState("yogeshkr")
          }, 1500)
        }
      }

  return (
    <div id="contact" className="px-[20px] md:px-[50px] lg:px-[100px] py-[20px] md:py-[80px] lg:py-[100px]">
        <div className="bg-[#778DA9] dev-toolkit-heading text-[32px] md:text-[48px]">Inspired by me? Get in touch and witness magic unfold!</div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-[30px] md:gap-0 pt-[40px]">
            <Tooltip content="yogeshsingh2672000@gmail.com" className="rounded-full px-[10px]">
                <a href="mailto:yogeshsingh2672000@gmail.com" className="flex justify-center items-center"><Button><img src="/icons/gmail.png" className="h-12 w-12 transition-all ease-out delay-150 hover:scale-125" loading="lazy" /></Button></a>
            </Tooltip>
            <Tooltip content="yogesh-krr" className="rounded-full px-[10px]">
                <a href="https://www.linkedin.com/in/yogesh-krr/" target="_blank" className="flex justify-center items-center"><Button><img src="/icons/linkedin.png" className="h-12 w-12 transition-all ease-out delay-150 hover:scale-125" loading="lazy" /></Button></a>
            </Tooltip>
            <Tooltip content="@YogeshKrr" className="rounded-full px-[10px]">
                <a href="https://twitter.com/YogeshKrr" target="_blank" className="flex justify-center items-center"><Button><img src="/icons/twitter.png" className="h-8 w-12 transition-all ease-out delay-150 hover:scale-125" loading="lazy" /></Button></a>
            </Tooltip>
            <Tooltip content="yogeshsingh2672000" className="rounded-full px-[10px]">
                <a href="https://github.com/yogeshsingh2672000" target="_blank" className="flex justify-center items-center"><Button><img src="/icons/github.png" className="h-12 w-12 transition-all ease-out delay-150 hover:scale-125" loading="lazy" /></Button></a>
            </Tooltip>
            <Tooltip content={copyState} className="rounded-full px-[10px]">
                <Button onClick={()=>{copyToClipboard("yogeshkr")}} className="flex justify-center items-center"><img src="/icons/discord.png" className="h-12 w-12 transition-all ease-out delay-150 hover:scale-125" loading="lazy" /></Button>
            </Tooltip>
            <Tooltip content="Resume" className="rounded-full px-[10px]">
                <a href="/resume/Resume.pdf" className="flex justify-center items-center"><Button><img src="/icons/download.png" className="h-12 w-12 transition-all ease-out delay-150 hover:scale-125" loading="lazy" /></Button></a>
            </Tooltip>
        </div>
    </div>
  )
}

export default Contact