import { Box, Card, Container, Grid } from "@mui/material";
import React from "react";
import TailBar from "../Home/TailBar";

function BuyNowPayLater() {
  return (
    <>
      <Container>
        <Box sx={{ margin: "50px 100px" }}>
          <Card>
            <Box style={{ position: "relative" }}>
              <img
                src="https://www.paperplanetech.co/static/media/bgHero.edc64e6179ecb05ea143.png"
                alt="background"
                height="500px"
                width="100%"
              />
              <Box
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <h1 style={{ textAlign: "center" }}>Introducing</h1>
                <h1 style={{ color: "blue", textAlign: "center" }}>
                  Buy Now, Pay Later
                </h1>
                <p style={{ fontSize: "24px", textAlign: "center" }}>
                  Instant Credit for your health on a click!
                </p>
                <img
                  src="https://www.paperplanetech.co/static/media/final%20card%20design.bcb055ca02a80776812f94ae6e7d3b2a.svg"
                  alt="debit"
                  height="300px"
                  width="600px"
                />
              </Box>
            </Box>
          </Card>
        </Box>
      </Container>
      <Card
        sx={{
          background: "rgb(243, 243, 243)",
          margin: "20px 100px",
          borderRadius: "30px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>With Buy Now, Pay Later You get</h1>
        <Grid container spacing={2}>
          <Grid item xs={5} sx={{ margin: "10px 30px", textAlign: "center" }}>
            <img
              src="https://www.paperplanetech.co/static/media/ID.b8d07d3615493679c060.png"
              alt="profile"
              height="70px"
              width="70px"
            />
            <h2>Under 1 Minute apporval</h2>
            <p>Buy putting your health ahead of paperwork and logistics</p>
          </Grid>
          <Grid item xs={5} sx={{ margin: "10px 30px", textAlign: "center" }}>
            <img
              src="https://www.paperplanetech.co/static/media/blue_whatsapp.5da6ae8fcce708d02c39.png"
              alt="whatsapp"
              height="70px"
              width="70px"
            />
            <h2>Repayments via WhatsApp</h2>
            <p>
              Pay securely via whatsapp without downloading or using any
              application
            </p>
          </Grid>
          <Grid item xs={5} sx={{ margin: "10px 30px", textAlign: "center" }}>
            <img
              src="https://www.paperplanetech.co/static/media/fl_rupee.4bad1db344ed947e538e.png"
              alt="rupee"
              height="70px"
              width="70px"
            />
            <h2>Flexible Payment Tenure</h2>
            <p>Now you decide when and how much to pay in installments</p>
          </Grid>
          <Grid item xs={5} sx={{ margin: "10px 30px", textAlign: "center" }}>
            <img
              src="https://www.paperplanetech.co/static/media/web-page.35d94c81446e7bf635bb.png"
              alt="nothirdparty"
              height="70px"
              width="70px"
            />
            <h2>No Third-party intervention</h2>
            <p>Seamless transaction through Paperplane</p>
          </Grid>
        </Grid>
      </Card>
      <TailBar />
    </>
  );
}

export default BuyNowPayLater;
