
import { Sidebar } from "./components/Sidebar";
import StatsOverview from "./components/StatsOverview";
import {ComparisonChart} from "./components/ComparisonChart";
import PerformanceScore from "./components/PerformanceScore";
import CommunityFeedback from "./components/CommunityFeedback";
import TopProducts from "./components/TopProducts";
import { Device } from "./components/Device";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/Login";
import HomePage from "./container/HomePage";


export default function Dashboard() {
  return (
    <>
   
    <Routes>
    <Route path="/home" element={<HomePage />} />
    <Route path="/" element={<LoginPage />} />

    </Routes>
    </>
  );
}
