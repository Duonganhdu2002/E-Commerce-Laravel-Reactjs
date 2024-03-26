import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from "../../redux/slices/userSlice";

function GoogleCallback() {
    const [loading, setLoading] = useState(true);
    const [data1, setData1] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.user);
    console.log(user)

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
                setData1(data.user);
                dispatch(setUser(data.user)); // Dispatch with the latest data from fetch
            })
            .catch(error => {
                setLoading(false);
                console.error("Error fetching data:", error);
            });
    }, [location.search, dispatch]);

    useEffect(() => {
        navigate('/');
    }, [data1, navigate]);

    return (
        <div>
            {loading ? <div>Loading....</div> : <DisplayData data={data1} />}
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
