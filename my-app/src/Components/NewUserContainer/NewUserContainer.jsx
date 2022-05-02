import React, { useEffect, useState } from "react";

const NewUserContainer = () => {
  const [usuario, setUsuario] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      fetch(`https://jsonplaceholder.typicode.com/todos/${usuario}`)
        .then((res) => res.json())
        .then((data) => setData(data));
      console.log(data.title);
    } catch (error) {
      console.error(error)
    }  
  }, [usuario]);

  const userHandler = () => {
    setUsuario(usuario + 1);
  };

  return (
    <div>
      <button onClick={userHandler}>Traer nuevo usuario</button>
      {data.length != 0 ? <div><h4>Titulo: {data.title}</h4><h5>ID: {data.id}</h5><h5>Completo: {data.completed === true ? "Sí": "No"}</h5></div> : null}
    </div>
  );
};

export default NewUserContainer;
