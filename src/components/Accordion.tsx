import { useState } from "react"
import AccordionItem from "./AccordionItem"
import { AccordionProps } from "@/types/Types"
import '@/styles/accordion.scss'

const Accordion = ({ data, type } : AccordionProps) => {

  const [currentIdx, setCurrentIdx] = useState(-1);
  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => currentValue !== idx ? idx : -1)
  }

  return (
    <div className="accordion">
      {
        data.map((item, idx) => (
          <AccordionItem 
            data={item}
            type={type}
            key={idx}
            isOpen={idx === currentIdx } 
            btnOnClick={() => btnOnClick(idx)}
          />
        ))
      }
    </div>
  )
}
export default Accordion