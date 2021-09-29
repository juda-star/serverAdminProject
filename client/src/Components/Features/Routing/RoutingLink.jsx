import React from 'react'
import Home from '../../Pages/Home/Home'
import Training from '../../Pages/Training/Training';
import GoodNutrition from '../../Pages/GoodNutrition/GoodNutrition'
import Weights from '../../Pages/Weights/Weights'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function RoutingLink() {
    return (
        <div>
            <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Training">Training</Link>
          </li>
          <li>
            <Link to="/GoodNutrition">GoodNutrition</Link>
          </li>
          <li>
            <Link to="/Weights">Weights</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/Training">
            <Training />
          </Route>
          <Route path="/GoodNutrition">
            <GoodNutrition />
          </Route>
          <Route path="/Weights">
            <Weights />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
        </div>
    )
}
