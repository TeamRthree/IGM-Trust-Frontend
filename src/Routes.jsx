import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ContactPage from './pages/contact';
import SuccessStories from './pages/success-stories';
import Projects from './pages/projects';
import DonatePage from './pages/donate';
import About from './pages/about';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
