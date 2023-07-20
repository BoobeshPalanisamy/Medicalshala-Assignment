import React from "react";
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
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

function StartNowPage() {
  return (
    <Container>
      <Box justifyContent="center" display="flex">
        <img
          src="https://website.paperplane.clinic/static/media/Logo%20Light.3fe0039f27d19f47fae0.png"
          alt="logo"
          height="75px"
          width="150px"
        />
      </Box>
      <Card sx={{ margin: "0 40px", height: "400px" }}>
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <img
              src="https://website.paperplane.clinic/static/media/LoginArt.dbda704494786332aa53d225e4fcfb3f.svg"
              alt="doc"
              height="600px"
              width="500px"
              style={{ margin: "0 20px 0px 20px" }}
            />
          </Grid>
          <Grid
            item
            sm={6}
            sx={{ display: "flex", flexDirection: "column", padding: "0 50px" }}
          >
            <h1 style={{ textAlign: "center" }}>Create an account</h1>
            <PhoneAndroidIcon
              sx={{ height: "100px", width: "100px", margin: "0 40%" }}
            />
            <p style={{ textAlign: "center", fontSize: "20px" }}>
              Phone number
            </p>
            <input
              type="tel"
              placeholder="+91"
              style={{
                borderRadius: "30px",
                height: "40px",
                border: "0.2px solid grey",
                  margin: "0 20%",
                padding:"0 10px"
              }}
            />
            <Button
              sx={{
                color: "white",
                background: "blue",
                borderRadius: "30px",
                margin: "10px 35%",
              }}
            >
              Send OTP
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default StartNowPage;
