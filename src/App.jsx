import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ViewPostPage from "./pages/ViewPostPage";
import { Toaster } from "react-hot-toast";
import HealthTestPage from "./pages/HealthTestPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignUp from "./admin/SignUpPage";
import LoginPage from "./admin/LogInPage";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:postId" element={<ViewPostPage />} />
            <Route path="/test-health" element={<HealthTestPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
        <Toaster position="bottom-right" />
      </div>
    </>
  );
}

export default App;
