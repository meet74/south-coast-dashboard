import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import LoginScreen from "../pages/auth/Login";
import HomeScreen from "../pages/home";
import Dashboard from "../pages/home/Dashboard";
import DayScreen from "../pages/home/Day";
import PatientList from "../pages/home/PatientList";
import {
  appointmentDetaiScreenPath,
  dashboardScreenPath,
  dayScreenPath,
  employeeScreenPath,
  employeedetailScreenPath,
  homeScreenPath,
  loginPath,
  patientDetaiScreenPath,
  patientScreenPath,
  paymentScreenPath,
  reportScreenPath,
  settingsScreenPath,
} from "./pathNames";
import EmployeeList from "../pages/home/EmplyeeList";
import EmployeeDetail from "../pages/home/EmplyeeList/EmployeeDetail";
import PaymentPage from "../pages/home/Payment";
import SettingsPage from "../pages/home/Settings";
import ReportPage from "../pages/home/Report";
import PatientDetail from "../pages/home/Day/PatientDetail";
import AppointmentDetail from "../pages/home/Day/PatientDetail";

const RouterNav = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={loginPath} element={<LoginScreen />} />
        <Route path={homeScreenPath}>
          <Route index element={<Navigate to={dashboardScreenPath} />} />
          <Route path={dashboardScreenPath} element={<Dashboard />} />
          <Route path={dayScreenPath} element={<DayScreen />} />
          <Route path={`${appointmentDetaiScreenPath}/:id`} element={<AppointmentDetail />} />
          <Route path={patientScreenPath} element={<PatientList />} />
          <Route path={employeeScreenPath} element={<EmployeeList />} />
          <Route path={employeedetailScreenPath} element={<EmployeeDetail />} />
          <Route path={reportScreenPath} element={<ReportPage />} />
          <Route path={paymentScreenPath} element={<PaymentPage />} />
          <Route path={settingsScreenPath} element={<SettingsPage />} />
        </Route>
        <Route path="/" element={<Navigate to={loginPath} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterNav;
