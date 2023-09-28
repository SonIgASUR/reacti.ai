import React, { useEffect } from "react";
import Home from "./pages/Home";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Profile from "./pages/Profile";
import Dasboard from "./pages/Dasboard";
import Marketplace from "./pages/Marketplace";
import Prompts from "./pages/Prompts";
import Avatar from "./pages/Avatar";
import PromptModal from "./components/profile/PromptModal";
import { useState } from "react";
import UserPrompts from "./pages/UserPrompts";
import { useAuthContext } from "./context/authContext";
import Tones from "./pages/Tones";
import LoginPage from "./pages/Login";
import ReferralPage from "./pages/Refer";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import AdminLayout from "./layout/AdminLayout";
import AdminLogin from "./components/AdminPage/AdminLogin";
import CouponsPanel from "./components/AdminPage/CouponsPanel";
import UsersPanel from "./components/AdminPage/UsersPanel";
import PromptPanel from "./components/AdminPage/PromptPanel";
import StatsPage from "./components/AdminPage/StatsPage";

function App() {
  //Modal for PromptModal: Migrate to a contextAPI if needed
  const [openModal, setOpenModal] = useState(false);
  const { user, loading } = useAuthContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const unauthenticatedRoutes  = ["/","/login","/privacy-policy"]
  useEffect(() => {
    if (!loading && !user && !unauthenticatedRoutes.includes(pathname) && !pathname.includes("admin")) {
      navigate("/");
    }
  }, [user, loading]);
  return (
    <div className="z-0">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="dashboard" element={<Dasboard />} />
          <Route path="prompts" element={<Prompts />} />
          <Route path="userprompts" element={<UserPrompts />} />
          <Route path="tones" element={<Tones />} />
          <Route
            path="marketplace"
            element={<Marketplace setOpenModal={setOpenModal} />}
          />
          <Route path="avatar" element={<Avatar />} />
          <Route path="refer" element={<ReferralPage />} />
        </Route>

      <Route path="/admin" element={<AdminLayout />}>
          <Route path="login" element={<AdminLogin/>}/>
          <Route path="coupons" element={<CouponsPanel/>}/>
          <Route path="" element={<UsersPanel/>}/>
          <Route path="prompt" element={<PromptPanel/>}/>
          <Route path="stats" element={<StatsPage/>}/>
        </Route>
      </Routes>
      <PromptModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}

export default App;
