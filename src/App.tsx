import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PublicLayout } from "@/layouts/public-layout";
import AuthenticationLayout from "@/layouts/auth-layout";
import ProtectRoutes from "@/layouts/protected-routes";
import { MainLayout } from "@/layouts/main-layout";

import { SignInPage } from "./routes/sign-in";
import { SignUpPage } from "./routes/sign-up";
import { Generate }  from "./components/generate";
import { Dashboard }  from "./routes/dashboard";
import { CreateEditPage } from "./routes/create-edit-page";
import { MockLoadPage } from "./routes/mock-load-page";
import { MockInterviewPage } from "./routes/mock-interview-page";
import { Feedback } from "./routes/feedback";
import HomePage from "@/routes/home";
import ContactPage from "./routes/contact";
import AboutPage from "./routes/about";
import ServicesPage from "./routes/services/services";
import InterviewPreparation from "./routes/services/interview-preparation";
import CareerCoaching from "./routes/services/career-coaching";
import ResumeBuilding from "./routes/services/resume-building";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route element={<PublicLayout/>}>
        <Route index element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/interview-preparation" element={<InterviewPreparation />} />
        <Route path="/services/career-coaching" element={<CareerCoaching />} />
        <Route path="/services/resume-building" element={<ResumeBuilding />} />
        </Route>

        {/* authentication layout */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>

        {/* Protected routes */}
        <Route
          element={
            <ProtectRoutes>
              <MainLayout />
            </ProtectRoutes>
          }
        >
          {/* add all the protect routes */}
          <Route element={<Generate />} path="/generate">
          <Route index element={<Dashboard />} />
          <Route path=":interviewId" element={<CreateEditPage />} />
          <Route path="interview/:interviewId" element={<MockLoadPage />} />
          <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage />}
            />
          <Route path="feedback/:interviewId" element={<Feedback />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App