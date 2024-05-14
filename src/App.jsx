import React, { useState, useId } from "react";
import "./App.css";
import Accordions from "./Accordions";
const App = () => {
  const [notes, setNotes] = useState([
    {
      id: useId(),
      title: "What is React and why is it used?",
      content:
        "React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.",
    },
    {
      id: useId(),
      title: "Is MERN a full-stack or stack?",
      content:
        "MERN stack is more scalable than full-stack development. Full stack development is suitable for large-scale apps, while MERN is better for niche projects like single-page applications or mobile apps.",
    },
    {
      id: useId(),
      title: "How exactly does coding work?",
      content:
        "Coding creates a set of instructions for computers to follow. These instructions determine what actions a computer can and cannot take. Coding allows programmers to build programs, such as websites and apps.",
    },
    {
      id: useId(),
      title: "What is Django?",
      content:
        "What is Django? Django is a high-level Python web framework that enables rapid development of secure and maintainable websites. Built by experienced developers, Django takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel.",
    },
  ]);
  return (
    <>
      <Accordions notes={notes} />
    </>
  );
};

export default App;
