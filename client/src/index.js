import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateForm from "./components/CreateForm";
import MainForm from "./components/MainForm";
import NotFound from "./components/NotFound";
import ThankYou from "./components/ThankYou";
import ViewPosts from "./components/ViewPosts";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={CreateForm} />
        <Route exact path="/v/:viewId" component={ViewPosts} />
        <Route exact path="/:userId/:formId" component={MainForm} />
        <Route exact path="/thankyou" component={ThankYou} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
