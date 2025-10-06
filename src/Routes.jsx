import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/contact";

import Projects from "./pages/projects";
import DonatePage from "./pages/donate";
import GalleryPage from "./pages/gallery";
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
          <Route path="/projects" element={<Projects />} />
          
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<DonatePage />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
        <Footer />
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
