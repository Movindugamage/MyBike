import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SplashScreen from "./pages/SplashScreen"; // Importing SplashScreen
import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import MyWallet from "./pages/MyWallet";
import ScanBike from "./pages/ScanBike";
import FindBicycle from "./pages/FindBicycle";
import FindEmptyDock from "./pages/FindEmptyDock";
import Settings from "./pages/Settings";
import UsageHistory from "./pages/UsageHistory";
import Feedback from "./pages/Feedback";
import TopUp from "./pages/Topup";
import Home from "./pages/Home";
import OTPVerification from "./pages/OTPVerification"; // Import OTPVerification

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SplashScreen />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/scan-bike" element={<ScanBike />} />
                <Route path="/find-bicycle" element={<FindBicycle />} />
                <Route path="/find-empty-dock" element={<FindEmptyDock />} />
                <Route path="/profile" element={<MyWallet />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/usage-history" element={<UsageHistory />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/topup" element={<TopUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/otp-verification" element={<OTPVerification />} /> {/* New route for OTP verification */}
            </Routes>
        </Router>
    );
}

export default App;
