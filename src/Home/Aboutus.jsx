import { Box, Button, Card, Container, Grid } from "@mui/material";
import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";

function Aboutus() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "0" }}>About Us</h1>
        <p
          style={{
            padding: "10px 250px",
            fontSize: "23px",
            color: "gray",
          }}
        >
          At Paperplane we're building Digital Clinics on WhatsApp for Doctors
          and Hospital to start and scale their medical practice using
          everyone's favourite messaging app!
        </p>
        <Button
          className="downloadapp-button"
          sx={{
            textTransform: "none",
            background:
              "linear-gradient(128.8deg, #4D63DD 28.61%, #22A1F5 99.07%)",
            color: "#fff",
            borderRadius: "40px",
            padding: "10px 30px",
            fontSize: "20px",
            margin: "0 320px",
          }}
        >
          Know More
        </Button>
      </Box>
      <h1 style={{ fontSize: "40px", textAlign: "center" }}>As seen on! 📰</h1>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            sx={{ height: "250px", width: "250px" }}
            className="seenon-card"
          >
            <LaunchIcon
              sx={{ color: "blue", cursor: "pointer", float: "right" }}
            />
            <img
              src="https://www.paperplanetech.co/static/media/yourStory.87a8661f32277a178424be1c5f4686a6.svg"
              alt="yourhistory"
              height="75px"
              style={{ margin: "40px 20px" }}
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            sx={{ height: "250px", width: "250px" }}
            className="seenon-card"
          >
            <LaunchIcon
              sx={{ color: "blue", cursor: "pointer", float: "right" }}
            />
            <img
              src="data:image/png;base64,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"
              alt="yourhistory"
              height="50px"
              width="200px"
              style={{ margin: "80px 20px" }}
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            sx={{ height: "250px", width: "250px" }}
            className="seenon-card"
          >
            <LaunchIcon
              sx={{ color: "blue", cursor: "pointer", float: "right" }}
            />
            <img
              src="https://www.paperplanetech.co/static/media/20190308065725-ENT-India-Logo-Black.cba1167cdc1e581fa875c1d8cadf3c94.svg"
              alt="yourhistory"
              height="50px"
              width="200px"
              style={{ margin: "80px 20px" }}
            />
          </Card>
        </Grid>
      </Grid>

      {/* Backed by the best */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "30px" }}>Backed by the best! 🤟🏽</h1>
      </Box>
      <Grid container spacing={3}>
        <Grid
          item
          xs={6}
          sm={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            sx={{
              height: "100px",
              width: "250px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="seenon-card"
          >
            <img
              src="https://www.paperplanetech.co/static/media/cornerstone%20logo%201.5a01cce91aae97943367.png"
              alt="yourhistory"
              height="65px"
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={6}
          sm={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            sx={{
              height: "100px",
              width: "250px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="seenon-card"
          >
            <img
              src="https://www.paperplanetech.co/static/media/100x%20logo%201.db79320cd2b100d03c4d.png"
              alt="yourhistory"
              height="65px"
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={6}
          sm={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            sx={{
              height: "100px",
              width: "250px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="seenon-card"
          >
            <img
              src="data:image/png;base64,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"
              alt="yourhistory"
              height="65px"
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            sx={{
              height: "100px",
              width: "250px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="seenon-card"
          >
            <img
              src="https://www.paperplanetech.co/static/media/AWS%20startup%20logo%201.6dd43a0c2fcd1b3576fe.png"
              alt="yourhistory"
              height="65px"
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            sx={{
              height: "100px",
              width: "250px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="seenon-card"
          >
            <img
              src="https://www.paperplanetech.co/static/media/MongoDB%20startup%20logo%201.66295d163decf4ad4a24.png"
              alt="yourhistory"
              height="65px"
            />
          </Card>
        </Grid>
      </Grid>
      <h1 style={{textAlign: "center" }}>
        Why do doctors love us? 💌
      </h1>
    </Container>
  );
}

export default Aboutus;
