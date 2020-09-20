import React, { useRef, useState } from "react";
import "./style.css";
import styled from "styled-components";

const S = {};

S.Container_DIV = styled.div`
  display: flex;
  height: 150px;
`;

S.FlexItem1 = styled.div`
  flex: 0 0 200px;
  background-color: lightblue;
`;

S.FlexItem2 = styled.div`
  flex: 1 1 80%;
  background-color: lightcoral;
`;

S.FlexItem3 = styled.div`
  flex: 0 0 160px;
  background-color: lightgreen;
`;

export default function App() {
 
     const itemRef = useRef(null);
  const [boolean, setBoolean] = useState(false);
  return (
    <React.Fragment>
      <S.Container_DIV>
        <S.FlexItem1>Item 1</S.FlexItem1>
        <S.FlexItem2 ref={itemRef}>Item 2</S.FlexItem2>
        <S.FlexItem3>Item 3</S.FlexItem3>
      </S.Container_DIV>
      <div>
        <br />
        Item2 width is:{" "}
        {itemRef.current && window.getComputedStyle(itemRef.current).width}
      </div>
      <div>
        <button onClick={() => setBoolean(prevState => !prevState)}>
          Force Update
        </button>
      </div>
    </React.Fragment>
  );
}
