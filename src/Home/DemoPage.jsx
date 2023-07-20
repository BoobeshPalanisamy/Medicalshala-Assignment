import {
  Box,
  Button,
  Card,
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";

function DemoPage() {
  const [selectedOption, setSelectedOption] = useState("doctor");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <Container>
      <Card
        sx={{
          background:
            "linear-gradient(128.8deg, rgb(77, 99, 221) 28.61%, rgb(34, 161, 245) 99.07%)",
          color: "#fff",
                  textAlign: "center",
                  padding: "30px 0",
                  borderRadius: "20px",
          margin:"50px"
        }}
      >
        <h1 style={{ fontWeight: "bold", fontSize: "32px" }}>
          Watch Paperplane in action 🎬
        </h1>
        <p style={{ fontSize: "25px" }}>View Demo as</p>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RadioGroup row value={selectedOption} onChange={handleOptionChange}>
            <FormControlLabel
              value="doctor"
              control={<Radio color="success" />}
              label="Doctor"
            />
            <FormControlLabel
              value="patient"
              control={<Radio color="success" />}
              label="Patient"
            />
          </RadioGroup>
        </Box>
        <Button
          sx={{
            textTransform: "none",
            background: "rgba(0,0,0,0.4)",
            color: "white",
            fontSize: "23px",
            borderRadius: "30px",
            padding: "10px 36px",
          }}
        >
          Lauch Demo
        </Button>
      </Card>
    </Container>
  );
}

export default DemoPage;
