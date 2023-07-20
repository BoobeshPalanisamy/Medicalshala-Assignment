import { Box, Button, Card, Container, TextField } from "@mui/material";
import React from "react";

function ContactPage() {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ display: "flex", height: "400px" }}>
        <Box
          sx={{
            background: "#fff",
            padding: "30px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1>Get started now</h1>
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            For any queries enter your Phone Number and we will get back to you
          </p>
          <Box sx={{ position: "relative", display: "flex",margin:"0 100px" }}>
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
        <Box
          sx={{
            background: "rgb(77, 99, 221)",
            color: "#fff",
            display: "flex",
            padding: "0 40px",
          }}
        >
          <Box sx={{ paddingRight: "50px" }}>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "100",
                textAlign: "center",
                padding: "0 100px 0 40px",
              }}
            >
              The Paperplane app is now
            </p>
            <h1
              style={{
                padding: "0 100px 0 40px",
                textAlign: "center",
              }}
            >
              Available on Android & ios!
            </h1>
          </Box>
          <img
            src="https://www.paperplanetech.co/static/media/Vectary%20texture.e21295fe27bde8d62a73.png"
            alt="mobile"
            height="400px"
            width="200px"
            style={{ position: "absolute", right: "-30px" }}
          />
        </Box>
      </Card>
    </Container>
  );
}

export default ContactPage;
