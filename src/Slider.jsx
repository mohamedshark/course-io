import React, { useState, useEffect } from "react";
import "./Slider.css"

const Slider = () => {
    const sliderIDs = ["slider1", "slider2", "slider3", "slider4", "slider5"];
    const [sliderID, setSliderID] = useState(0);

    const handleSliderChange = () => {
        setSliderID(s => (s + 1) % sliderIDs.length); // Corrected to wrap around
    };
    const handleSliderChange1 = () => {
        setSliderID(s => s!== 0 ?(s - 1) % sliderIDs.length: s); // Corrected to wrap around
    };

    useEffect(() => {
        const intervalId = setInterval(handleSliderChange, 6000); // Change slide every 2 seconds

        return () => clearInterval(intervalId); // Clean up interval on component unmount
    }, []);

    return (
        <div className="slider-container">
            {/* <button onClick={handleSliderChange1} className="slider-left-button">⭅</button> */}
            
            <button className={sliderIDs[sliderID]}> </button>

            {/* <button onClick={handleSliderChange} className="slider-right-button">⭆</button> */}
        </div>
    );
}

export default Slider;
