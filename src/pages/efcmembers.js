import React, { useEffect } from "react";
import '../../static/css/efcmembers.css'; // Import custom CSS for styling
import logo from '../images/ScottPickettGroupLogo_Primary_PMS.svg'; // Adjust the path to your actual image file

const EFCMembersPage = () => {
    useEffect(() => {
        // Dynamically inject the form script after the component mounts
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://forms.contacta.io/66dfa05424058e9553ea7394.js";
        script.async = true;
        document.getElementsByTagName("head")[0].appendChild(script);

        return () => {
            // Clean up script if the component unmounts
            if (script) {
                script.remove();
            }
        };
    }, []);

    return (
        <div className="efc-members-container">
            <div className="form-header">
                {/* Add the Scott Pickett Group Logo */}
                <img src={logo} alt="Scott Pickett Group Logo" className="logo" />
            </div>

            {/* Div to hold the dynamically loaded form */}
            <div id="CONTACTA_66dfa05424058e9553ea7394" className="form-container"></div>
        </div>
    );
};

export default EFCMembersPage;
