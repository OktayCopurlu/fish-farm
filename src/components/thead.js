import { useState } from "react";

export default function Thead(props) {
  const [data] = useState(props.list);
  

  //Objenin başlıkları Object.keys() kullanılarak array içine alındı.
  let objectKeys = null;
  data.map((eleman) => {
    return (objectKeys = Object.keys(eleman));
  });

  return (
      <thead>
        <tr>
          {objectKeys.map((keys, i) => {
            return <th key={i}>{keys}</th>;
          })}
        </tr>
      </thead>
  );
}
