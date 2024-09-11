import React, { useEffect } from "react";

const EFCMembersPage = () => {
    useEffect(() => {
        // Dynamically inject the form script once the component has mounted
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
        <div>
            <h1>EFC Members Opt-In Form</h1>
            <p>Please fill out the form below to opt-in.</p>
            {/* Step 1: Div to hold the form */}
            <div id="CONTACTA_66dfa05424058e9553ea7394"></div>
        </div>
    );
};

export default EFCMembersPage;
