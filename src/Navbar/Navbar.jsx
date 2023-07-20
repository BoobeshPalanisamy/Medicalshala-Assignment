import { AppBar, Box, Button, Chip } from "@mui/material";
import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const moveToBlogs = () => {
    navigate("/blogs");
  };
  const moveToABHA = () => {
    navigate("/abha");
  };
  const moveToHome = () => {
    navigate("/");
  };
  const moveToBnPl = () => {
    navigate("/buynowpaylater");
  };
  const moveToAboutUs = () => {
    navigate("/aboutus");
  };

  const isCurrentPath = (path) => {
    return location.pathname === path;
  };
  return (
    <>
      <AppBar position="sticky">
        <Box
          sx={{
            height: "50px",
            width: "100vw",
            backgroundColor: "rgb(77, 99, 221)",
            fontSize: "18px",
            fontFamily: "Montserrat",
            font: "400",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          💡 Hear it from our customers, on how to use Paperplane.
          <span style={{ textDecoration: "underline", display: "flex" }}>
            Learn more
            <KeyboardDoubleArrowRightIcon />
          </span>
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            height: "90px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://www.paperplanetech.co/static/media/Group%2036999.7b7b35f4476bfaad811c.png"
            alt="log"
            height="60px"
            width="225px"
          />
          <Box sx={{ color: "black" }}>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                fontFamily: "Montserrat",
                color: "rgb(101, 101, 101)",
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "300",
                gap: "10px",
              }}
            >
              <li
                style={{
                  cursor: "pointer",
                  color: isCurrentPath("/") ? "rgb(25, 188, 204)" : "inherit",
                  fontWeight: isCurrentPath("/") ? "bold" : "inherit",
                }}
                onClick={moveToHome}
              >
                Home
              </li>
              <li
                style={{
                  position: "relative",
                  cursor: "pointer",
                  color: isCurrentPath("/buynowpaylater")
                    ? "rgb(25, 188, 204)"
                    : "inherit",
                  fontWeight: isCurrentPath("/buynowpaylater")
                    ? "bold"
                    : "inherit",
                }}
                onClick={moveToBnPl}
              >
                Buy Now Pay Later
                <Chip
                  sx={{
                    height: "14px",
                    width: "30px",
                    backgroundColor: "red",
                    color: "#fff",
                    fontSize: "10px",
                    "& .MuiChip-label": {
                      padding: 0,
                    },
                    position: "absolute",
                    right: "-8px",
                    top: "-7px",
                  }}
                  label="New"
                />
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCCIs3vb1mC15PrdPQBwgdjQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "rgb(101, 101, 101)",
                    textDecoration: "none",
                  }}
                >
                  Videos
                </a>
              </li>
              <li
                onClick={moveToBlogs}
                style={{
                  cursor: "pointer",
                  color: isCurrentPath("/blogs")
                    ? "rgb(25, 188, 204)"
                    : "inherit",
                  fontWeight: isCurrentPath("/blogs") ? "bold" : "inherit",
                }}
              >
                Blogs
              </li>
              <li
                style={{
                  position: "relative",
                  cursor: "pointer",
                  color: isCurrentPath("/abha")
                    ? "rgb(25, 188, 204)"
                    : "inherit",
                  fontWeight: isCurrentPath("/abha") ? "bold" : "inherit",
                }}
                onClick={moveToABHA}
              >
                ABHA
                <Chip
                  label="New"
                  className="new-chip"
                  sx={{
                    height: "14px",
                    width: "30px",
                    backgroundColor: "red",
                    color: "#fff",
                    fontSize: "10px",
                    "& .MuiChip-label": {
                      padding: 0,
                    },
                    position: "absolute",
                    right: "-8px",
                    top: "-7px",
                  }}
                />
              </li>
              <li
                onClick={moveToAboutUs}
                style={{
                  cursor: "pointer",
                  color: isCurrentPath("/aboutus")
                    ? "rgb(25, 188, 204)"
                    : "inherit",
                  fontWeight: isCurrentPath("/aboutus") ? "bold" : "inherit",
                }}
              >
                About Us
              </li>
            </ul>
          </Box>
          <Box
            className="nav-btn"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "150px",
              paddingLeft: "20px",
            }}
          >
            <Button
              className="downloadapp-button"
              sx={{
                textTransform: "none",
                background:
                  "linear-gradient(128.8deg, #4D63DD 28.61%, #22A1F5 99.07%)",
                color: "#fff",
                borderRadius: "40px",
                padding: "6px 18px",
              }}
            >
              <a
                href="https://play.google.com/store/apps/details?id=paperplane.health.app&hl=en_GB&gl=IN"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Download App
              </a>
            </Button>
            <Button
              className="login-button"
              sx={{
                width: "100px",
                textTransform: "none",
                border: "1px solid rgba(77, 99, 221, 0.5)",
                borderRadius: "40px",
                padding: "6px 20px",
                fontWeight: "700",
                right: "-50px",
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </AppBar>
    </>
  );
}

export default Navbar;
