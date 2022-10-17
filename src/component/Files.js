const modalStyles = {
  content: {
    top: "20%",
    left: "65%",
    right: "auto",
    bottom: "auto",
    marginRight: "-30%",
    transform: "translate(-50%, -50%)",
  },
};

const list = [
  { gridName: "apple", gridColor: "#FF6900", id: 0 },
  { gridName: "banana", gridColor: "#FCB900", id: 1 },
  { gridName: "cherry", gridColor: "#7BDCB5", id: 2 },
  { gridName: "dates", gridColor: "#00D084", id: 3 },
  { gridName: "kiwi", gridColor: "#8ED1FC", id: 4 },
  { gridName: "fig", gridColor: "#0693E3", id: 5 },
];

const questionComponent = "Choose a component";
const questionColor = "Choose a color";
const questionChangeName = "Change Name: ";
export {
  modalStyles,
  list,
  questionColor,
  questionComponent,
  questionChangeName,
};
