import React from "react";
import "./style.css";

export const DesktopAbout = () => {
  return (
    <div className="desktop-about">
      <div className="div">
        <img className="logo" alt="Logo" src="/img/logo-1.png" />
        <div className="overlap">
          <div className="text-wrapper">Sign up</div>
        </div>
        <div className="overlap-group">
          <div className="text-wrapper-2">Login</div>
        </div>
        <div className="overlap-2">
          <div className="overlap-3">
            <div className="overlap-group-2">
              <p className="p">
                Newhall Realty Group Corporation is is a Philippine Real Estate Developer based in Gen. Trias, Cavite.
                Established in 2005 by a group of enterprising individuals. Presently, the company boasts 30 employees
                in one of its satellite branches and maintains site offices in both Bulacan and Cavite.
              </p>
              <div className="text-wrapper-3">Real Estate Developer Company</div>
            </div>
            <div className="overlap-4">
              <div className="rectangle" />
              <div className="rectangle-2" />
              <p className="text-wrapper-4">
                Across the regions of Bulacan and Cavite, the company has successfully constructed a total of 8
                subdivisions — 3 in Bulacan and 5 in Cavite — with plans for more in the near future.
              </p>
              <div className="text-wrapper-5">By The Numbers</div>
              <div className="text-wrapper-6">NEWHALL REALTY</div>
              <div className="text-wrapper-7">GROUP CORP</div>
              <img className="img" alt="Logo" src="/img/logo-2.png" />
            </div>
          </div>
          <div className="stocks-wrapper">
            <img className="stocks" alt="Stocks" src="/img/stocks-1.png" />
          </div>
        </div>
        <div className="text-wrapper-8">Home</div>
        <div className="text-wrapper-9">Listings</div>
        <div className="text-wrapper-10">About Us</div>
        <div className="text-wrapper-11">Contact Us</div>
        <div className="rectangle-3" />
        <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-15.png" />
        <div className="overlap-5">
          <img className="ABOUT" alt="About" src="/img/about.svg" />
          <img className="vector" alt="Vector" src="/img/vector-1.svg" />
        </div>
      </div>
    </div>
  );
};
