
import { Route, Switch } from "react-router-dom";
import Items from "./pages/Items";
import NewItem from "./Components/NewItem";
export default function App() {
  return (
    <Switch>
      <div className="App">
        <Route path="/Items">
          <Items />
        </Route>
        <Route path="/ItemDetail/:itemId"></Route>
        <Route path="/newItem">
          <NewItem />
        </Route>
      </div>
    </Switch>
  );
}