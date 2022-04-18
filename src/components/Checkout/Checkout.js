import React from 'react';

const Checkout = () => {
    return (
        <div className="mt-5">
            <h1 className="text-center mt-4 p-4">Check out please! </h1>
            <form >
                <label htmlFor="name">Username</label>
                <input type="name"  />
                <label htmlFor="email">Email</label>
                <input type="email"  id="email" requied />

            </form>
        </div>
    );
};

export default Checkout;