import { ResumeType } from "@/types/Types"
import '@/styles/accordion-item.scss';
import '@/styles/resume.scss';
import { useEffect, useRef, useState } from "react";

const AccordionItem = ({
    data, type, key, isOpen, btnOnClick
  } : { 
    data: ResumeType, type: string, key: number, isOpen: boolean, btnOnClick: () => void
  }) => {

  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current as HTMLDivElement;

      setHeight(contentEl?.scrollHeight);
     } else {
      setHeight(0)
     }

  }, [isOpen])

  return (
    data.type === type 
      ? (
          <div key={key} className={`accordion-item ${isOpen ? 'active' : ''} `}>

            <p className='college'><span>{data.year}</span> {data.companyName}</p>
            <div className="accordion-item-title">
              <button className="accordion-item-btn" onClick={btnOnClick}>
                <h4 className='program'>{data.title}</h4></button>
            </div>
            <ul className='desc'>
              {
                data.desc.map((itemList, idx) => (
                  <div className="accordion-item-container" style={{ height }}>
                    <li key={idx} className="accordion-item-content">{itemList}</li>
                  </div>
                ))
              }
            </ul>
          </div>
        )
      : <></>
  )
}
export default AccordionItem