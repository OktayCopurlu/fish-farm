import { useState } from "react";

export default function Thead(props) {
  
  const [data] = useState(props.list);

  let newArray = null;
  data.map((eleman) => {
    return (newArray = Object.keys(eleman));
  });

  return (
      <thead>
        <tr>
          {newArray.map((key, i) => {
            return <th key={i}>{key}</th>;
          })}
        </tr>
      </thead>
  );
}
