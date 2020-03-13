import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteModal from "./DeleteModal.js";
import EditModal from "./EditModal.js";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  tableHead: { fontStyle: "bold", fontWeight: 500 }
});

function DataTable(props) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Company Name</TableCell>
            <TableCell align="right">Mail id&nbsp;</TableCell>
            <TableCell align="right">Product Name&nbsp;</TableCell>
            <TableCell align="right">Quantity&nbsp;</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.jsonData &&
            props.jsonData.length > 0 &&
            props.jsonData.map(data => (
              <TableRow key={data.id}>
                <TableCell component="th" scope="row">
                  {data.id}
                </TableCell>
                <TableCell align="right">{data.customer_name}</TableCell>
                <TableCell align="right">{data.customer_email}</TableCell>
                <TableCell align="right">{data.product}</TableCell>
                <TableCell align="right">{data.quantity}</TableCell>
                <TableCell align="right">
                  <DeleteModal
                    id={data.id}
                    deleteRecordHandler={props.deleteRecordHandler}
                  />
                  <EditModal
                    editRecordHandler={props.editRecordHandler}
                    selectedData={{
                      id: data.id,
                      name: data.customer_name,
                      mail: data.customer_email,
                      product: data.product,
                      quantity: data.quantity
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
