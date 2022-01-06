import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WorkIcon from "@mui/icons-material/Work";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DescriptionIcon from "@mui/icons-material/Description";

const Details = () => {
  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>Welcome Mohamed Atheel</h1>
      <Card sx={{ maxWidth: 700 }}>
        <CardContent>
        <div className="add_btn"> 
                <button className="btn btn-primary"><CreateIcon/></button>
                    <button className="btn btn-danger"><DeleteOutlineIcon/></button>
                </div>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <img src="../images/profile.png" style={{ width: 50 }} />
              <h3 className="mt-3">
                Name: <span>Mohamed Atheel</span>
              </h3>
              <h3 className="mt-3">
                Age:<span>20</span>
              </h3>
              <p className="mt-3">
                <MailOutlineIcon />
                Email: <span>aathilmazz1234@gmail.com</span>
              </p>
              <p className="mt-3">
                <WorkIcon />
                Occupation: <span>webdeveloper</span>
              </p>
            </div>

            <div className="Right_view col-lg-6 col-md-6 col-12">
                

              <p className="mt-5">
                <PhoneAndroidIcon />
                Mobile:<span>+94750755684</span>
              </p>
              <p className="mt-3">
                <LocationOnIcon />
                location:<span>Sri Lanka</span>
              </p>
              <p className="mt-3">
                <DescriptionIcon />
                Description:
                <span>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout
                </span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
