import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase.init';
import './Checkout.css'
const Checkout = () => {
    const [user] = useAuthState(auth)
    const handleSubmit = event => {
        event.preventDefault()
        toast("Thank you for booking")
        console.log(user.email)
    }
    return (
        <div className="mt-5 ">
            <h1 className="text-center mt-4 p-4">Check out please! </h1>
            <div className="checkout-container ">
            <form onSubmit={handleSubmit} className="d-flex form-field border p-5">
                <label htmlFor="name">Username</label>
                <input type="text" className="mb-3 py-1 ps-1 pe-5 "  required />

                <label htmlFor="email">Email</label>
                <input type="email"  id="email" className="mb-3 py-1 ps-1 " required readOnly value={user?.email}/>

                <label htmlFor="address">Address</label>
                <input type="text"  id="address" required className="mb-3 py-1 ps-1  " />

                <label htmlFor="number">Phone number</label>
                <input type="number"  id="number" required className="mb-3 py-1 ps-1  "/>
            
                <div>
                    <button type="submit" className="form-btn py-1 mb-3  mx-auto d-block">Submit</button>
                </div>
            </form>
            </div>
            <ToastContainer/>

        </div>
    );
};

export default Checkout;