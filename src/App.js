import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Shared/Header/Header";
import Banner from "./Pages/Home/Banner/Banner";
import Services from "./Pages/Home/Services/Services";
import Footer from "./Pages/Shared/Footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
