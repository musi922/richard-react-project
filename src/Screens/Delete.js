import React from "react";
import axios from "axios";


export const Delete = (id) => {
    const url=`https://servapi-2191.onrender.com/api/estates/delete/${id}`

    axios
      .delete(url)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => console.error(error));

      console.log(url);
};