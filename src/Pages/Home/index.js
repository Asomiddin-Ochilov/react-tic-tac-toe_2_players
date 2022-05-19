import React from "react";
import Icon from "../../Components/Icons/Index";
import { NavLink } from "react-router-dom";
import AnimatedText from "react-animated-text-content";
import AnimatedPage from "../AnimatedPage";
const HomePage = () => {
  return (
    <AnimatedPage>
      <div className="home_page">
        <div className="navbar">
          <div className="logo">
            <Icon icon={"logo"} className={"icon_logo"} />
          </div>
        </div>
        <div className="content">
          <div className="center">
            <div className="animation_text font">
              <AnimatedText
                type="words" // animate words or chars
                animation={{
                  x: "200px",
                  y: "-20px",
                  scale: 1.1,
                  ease: "ease-in-out",
                }}
                animationType="throw"
                interval={0.06}
                duration={0.8}
                tag="p"
                className="animated-paragraph"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
              >
                Tic Tac Toe game
              </AnimatedText>
            </div>
            <NavLink to={"/game"} className={"font start_btn"}>
              {" "}
              Start Game{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default HomePage;
