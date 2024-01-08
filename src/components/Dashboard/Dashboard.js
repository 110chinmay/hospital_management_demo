import React from "react";
import Navbar from "../Navbar/Navbar";
import InfoCard from "../DetailsCards/InfoCard";
import Grid from "@mui/material/Unstable_Grid2";

function Dashboard() {
  return (
    <div>
      <Navbar />
      {/* <div style={{ display: "flex", margin: "1.5rem" }}> */}
      <Grid container spacing={2} sx={{ margin: "1.5rem" }}>
        <Grid xs={4}>
          <InfoCard
            title="Doctor"
            icon="/images/cards/doctor-icon.png"
            description="View Details of Doctor"
          />
        </Grid>
        <Grid xs={4}>
          <InfoCard
            title="Patient"
            icon="/images/cards/patient-icon.png"
            description="View Details of Patient"
          />
        </Grid>
        <Grid xs={4}>
          <InfoCard
            title="Appoinment"
            icon="/images/cards/appointment-icon.png"
            description="View Details of Appointment"
          />
        </Grid>
      </Grid>
      {/* </div> */}
    </div>
  );
}

export default Dashboard;
