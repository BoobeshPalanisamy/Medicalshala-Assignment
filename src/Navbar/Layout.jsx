import React from "react";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar></Navbar>
      <Box
        sx={{
          marginTop: "1px",
          marginBottom: 4,
        }}
      >
        <Outlet />
      </Box>
    </div>
  );
}

export default Layout;
