import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Question = (prop) => {
  const { allQuestionWithAnswer, allQuestionWithNoAnswer } = prop;

  if (allQuestionWithAnswer)
  return (
    <div className="accordion-style-five md-mt-60">
      <div className="faq-wrraper">
        <Accordion allowZeroExpanded>
          {allQuestionWithAnswer && allQuestionWithAnswer.map((item, i) => (
            <AccordionItem className="card" key={i} uuid={item.expand}>
              <AccordionItemHeading className="card-header">
                <AccordionItemButton>
                  <h5 className="mb-0">
                    <button className="btn btn-link">{i+1}. {item.question}</button>{" "}
                  </h5>
                </AccordionItemButton>
              </AccordionItemHeading>
              {/* Accordion Heading */}
              <AccordionItemPanel className="card-body fadeInUp">
                <p>{item.answer}</p>
                <p>{item.source}</p>
              </AccordionItemPanel>
              {/* Accordion Body Content */}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );

  if (allQuestionWithNoAnswer)
  return (
    <div className="accordion-style-five md-mt-60">
      <div className="faq-wrraper">
        <Accordion allowZeroExpanded>
          {allQuestionWithNoAnswer && allQuestionWithNoAnswer.map((item, i) => (
            <AccordionItem className="card" key={i}>
              <AccordionItemHeading className="card-header">
                <AccordionItemButton>
                  <h5 className="custom mb-0">
                    <button>{i+1}. {item.question} </button>{" "}
                  </h5>
                </AccordionItemButton>
              </AccordionItemHeading>
              {/* Accordion Heading */}
              <AccordionItemPanel>
              </AccordionItemPanel>
              {/* Accordion Body Content */}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Question;
