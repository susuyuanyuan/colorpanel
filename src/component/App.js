import React, { useState } from "react";
import { TwitterPicker } from "react-color";
import Modal from "react-modal";
import { Grid, Button, Box } from "@material-ui/core";
import "./Style.css";
import {
  list,
  modalStyles,
  questionColor,
  questionComponent,
  questionChangeName,
} from "./Files.js";

function App() {
  const [itemList, setItemList] = useState(list);
  const [currentGrid, setCurrentGrid] = useState(itemList[0]);
  const [displayModal, setDisplayModal] = useState(false);

  const handleCurrentGrid = (e) => {
    const index = itemList.findIndex(
      (item) => item.gridName === e.target.value
    );
    setCurrentGrid(itemList[index]);
  };

  const handleChange = (target, type) => {
    let listCopy = [...itemList];
    if (currentGrid.id > -1) {
      type === "gridName"
        ? (listCopy[currentGrid.id].gridName = target)
        : (listCopy[currentGrid.id].gridColor = target.hex);
      setItemList(listCopy);
    }
  };

  return (
    <Box m={10}>
      <Grid container direction="row" justify="center" spacing={3}>
        <Grid item>{questionComponent}</Grid>
        <Grid item>
          <select
            value={currentGrid.gridName}
            onChange={(e) => handleCurrentGrid(e)}
          >
            {itemList.map((item) => {
              return <option value={item.gridName}>{item.gridName}</option>;
            })}
          </select>
        </Grid>
        <Grid item>{questionColor}</Grid>
        <Grid item>
          <Button color="primary" onClick={() => setDisplayModal(true)}>
            <i className="fas fa-palette"></i>
          </Button>
        </Grid>
        <Modal
          isOpen={displayModal}
          onRequestClose={!displayModal}
          style={modalStyles}
        >
          <TwitterPicker
            color={currentGrid.gridColor}
            onChange={(color) => handleChange(color, "girdColor")}
          />
          <button onClick={() => setDisplayModal(false)}>Close</button>
        </Modal>
      </Grid>
      <hr />
      <Grid container direction="row" justify="center" spacing={3}>
        {itemList.map((item) => {
          return (
            <Grid key={item.id} item xs={4}>
              <div className="grid" style={{ backgroundColor: item.gridColor }}>
                {item.id === currentGrid.id ? (
                  <div>
                    <p>{questionChangeName}</p>
                    <input
                      type="text"
                      value={item.gridName}
                      onChange={(e) => handleChange(e.target.value, "gridName")}
                    />
                  </div>
                ) : (
                  <p>{item.gridName}</p>
                )}
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default App;
