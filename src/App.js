import Accordion from "./components/Accordion/Accordion";
import Search from "./components/Search/Search";
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

export default () => {
  return (
    <div>
      {/* <Accordion datas={datas} /> */}
      <Search />
    </div>
  );
};
