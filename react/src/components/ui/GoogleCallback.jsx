import React, { useState, useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

function GoogleCallback() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [user, setUser] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    useEffect(() => {
        fetch(`http://localhost:8000/api/user/auth/callback${location.search}`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
        .then(response => response.json())
        .then(data => {
            setLoading(false);
            setData(data);
        });
    }, []);

    return (
        <div>
            {loading ? <div>Loading....</div> : <DisplayData data={user != null ? user : data} />}
        </div>
    );
}

function DisplayData({ data }) {
    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default GoogleCallback;
