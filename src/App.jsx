import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Onboarding from "./components/Onboarding";
import Login from "./components/Login";
import Registration from "./components/Registration";

import ProfilePage from "./components/ProfilePage";
import ScanBike from "./components/ScanBike";
import FindBicycle from "./components/FindBicycle";
import FindEmptyDock from "./components/FindEmptyDock";
import Settings from "./components/Settings";
import UsageHistory from "./components/UsageHistory";
import Feedback from "./components/Feedback";

import TopUp from "./components/Topup";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SplashScreen />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/" element={<Onboarding />} />
                <Route path="/registration" element={<Registration />} />
               
                <Route path="/scan-bike" element={<ScanBike />} />
                <Route path="/find-bicycle" element={<FindBicycle />} />
                <Route path="/find-empty-dock" element={<FindEmptyDock />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/usage-history" element={<UsageHistory />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/topup" element={<TopUp />} />
            </Routes>
        </Router>
    );
}

export default App;
