import {
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

function TotalCountCard() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={7}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={6} md={4}>
            <CardMedia
              image="https://www.paperplanetech.co/static/media/bg1.2bf14774e3f4a0e0a3a2.png"
              sx={{
                minWidth: 275,
                maxWidth: 275,
                height: 275,
                boxShadow:
                  "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;",
                borderRadius: "18px 18px 0 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                lineHeight: 0,
              }}
            >
              <p
                style={{
                  color: "#22a1f5",
                  fontWeight: "600",
                  fontSize: "40px",
                }}
              >
                600,000+
              </p>
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: 300,
                  fontFamily: "Montserrat",
                }}
              >
                Patients
              </p>
            </CardMedia>
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <CardMedia
              image="https://www.paperplanetech.co/static/media/bg2.83fc2cac0cea9ea13514.png"
              sx={{
                minWidth: 275,
                maxWidth: 275,
                height: 275,
                boxShadow:
                  "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;",
                borderRadius: "18px 18px 0 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                lineHeight: 0,
                padding: 0,
              }}
            >
              <p
                style={{
                  color: "#22a1f5",
                  fontWeight: "600",
                  fontSize: "40px",
                }}
              >
                3,000+
              </p>
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: 300,
                  fontFamily: "Montserrat",
                }}
              >
                Doctors
              </p>
            </CardMedia>
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <CardMedia
              image="https://www.paperplanetech.co/static/media/bg1.2bf14774e3f4a0e0a3a2.png"
              sx={{
                minWidth: 275,
                maxWidth: 275,
                height: 275,
                boxShadow:
                  "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;",
                borderRadius: "18px 18px 0 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                lineHeight: 0,
                padding: 0,
              }}
            >
              <p
                style={{
                  color: "#22a1f5",
                  fontWeight: "600",
                  fontSize: "40px",
                }}
              >
                100,000+
              </p>
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: 300,
                  fontFamily: "Montserrat",
                }}
              >
                Appointments
              </p>
            </CardMedia>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default TotalCountCard;
