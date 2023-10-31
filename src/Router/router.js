import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../screens/login";
import Signup from "../screens/signup";

import QuizScreen from "../screens/quizScreen";
import HomePage from "../screens/homeScreen";
import Dashboard from "../screens/dashboardpage";
import Questionitem from "../screens/questionitem";
import Bankitem from "../screens/bankitem";





const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/quiz" element={<QuizScreen />} />
        <Route path="/questionitem" element={<Questionitem />} />
        <Route path="/bankitem" element={<Bankitem />} />


      </Routes>
    </Router>
  )
};
export default AppRouter;