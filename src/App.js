import React, { Fragment } from "react";
import Card from "./components/UI/Card";
import Quote from "./components/Quote";

function App() {
  return (
    <Fragment>
      <Card>
        <Quote />
      </Card>
      <footer>
        <a href="https://taplink.cc/amalkkaa" className="">by Amal Yakubov</a>
      </footer>
    </Fragment>
  );
}

export default App;
