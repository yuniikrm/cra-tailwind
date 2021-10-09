import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import HomeApp from '../pages/home';

function Routes() {
  return (
      <Router>
        <Route exact path="/" component={HomeApp} />
      </Router>
  );
}

export default Routes;