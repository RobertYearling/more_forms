import { useState } from 'react';

const UserForm = props => {

    const [user, setUser] = useState ({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        cfpassword:"",
    });

    const handleUserFormChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form className="col-4 mx-auto text-left">
            <h1>Create User:</h1>
            <div className="form-group">
            <label>First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    onChange={handleUserFormChange}
                    />
                <span className="text-danger">
                    { user.firstName.length >= 1 && user.firstName.length <= 2 ? "First Name must be at least 2 characters" : ""}
                </span>
            </div>
            <div className="form-group">
            <label>Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    onChange={handleUserFormChange}
                    />
                <span className="text-danger">
                { user.lastName.length >= 1 && user.lastName.length < 2 ? "Last Name must be at least 5 characters" : ""}
                </span>
            </div>
            <div className="form-group">
            <label>Email:</label>
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    onChange={handleUserFormChange}
                    />
                <span className="text-danger">
                    { user.email.length >= 1 && user.email.length < 5 ? "Email must be at least 5 characters" : ""}
                </span>
            </div>
            <div className="form-group">
            <label>Password:</label>
                <input
                    type="text"
                    name="password"
                    className="form-control"
                    onChange={handleUserFormChange}
                    />
                <span className="text-danger">
                    { user.password.length >= 1 && user.password.length < 8 ? "Password must be at least 8 characters" : ""}
                </span>
            </div>
            <div className="form-group">
            <label>Confirm Password:</label>
                <input
                    type="text"
                    name="cfpassword"
                    className="form-control"
                    onChange={handleUserFormChange}
                    />
                <span className="text-danger">
                    { user.cfpassword.length >= 1 && user.cfpassword === user.password ? "" : "Password must match"}
                </span>
            </div>
        </form>
    );
}

export default UserForm;