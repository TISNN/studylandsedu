import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteLayout } from '@/components/layout/site-layout';
import { AboutPage } from '@/pages/about-page';
import { ContactPage } from '@/pages/contact-page';
import { HomePage } from '@/pages/home-page';
import { MentorPage } from '@/pages/mentor-page';
import { NotFoundPage } from '@/pages/not-found-page';
import { ServicePage } from '@/pages/service-page';

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about.html" element={<Navigate to="/about" replace />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/service.html" element={<Navigate to="/service" replace />} />
        <Route path="/mentor" element={<MentorPage />} />
        <Route path="/mentor.html" element={<Navigate to="/mentor" replace />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact.html" element={<Navigate to="/contact" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
