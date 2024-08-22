import React, { useState, useEffect } from "react";
import video from './rcbmove2.mp4'

import './Donors.css'
import citiesData from '../../Assets/cities.json'
import styled, { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #aaa;
  }
`;
function Donors() {
    const [prev, setPrev] = useState(false);
    const [prevInf, setPrevInf] = useState(false);
    const [prev6Mon, setPrev6Mon] = useState(false);
    const [checkPrev6, setcheckPrev6] = useState(0);

    const [prevDies, setPrevDies] = useState(false);
    const [checkPrevDies, setCheckPrevDies] = useState(0);
    
    // var today = new Date().toISOString().split('T')[0];
    const [date,setDate] = useState(Date);
    // date[0].setAttribute('min', today);
    const handleDate = (event)=>{
        setDate(event.target.value)
        console.log(event.target.value);
    }
    const handlePrevDies = (event) => {
        var check = event.target.checked;
        if (check === true) {
            setCheckPrevDies(checkPrevDies + 1);
        }
        else {
            setCheckPrevDies(checkPrevDies - 1);
        }
        if (checkPrevDies > 0) {
            setPrevDies(true);
        }
        else {
            setPrevDies(false);
        }
    }
    const handlePrev6 = (event) => {
        var checked = event.target.checked;
        if (checked === true) {
            setcheckPrev6(checkPrev6 + 1);
            console.log(checked);
        }
        else {
            setcheckPrev6(checkPrev6 - 1);
        }
        if (checkPrev6 > 0) {
            setPrev6Mon(true);
        }
        else {
            setPrev6Mon(false);
        }

    }
    const handlePrev = (event) => {
        if (event.target.value === "yes") {
            setPrev(true);
            console.log(prev);
        }
        else {
            setPrev(false);
            console.log(prev);
        }

    }
    // useEffect(() => {
    //     // console.log(prev);
    //     // console.log(prevInf);
    //     console.log(prevDies);
    //     console.log(checkPrevDies);
    // }, [prev, prevInf, prev6Mon, checkPrev6, prevDies, checkPrevDies]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() => {
        console.log("Hel");
        // console.log(citiesData);
        const states = citiesData.states.map(data => data.state)
        console.log(states);
        setStates(states);
    }, []);

    const handleInfec = (event) => {
        if (event.target.value === "yes") {
            // console.log(prevInf);
            setPrevInf(true);
            // console.log(prevInf);
        }
        else {
            setPrevInf(false);
            console.log(prevInf);
        }
    }
    const handleStateChange = (event) => {
        const selectedState = event.target.value;
        setSelectedState(selectedState);
        console.log(selectedState);
        const stateData = citiesData.states.find(state => state.state === selectedState);
        console.log(stateData);
        setCities(stateData ? stateData.cities : []);
        setSelectedCity(''); // Reset city selection when state changes
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
        console.log(event.target.value);
    };
    return (
        <div>
        <GlobalStyle/>
            <video autoPlay loop muted play-inline={"true".toString()} className="backvid">
                <source src={video} />
            </video>
            <div className="container" style={{ "margin": "100px" }}>
                <h1>Blood Donation Form</h1>
                <header>Enter Personal Details</header>
                <form action="/donate" /*onSubmit={validatedonar()}*/ method="post">
                    <div className="details personal">
                        <span className="title"> Donor's Detail </span>
                        <div className="fields">
                            <div className="input-field">
                                <label>Full Name</label>
                                <input type="text" placeholder="Enter your name" title="Enter full name"
                                    pattern="^(\w\w+)\s(\w+)$" name="name" required />
                            </div>
                            <div className="input-field">
                                <label>Age</label>
                                <input type="text" placeholder="Enter your age" id="age" name="age" pattern="[0-9]{1,3}"
                                    required />
                            </div>
                            <div className="input-field">
                                <label>Email</label>
                                <input type="text" placeholder="Enter Email" name="email" required />
                            </div>

                            <div className="input-field">
                                <label>Mobile Number</label>
                                <input type="tel" placeholder="Enter your mobile number" title="Enter 10 digit phone number"
                                    pattern="[0-9]{10}" name="mobilenum" required />
                            </div>
                            <div className="input-field">
                                <label>Address</label>
                                <input type="text" placeholder="Enter your Address" name="address" required />
                            </div>
                            <div className="input-field">
                                <label>Gender</label>
                                <input type="text" placeholder="Enter your Gender" name="gender" required />
                            </div>
                            <div className="input-field">
                                <label>Occupation</label>
                                <input type="text" placeholder="Enter your occupation" name="occupation" required />
                            </div>
                            <div className="input-field">
                                <label>Height(in cm)</label>
                                <input type="text" placeholder="Enter your height" name="height" required />
                            </div>
                            <div className="input-field">
                                <label>Weight(in Kg)</label>
                                <input type="text" placeholder="Enter your weight" name="weight" id="weight" required />
                            </div>
                            <div className="input-field">
                                <label for="blood-group">Blood Group:</label>
                                <select id="blood-group" name="bloodgroup" required>
                                    <option value="">Select Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>

                            <div className="input-field">
                                <label for="donation-date">Donation Date:</label>
                                <input type="date" id="donation-date" name="donationdate" value={date} onChange={handleDate} min={new Date().toISOString().split('T')[0]} max={new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0]} required />
                            </div>

                            <div className="input-field">
                                <label for="id-proof">ID proof:</label>
                                <input type="file" id="idproof" name="proof" title="Max size 0.8 MB"
                                    accept="application/pdf" required />
                            </div>


                            <div className="input-field">
                                <label for="state">Select a state:</label>
                                <select id="state" value={selectedState} onChange={handleStateChange}>
                                    <option value="">Select a state</option>
                                    {states.map(state => (
                                        <option key={state} value={state}>{state}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="input-field">
                                <label for="city">Select City:</label>
                                <select id="city" value={selectedCity} onChange={handleCityChange}>
                                    <option value="">Select a city</option>
                                    {cities.map(city => (
                                        <option key={city} value={city}>{city}</option>
                                    ))}
                                </select>
                            </div>
                            {/* <!-- <div className="input-field"> -->
                        <!-- <label for="last-donation-date">Last Donation Date:</label>
                        <input type="date" id="last-donation-date" name="last-donation-date" required>
                        </div> --> */}
                        </div>
                        <br />

                        <h4>🩸 Have you donated blood in last 3 months ?</h4>
                        <br />
                        <div className="check-label">
                            <label><input type="radio" name="previously" value="yes" onChange={handlePrev} required />Yes</label>
                            <label><input type="radio" name="previously" value="no" onChange={handlePrev} />No</label>
                        </div>
                        <br />
                        <br />

                        <h4>🩸 Have You any reason to believe that you may be infected by either Hepatitis, Malaria,
                            HIV/AIDS,
                            and/or Venereal Disease ? </h4>
                        <br />
                        <div className="check-label">
                            <label><input type="radio" name="infected" onChange={handleInfec} value="yes" required />Yes</label>
                            <label><input type="radio" name="infected" onChange={handleInfec} value="no" />No</label>
                        </div>
                        <br />
                        <br />

                        <h4>🩸 In the last 6 Months have you had any history of the following: </h4>
                        <div className="check-label">
                            <br />
                            <label><input type="checkbox" id="wtLoss" onChange={handlePrev6} />Unexplained Weight Loss</label>
                            <br />
                            <label><input type="checkbox" id="reDi" onChange={handlePrev6} />Repeared Diarrhoea</label>
                            <br />
                            <label><input type="checkbox" id="swGl" onChange={handlePrev6} />Swollen Glands</label>
                            <br />
                            <label><input type="checkbox" id="fev" onChange={handlePrev6} />Continuous Low-Grade Fever</label>
                        </div>
                        <br />



                        <h4>🩸 In the last 6 Months have you had any :-</h4>
                        <div className="check-label">
                            <br />
                            <label><input type="checkbox" id="tatto" onChange={handlePrev6} /> Tattooing</label>
                            <br />
                            <label><input type="checkbox" id="erPi" onChange={handlePrev6} /> Ear Piercing </label>
                            <br />
                            <label><input type="checkbox" id="deEx" onChange={handlePrev6} /> Dental Extraction</label>
                            <br />
                        </div>

                        <h4> 🩸 Do you suffer from or have suffered from any of the following Diseases?:- </h4>
                        <div className="check-label">
                            <br />
                            <div className="checkAlign">

                                <label><input type="checkbox" id="heDi" onChange={handlePrevDies} />Heart Diseas</label>

                                <label><input type="checkbox" id="luDi" onChange={handlePrevDies} /> Lung Disease </label>

                                <label><input type="checkbox" id="kiDi" onChange={handlePrevDies} /> Kidney Disease</label>

                                <label><input type="checkbox" id="caDi" onChange={handlePrevDies} /> Cancer/ Malignant Disease </label>

                                <label><input type="checkbox" id="eiDi" onChange={handlePrevDies} /> Epilepsy</label>

                                <label><input type="checkbox" id="diDi" onChange={handlePrevDies} /> Diabetes</label>

                                <label><input type="checkbox" id="tuDi" onChange={handlePrevDies} /> Tuberculosis</label>

                                <label><input type="checkbox" id="abDi" onChange={handlePrevDies} /> Abnormal bleeding tendency</label>

                                <label><input type="checkbox" id="hepDi" onChange={handlePrevDies} /> Hepatitis B/C</label>

                                <label><input type="checkbox" id="alDi" onChange={handlePrevDies} /> Allergic Disease</label>

                                <label><input type="checkbox" id="jaDi" onChange={handlePrevDies} /> Jaundice</label>

                                <label><input type="checkbox" id="seDi" onChange={handlePrevDies} /> Sexually Trans. Disease </label>

                                <label><input type="checkbox" id="maDi" onChange={handlePrevDies} /> Malaria</label>

                                <label><input type="checkbox" id="tyDi" onChange={handlePrevDies} /> Typhoid (Last 1 yr.) </label>

                                <label><input type="checkbox" id="faDi" onChange={handlePrevDies} /> Fainting Spells</label>

                            </div>
                        </div>

                        <br />


                        <h4>🩸 Is There any history of surgery or Blood Transfusion in the past 6 Months? :- </h4>
                        <div className="check-label">
                            <br />
                            <label><input type="checkbox" id="maSur" onChange={handlePrev6} /> Major Surgery</label>
                            <br />
                            <label><input type="checkbox" id="blTrans" onChange={handlePrev6} />Blood Transfusion </label>
                            <br />
                            <label><input type="checkbox" id="miSur" onChange={handlePrev6} /> Minor Surgery</label>
                            <br />
                        </div>
                        <div className="btn">
                            <input type="submit" value="Ready to donate" id="sbtn" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Donors;