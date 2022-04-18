import React from 'react';

const Blog = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 container">
            <div>
        <h3>Difference between authorization and authentication</h3>
        <p>Authentication varifies who the user is and Authorization let what resource the user can get access of.passwords, one-time pins, biometric information, and other information provided or entered by the user is needed to use authentication but authorization is used manually or by the settings that are implemented by the organization.Authentication is visible and it can be changed but on the otherhand authorization can't be seen or change by the user</p>
            </div>

            <div>
            <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>Firebase helps you build and run successful apps. it is Backed by Google and is loved by developers.With its help authenticaton is very easy. i can easily get a user details and work with it. i can basically use all social media login method using it. Below are the other options to implement authentication </p>
            <ul>
                <li>Two-Factor Authentication </li>
                <li>Single Sign-On </li>
                <li>Multi-Factor Authentication</li>
                <li>Password Authentication Protocol</li>
                <li>Extensible Authentication Protocol </li>
            </ul>
            </div>
            <div>
                <h3> What other services does firebase provide other than authentication</h3>

                <p>firebase provides many services other than authentication. they are :  </p>
                <ul>
                <li>Cloud Firestore</li>
                <li>Cloud Storage</li>
                <li>Cloud Functions</li>
                <li>Cloud Messaging</li>
                <li>Predictions</li>
                <li>Google Analytics</li>
                <li>Hosting</li>
                <li>Dynamic Links</li>
                <li>Remote Config</li>
                </ul>
            </div>
        </div>
    );
};

export default Blog;