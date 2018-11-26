import React from "react";

const Pizza = (props) => {
  const { rapper } = props
  return(
    <tr>
      <td>{rapper.name}</td>
      <td>{rapper.active? "Active": "Inactive"}</td>
      <td>{rapper.birthday.substring(0,10)}</td>
      <td>{rapper.songs.map(song => song + ", \n")}</td>
    </tr>
  )
};

export default Pizza;
