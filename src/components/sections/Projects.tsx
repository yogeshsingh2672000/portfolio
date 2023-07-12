import { useState } from 'react'
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

interface IconProps {
    id: number,
    open: number
}

function Icon({ id, open }:IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    );
  }

function Projects() {
    const [open, setOpen] = useState(0);
 
    const handleOpen = (value:number) => {
      setOpen(open === value ? 0 : value);
    };

    const customAnimation = {
        mount: { scale: 1, opacity: 1 },
        unmount: { scale: 0.9, opacity: 0.1 },
      };

  return (
    <div id='projects' className='bg-[#778DA9] grid grid-cols-1 w-full gap-[10px] md:gap-[20px] px-[20px] md:px-[40px] lg:px-[100px] py-[20px] md:py-[80px] lg:py-[100px]'>
        <div className="dev-toolkit-heading pb-[20px] md:pb-[40px] text-[32px] md:text-[48px]">
            Projects
        </div>
        <Accordion animate={customAnimation} className="bg-[#67809F] px-[20px] rounded-[20px]" open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(1)} className='py-[20px]'>
                Inventory Management System
            </AccordionHeader>
            <AccordionBody className={`${open !== 1 ? "hidden" : "pb-[20px]"}`}>
                <ul>
                    <li>➔ It provides all the necessary information about the Product</li>
                    <li>➔ Used Hashing and Salt for Password</li>
                    <li>➔ Used express-validator and JWT for Authentication</li>
                    <li>➔ Created CRUD APIs in Node, Express</li>
                    <li>➔ Used React Hooks, Context API</li>
                    <li>➔ Tech Stack: React , Node , Express , MongoDB , Rest API , Git</li>
                </ul>
            </AccordionBody>
        </Accordion>
        {/* <Accordion animate={customAnimation} className="bg-[#67809F] px-[20px] rounded-[20px]" open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(2)} className='py-[20px]'>
                Inventory Management System
            </AccordionHeader>
            <AccordionBody className={`${open !== 2 ? "hidden" : "pb-[20px]"}`}>
                <ul>
                    <li>➔ It provides all the necessary information about the Product</li>
                    <li>➔ Used Hashing and Salt for Password</li>
                    <li>➔ Used express-validator and JWT for Authentication</li>
                    <li>➔ Created CRUD APIs in Node, Express</li>
                    <li>➔ Used React Hooks, Context API</li>
                    <li>➔ Tech Stack: React , Node , Express , MongoDB , Rest API , Git</li>
                </ul>
            </AccordionBody>
        </Accordion>
        <Accordion animate={customAnimation} className="bg-[#67809F] px-[20px] rounded-[20px]" open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(3)} className='py-[20px]'>
                Inventory Management System
            </AccordionHeader>
            <AccordionBody className={`${open !== 3 ? "hidden" : "pb-[20px]"}`}>
                <ul>
                    <li>➔ It provides all the necessary information about the Product</li>
                    <li>➔ Used Hashing and Salt for Password</li>
                    <li>➔ Used express-validator and JWT for Authentication</li>
                    <li>➔ Created CRUD APIs in Node, Express</li>
                    <li>➔ Used React Hooks, Context API</li>
                    <li>➔ Tech Stack: React , Node , Express , MongoDB , Rest API , Git</li>
                </ul>
            </AccordionBody>
        </Accordion> */}
  </div>
  )
}

export default Projects