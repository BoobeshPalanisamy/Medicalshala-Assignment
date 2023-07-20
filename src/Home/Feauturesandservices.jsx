import { Box, Card, Container, Grid } from '@mui/material'
import React from 'react'

function Feauturesandservices() {
  return (
    <Container>
      <Box sx={{ textAlign: "center" }}>
        <h1>Feautures & Services</h1>
      </Box>
      <Box sx={{ padding: "20px 80px" }}>
        <Grid container spacing={2}>
          <Grid item sx={4} lg={4}>
            <Card sx={{ boxShadow: "none", height: "350px", width: "230px" }}>
              <img
                src="https://www.paperplanetech.co/static/media/whatsapp%20(1).d026940870fb334920b7.png"
                alt="whatsapp"
                height="70px"
                Weight="70px"
              />
              <h6
                style={{
                  fontSize: "25px",
                  color: "grey",
                  marginBottom: 0,
                  marginTop: "20px",
                }}
              >
                Your own WhatsApp Assistant
              </h6>
              <p style={{ fontSize: "23px" }}>
                Automatically get appointments and stay in touch with your
                patients using WhatsApp
              </p>
            </Card>
          </Grid>
          <Grid item sx={4} lg={4}>
            <Card sx={{ boxShadow: "none", height: "350px", width: "230px" }}>
              <img
                src="https://www.paperplanetech.co/static/media/other.154faf92e65289405f66.png"
                alt="tool"
                height="70px"
                Weight="70px"
              />
              <h6
                style={{
                  fontSize: "25px",
                  color: "grey",
                  marginBottom: 0,
                  marginTop: "20px",
                }}
              >
                All in 1 Practice Management tool
              </h6>
              <p style={{ fontSize: "23px" }}>
                Digital your practice within minutes. One platform for staff,
                doctors and admin to manage your clinic.
              </p>
            </Card>
          </Grid>
          <Grid item sx={4} lg={4}>
            <Card sx={{ boxShadow: "none", height: "350px", width: "230px" }}>
              <img
                src="https://www.paperplanetech.co/static/media/website%20icon.96631a900572d65a9c78.png"
                alt="tool"
                height="70px"
                Weight="70px"
              />
              <h6
                style={{
                  fontSize: "25px",
                  color: "grey",
                  marginBottom: 0,
                  marginTop: "20px",
                }}
              >
                Get Free website
              </h6>
              <p style={{ fontSize: "23px" }}>
                Grow your digital presence. Get your own personalised website in
                less than 5 minutes.
              </p>
            </Card>
          </Grid>
          <Grid item sx={4} lg={4}>
            <Card sx={{ boxShadow: "none", height: "350px", width: "230px" }}>
              <img
                src="https://www.paperplanetech.co/static/media/worldwide%20brand.87a3d9b2ea8ea192aaff.png"
                alt="global"
                height="70px"
                Weight="70px"
              />
              <h6
                style={{
                  fontSize: "25px",
                  color: "grey",
                  marginBottom: 0,
                  marginTop: "20px",
                }}
              >
                Create a Global Brand
              </h6>
              <p style={{ fontSize: "23px" }}>
                Create & Grow your personal brand digitally. Expand your
                practice globally under your own brand.
              </p>
            </Card>
          </Grid>
          <Grid item sx={4} lg={4}>
            <Card sx={{ boxShadow: "none", height: "350px", width: "230px" }}>
              <img
                src="https://www.paperplanetech.co/static/media/Patient%20connected.9e4cd62774f60786067a.png"
                alt="global"
                height="70px"
                Weight="70px"
              />
              <h6
                style={{
                  fontSize: "25px",
                  color: "grey",
                  marginBottom: 0,
                  marginTop: "20px",
                }}
              >
                Stay connected to patients
              </h6>
              <p style={{ fontSize: "23px" }}>
                Send medicine reminders, Follow-up reminders, medical advice and
                documents on WhatsApp
              </p>
            </Card>
          </Grid>
          <Grid item sx={4} lg={4}>
            <Card sx={{ boxShadow: "none", height: "350px", width: "230px" }}>
              <img
                src="https://www.paperplanetech.co/static/media/E%20Rx.40ebc3b2c30714b4e25a.png"
                alt="global"
                height="70px"
                Weight="70px"
              />
              <h6
                style={{
                  fontSize: "25px",
                  color: "grey",
                  marginBottom: 0,
                  marginTop: "20px",
                }}
              >
                Beautiful & Quick Digital Rx
              </h6>
              <p style={{ fontSize: "23px" }}>
                Generate and share AI powered digital Prescriptions via your
                phone or laptop in &#60;30 seconds
              </p>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Feauturesandservices
