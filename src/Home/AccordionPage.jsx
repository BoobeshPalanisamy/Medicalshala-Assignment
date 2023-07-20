import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Container } from "@mui/material";

function AccordionPage() {
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Frequently asked questions</h1>
      <Box sx={{ margin: "0 100px" }}>
        <Accordion
          sx={{ marginBottom: "20px", borderRadius: "10px", border: "none" }}
          square="true"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ padding: "15px 20px" }}>
              How are we different from other Healthcare providers?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "rgba(0,0,0,0.54)", padding: "0 20px" }}>
              Paperplane is a healthcare platform with an integrated EMR
              solution completely builton Top of Whatsapp that enables doctors
              to connect with their patients on their patients on their favorite
              messaging app.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ marginBottom: "20px", borderRadius: "10px", border: "none" }}
          square="true"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ padding: "15px 20px" }}>
              How will I be getting new patients via Paperplane?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "rgba(0,0,0,0.54)" }}>
              Paperplane offers the doctor, the ability to establish their own
              brand and attract new patients via a variety of channels,
              including their website, organic search results on Google Search
              (Via Google My Business), advertisements on a variety of social
              media platforms, along with WhatsApp Marketing
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ marginBottom: "20px", borderRadius: "10px", border: "none" }}
          square="true"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ padding: "15px 20px" }}>
              Does Paperplane support WhatsApp Broadcasting?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "rgba(0,0,0,0.54)" }}>
              Yes, Paperplane offers a complete marketing suite for doctors,
              which enables them to distribute informative posters on a variety
              of social media platforms, run advertisements via their own
              portfolio website, and even broadcast their own branded template
              messages and posters.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ marginBottom: "20px", borderRadius: "10px", border: "none" }}
          square="true"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ padding: "15px 20px" }}>
              Is Paperplane for Individual Doctors or Hospitals?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "rgba(0,0,0,0.54)" }}>
              We have two product offerings, Paperplane Lite which is for
              individual practitioners and second is Paperplane Enterprise which
              is a complete whitelabelled solution for Hospitals and
              Polyclinics.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ marginBottom: "20px", borderRadius: "10px", border: "none" }}
          square="true"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ padding: "15px 20px" }}>
              How secure is Paperplane?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "rgba(0,0,0,0.54)" }}>
              Our product is HIPPA Compliant as well as ISO Certified so all the
              data of the client is stored in encrypted format on cloud which is
              completely secure. To read our privacy policy please visit
              https://www.paperplane.health/privacyPolicy
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}

export default AccordionPage;
