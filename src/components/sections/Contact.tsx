import { Tooltip, Button } from "@material-tailwind/react";

function Contact() {
  return (
    <div id="contact" className="px-[20px] md:px-[50px] lg:px-[100px] py-[20px] md:py-[80px] lg:py-[100px]">
        <div className="bg-[#778DA9] dev-toolkit-heading text-[32px] md:text-[48px]">Inspired by Yogesh&rsquo;s prowess&quest; Get in touch and witness magic unfold&excl;</div>
        <div className="flex gap-[20px] pt-[40px]">
            <Tooltip content="yogeshsingh2672000@gmail.com">
                <a href="mailto:yogeshsingh2672000@gmail.com"><Button>Gmail</Button></a>
            </Tooltip>
            <Tooltip content="@yogesh-krr">
                <a href="https://www.linkedin.com/in/yogesh-krr/" target="_blank"><Button>LinkedIn</Button></a>
            </Tooltip>
            <Tooltip content="@YogeshKrr">
                <a href="https://twitter.com/YogeshKrr" target="_blank"><Button>Twitter</Button></a>
            </Tooltip>
        </div>
    </div>
  )
}

export default Contact