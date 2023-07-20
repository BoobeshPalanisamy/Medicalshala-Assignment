import { Box, Button, Card, Container, Grid } from "@mui/material";
import React from "react";

function BlogsFeauturesServices() {
  return (
    <Container>
      <Box sx={{ textAlign: "center" }}>
        <h1>Blogs</h1>
        <p style={{ fontSize: "25px" }}>
          Grow your medical practice with guides & articles from the best in
          business
        </p>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        <Card
          sx={{
            width: "150px",
            height: "450px",
            backgroundColor: "rgb(239, 241, 247)",
          }}
        >
          <img
            src="https://www.paperplanetech.co/static/media/thumbnail1.a73053b54f875cdb7d19.png"
            alt="thmbnail"
            height="100px"
            width="100px"
            style={{ paddingLeft: "15%", paddingTop: "10px" }}
          />
          <h4 style={{ fontSize: "25px", textAlign: "center" }}>
            How to set up your digital clinic in 7 minutes?
          </h4>
          <Button
            sx={{
              color: "#19BCCC",
              border: "1px solid rgba(25, 188, 204, 0.5)",
              fontWeight: 700,
              textTransform: "none",
              width: "75px",
              marginLeft: "23%",
            }}
          >
            Read More
          </Button>
        </Card>
        <Card
          sx={{
            width: "150px",
            height: "450px",
            backgroundColor: "rgb(239, 241, 247)",
          }}
        >
          <img
            src="https://www.paperplanetech.co/static/media/thumbnail2.9a8e8e6e41b343f21cc1.png"
            alt="thmbnail"
            height="100px"
            width="100px"
            style={{ paddingLeft: "15%", paddingTop: "10px" }}
          />
          <h4 style={{ fontSize: "25px", textAlign: "center" }}>
            How to set up your Google Business Profile (GMB) for your clinic?
          </h4>
          <Button
            sx={{
              color: "#19BCCC",
              border: "1px solid rgba(25, 188, 204, 0.5)",
              fontWeight: 700,
              textTransform: "none",
              width: "75px",
              marginLeft: "23%",
            }}
          >
            Read More
          </Button>
        </Card>
        <Card></Card>
      </Box>
    </Container>
  );
}

export default BlogsFeauturesServices;
