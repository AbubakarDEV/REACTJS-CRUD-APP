import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import View from "./components/STUDENT/View";
import Edit from "./components/STUDENT/Edit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/view/:id" component={View} />
          <Route exact path="/edit/:id" component={Edit} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
