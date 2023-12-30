import React, { useState } from 'react'
import { useEffect } from 'react'
import { fetchAllUser } from '../../services/authService';

const TableUser = (props) => {
    useEffect(() => {
        getAllUser();
    }, []);

    const [listUser, setListUser] = useState([]);

    const getAllUser = async () => {
        let res = await fetchAllUser();
        if (res && res.data) {
            setListUser(res.data);
        }
    }

    console.log(listUser);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listUser && listUser.length > 0 && 
                        listUser.map((users, index) => {
                            return (
                                <tr key={`users-${index}`}>
                                    <td>{users.user_id}</td>
                                    <td>{users.username}</td>
                                    <td>{users.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default TableUser;