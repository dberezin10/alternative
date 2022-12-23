import React, { useEffect, useState } from "react";

const App = (): JSX.Element => {
  const [item, setItem] = useState(false);

  useEffect(() => {
    setItem(!item);
  }, [item]);

  return <div></div>;
};

export default App;
