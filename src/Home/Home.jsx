import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Marqueeslider from "./Marqueeslider";
import TotalCountCard from "./TotalCountCard";
import ToggleHomeButton from "./ToggleHomeButton";
import CreateAbhaIdPage from "./CreateAbhaIdPage";
import BlogsFeauturesServices from "./BlogsFeauturesServices";
import ContactPage from "./ContactPage";
import DemoPage from "./DemoPage";
import Aboutus from "./Aboutus";
import Slicker from "./Slicker";
import AccordionPage from "./AccordionPage";
import TailBar from "./TailBar";
import Feauturesandservices from "./Feauturesandservices";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const moveToStartNow = () => {
    navigate("/startnow", { target: "_blank" });
  };
  return (
    <>
      <Container
        sx={{
          fontFamily: "Montserrat",
        }}
      >
        <Grid container spacing={2} padding="3% 10%" margin="30px 30px">
          <Grid item xs={12} sm={5.5}>
            <h1
              style={{
                lineHeight: "54px",
                fontSize: "32px",
                fontFamily: "Montserrat",
              }}
            >
              Get your own
              <span style={{ color: "rgb(25, 188, 204)" }}>
                Digital Clinic{" "}
              </span>
              on WhatsApp
              <WhatsAppIcon sx={{ color: "#32a852", fontSize: "40px" }} />
              <span style={{ color: "rgb(25, 188, 204)" }}>
                in less than 7 minutes
              </span>
              🚀
            </h1>
            <Button
              className="downloadapp-button"
              sx={{
                textTransform: "none",
                background:
                  "linear-gradient(128.8deg, #4D63DD 28.61%, #22A1F5 99.07%)",
                color: "#fff",
                borderRadius: "40px",
                padding: "10px 45px",
                fontSize: "20px",
              }}
              onClick={moveToStartNow}
            >
              Start 15-days trial now
            </Button>
            <p
              style={{
                fontSize: "20px",
                fontFamily: "Montserrat",
                fontWeight: 400,
              }}
            >
              Takes less than 60s ⚡
            </p>
            <Button
              className="login-button"
              sx={{
                textTransform: "none",
                border: "1px solid rgba(77, 99, 221, 0.5)",
                borderRadius: "40px",
                padding: "10px 40px",
                fontWeight: "700",
                fontSize: "20px",
                left: "10px",
              }}
            >
              Book a demo
            </Button>
          </Grid>
          <Grid item xs={12} sm={6.5}>
            <img
              src="https://www.paperplanetech.co/static/media/hero-image.2f231d9891424705d6d5129e181acf92.svg"
              alt="hero-image"
              height="300px"
              width="95%"
            />
          </Grid>
        </Grid>
      </Container>
      <Marqueeslider />
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "normal",
          textAlign: "center",
          padding: "40px 0",
        }}
      >
        Trusted by 1000+ Clinics and Hospitals
      </h2>
      <TotalCountCard />
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
      >
        <img
          src="https://www.paperplanetech.co/static/media/Group%2036999.7b7b35f4476bfaad811c.png"
          alt="logo"
          style={{ width: "200px" }}
        />
      </Box>
      <ToggleHomeButton />
      <Container
        sx={{
          fontFamily: "Montserrat",
        }}
      >
        <Grid container spacing={2} padding="3% 10%" margin="30px 30px">
          <Grid item xs={12} sm={6}>
            <h1
              style={{
                lineHeight: "54px",
                fontSize: "32px",
                fontFamily: "Montserrat",
              }}
            >
              <Box
                sx={{
                  background:
                    "linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)",
                  borderRadius: "4px",
                  width: "250px",
                }}
              >
                WhatsApp Clinic
              </Box>
              that's open 24/7 🏪
            </h1>
            <ul
              style={{
                color: "rgba(0, 0, 0, 0.54)",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "32px",
              }}
            >
              <li>
                Allow patients to &nbsp;
                <span style={{ color: "rgb(77, 99, 221)" }}>
                  book appointments
                </span>
              </li>
              <li>
                Send E-Rx along with &nbsp;
                <span style={{ color: "rgb(77, 99, 221)" }}>
                  medicine & follow-up
                </span>{" "}
                reminders
              </li>
              <li>
                Collect
                <span style={{ color: "rgb(77, 99, 221)" }}> medical data</span>
              </li>
            </ul>
            <Button
              className="downloadapp-button"
              sx={{
                textTransform: "none",
                background:
                  "linear-gradient(128.8deg, #4D63DD 28.61%, #22A1F5 99.07%)",
                color: "#fff",
                borderRadius: "40px",
                padding: "10px 45px",
                fontSize: "20px",
              }}
              onClick={moveToStartNow}
            >
              Book a Demo
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="https://www.paperplanetech.co/static/media/Mockup%201%20(1).419243e36ebabf40c9e721a04b59fb8b.svg"
              alt="hero-image"
              height="350px"
              width="96%"
              style={{ paddingTop: "20px" }}
            />
          </Grid>
        </Grid>
      </Container>
      <Container
        sx={{
          fontFamily: "Montserrat",
        }}
      >
        <Grid container spacing={2} padding="3% 10%" margin="30px 30px">
          <Grid item xs={12} sm={6}>
            <img
              src="https://www.paperplanetech.co/static/media/Vid%20call%201.1350115963d643b09e66ec9a3f39df67.svg"
              alt="hero-image"
              height="350px"
              width="96%"
              style={{ paddingTop: "20px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <h1
              style={{
                lineHeight: "54px",
                fontSize: "32px",
                fontFamily: "Montserrat",
              }}
            >
              Power of both
              <Box
                sx={{
                  background:
                    "linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)",
                  borderRadius: "4px",
                  width: "250px",
                }}
              >
                online & offline
              </Box>
              in a single app 💪
            </h1>
            <ul
              style={{
                color: "rgba(0, 0, 0, 0.54)",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "32px",
              }}
            >
              <li>
                Book & manage &nbsp;
                <span style={{ color: "rgb(77, 99, 221)" }}>
                  offline appointments
                </span>
              </li>
              <li>
                Take &nbsp;
                <span style={{ color: "rgb(77, 99, 221)" }}>
                  online consultations
                </span>
              </li>
              <li>
                Write
                <span style={{ color: "rgb(77, 99, 221)" }}>
                  digital prescriptions
                </span>
              </li>
              <li>
                Manage
                <span style={{ color: "rgb(77, 99, 221)" }}>your schedule</span>
              </li>
            </ul>
            <Button
              className="downloadapp-button"
              sx={{
                textTransform: "none",
                background:
                  "linear-gradient(128.8deg, #4D63DD 28.61%, #22A1F5 99.07%)",
                color: "#fff",
                borderRadius: "40px",
                padding: "10px 45px",
                fontSize: "20px",
              }}
              onClick={moveToStartNow}
            >
              Book a Demo
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Container
        sx={{
          fontFamily: "Montserrat",
        }}
      >
        <Grid container spacing={2} padding="3% 10%" margin="30px 30px">
          <Grid item xs={12} sm={6}>
            <h1
              style={{
                lineHeight: "54px",
                fontSize: "32px",
                fontFamily: "Montserrat",
              }}
            >
              Type less and
              <Box
                sx={{
                  background:
                    "linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)",
                  borderRadius: "4px",
                  width: "160px",
                }}
              >
                write faster
              </Box>
              prescriptions with AI 🤖
            </h1>
            <ul
              style={{
                color: "rgba(0, 0, 0, 0.54)",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "32px",
              }}
            >
              <li>
                AI that &nbsp;
                <span style={{ color: "rgb(77, 99, 221)" }}>
                  learns and grows
                </span>{" "}
                with you
              </li>
              <li>
                AI based suggestions for
                <span style={{ color: "rgb(77, 99, 221)" }}>
                  {" "}
                  drugs,tests & much more
                </span>
              </li>
            </ul>
            <Button
              className="downloadapp-button"
              sx={{
                textTransform: "none",
                background:
                  "linear-gradient(128.8deg, #4D63DD 28.61%, #22A1F5 99.07%)",
                color: "#fff",
                borderRadius: "40px",
                padding: "10px 45px",
                fontSize: "20px",
              }}
              onClick={moveToStartNow}
            >
              Book a Demo
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="https://www.paperplanetech.co/static/media/Group%2036592.31da80c0efc7043e073d.png"
              alt="hero-image"
              height="350px"
              width="96%"
              style={{ paddingTop: "20px" }}
            />
          </Grid>
        </Grid>
      </Container>
      <Container
        sx={{
          fontFamily: "Montserrat",
        }}
      >
        <Grid container spacing={2} padding="3% 10%" margin="30px 30px">
          <Grid item xs={12} sm={6}>
            <img
              src="https://www.paperplanetech.co/static/media/Group%2036579.b468343784f215550107.png"
              alt="hero-image"
              height="350px"
              width="99%"
              style={{ paddingTop: "100px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <h1
              style={{
                lineHeight: "54px",
                fontSize: "32px",
                fontFamily: "Montserrat",
              }}
            >
              Build your own
              <Box
                sx={{
                  background:
                    "linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)",
                  borderRadius: "4px",
                  width: "250px",
                }}
              >
                clinic brand
              </Box>
              📣
            </h1>
            <ul
              style={{
                color: "rgba(0, 0, 0, 0.54)",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "32px",
              }}
            >
              <li>
                Personalised &nbsp;
                <span style={{ color: "rgb(77, 99, 221)" }}>
                  clinical website
                </span>
                with
                <span style={{ color: "rgb(77, 99, 221)" }}>
                  WhatsApp & Google Maps integration
                </span>
              </li>
              <li>
                Personally curated &nbsp;
                <span style={{ color: "rgb(77, 99, 221)" }}>
                  marketing content & posters
                </span>
              </li>
              <li>
                Digital marketing support on
                <span style={{ color: "rgb(77, 99, 221)" }}>
                  Instagram, Facebook & Google
                </span>
              </li>
            </ul>
            <Button
              className="downloadapp-button"
              sx={{
                textTransform: "none",
                background:
                  "linear-gradient(128.8deg, #4D63DD 28.61%, #22A1F5 99.07%)",
                color: "#fff",
                borderRadius: "40px",
                padding: "10px 45px",
                fontSize: "20px",
              }}
              onClick={moveToStartNow}
            >
              Book a Demo
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Container
        sx={{
          fontFamily: "Montserrat",
        }}
      >
        <Grid container spacing={2} padding="3% 10%" margin="30px 30px">
          <Grid item xs={12} sm={6}>
            <h1
              style={{
                lineHeight: "54px",
                fontSize: "32px",
                fontFamily: "Montserrat",
              }}
            >
              Connect with your patients through our
              <Box
                sx={{
                  background:
                    "linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)",
                  borderRadius: "4px",
                  display: "flex",
                }}
              >
                integrated WhatsApp solution
              </Box>
              💬
            </h1>
            <ul
              style={{
                color: "rgba(0, 0, 0, 0.54)",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "32px",
              }}
            >
              <li>
                <span style={{ color: "rgb(77, 99, 221)" }}>Chat</span> with
                patients
              </li>
              <li>
                send
                <span style={{ color: "rgb(77, 99, 221)" }}>prescriptions</span>
              </li>
              <li>
                Receive
                <span style={{ color: "rgb(77, 99, 221)" }}>
                  online payments
                </span>
              </li>
              <li>
                Automatic
                <span style={{ color: "rgb(77, 99, 221)" }}>
                  WhatsApp reminders
                </span>
              </li>
            </ul>
            <Button
              className="downloadapp-button"
              sx={{
                textTransform: "none",
                background:
                  "linear-gradient(128.8deg, #4D63DD 28.61%, #22A1F5 99.07%)",
                color: "#fff",
                borderRadius: "40px",
                padding: "10px 45px",
                fontSize: "20px",
              }}
              onClick={moveToStartNow}
            >
              Book a Demo
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="https://www.paperplanetech.co/static/media/Group%2036880.45abf1f1d600cbebc1f6.png"
              alt="hero-image"
              height="350px"
              width="96%"
              style={{ paddingTop: "20px" }}
            />
          </Grid>
        </Grid>
      </Container>
      <CreateAbhaIdPage />
      <h1
        style={{
          lineHeight: "54px",
          fontSize: "32px",
          fontFamily: "Montserrat",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Boost your &nbsp;
        <Box
          sx={{
            background:
              "linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)",
            borderRadius: "4px",
            display: "flex",
          }}
        >
          personal brand,patient retention & revenue
        </Box>
      </h1>

      {/* Percentage div */}
      <Container
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Box sx={{ display: "flex", gap: "40px" }}>
          <Box sx={{ width: "150px", textAlign: "center" }}>
            <Box
              sx={{ fontSize: "40px", color: "#4D63DD", fontWeight: "bold" }}
            >
              <h1 style={{ marginBottom: 0 }}>8/10</h1>
            </Box>
            <Box>
              <p style={{ fontSize: "20px" }}>
                patients feel more connected to clinics they can message.
              </p>
            </Box>
          </Box>
          <Box sx={{ width: "150px", textAlign: "center" }}>
            <Box
              sx={{ fontSize: "40px", color: "#4D63DD", fontWeight: "bold" }}
            >
              <h1 style={{ marginBottom: 0 }}>65%</h1>
            </Box>
            <Box>
              <p style={{ fontSize: "20px" }}>
                prefer messaging on WhatsApp over email or phone calls
              </p>
            </Box>
          </Box>
          <Box sx={{ width: "150px", textAlign: "center" }}>
            <Box
              sx={{ fontSize: "40px", color: "#4D63DD", fontWeight: "bold" }}
            >
              <h1 style={{ marginBottom: 0 }}>25%</h1>
            </Box>
            <Box>
              <p style={{ fontSize: "20px" }}>
                increase in repeat consultations over WhatsApp
              </p>
            </Box>
          </Box>
        </Box>
      </Container>

      <BlogsFeauturesServices />
      <Feauturesandservices />
      <ContactPage />
      <DemoPage />
      <Aboutus />
      <Slicker />
      <AccordionPage />
      <TailBar />
    </>
  );
}

export default Home;
