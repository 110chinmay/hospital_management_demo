import React from "react";
import { Input } from "@mui/base/Input";
import Navbar from "../Navbar/Navbar";
import { FormControl } from "@mui/base/FormControl";
import Grid from "@mui/material/Unstable_Grid2";
import "./formCommon.css";
import Button from "@mui/material/Button";

function AddDoctorForm() {
  const onSubmit = () => {
    console.log("hello");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <Grid
        container
        spacing={2}
        sx={{
          margin: "1.5rem",
          borderRadius: "12px 12px 0 0",
          border: "1px solid #E5EAF2",
          backgroundColor: "rgba(243, 246, 249, 0.6)",
          padding: "24px",
        }}
      >
        <Grid xs={12}>
          <h2>Add Doctor Details</h2>
        </Grid>

        <Grid xs={6}>
          <FormControl defaultValue="" required className="margin-between">
            <label>Doctor name</label>
            <Input placeholder="Doctor name" className="input-width" />
          </FormControl>
        </Grid>
        <Grid xs={6}>
          <FormControl defaultValue="" required className="margin-between">
            <label>Doctor speciality</label>
            <Input placeholder="Doctor speciality" className="input-width" />
          </FormControl>
        </Grid>
        <Grid xs={6}>
          <FormControl defaultValue="" required className="margin-between">
            <label>Doctor education</label>
            <Input placeholder="Doctor education" className="input-width" />
          </FormControl>
        </Grid>
        <Grid xs={6}>
          <FormControl defaultValue="" required className="margin-between">
            <label>Doctor Collage</label>
            <Input placeholder="Doctor Collage" className="input-width" />
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <Button
            style={{ textAlign: "center" }}
            variant="contained"
            onClick={onSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default AddDoctorForm;
