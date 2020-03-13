import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import DataTable from "./DataTable.js";
import AddModal from "./AddModal.js";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 20
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
          fontWeight="fontWeightBold"
        >
          Orders
        </Typography>
        <AddModal
          addRecordHandler={props.addRecordHandler}
          jsonData={props.jsonData}
        ></AddModal>
        <DataTable
          jsonData={props.jsonData}
          deleteRecordHandler={props.deleteRecordHandler}
          editRecordHandler={props.editRecordHandler}
          selectedData={props.selectedData}
        ></DataTable>
      </CardContent>
    </Card>
  );
}
