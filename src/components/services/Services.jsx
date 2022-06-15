import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile app UX and UI design services.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross-platform experiences design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web design services.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>UI and UX consulting.</p>
            </li>
          </ul>
        </article>
        {/* /* END OF UI?UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web portals creation for different clients.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ecommerce solutions for B2C and B2B models.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website creation.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Apps creation.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
