import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "../screens/login";
import Signup from "../screens/signup";

import QuizScreen from "../screens/quizScreen";
import HomePage from "../screens/homeScreen";
import Dashboard from "../screens/dashboardpage";
import Questionitem from "../screens/questionitem";
import Bankitem from "../screens/bankitem";
import Bankitemquestion from "../screens/bankitemquestion";
import Cquestion from "../screens/cquestion";
import AdminDashboard from "../screens/admin/adminDashboard";
import AddQuizScreen from "../components/addQuiz";






const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login"/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student" element={<Dashboard />}  />
        <Route path="/admin" element={<AdminDashboard/>} />
        <Route path="/addQuiz" element={<AddQuizScreen/>} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/quiz" element={<QuizScreen />} />
        <Route path="/questionitem" element={<Questionitem />} />
        <Route path="/bankitemquestion" element={< Bankitemquestion/>} />
        <Route path="/c"element={<Cquestion/>}/>
        <Route path="/bankitem" element={<Bankitem />} />


      </Routes>
    </Router>
  )
};
export default AppRouter;