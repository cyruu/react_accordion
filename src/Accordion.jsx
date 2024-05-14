import React, { forwardRef } from "react";

const Accordion = forwardRef(({ note }, accordionRef) => {
  const { title, content } = note;
  const handleClick = () => {
    const content = accordionRef.current.querySelector(".content");
    const icon = accordionRef.current.querySelector("i");
    content.classList.toggle("show");
    icon.classList.toggle("rotate");
  };
  return (
    <div className="accordion" ref={accordionRef}>
      <div className="title" onClick={handleClick}>
        <p>{title}</p>
        <i className="ri-arrow-down-s-line"></i>
      </div>
      <div className="content">{content}</div>
    </div>
  );
});

export default Accordion;
