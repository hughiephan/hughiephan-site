import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import HeaderLandingDocSignature from "../../../components/header/landing/HeaderLandingDocSignature";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import HeroBannerThree from "../../../components/hero-banner/HeroBannerThree";
// import GoogleSheetEmbed from "../../../views/GoogleSheetEmbed";

const Content = () => {
  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>Content</title>
      </Helmet>
      {/* End Page SEO Content */}
      <HeaderLandingDocSignature />
      <div className="fancy-hero-six">
        <div className="container">
          <h1 className="heading">Content</h1>
          <p className="sub-heading">
            Medium blogs and youtube videos
          </p>
          <ul className="d-flex justify-content-center">
            <li>
              <a href="https://medium.com/@hughiephan" target="_blank" rel="noreferrer">
                <i className="fa fa-medium"> </i>
              </a>
            </li>
            <li style={{ marginLeft: "10px" }}>
              <a href="https://www.youtube.com/@hughiephan" target="_blank" rel="noreferrer">
                <i className="fa fa-youtube-play"> </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <TableContainer style={{ position: "relative", backgroundColor: "transparent" }} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Series</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Details</TableCell>
                <TableCell>Medium</TableCell>
                <TableCell>Youtube</TableCell>
                <TableCell>Deadline</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow key="1" sx="background-color:rgb(255, 253, 233);">
                  <TableCell>In Theory</TableCell>
                  <TableCell>How to make MemAI</TableCell>
                  <TableCell>Language model</TableCell>
                  <TableCell>https://medium.com/p/efa6d17106f9/edit</TableCell>
                  <TableCell>TBD</TableCell>
                  <TableCell>AI & Safety Presentation (March 3, 2025)</TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {/* <GoogleSheetEmbed></GoogleSheetEmbed> */}
    </div>
  );
};

export default Content;
