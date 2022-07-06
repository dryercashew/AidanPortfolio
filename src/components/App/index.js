import { Component } from "react";
import {
  Route,
  Routes,
} from 'react-router-dom';


import * as ROUTES from "../../constants/routes"
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from "../Landing"

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path={ROUTES.LANDING} element={<Landing />} />
      </Routes>
    );
  }  
}

export default App;
