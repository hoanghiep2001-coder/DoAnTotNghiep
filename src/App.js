import { Helmet } from "react-helmet";
import logo from "../src/assets/img/icon/logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
function App() {
  return (
    <Router>
      <Helmet>
        <link rel="icon" href={logo}></link>
      </Helmet>

      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route path={route.path} key={index} element={<Page />} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
