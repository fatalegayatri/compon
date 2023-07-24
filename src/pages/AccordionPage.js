import Accordion from "../components/Accordion";
function AccordionPage() {
  const data = [
    {
      id: "1efjwk",
      title: "What is React?",
      content: "React is a front end javascript framework",
    },
    {
      id: "1efjwk1",
      title: "What is React?",
      content: "React is a front end javascript framework",
    },
    {
      id: "1efjwk3",
      title: "What is css?",
      content:
        "React is a front end javascript framework lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "1efjwk4",
      title: "What is javascript?",
      content: "React is a front end javascript framework",
    },
  ];

  return (
    <div>
      <Accordion data={data} />
    </div>
  );
}

export default AccordionPage;
