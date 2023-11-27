import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';

export default function Profile() {

    const [user, setUser] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        city: '',
        address: '',
      });
      
      
      
      useEffect(() => {
        axios.post('http://localhost/DRAW/connection/profile/viewProfile.php', { id: localStorage.getItem('id') })
          .then(response => {
            setUser(response.data[0]);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }, []);
      


    //----------------------------fname -----------------------------//
    const [fname, setFname] = useState('');
    const [viewFName, setViewFName] = useState("view");
    const toggleViewFName = () => {
        setViewFName(viewFName === "view" ? "edit" : "view");
    };
    const cancelFName = () => {
        setFname(user.fname);
        setViewFName('view');
    }
    const handleFNameChange = (event) => {
        setFname(event.target.value);
    }
    const fnameEdit = () => {
        axios.post('http://localhost/DRAW/connection/profile/editFName.php', { id: user.id, fname: fname })
          .then(response => {
            window.location.reload();
          })
          .catch(error => {
            console.error('Error:', error);
          });
    }
    //----------------------------lname -----------------------------//
    const [lname, setLname] = useState('');
    const [viewLName, setViewLName] = useState("view");
    const toggleViewLName = () => {
        setViewLName(viewLName === "view" ? "edit" : "view");
    };
    const cancelLName = () => {
        setLname(user.lname);
        setViewLName('view');
    }
    const handleLNameChange = (event) => {
        setLname(event.target.value);
    }
    const lnameEdit = () => {
        axios.post('http://localhost/DRAW/connection/profile/editLName.php', { id: user.id, lname: lname })
          .then(response => {
                window.location.reload();
          })
          .catch(error => {
            console.error('Error:', error);
          });
    }
    //----------------------------email -----------------------------//
    const [email, setEmail] = useState('');
    const [viewEmail, setViewEmail] = useState("view");
    const toggleViewEmail = () => {
        setViewEmail(viewEmail === "view" ? "edit" : "view");
    };
    const cancelEmail = () => {
        setEmail(user.email);
        setViewEmail('view');
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const emailEdit = () => {
        axios.post('http://localhost/DRAW/connection/profile/editEmail.php', { id: user.id, email: email })
          .then(response => {
            window.location.reload();

          })
          .catch(error => {
            console.error('Error:', error);
          });
    }
    //----------------------------password -----------------------------//
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [viewPassword, setViewPassword] = useState("view");
    const [errors, setErrors] = useState({});
    const newErrors = {};

    const toggleViewPassword = () => {
        setViewPassword(viewEmail === "view" ? "edit" : "view");
    };
    const cancelPassword = () => {
        setOldPassword('********');
        setViewPassword('view');
    }
    const handleOldPasswordChange = (event) => {
        setOldPassword(event.target.value);
    }
    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    }
    const passwordEdit = (e) => {
        e.preventDefault();

        axios.post('http://localhost/DRAW/connection/profile/editPassword.php', { id: user.id, newPassword: newPassword, oldPassword: oldPassword })
          .then(response => {
            if(response.data.success=='true'){
                window.location.reload();
            }else{
                newErrors.password=response.data.message
                setErrors(newErrors);
            }

          })
          .catch(error => {
            console.error('Error:', error);
          });
    }
    //----------------------------Phone -----------------------------//
    const [phone, setPhone] = useState('');
    const [viewPhone, setViewPhone] = useState("view");
    const toggleViewPhone = () => {
        setViewPhone(viewPhone === "view" ? "edit" : "view");
    };
    const cancelPhone = () => {
        setPhone(user.phone);
        setViewPhone('view');
    }
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }
    const phoneEdit = () => {
        axios.post('http://localhost/DRAW/connection/profile/editPhone.php', { id: user.id, phone: phone })
          .then(response => {
            window.location.reload();

          })
          .catch(error => {
            console.error('Error:', error);
          });
    }
    //----------------------------city -----------------------------//
    const [city, setCity] = useState('');
    const [viewCity, setViewCity] = useState("view");
    const toggleViewCity = () => {
        setViewCity(viewCity === "view" ? "edit" : "view");
    };
    const cancelCity = () => {
        setCity(user.city);
        setViewCity('view');
    }
    const handleCityChange = (event) => {
        setCity(event.target.value);
    }
    const cityEdit = (e) => {
        e.preventDefault();
        if(city===''){

            newErrors.city='City Required';
            setErrors(newErrors);
            // isValid=false;
          }else{
            axios.post('http://localhost/DRAW/connection/profile/editAddress.php', { id: user.id, city: city })
          .then(response => {
            window.location.reload();

          })
          .catch(error => {
            console.error('Error:', error);
          });
        }
    }
    //----------------------------address -----------------------------//
    const [address, setAddress] = useState('');
    const [viewAddress, setViewAddress] = useState("view");
    const toggleViewAddress = () => {
        setViewAddress(viewAddress === "view" ? "edit" : "view");
    };
    const cancelAddress= () => {
        setAddress(user.address);
        setViewAddress('view');
    }
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    }
    const addressEdit = () => {
        axios.post('http://localhost/DRAW/connection/profile/editAddress.php', { id: user.id, address: address })
          .then(response => {
            window.location.reload();
          })
          .catch(error => {
            console.error('Error:', error);
          });
    }

    return (
        <div>
            <div id='fnameDiv'>
                <div id='fnameView' style={{ display: viewFName === "view" ? "flex" : "none" }}>
                    <p>First Name</p>
                    <p>{user.fname}</p>
                    <p><FaEdit style={{ fontSize: '25px' }} onClick={toggleViewFName} /></p>
                </div>
                <div id='fnameEdit' style={{ display: viewFName === "edit" ? "flex" : "none" }}>
                    <form onSubmit={fnameEdit}>
                        <label className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            required
                            name="fname"
                            value={fname}
                            onChange={handleFNameChange}
                        />

                        <button name="submit" type="submit" className="btn btn-color center-button">
                            Save
                        </button>
                        <button name="cancel" type="button" onClick={cancelFName} className="btn btn-color center-button">
                            Cancel
                        </button>
                    </form>
                </div>
            </div>

            <div id='lnameDiv'>
                <div id='lnameView' style={{ display: viewLName === "view" ? "flex" : "none" }}>
                    <p>Last Name</p>
                    <p>{user.lname}</p>
                    <p><FaEdit style={{ fontSize: '25px' }} onClick={toggleViewLName} /></p>
                </div>
                <div id='lnameEdit' style={{ display: viewLName === "edit" ? "flex" : "none" }}>
                    <form onSubmit={lnameEdit}>
                        <label className="form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            required
                            name="lname"
                            value={lname}
                            onChange={handleLNameChange}
                        />
                        <button name="submit" type="submit" className="btn btn-color center-button">
                            Save
                        </button>
                        <button name="cancel" type="button" onClick={cancelLName} className="btn btn-color center-button">
                            Cancel
                        </button>
                    </form>
                </div>
            </div>

            <div id='emailDiv'>
                <div id='emailView' style={{ display: viewEmail === "view" ? "flex" : "none" }}>
                    <p>Email</p>
                    <p>{user.email}</p>
                    <p><FaEdit style={{ fontSize: '25px' }} onClick={toggleViewEmail} /></p>
                </div>
                <div id='emailEdit' style={{ display: viewEmail === "edit" ? "flex" : "none" }}>
                    <form onSubmit={emailEdit}>
                        <label className="form-label">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            required
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <button name="submit" type="submit" className="btn btn-color center-button">
                            Save
                        </button>
                        <button name="cancel" type="button" onClick={cancelEmail} className="btn btn-color center-button">
                            Cancel
                        </button>
                    </form>
                </div>
            </div>

            <div id='passwordDiv'>
                <div id='passwordView' style={{ display: viewPassword === "view" ? "flex" : "none" }}>
                    <p>Password</p>
                    <p>********</p>
                    <p><FaEdit style={{ fontSize: '25px' }} onClick={toggleViewPassword} /></p>
                </div>
                <div id='passwordEdit' style={{ display: viewPassword === "edit" ? "flex" : "none" }}>
                    <form onSubmit={passwordEdit}>
                        <label className="form-label">Old Password</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Old Password"
                            required
                            name="oldPassword"
                            onChange={handleOldPasswordChange}
                        /><br/>
                        <label className="form-label">New Password</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="New Password"
                            required
                            name="newPassword"
                            onChange={handleNewPasswordChange}
                        />
                        {errors.password && <div className="error-message">{errors.password}</div>}
                        <button name="submit" type="submit" className="btn btn-color center-button">
                            Save
                        </button>
                        <button name="cancel" type="button" onClick={cancelPassword} className="btn btn-color center-button">
                            Cancel
                        </button>
                    </form>
                </div>
            </div>

            <div id='phoneDiv'>
                <div id='phoneView' style={{ display: viewPhone === "view" ? "flex" : "none" }}>
                    <p>Phone</p>
                    <p>0{user.phone}</p>
                    <p><FaEdit style={{ fontSize: '25px' }} onClick={toggleViewPhone} /></p>
                </div>
                <div id='phoneEdit' style={{ display: viewPhone === "edit" ? "flex" : "none" }}>
                    <form onSubmit={phoneEdit}>
                        <label className="form-label">Phone</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Phone"
                            required
                            name="phone"
                            value={phone}
                            onChange={handlePhoneChange}
                        />
                        <button name="submit" type="submit" className="btn btn-color center-button">
                            Save
                        </button>
                        <button name="cancel" type="button" onClick={cancelPhone} className="btn btn-color center-button">
                            Cancel
                        </button>
                    </form>
                </div>
            </div>

            <div id='cityDiv'>
                <div id='cityView' style={{ display: viewCity === "view" ? "flex" : "none" }}>
                    <p>City</p>
                    <p>{user.city}</p>
                    <p><FaEdit style={{ fontSize: '25px' }} onClick={toggleViewCity} /></p>
                </div>
                <div id='cityEdit' style={{ display: viewCity === "edit" ? "flex" : "none" }}>
                    <form onSubmit={cityEdit}>
                        <label className="form-label">City</label>
                        <select className="form-control" name="city" onChange={handleCityChange} defaultValue='City'>
                            <option value="City" disabled >City</option>
                            <option value="Amman">Amman</option>
                            <option value="Ajloun">Ajloun</option>
                            <option value="Aqaba">Aqaba</option>
                            <option value="Balqa">Balqa</option>
                            <option value="Irbid">Irbid</option>
                            <option value="Jerash">Jerash</option>
                            <option value="Karak">Karak</option>
                            <option value="Ma'an">Ma'an</option>
                            <option value="Madaba">Madaba</option>
                            <option value="Mafraq">Mafraq</option>
                            <option value="Tafilah">Tafilah</option>
                            <option value="Zarqa">Zarqa</option>
                        </select>
                        {errors.city && <div className="error-message">{errors.city}</div>}
                        <button name="submit" type="submit" className="btn btn-color center-button">
                            Save
                        </button>
                        <button name="cancel" type="button" onClick={cancelCity} className="btn btn-color center-button">
                            Cancel
                        </button>
                    </form>
                </div>
            </div>

            <div id='addressDiv'>
                <div id='addressView' style={{ display: viewAddress === "view" ? "flex" : "none" }}>
                    <p>Address</p>
                    <p>{user.address}</p>
                    <p><FaEdit style={{ fontSize: '25px' }} onClick={toggleViewAddress} /></p>
                </div>
                <div id='addressEdit' style={{ display: viewAddress === "edit" ? "flex" : "none" }}>
                    <form onSubmit={addressEdit}>
                        <label className="form-label">Address</label>
                        <textarea className="form-control" placeholder="Address" required name="address" onChange={handleAddressChange} value={address}>
                        </textarea>
                        <button name="submit" type="submit" className="btn btn-color center-button">
                            Save
                        </button>
                        <button name="cancel" type="button" onClick={cancelAddress} className="btn btn-color center-button">
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
