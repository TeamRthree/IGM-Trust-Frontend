import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/contact";
import SuccessStories from "./pages/success-stories";
import Projects from "./pages/projects";
import DonatePage from "./pages/donate";
import About from "./pages/about";
import Homepage from "./pages/homepage";
import BlockedPage from "./components/BlockedPage";
import Header from "./components/ui/Header";
import Footer from "./pages/homepage/components/Footer";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <Header />
        <RouterRoutes>
          {/* Homepage */}
          <Route path="/" element={<Homepage />} />

          {/* Optional redirect for /homepage */}
          <Route path="/homepage" element={<Navigate to="/" replace />} />

          {/* Other pages wrapped in BlockedPage */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<BlockedPage><Projects /></BlockedPage>} />
          <Route path="/success-stories" element={<BlockedPage><SuccessStories /></BlockedPage>} />
          <Route path="/contact" element={<BlockedPage><ContactPage /></BlockedPage>} />
          <Route path="/donate" element={<BlockedPage><DonatePage /></BlockedPage>} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
        <Footer />
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
