import { Container, Typography } from "@mui/material";
import React, { useState } from "react";
import ClinicsTogglePage from "./ClinicsTogglePage";
import BusinessTogglePage from "./BusinessTogglePage";

function ToggleHomeButton() {
  const [isClinics, setIsClinics] = useState(false);

  const handleToggleChange = () => {
    setIsClinics((prevIsClinics) => !prevIsClinics);
  };

  return (
    <>
      <div className="toggle-button-cover">
        <div className="button-cover">
          <div className="button b2" id="button-10">
            <input
              type="checkbox"
              className="checkbox"
              checked={isClinics}
              onChange={handleToggleChange}
            />
            <div className="knobs">
              <Typography component={"span"}>Clinics</Typography>
            </div>
            <div className="layer"></div>
          </div>
        </div>
      </div>
      {isClinics ? <BusinessTogglePage /> : <ClinicsTogglePage />}
    </>
  );
}

export default ToggleHomeButton;
