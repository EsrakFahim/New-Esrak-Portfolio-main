import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function NavTop() {
  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-4 valign">
            <Link href="#0" className="logo "
              style={
                {
                  width: "140px",
                }
              }
            >
              <Image src="/Esrak_Fahim.svg" alt="esrak_fahim" width={80} height={80} />
            </Link>
          </div>
          <div className="col-md-4 valign">
            <div className="social text-center full-width"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <Link href="#0"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="fab fa-behance"></i>
              </Link>
              <Link href="#0"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="fab fa-github"></i>
              </Link>
              <Link href="#0"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link href="#0"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="fab fa-dribbble"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-4 valign">
            <div className="full-width info">
              <div className="d-flex justify-content-end">
                <Link href="mailto:abc@example.com">
                  <span className="sub-title fz-12">esrakfahim2018@proton.me</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-butn">
          <span className="pe-7s-menu"></span>
        </div>
      </div>
    </div>
  );
}

export default NavTop;
