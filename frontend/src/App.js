import React from 'react';
import MyNavbar from "./MyNavbar";
import Home from "./pages/home-page/Home"
import Todo from "./pages/todo-page/Todo"
import MyCalendar from "./pages/calendar-page/Calendar"
import DateInfo from "./pages/calendar-page/DateInfo"
import {Switch, Route} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    let USERNAME = "Jimmy"

  return (
      <div className="container-fluid main-container">
          <MyNavbar></MyNavbar>

          <Switch>
              <Route exact path={"/"}><Home username={USERNAME}/></Route>
              <Route path={"/todo"}><Todo/></Route>
              <Route exact path={"/calendar"}><MyCalendar/></Route>
              <Route path={"/calendar/:date"}><DateInfo/></Route>
          </Switch>
      </div>
  );
}

export default App;
