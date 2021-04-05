import { useState } from "react";

export default function Tbody(props) {
  const [data] = useState(props.list);

  //Objenin başlıkları Object.keys() kullanılarak array içine alındı.
  let objectKeys = null; 
  data.map((eleman) => {
    return (objectKeys = Object.keys(eleman));
  });

  return data.map((eleman, i) => {
    return (
      <tbody>
        <tr key={i}>
          {objectKeys.map((key, i) => {
            return <td key={i}>{eleman[objectKeys[i]].toString()}</td>;
            //Data içerisinde new Date() objesi mevcut bu yüzden .toString kullanıldı
          })}
        </tr>
      </tbody>
    );
  });
}
