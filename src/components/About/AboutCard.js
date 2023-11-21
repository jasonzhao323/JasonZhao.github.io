import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings! My name is <span className="purple">Jason Zhao </span> and I am
            based in <span className="purple"> Toronto, Canada.</span>
            <br />
            I am currently seeking employment opportunities in software development and software engineering.
            <br />
            I am equipped with a Bachelors Degree in computer science from the University of Toronto St. George Campus!
            <br />
            <br />
            Outside of coding, I love to play video games, a fun fact about me is that I used to play League of Legends and Age of Empires 2 semi-professionally!
            Additionally, I also adore travelling and hiking, and I plan to hike large sections of the largest mountain ranges in the world!
            So far, my favourite destinations I have been to are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> The Swiss Alps
            </li>
            <li className="about-activity">
              <ImPointRight /> Madeira
            </li>
            <li className="about-activity">
              <ImPointRight /> Lake Como
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The journey of a thousand miles begins with a single step"{" "}
          </p>
          <footer className="blockquote-footer">Lao Tzu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
