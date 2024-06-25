import React from "react";

const socialContent = [
  {
    icon: "fa-facebook",
    link: "https://www.facebook.com/",
  },
  {
    icon: "fa-twitter",
    link: "https://twitter.com/",
  },
  {
    icon: "fa-linkedin",
    link: "https://www.linkedin.com/",
  },
];

const ContactAddress = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-3 col-sm-5 d-lg-flex">
        <div className="address-info">
          <div className="icon d-flex align-items-end">
            <img src="images/icon/44.svg" alt="icon" />
          </div>
          <div className="title">Location</div>
          <p style={{fontSize: "25px"}} className="font-rubik">
            Vietnam,  <br /> Ho Chi Minh city
          </p>
        </div>{" "}
        {/* /.address-info  */}
      </div>
      {/* End .col */}

      <div className="col-lg-3 col-sm-5 d-lg-flex">
        <div className="address-info">
          <div className="icon d-flex align-items-end">
            <img src="images/icon/45.svg" alt="icon" />
          </div>
          <div className="title">Contact</div>
          <p style={{fontSize: "25px"}}className="font-rubik">
            @Gmail <br />
            phanthanhhuy1996
          </p>
        </div>{" "}
        {/* /.address-info  */}
      </div>
      {/* End .col */}

      <div className="col-lg-3 col-sm-5 d-lg-flex">
        <div className="address-info">
          <div className="icon d-flex align-items-end">
            <img src="images/icon/46.svg" alt="icon" />
          </div>
          <div className="title">Social Media</div>
          <p style={{fontSize: "25px"}} className="font-rubik">Find on</p>
          <ul className="d-flex justify-content-center">
              <li>
                <a href="https://www.facebook.com/groups/hughiephan" target="_blank" rel="noreferrer">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@hughiephan" target="_blank" rel="noreferrer">
                  <i className="fa fa-youtube-play"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/hughiephan" target="_blank" rel="noreferrer">
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/hughie-phan" target="_blank" rel="noreferrer">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://medium.com/@hughiephan" target="_blank" rel="noreferrer">
                  <i className="fa fa-medium"></i>
                </a>
              </li>
          </ul>
        </div>
        {/* /.address-info  */}
      </div>
      {/* End .col */}

      
      <div className="col-lg-3 col-sm-5 d-lg-flex">
        <div className="address-info">
          <div className="icon d-flex align-items-end">
            <img src="images/icon/13.svg" alt="icon" />
          </div>
          <div className="title">Academics</div>
          <div>
          <img style={{width: "50px", display: "inline-block"}} src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/442444619_1128568458385732_356286600298876385_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ePrxf_VTwnsQ7kNvgHXVNea&_nc_ht=scontent.fsgn2-7.fna&oh=00_AYClp241t7SZwZ0fTrIAj2I1F6nwaLhhcdj0nfHQeH88TA&oe=66808E84"></img>
          <img style={{width: "100px", display: "inline-block"}} src="https://www.reloadconsulting.com/wp-content/uploads/2014/11/Copy-of-DTESB-Logo-20.png"></img>
        
          </div>
          </div>{" "}
        {/* /.address-info  */}
      </div>
      {/* End .col */}

    </div>
  );
};

export default ContactAddress;
