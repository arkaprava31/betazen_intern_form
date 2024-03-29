import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import {
//     CitySelect,
//     CountrySelect,
//     StateSelect,
// } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import TextInput from './TextInput';

const Step2 = () => {

    // const [countryid, setCountryid] = useState(0);
    // const [stateid, setstateid] = useState(0);

    return (
        <div className="main-div">
            <div className="left">
                <div className='sec'>Personal details</div>
                <div className='sec active'>Your Address</div>
                <div className='sec'>Educational Details</div>
                <div className='sec'>Work Experience Details</div>
                <div className='sec'>Other Details</div>
                <div className='sec'>Resume / CV</div>
            </div>
            <div className="right">
                <form className='main-scroll'>

                    <TextInput type="text" field="input6" placeholder="Enter your address" label="Address:" />

                    <TextInput type="text" field="input7" placeholder="Enter your state" label="State:" />

                    <TextInput type="text" field="input8" placeholder="Enter your country" label="Country:" />


                    {/* <div className="info-box">
                                        <label for="con">Country:</label>
                                        <CountrySelect
                                            onChange={(e) => {
                                                setCountryid(e.id);
                                            }}
                                            placeHolder="Select Country"
                                        />
                                    </div>

                                    <div className="info-box">
                                        <label for="state">State:</label>
                                        <StateSelect
                                            countryid={countryid}
                                            onChange={(e) => {
                                                setstateid(e.id);
                                            }}
                                            placeHolder="Select State"
                                        />
                                    </div>

                                    <div className="info-box">
                                        <label for="city">City:</label>
                                        <CitySelect
                                            countryid={countryid}
                                            stateid={stateid}
                                            onChange={(e) => {
                                                console.log(e);
                                            }}
                                            placeHolder="Select City"
                                        />
                                    </div> */}

                    <TextInput type="text" field="input9" placeholder="Enter your Postal Code:" label="Postal Code:" />

                </form>
            </div>
        </div>
    );
};

export default Step2;
