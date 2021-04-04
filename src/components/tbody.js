import { useState } from "react";

export default function Tbody(props) {
  const [data] = useState(props.list);

  let newArray = null;
  data.map((eleman) => {
    return (newArray = Object.keys(eleman));
  });

  return data.map((eleman, i) => {
    return (
      <tbody>
        <tr key={i}>
          {newArray.map((key, i) => {
            return <td key={i}>{eleman[newArray[i]].toString()}</td>;
          })}
        </tr>
      </tbody>
    );
  });
}
