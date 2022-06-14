import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "eCommerce Website Shopping Cart",
    github: "https://github.com/Vikas94Patel/Shopping-Cart",
    demo: "https://vikas94patel.github.io/Shopping-Cart/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Food Ordering App - GomatoEats",
    github: "https://github.com/Vikas94Patel/GomatoEats",
    demo: "https://vikas94patel.github.io/GomatoEats/",
  },
  {
    id: 3,
    image: IMG3,
    title: "The Dicee Game",
    github: "https://github.com/Vikas94Patel/The-Dicee-Game",
    demo: "https://vikas94patel.github.io/The-Dicee-Game/",
  },
  {
    id: 4,
    image: IMG4,
    title: "The Simon Game",
    github: "https://github.com/Vikas94Patel/The-Simon-Game",
    demo: "https://vikas94patel.github.io/The-Simon-Game/",
  },
  {
    id: 5,
    image: IMG5,
    title: "McDonald's Website Clone",
    github: "https://github.com/Vikas94Patel/McDonald-s-Clone",
    demo: "https://vikas94patel.github.io/McDonald-s-Clone/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Weather App",
    github: "https://github.com/Vikas94Patel/node-weather-app",
    demo: "https://viks-weather-application.herokuapp.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((item) => {
          return (
            <article key={item.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={item.image} alt="Shopping Cart" />
              </div>
              <h3>{item.title}</h3>

              <div className="portfolio__item-cta">
                <a
                  href={item.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={item.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
