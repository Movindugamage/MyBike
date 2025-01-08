import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const FindBicycle = ({ user, weather }) => {
    const [address, setAddress] = useState('');
    const [location, setLocation] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/geocode', {
                params: { address },
            });
            setLocation(response.data);
        } catch (error) {
            console.error('Error fetching location:', error);
        }
    };

    return (
        <Layout user={user} weather={weather}>
            <Header />
            <Sidebar />
            <h1>Find a Bicycle Page</h1>
            <input
                type="text"
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            {location && (
                <div>
                    <h3>Location Details</h3>
                    <pre>{JSON.stringify(location, null, 2)}</pre>
                </div>
            )}
            <Footer />
        </Layout>
    );
};

export default FindBicycle;
