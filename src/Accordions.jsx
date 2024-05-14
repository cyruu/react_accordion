import React, { createRef, useRef } from "react";
import Accordion from "./Accordion";
const Accordions = ({ notes }) => {
  const accordionRefs = useRef({});
  return (
    <>
      <div className="accordionContainer">
        {notes.map((note) => {
          return (
            <Accordion
              key={note.id}
              note={note}
              ref={
                accordionRefs.current[note.id]
                  ? accordionRefs.current[note.id]
                  : (accordionRefs.current[note.id] = createRef())
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default Accordions;
