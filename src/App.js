import { useState } from "react";
import Accordion from "./components/Accordion/Accordion";
import Search from "./components/Search/Search";
import Dropdown from "./components/Dropdown/Dropdown";
import Translate from "./components/Translate/Translate";
import Route from "./components/Route";
import "semantic-ui-css/semantic.min.css";

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
  // const [openDropdown, setOpenDropdown] = useState(true);
  return (
    <div>
      <Route path="/">
        <Accordion datas={datas} />
      </Route>
      <Route path="/wikisearch">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
          label="color"
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
