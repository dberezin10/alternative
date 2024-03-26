import React, { useEffect, useRef, useState } from "react";

// Какие компоненты будут ререндериться, будет ли ререндериться Child и почему, как  исправить

const Parent = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form style={{ margin: "20px", padding: "20px", border: "2px solid blue" }}>
      input value is : {value}
      <RenderCount />
      <Child onChange={handleChange} />
    </form>
  );
};

export default Parent;

const Child = ({ onChange }) => {
  console.log("Child");
  return (
    <div style={{ padding: "20px", margin: "20px", border: "2px solid red" }}>
      <input type="text" name="value" onChange={onChange} />
      <RenderCount />
    </div>
  );
};

function RenderCount() {
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current += 1;
  });

  return <div>render count: {renderCount.current}</div>;
}
