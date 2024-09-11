// src/pages/efcmembers.js
import React from "react";

const EFCMembersPage = () => {
    return (
        <div>
            <h1>EFC Members Opt-In Form</h1>
            <p>Please fill out the form below to opt-in.</p>

            {/* Step 1: Div to hold the form */}
            <div id="CONTACTA_66dfa05424058e9553ea7394"></div>

            {/* Step 2: Script to load the form dynamically */}
            <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                    __html: `
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "https://forms.contacta.io/66dfa05424058e9553ea7394.js";
            document.getElementsByTagName("head")[0].appendChild(script);
          `,
                }}
            />
        </div>
    );
};

export default EFCMembersPage;
