import { Box, Grid } from "@mui/material";
import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function TailBar() {
  return (
    <Box
      sx={{
        padding: "10px 20px",
        background: "rgb(242, 242, 242)",
        position: "absolute",
        marginTop: "10px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item sm={3}>
          <Box>
            <img
              src="https://www.paperplanetech.co/static/media/Group%2036999.7b7b35f4476bfaad811c.png"
              alt="Logo"
              height="50px"
              width="100px"
              style={{ marginLeft: "20px" }}
            />
            <Box sx={{ display: "flex", marginTop: "10px", gap: "10px" }}>
              <img
                src="https://www.paperplanetech.co/static/media/isoLogo.0db990a9c89c2c4e3c76.png"
                alt="isms"
                height="75px"
                width="75px"
              />
              <img
                src="https://www.paperplanetech.co/static/media/hippa.6c76f80ff5d76b727ef4.png"
                alt="hippa"
                height="75px"
                width="75px"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item sm={3}>
          <p>About Us</p>
          <p>Privacy Policy</p>
        </Grid>
        <Grid item sm={3}>
          <p>Cancellation Policy</p>
        </Grid>
        <Grid item sm={3}>
          <p>Terms and Conditions</p>
        </Grid>
        <Grid item sm={6}>
          <p style={{ color: "rgba(0, 0, 0, 0.54)" }}>
            <CopyrightIcon color="primary" />
            Copyright 2023 Paperplane Communications Pvt. Ltd. All Rights
            Reserved
          </p>
        </Grid>
        <Grid item sm={6} sx={{ paddingRight: "50px" }}>
          <FacebookIcon sx={{ float: "right" }} />
          <TwitterIcon sx={{ float: "right" }} />
          <InstagramIcon sx={{ float: "right" }} />
          <LinkedInIcon sx={{ float: "right" }} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default TailBar;
