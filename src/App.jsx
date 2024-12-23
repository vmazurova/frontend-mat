import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import TrainingPlan from "./sections/TrainingPlan.jsx";
import Footer from "./sections/Footer.jsx";
import SignUp from "./auth/SignUp.jsx";
import Login from "./auth/Login.jsx";
import MealPlan from "./sections/MealPlan.jsx";
import MemberDetail from "./pagesLogin/MemberDetail.jsx";
import LogOut from "./pagesLogin/LogOut.jsx";
import ForgotPassword from "./auth/ForgotPassword.jsx";
import CoursesList from "./pagesLogin/CoursesList.jsx";
import CoursesDetail from "./pagesLogin/CourseDetail.jsx";
import Bookings from "./pagesLogin/Bookings.jsx";
import BookingDetail from "./pagesLogin/BookingDetail.jsx";
import MealPlanList from "./pagesLogin/MealPlanList.jsx";
import Kalendar from "./pagesLogin/CourseCalendar.jsx";
import MealPlanAdd from "./pagesLogin/MealPlanAdd.jsx";
import CourseAdd from "./pagesLogin/CoursesAdd.jsx";
import TrainingPlanDetail from "./pagesLogin/TrainingPlanDetail.jsx";
import TrainingPlanList from "./pagesLogin/TrainingPlanList.jsx";
import TrainingPlanAdd from "./pagesLogin/TrainingPlanAdd.jsx";
import MealPlanDetail from "./pagesLogin/MealPlanDetail.jsx";
import ProtectedRoute from "./auth/ProtectedRoute"; // Nová komponenta
import AuthProvider from "./auth/AuthProvider";

const App = () => {
  const location = useLocation();

  const hideHeaderPaths = [
    "/osobni-slozka",
    "/kurzy",
    "/auth/registrace",
    "/auth/prihlaseni",
    "/zapomenute-heslo",
    "/jidelnicky",
    "/kalendar",
    "/kurz-pridani",
    "/jidelnicek-pridani",
    "/treninky",
    "/trenink-pridani",
  ];

  const hideHeaderPatterns = [
    /^\/kurz\/[a-zA-Z0-9]+$/,
    /^\/trenink\/[a-zA-Z0-9]+$/,
    /^\/jidelnicek\/[a-zA-Z0-9]+$/,
  ];

  const showHeader =
    !hideHeaderPaths.includes(location.pathname) &&
    !hideHeaderPatterns.some((pattern) => pattern.test(location.pathname));

  return (
    <AuthProvider>
      {" "}
      {/* AuthProvider obklopuje celou aplikaci */}
      <main className="overflow-hidden">
        {showHeader && <Header />}
        <Switch>
          <Route path="/auth/registrace" component={SignUp} />
          <Route path="/auth/prihlaseni" component={Login} />
          <Route path="/zapomenute-heslo" component={ForgotPassword} />
          <ProtectedRoute path="/osobni-slozka" component={MemberDetail} />
          <ProtectedRoute path="/odhlaseni" component={LogOut} />
          <ProtectedRoute path="/kurzy" component={CoursesList} />
          <ProtectedRoute path="/kalendar" component={Kalendar} />
          <ProtectedRoute path="/kurz/:id" component={CoursesDetail} />
          <ProtectedRoute path="/bookings" component={Bookings} />
          <ProtectedRoute path="/bookings/:id" component={BookingDetail} />
          <ProtectedRoute path="/jidelnicky" component={MealPlanList} />
          <ProtectedRoute path="/jidelnicek-pridani" component={MealPlanAdd} />
          <ProtectedRoute path="/kurz-pridani" component={CourseAdd} />
          <ProtectedRoute path="/trenink/:id" component={TrainingPlanDetail} />
          <ProtectedRoute path="/treninky" component={TrainingPlanList} />
          <ProtectedRoute path="/trenink-pridani" component={TrainingPlanAdd} />
          <ProtectedRoute path="/jidelnicek/:id" component={MealPlanDetail} />
          <Route path="/" exact>
            <Hero />
            <Features />
            <Pricing />
            <MealPlan />
            <TrainingPlan />
            <Faq />
            <Testimonials />
          </Route>
        </Switch>
        <Footer />
      </main>
    </AuthProvider>
  );
};

export default App;
