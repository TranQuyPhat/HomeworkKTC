import { BrowserRouter, Route, Routes } from "react-router-dom";
import Day1 from "./Homeworks/day1";
import Day2 from "./Homeworks/day2";
import Day3 from "./Homeworks/Wheather/";
import Day4 from "./Homeworks/Lession7";
import Layout from "./Homeworks/Lession7/Layouts/Layout";
import Dashboard from "./Homeworks/Lession7/Pages/Dashboard";
import Profile from "./Homeworks/Lession7/Pages/Profile";
import Settings from "./Homeworks/Lession7/Pages/Setting";
import Lession9 from "./Homeworks/Lession9";
import RegisterPage from "./Homeworks/Lession9/RegisterPage";
import MainLayout from "./mainLayout";

function App() {
  return (
    // <Routes>
    //   <Route path="/day1" element={<Day1 />} />
    //   <Route path="/day2" element={<Day2 />} />
    //   <Route path="/day3" element={<Day3 />} />
    //   <Route path="/" element={<Day4 />} />
    // </Routes>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="registerpage" element={<RegisterPage />} />
          <Route path="dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
