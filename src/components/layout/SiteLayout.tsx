// Provides a reusable header/content/footer shell for pages that use nested routing.
import { Outlet } from "react-router-dom";
import { NavBar } from "../common/NavBar";
import { Footer } from "../common/Footer";
import "./SiteLayout.scss";

export function SiteLayout() {
  return (
    <div className="site-layout">
      <NavBar />
      <main className="site-layout__content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
