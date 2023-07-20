import { Box, Card, Container } from "@mui/material";
import React from "react";

function CreateAbhaIdPage() {
  return (
    <Container sx={{ position: "relative", height: "600px" }}>
      <Box sx={{ zIndex: 1 }}>
        <Card sx={{ boxShadow: "none" }}>
          <img
            src="https://www.paperplanetech.co/static/media/bgHero.edc64e6179ecb05ea143.png"
            alt="background1"
            height="500px"
            width="100%"
            style={{ padding: "1rem" }}
          />
        </Card>
      </Box>
      <Box
        sx={{
          zIndex: 2,
          display: "flex",
          position: "relative",
          top: "-450px",
        }}
      >
        <img
          src="https://www.paperplanetech.co/static/media/abhaCard.ab22ef5cdb6a70e115ad.png"
          alt="id"
          height="400px"
          width="300px"
          style={{
            boxShadow: "none",
            left: 0,
            padding: 0,
          }}
        />
        <Card
          sx={{
            borderRadius: "27px",
            backgroundColor: "#fff",
            position: "relative",
            marginTop: "-50px",
            height: "500px",
            width: "80%",
            left: "-7%",
          }}
        >
          <Box sx={{ padding: "30px 50px", textAlign: "center" }}>
            <h1>Createing India's Digital Health Ecosystem</h1>
            <h4 style={{ fontSize: "20px", fontWeight: 300 }}>
              ABHA - Ayushman Bharat Health Account
            </h4>
            <h5 style={{ fontSize: "20px", fontWeight: 300 }}>
              Get control of your health data and documents using WhatsApp
            </h5>
          </Box>
          <Box
            sx={{
              display: "flex",
              position: "absolute",
              bottom: "40px",
              padding: "0 0 0 100px",
              gap: "20px",
            }}
          >
            <img
              src="https://www.paperplanetech.co/static/media/abdmLogo.84d21dff3ad30f71dd64.png"
              alt="ayshlogo"
              height="150px"
              width="150px"
              //   style={{ position: "absolute", bottom: "40px", left: "50px" }}
            />
            <img
              src="https://www.paperplanetech.co/static/media/abhaF.fbcac678517caebc058e.png"
              alt="list"
              height="200px"
            />
          </Box>
        </Card>
      </Box>
    </Container>
  );
}

export default CreateAbhaIdPage;
