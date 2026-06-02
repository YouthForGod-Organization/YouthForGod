// Defines the public route map for the conference site.
import { Navigate, Route, Routes } from "react-router-dom";
import { Landing } from "../pages/Landing";
import { SchedulePage } from "../pages/Schedule/Schedule";
import { SpeakersPage } from "../pages/Speakers/Speakers";
import { MediaPage } from "../pages/Media/Media";
import { FAQPage } from "../pages/FAQ/FAQ";
import { RegistrationPage } from "../pages/Registration/Registration";
import { showConferencePages } from "../config/featureFlags";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      {showConferencePages && (
        <>
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </>
      )}
      <Route path="/media" element={<MediaPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
