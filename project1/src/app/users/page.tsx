import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Page = () => {
    const [users, setUsers] = useState([]);
    const [updateData, setupdateData] = useState({
        name:'',email:'',password:''
    })
    const [id, setId] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    const getUsers = async () => {
        try {
            const usersData = await axios.get('http://localhost:3001/api/v1/getAllusers');

            if (usersData.data.success) {
                setUsers(usersData.data.users);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`http://localhost:3001/api/v1/updateUser/${id}`, updateData);

            if (response.data.success) {
                console.log('User updated successfully');
                setIsEdit(false); 
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setupdateData((prev:any) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleEdit = (id:any) => {
       
        const userToEdit = users.find((user:any) => user._id === id);
        updateData({
            name: userToEdit.name,
            email: userToEdit.email,
            password: userToEdit.password
        });

        setId(id);
        setIsEdit(true); 
    };

    return (
        <>
            <h1>All users</h1>

            {users.map((item:{name:string,email:string,password:string}) => (
                <div key={item._id} className='bg-white rounded-md p-5'>
                    <div>
                        <p>Name: {item.name}</p>
                    </div>
                    <div>
                        <p>Email: {item.email}</p>
                    </div>
                    <div>
                        <p>Password: {item.password}</p>
                    </div>

                    {!isEdit && (
                        <button onClick={() => handleEdit(item._id)}>Edit</button>
                    )}

                    {isEdit && id === item._id && (
                        <div>
                            <input type="text" name="name" value={updateData.name} onChange={handleChange} />
                            <input type="text" name="email" value={updateData.email} onChange={handleChange} />
                            <input type="text" name="password" value={updateData.password} onChange={handleChange} />
                            <button onClick={() => handleUpdate(item._id)}>Update</button>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
};
