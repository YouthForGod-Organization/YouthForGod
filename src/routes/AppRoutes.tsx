import { Route, Routes } from "react-router-dom";
import { Landing } from "../pages/Landing";
import { SchedulePage } from "../pages/Schedule/Schedule";
import { SpeakersPage } from "../pages/Speakers/Speakers";
import { FAQPage } from "../pages/FAQ/FAQ";
import { RegistrationPage } from "../pages/Registration/Registration";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="/speakers" element={<SpeakersPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/register" element={<RegistrationPage />} />
    </Routes>
  );
}
