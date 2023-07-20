import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function ClinicsTogglePage() {
  const navigate = useNavigate();
  const moveToStartNow = () => {
    navigate("/startnow");
  };
  return (
    <Container sx={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Box display="flex">
            <Box>
              <p style={{ fontWeight: 600, marginBottom: "0px" }}>Paperplane</p>
              <p style={{ marginTop: "0px" }}>Right for 👇</p>
            </Box>
            <span
              style={{
                padding: "0.5rem",
                background:
                  "linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)",
                color: "#fff",
                borderRadius: "11px",
                height: "20px",
              }}
            >
              Clinic
            </span>
          </Box>
          <Button
            sx={{
              fontWeight: 700,
              background:
                "linear-gradient(128.8deg, #4D63DD 28.61%, #22A1F5 99.07%)",
              color: "#fff",
              borderRadius: "30px",
              textTransform: "none",
              fontSize: "20px",
              padding: "10px 25px",
            }}
            onClick={moveToStartNow}
          >
            Start Now
          </Button>
        </Box>
      </Box>
      <Card
        sx={{
          maxWidth: 150,
          borderRadius: "20px",
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{
              height: "120px",
              background: "rgba(161, 176, 255, 0.5)",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="data:image/png;base64,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"
              alt="img"
              height="80px"
              width="80px"
            />
          </CardMedia>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontFamily: "Montserrat",
                fontSize: "19px",
                lineHeight: "20px",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Small Clinic
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card
        sx={{
          maxWidth: 150,
          borderRadius: "20px",
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{
              height: "120px",
              background: "rgba(161, 176, 255, 0.5)",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="data:image/png;base64,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"
              alt="img"
              height="80px"
              width="80px"
            />
          </CardMedia>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontFamily: "Montserrat",
                fontSize: "19px",
                lineHeight: "20px",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Independent Practioner
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}

export default ClinicsTogglePage;
