import { useState } from "react";
import Page from "./Page";
import { MovieContext } from "./context";

export default function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Page />
      </MovieContext.Provider>
    </>
  );
}
