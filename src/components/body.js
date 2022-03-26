import React from "react";
import '../css/body.css';

function Body() {
    return (
        <div className="Body-Container">
            <div className="heading">
                WELCOME
            </div>
            <div className="Body-Container1">
            <p>Date-25-Mar-22</p>
            <p>Day Order:2<p/>
            <div className="Body-Container2">
                <p>Early symptoms of Covid-19 - Sore throat, dry cough, fever, cold, loss of smell, loss of taste etc. If any of the above symptoms are noticed contact emergency helpline.</p>
                
                <p>Emergency Contact :- 044-27452727</p>
                </div>
                <p>Mobile:- 9789888453/9940096012</p>
                </p>
                </div>
                <div className="image-Container">
                <img src={process.env.PUBLIC_URL + "academia.jpg"} width="40%" height="30%" />
                </div>
                <div className="Body-Container3">
                <p id="text-2">
                SRM Academia is the Official Student/Parent Portal of SRM's Faculty of Engineering and Technology which aims at providing a better experience to the students to access the academic web services. The portal is a gateway to your academic information such as attendance, internal marks, timetable, etc.
                </p>
                </div>
                <div className="image-Container">
                <img src={process.env.PUBLIC_URL + "download1.png"} width="40%" height="30%" />
                </div>
            </div>
    );
}
export default Body;
