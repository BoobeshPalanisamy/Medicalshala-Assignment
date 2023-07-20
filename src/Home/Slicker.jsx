import { Box, Button, Card, Container } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

function Slicker() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Container>
      <Slider {...settings} style={{ padding: "0 100px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ height: "500px", width: "320px" }}>
            <img
              src="data:image/png;base64,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"
              alt="doublecomma"
              height="30px"
              width="30px"
              style={{ padding: "10px 0 0 10px" }}
            />
            <p
              style={{
                fontSize: "25px",
                color: "rgba(0, 0, 0, 0.54)",
                margin: "20px 20px 0 20px",
              }}
            >
              Paperplane WhatsApp Clinic assist me to create my own social media
              brand. I can provide my patients with best care by sending them
              personalised and automated medicine & follow up reminders while
              maintaining a proper patient database in my mobile phone itself.
            </p>
            <Box sx={{ display: "flex" }}>
              <img
                src="https://www.paperplanetech.co/static/media/Viralimage.c35462908284482ef2a3.57c32ed598a7f42aae18.png"
                alt="viralsinhraj"
                height="60px"
                width="60px"
                style={{ borderRadius: "50%", marginTop: "40px" }}
              />
              <Box>
                <p
                  style={{
                    fontSize: "25px",
                    margin: "20px 20px 0 20px",
                  }}
                >
                  Dr. Viralsinhraj
                </p>
                <p
                  style={{
                    fontSize: "25px",
                    color: "rgba(0, 0, 0, 0.54)",
                    margin: "20px 20px 0 20px",
                  }}
                >
                  Raj Diabetes Care, Gujarat
                </p>
              </Box>
            </Box>
          </Card>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ height: "500px", width: "320px" }}>
            <img
              src="data:image/png;base64,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"
              alt="doublecomma"
              height="30px"
              width="30px"
              style={{ padding: "10px 0 0 10px" }}
            />
            <p
              style={{
                fontSize: "25px",
                color: "rgba(0, 0, 0, 0.54)",
                margin: "20px 20px 0 20px",
              }}
            >
              Paperplane provides a smooth digital prescription writing
              interface and I can directly share all those prescriptions over
              WhatsApp to give my patients a seamless consultation experience!
            </p>
            <Box sx={{ display: "flex" }}>
              <img
                src="https://www.paperplanetech.co/static/media/drnaman-min_11zon.19b7689bd0e66b195f98.19b7689bd0e66b195f98.png"
                alt="viralsinhraj"
                height="60px"
                width="60px"
                style={{ borderRadius: "50%", marginTop: "40px" }}
              />
              <Box>
                <p
                  style={{
                    fontSize: "25px",
                    margin: "20px 20px 0 20px",
                  }}
                >
                  Dr. Naman kanodia
                </p>
                <p
                  style={{
                    fontSize: "25px",
                    color: "rgba(0, 0, 0, 0.54)",
                    margin: "20px 20px 0 20px",
                  }}
                >
                  SS Pedia Ortho Cetre, Uttar Pradesh
                </p>
              </Box>
            </Box>
          </Card>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ height: "500px", width: "320px" }}>
            <img
              src="data:image/png;base64,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"
              alt="doublecomma"
              height="30px"
              width="30px"
              style={{ padding: "10px 0 0 10px" }}
            />
            <p
              style={{
                fontSize: "25px",
                color: "rgba(0, 0, 0, 0.54)",
                margin: "20px 20px 0 20px",
              }}
            >
              Website delivery was super fast adding on to which my Paperplane's
              WhatsApp Assistant never forgets to send follow up reminders to my
              patients so they never miss out on any vaccination.
            </p>
            <Box sx={{ display: "flex" }}>
              <img
                src="https://www.paperplanetech.co/static/media/nidhika-min_11zon.e054f0da091438f3d3b4.202bdcf988a8b7d2d323.png"
                alt="nidhika"
                height="60px"
                width="60px"
                style={{ borderRadius: "50%", marginTop: "40px" }}
              />
              <Box>
                <p
                  style={{
                    fontSize: "25px",
                    margin: "20px 20px 0 20px",
                  }}
                >
                  Dr. Nidhika Pandey
                </p>
                <p
                  style={{
                    fontSize: "25px",
                    color: "rgba(0, 0, 0, 0.54)",
                    margin: "20px 20px 0 20px",
                  }}
                >
                  SS Pedia Ortho Cetre, Uttar Pradesh
                </p>
              </Box>
            </Box>
          </Card>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ height: "500px", width: "320px" }}>
            <img
              src="data:image/png;base64,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"
              alt="doublecomma"
              height="30px"
              width="30px"
              style={{ padding: "10px 0 0 10px" }}
            />
            <p
              style={{
                fontSize: "25px",
                color: "rgba(0, 0, 0, 0.54)",
                margin: "20px 20px 0 20px",
              }}
            >
              Website delivery was super fast adding on to which my Paperplane's
              WhatsApp Assistant never forgets to send follow up reminders to my
              patients so they never miss out on any vaccination.
            </p>
            <Box sx={{ display: "flex" }}>
              <img
                src="https://www.paperplanetech.co/static/media/paramjeetimg.cf6635cfdcf3bc4e1751.11cfcf5d933699108046.png"
                alt="paramjit"
                height="60px"
                width="60px"
                style={{ borderRadius: "50%", marginTop: "40px" }}
              />
              <Box>
                <p
                  style={{
                    fontSize: "25px",
                    margin: "20px 20px 0 20px",
                  }}
                >
                  Dr. Paramjit Singh Juneja
                </p>
                <p
                  style={{
                    fontSize: "25px",
                    color: "rgba(0, 0, 0, 0.54)",
                    margin: "20px 20px 0 20px",
                  }}
                >
                  Uttar Pradesh
                </p>
              </Box>
            </Box>
          </Card>
        </div>
      </Slider>
      <Card sx={{ display: "flex", margin: "30px 100px" }}>
        <Box sx={{ width: "50%", padding: "30px" }}>
          <h1>Contact Us</h1>
          <p style={{ color: "#4D63DD" }}>
            <EmailIcon /> support@paperplanetech.co
          </p>
          <p style={{ color: "#4D63DD" }}>
            <CallIcon /> +91 6387662004
          </p>
        </Box>
        <Box sx={{ width: "50%", padding: "0 100px" }}>
          <p style={{ color: "rgba(0,0,0,0.54)", fontSize: "23px" }}>
            For any queries enter your Phone Number and we will get back to you
          </p>
          <Box sx={{ position: "relative", display: "flex", margin: "0 40px" }}>
            <input
              placeholder="Your phone number"
              style={{
                borderRadius: "30px",
                border: "1px solid",
                height: "46px",
                width: "100px",
                padding: "0 40px 0 20px",
                flex: 1,
              }}
            />
            <Button
              sx={{
                borderRadius: "30px",
                color: "#fff",
                background:
                  "linear-gradient(128.8deg, rgb(77, 99, 221) 28.61%, rgb(34, 161, 245) 99.07%)",
                position: "absolute",
                top: 0,
                right: 0,
                height: "40px",
                zIndex: 1,
                margin: "4px",
                textTransform: "none",
              }}
            >
              Connect
            </Button>
          </Box>
        </Box>
      </Card>
    </Container>
  );
}

export default Slicker;
