// Defines the public route map for the conference site.
import { Navigate, Route, Routes } from "react-router-dom";
import { Landing } from "../pages/Landing";
import { SchedulePage } from "../pages/Schedule/Schedule";
import { MediaPage } from "../pages/Media/Media";
import { FAQPage } from "../pages/FAQ/FAQ";
import { RegistrationPage } from "../pages/Registration/Registration";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/media" element={<MediaPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
