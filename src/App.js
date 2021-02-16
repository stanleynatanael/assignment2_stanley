import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import HomePortofolio from "./pages/HomePortofolio/HomePortofolio";
import { fab } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path="/" component={HomePortofolio} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
