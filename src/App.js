import Accordion from "./components/Accordion/Accordion";
import Search from "./components/Search/Search";
import Dropdown from "./components/Dropdown/Dropdown";
import "semantic-ui-css/semantic.min.css";
import { useState } from "react";

const datas = [
  {
    title: "What is React?",
    content: "React is a fornt-end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is the best",
  },
  {
    title: "How do you use React?",
    content: "Use React by creating components",
  },
];
const options = [
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
];
export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {/* <Accordion datas={datas} /> */}
      {/* <Search /> */}
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};
