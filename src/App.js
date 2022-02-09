import React from "react";
import Main from "./Main";
import { Description } from "./Components/Describtion/Describtion";

import { BrowserRouter, Router, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" exact component={<Main />}>
          <Route path="Describtion" element={<Description />} />
        </Route>
      </Router>
    </BrowserRouter>
  );
}

export default App;
