import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import { userListApi } from "../../apis/api";

function UserContainer() {
    const [users, setUsers] = useState([]);

    const getUserListApi = async () => {
        const userData = await userListApi();
        setUsers(userData)
    }

    useEffect(() => {
        getUserListApi();
    }, []);

    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th> # </th>
                        <th> Name </th>
                        <th> Email </th>
                        <th> Age </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, idx) => {
                        return (
                            <tr>
                                <th scope="row"> {idx + 1} </th>
                                <td> {user.name} </td>
                                <td> {user.email} </td>
                                <td> {user.age} </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default UserContainer;