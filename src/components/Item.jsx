import React from 'react';

const style = {
    height: "90px",
    width: "90px",
    display: "grid",
    backgroundColor: "blue",
    fontSize: "20px",
    color: "white",
    fontWeight: "bold",
    placeItems: "center"
}

export const Item = ({value, index, onClick}) => {
  return (
    <div style={style} onClick={() => onClick(index)} >{value}</div>
  )
}
