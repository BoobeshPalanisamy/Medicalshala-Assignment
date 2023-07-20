import React from "react";
import { Container, Grid, Card } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TailBar from "../Home/TailBar";

function AboutUsPage() {
  return (
    <>
      <Container
        sx={{
          textAlign: "center",
        }}
      >
        <h1
          style={{ textDecoration: "underline", textDecorationColor: "blue" }}
        >
          Our Vision.<span style={{ color: "blue" }}> Our Mission</span>
        </h1>
        <p>
          At Paperplane we're building Digital Clinics on whatsApp for Doctors
          and Hospital to start and scale their medical practice using
          everyone's favourite messaging app!
        </p>
        <img
          src="https://www.paperplanetech.co/static/media/WhatsApp%20Image%202022-05-19%20at%209.48.44%20AM.283776d9f110c588e74b.png"
          alt="group"
          height="450px"
          width="700px"
          style={{
            borderRadius: "30px",
            display: "block",
            margin: "0 auto 0 auto",
            width: "50%",
          }}
        />
        <h1>Our Core Values</h1>
        <p style={{ fontSize: "23px" }}>
          The priciples that guid our company strategy and our individual
          actions.
        </p>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid
            item
            xs={4}
            sm={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                borderRadius: "20px",
                height: "150px",
                width: "130px",
                background: "rgb(229, 232, 255)",
                padding: "10px",
              }}
            >
              <img
                src="https://www.paperplanetech.co/static/media/CardV1.da37928c39f7cb5709c1dcc78e154c62.svg"
                alt="search"
              />
              <p style={{ float: "bottom", fontSize: "18px" }}>
                Obsession to detail
              </p>
            </Card>
          </Grid>
          <Grid
            item
            xs={4}
            sm={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                borderRadius: "20px",
                height: "150px",
                width: "130px",
                background: "rgb(217, 255, 199)",
                padding: "10px",
              }}
            >
              <img
                src="https://www.paperplanetech.co/static/media/CardV2.de7fbad3321b4a22d78731e3e6efddc2.svg"
                alt=",curiosity"
              />
              <p style={{ float: "bottom", fontSize: "18px" }}>Curiosity</p>
            </Card>
          </Grid>
          <Grid
            item
            xs={4}
            sm={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                borderRadius: "20px",
                height: "150px",
                width: "130px",
                background: "rgb(255, 217, 205)",
                padding: "10px",
              }}
            >
              <img
                src="https://www.paperplanetech.co/static/media/CardV3.5fb05ad9de33d791b367b0c80e0f94ed.svg"
                alt="bias"
              />
              <p style={{ float: "bottom", fontSize: "18px" }}>
                Bias for Action
              </p>
            </Card>
          </Grid>
          <Grid
            item
            xs={6}
            sm={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                borderRadius: "20px",
                height: "150px",
                width: "130px",
                background: "rgb(255, 232, 161)",
                padding: "10px",
              }}
            >
              <img
                src="https://www.paperplanetech.co/static/media/CardV4.f17c1dbcd79740f8ecc8a85789933c8a.svg"
                alt="ownership"
              />
              <p style={{ float: "bottom", fontSize: "18px" }}>Ownership</p>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                borderRadius: "20px",
                height: "150px",
                width: "130px",
                background: "rgb(244, 190, 252)",
                padding: "10px",
              }}
            >
              <img
                src="https://www.paperplanetech.co/static/media/CardV5.8f5f18fd68679d0a1e75ff34d035bb67.svg"
                alt="altruism"
              />
              <p style={{ float: "bottom", fontSize: "18px" }}>Altruism</p>
            </Card>
          </Grid>
        </Grid>
        <p>Our Team</p>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                height: "500px",
                width: "300px",
                background: "rgb(243, 243, 243)",
              }}
            >
              <img
                src="https://www.paperplanetech.co/static/media/Dhruv.2b7ba1ad86ffb2af6576a08e006d822f.svg"
                alt="Dhruv"
              />
              <p style={{ fontSize: "23px" }}>Dhruv Upadhyay</p>
              <p style={{ fontSize: "23px", color: "blue" }}>COO</p>
              <LinkedInIcon sx={{ color: "blue" }} />
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                height: "500px",
                width: "300px",
                background: "rgb(243, 243, 243)",
              }}
            >
              <img
                src="https://www.paperplanetech.co/static/media/Devansh.f778d5f35ca23d71d61863fa75e6dc23.svg"
                alt="Devansh"
              />
              <p style={{ fontSize: "23px" }}>Devansh Swaroop</p>
              <p style={{ fontSize: "23px", color: "blue" }}>CEO</p>
              <LinkedInIcon sx={{ color: "blue" }} />
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                height: "500px",
                width: "300px",
                background: "rgb(243, 243, 243)",
              }}
            >
              <img
                src="https://www.paperplanetech.co/static/media/Aryan.fd4aaa4518230f0b843f7d82273f736c.svg"
                alt="Aryan"
              />
              <p style={{ fontSize: "23px" }}>Aryan Pandey</p>
              <p style={{ fontSize: "23px", color: "blue" }}>CPO</p>
              <LinkedInIcon sx={{ color: "blue" }} />
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                height: "500px",
                width: "300px",
                background: "rgb(243, 243, 243)",
              }}
            >
              <img
                src="https://www.paperplanetech.co/static/media/Varun.734546baea9cffa1db8ee348d1f35e0a.svg"
                alt="Varun"
              />
              <p style={{ fontSize: "23px" }}>varun Goel</p>
              <p style={{ fontSize: "23px", color: "blue" }}>CTO</p>
              <LinkedInIcon sx={{ color: "blue" }} />
            </Card>
          </Grid>
        </Grid>
      </Container>
      <TailBar />
    </>
  );
}

export default AboutUsPage;
