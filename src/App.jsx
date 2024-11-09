import { Route, Switch } from "react-router-dom"; // Importujte Route a Switch
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";
import SignUp from "./auth/SignUp.jsx";
import Login from "./auth/Login.jsx";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Switch>
        <Route path="/auth/registrace" component={SignUp} />
        <Route path="/auth/prihlaseni" component={Login} />
        <Route path="/" exact>
          <Hero />
          <Features />
          <Pricing />
          <Faq />
          <Testimonials />
          <Download />
        </Route>
      </Switch>
      <Footer />
    </main>
  );
};

export default App;
