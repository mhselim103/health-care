import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import Home from "./Pages/Home/Home/Home";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import LogIn from "./Pages/Authenticatin/Login/Login";
import Register from "./Pages/Authenticatin/Register/Register";
import Services from "./Pages/Home/Services/Services";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/login">
            <LogIn></LogIn>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute exact path="/details/:id">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
