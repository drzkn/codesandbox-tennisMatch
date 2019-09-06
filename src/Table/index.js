import React from "react";
import propTypes from "prop-types";

const Table = ({ list }) => {
  console.log(list);
  return list.length > 0 ? list.map(element => <div>{element}</div>) : "";
};

Table.propTypes = {
  list: propTypes.array
};

export default Table;
