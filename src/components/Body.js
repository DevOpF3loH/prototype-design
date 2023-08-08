import React from "react";
import News from "./News";
import Articles from "./Articles";
import Tweets from "./Tweets";
import Videos from "./Videos";

import audi from "../assets/audi.jpg";
import race1 from "../assets/race1.png";
import race2 from "../assets/race2.png";
import uk from "../assets/uk.png";
import germany from "../assets/germany.png";
import sweden from "../assets/sweden.png";
import italy from "../assets/italy.png";
import canada from "../assets/canada.png";
import india from "../assets/india.png";
import news1 from "../assets/news1.png";
import news2 from "../assets/news2.png";
import news3 from "../assets/news3.png";
import news4 from "../assets/news4.png";
import news5 from "../assets/news5.png";
import news6 from "../assets/news6.png";
import news7 from "../assets/news7.png";
import news8 from "../assets/news8.png";
import news9 from "../assets/news9.png";
import f1driver from "../assets/f1driver.png";
import coachf1 from "../assets/coachf1.png";

import PlayCircleIcon from "@mui/icons-material/PlayCircle";

import "../styles/Body.css";

function Body() {
  return (
    <>
      <div className="main-body">
        <div className="one">
          <div
            className="audi-img"
            style={{
              backgroundImage: `url(${audi})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <h2 className="one-title">Featured</h2>
            <div className="one-paragraph">
              <h1>Audi torn on Engine</h1>
              <h1>Deal for Red Bull</h1>
              <h1>Racing</h1>
              <p>
                Toto Wolff has admitted supplying Red Bull with engine could be
                "an attractive option" for Mercedes. It is a significant
                change...
              </p>
            </div>
          </div>
          <div className="side-component1">
            <div className="side-icon1">
              <PlayCircleIcon />
            </div>
          </div>
        </div>
        <div className="two">
          <div className="two-paragraph">
            <h2 className="two-title">Top Stories</h2>
            <p className="two-date">August 20, 2015</p>
            <hr className="two-line" />
            <p className="two-text">
              Vettel will do anything to 'annoy Mercedes'
            </p>
            <hr className="two-line" />
            <p className="two-text">
              Renault continued to work hard during summer break
            </p>
            <hr className="two-line" />
            <p className="two-text">
              A lap Spa-Francorchamps onboard with Rosberg
            </p>
            <hr className="two-line" />
            <p className="two-text">
              Clampdown on starts 'step in right direction' -
            </p>
            <hr className="two-line" />
            <p className="two-text">Ferrari re-signs Kimi Raikkonen for 2016</p>
            <hr className="two-line" />
            <p className="two-date">August 19, 2015</p>
            <hr className="two-line" />
            <p className="two-date">August 18, 2015</p>
          </div>
        </div>
        <div className="three">
          <div className="three-images">
            <div
              className="three-img1"
              style={{
                backgroundImage: `url(${race1})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h3 className="three-text1">Belgian Grand Prix driver ratings</h3>
            </div>
            <div
              className="three-img2"
              style={{
                backgroundImage: `url(${race2})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h3 className="three-text2">
                Red Bull F1 teams plans engine penalties for Italian GP at Monza
              </h3>
            </div>
          </div>
        </div>
        <div className="four">
          <h2 className="four-title">WC Standings</h2>
          <div className="four-drivers">
            <div className="driver">
              <img className="driver-logo" src={uk} alt="driver logo" />
              <div className="driver-text">
                <p className="driver-racer">Lewis Hamilton</p>
                <p className="driver-car">Mercedes GP</p>
              </div>
            </div>
            <div className="driver-score">
              <p>202</p>
            </div>
          </div>
          <hr className="two-line" />
          <div className="four-drivers">
            <div className="driver">
              <img className="driver-logo" src={germany} alt="driver logo" />
              <div className="driver-text">
                <p className="driver-racer">Nico Rosberg</p>
                <p className="driver-car">Mercedes GP</p>
              </div>
            </div>
            <div className="driver-score">
              <p>181</p>
            </div>
          </div>
          <hr className="two-line" />
          <div className="four-drivers">
            <div className="driver">
              <img className="driver-logo" src={germany} alt="driver logo" />
              <div className="driver-text">
                <p className="driver-racer">Sebastian Vettel</p>
                <p className="driver-car">Ferrari</p>
              </div>
            </div>
            <div className="driver-score">
              <p>160</p>
            </div>
          </div>
          <hr className="two-line" />
          <div className="four-drivers">
            <div className="driver">
              <img className="driver-logo" src={sweden} alt="driver logo" />
              <div className="driver-text">
                <p className="driver-racer">Valtteri Bottas</p>
                <p className="driver-car">Williams</p>
              </div>
            </div>
            <div className="driver-score">
              <p>77</p>
            </div>
          </div>
          <hr className="two-line" />
          <div className="four-drivers">
            <div className="driver">
              <img className="driver-logo" src={sweden} alt="driver logo" />
              <div className="driver-text">
                <p className="driver-racer">Kimi Raikkonen</p>
                <p className="driver-car">Ferrari</p>
              </div>
            </div>
            <div className="driver-score">
              <p>76</p>
            </div>
          </div>
        </div>
        <div className="five">
          <h2 className="five-title">Team Standings</h2>
          <div className="five-drivers">
            <div className="five-team">
              <img className="driver-logo" src={germany} alt="driver logo" />
              <div className="driver-text">
                <p className="driver-racer">Mercedes GP</p>
              </div>
            </div>
            <div className="driver-score">
              <p>383</p>
            </div>
          </div>
          <hr className="two-line" />
          <div className="five-drivers">
            <div className="five-team">
              <img className="driver-logo" src={italy} alt="driver logo" />
              <div className="driver-text">
                <p className="driver-racer">Ferrari</p>
              </div>
            </div>
            <div className="driver-score">
              <p>181</p>
            </div>
          </div>
          <hr className="two-line" />
          <div className="five-drivers">
            <div className="five-team">
              <img className="driver-logo" src={uk} alt="driver logo" />
              <div className="driver-text">
                <p className="driver-racer">Williams</p>
              </div>
            </div>
            <div className="driver-score">
              <p>160</p>
            </div>
          </div>
          <hr className="two-line" />
          <div className="five-drivers">
            <div className="five-team">
              <img className="driver-logo" src={canada} alt="driver logo" />
              <div className="driver-text">
                <p className="driver-racer">Red Bull Racing</p>
              </div>
            </div>
            <div className="driver-score">
              <p>96</p>
            </div>
          </div>
          <hr className="two-line" />
          <div className="five-drivers">
            <div className="five-team">
              <img className="driver-logo" src={india} alt="driver logo" />
              <div className="driver-text">
                <p className="driver-racer">Force India</p>
              </div>
            </div>
            <div className="driver-score">
              <p>39</p>
            </div>
          </div>
        </div>
        <div className="six">
          <h2 className="six-title">News, Opinion And Analysis</h2>
          <div className="six-component">
            <News
              img={news1}
              title="Ex-F1 racer Jarno Trulli steps down from racing in Formula E"
              category="Formula 1"
            />
            <News
              img={news2}
              title="Nico Rosberg demands action over Pirelli F1 tyre blowouts for Monza"
              category="Formula 1"
            />
            <News
              img={news3}
              title="Pirelli says F1 teams ignored request for tyre limits in 2013"
              category="Formula 1"
            />
            <News
              img={news4}
              title="McLaren F1 team's Jenson Button calls BelgianGp"
              category="Formula 1"
            />
            <News
              img={news5}
              title="Pierre Gasly surprised by Daniel de Jong move before Gp2 crash"
              category="GP2"
            />
            <News
              img={news6}
              title="Justin Wilson airlifted to hospital after Pocono IndyCar crash"
              category="IndyCar"
            />
            <News
              img={news7}
              title="BTCC suspends one of Rob Austin Racings TOCA BTCC licences"
              category="BTCC"
            />
            <News
              img={news8}
              title="FIA forced to clarify Formula 1 radio clampdown ambiguities"
              category="GP2"
            />
            <News
              img={news9}
              title="Former Formula 1 team boss and racing driver Guy Ligier dies"
              category="Formula 1"
            />
          </div>
        </div>
        <div className="seven">
          <div className="seven-ad">
            <h3>Standings Ad Space</h3>
          </div>
        </div>
        <div className="eight">
          <div className="seven-ad">
            <h3>Grand Prix Ad Space</h3>
          </div>
        </div>
        <div className="nine">
          <h2 className="nine-title">G.P. Calender</h2>
          <div className="nine-container">
            <div className="nine-heading">
              <h3>Next Grand Prix</h3>
              <h3>Sep 06</h3>
            </div>
            <div className="location-container">
              <div className="nine-location">
                <img className="driver-logo" src={germany} alt="driver logo" />
                <div className="location-text">
                  <p>Belgie</p>
                </div>
              </div>
              <div className="sub-location">
                <p>Spa-Francorchamps</p>
              </div>
            </div>
          </div>
          <div className="nine-container2">
            <div className="nine-heading">
              <h3>Previous Grand Prix</h3>
              <h3>Aug 23</h3>
            </div>
            <div className="location-container">
              <div className="nine-location">
                <img className="driver-logo" src={germany} alt="driver logo" />
                <div className="location-text">
                  <p>Italie</p>
                </div>
              </div>
              <div className="sub-location">
                <p>Monza</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ten">
          <h2 className="six-title">G.P. Reports of Belgie</h2>
          <div className="ten-component">
            <Articles
              img={news7}
              title="BTCC suspends one of Rob Austin Racings TOCA BTCC licences"
              category="August 22, 14:00 - 15:00"
              paragraph="The British Touring Car Championship has suspended one of Rob Austin Racing's TOCA BTCC Licences aft..."
            />
            <Articles
              img={race1}
              title="Knockhill BTCC: Andy Priaulx loses race-three podium to Aiden Moffat"
              category="August 22, 14:00 - 15:00"
              paragraph="Andy Priaulx has lost his podium from the final British Touring Car Championship race at Knockhill, ..."
            />
            <Articles
              img={race2}
              title="Qualifying: Hamilton P1"
              category="August 22, 14:00 - 15:00"
              paragraph="Lewis Hamilton claimed pole in today's qualifying at Spa, Belgium. The Mercedes driver locks out pole along with..."
            />
          </div>
        </div>
        <div className="eleven">
          <div className="seven-ad">
            <h3>Grand Prix Ad Space</h3>
          </div>
        </div>
        <div className="twelve">
          <div className="seven-ad">
            <h3>News Feature Ad Space</h3>
          </div>
        </div>
        <div className="thirteen">
          <div className="qoute-component">
            <div className="qoute">
              <h3 className="qoute-title">Qoute of the day</h3>
              <p className="qoute-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus temporibus, impedit voluptas, ullam, illum consectetur
                corrupti facere nulla dicta maiores labore sit nihil explicabo.
                Eligendi architecto quam corrupti maxime facilis!
              </p>
              <p className="qoute-name">Jane Doe</p>
            </div>
          </div>
          <div className="tweets-component">
            <div className="twitter">
              <h2 className="twitter-title">Twitter</h2>
              <Tweets
                title="Gianpaolo Matteucci"
                id="@GPMatteucci"
                time="32m"
                tweet="#TeamRapax leaves @SpaCircuit with a great recovery! @sirotkin_sergey @SMP_Racing @GP2_Official @RVisoiu pic.twitter.com/4nzpdBKrCg"
                retweet="Retweeted by Sirotkin Sergey"
              />
              <Tweets
                title="AUTOSPORT"
                id="@autosport"
                time="1h"
                tweet="FIA's Charlie Whiting is convinced protected cockpits 'will happen' - more tests to take place http://www.autosport.com/news/report.php/id/120489 ... pic.twitter.com/inY2rMvcfK"
                retweet="Retweeted by Craig Scarborough"
              />
              <Tweets
                title="Red Bull Racing"
                id="@redbullracing"
                time="45m"
                tweet="Check out a few Spy musings from the #BelgianGP, with this full gallery: http://win.gs/1hEolDG #RBspypic.twitter.com/gX4sIAZWSS"
                retweet="Retweeted by Craig Scarborough"
              />
              <Tweets
                title="Red Bull Racing"
                id="@VerstappenNL"
                time="45m"
                tweet="Verstappen.nl NIEUWS: Reactie Scuderia Toro Rosso op het overlijden van Justin Wilson http://dlvr.it/ByRKI4"
                retweet="Retweeted by Craig Scarborough"
              />
            </div>
          </div>
        </div>
        <div className="fourteen">
          <div className="fourteen-component">
            <h2 className="fourteen-title">Column Feature</h2>
            <div className="fourteen-container">
              <img className="f1driver-logo" src={f1driver} alt="driver logo" />
              <div className="fourteen-text">
                <p className="fourteen-minitext">DOOR: TOM BROOKS</p>
                <h3 className="fourteen-subtitle">
                  Hakkinen offers support for Schumacher
                </h3>
                <p className="fourteen-content">
                  Double Formula 1 World Champion, Mika Hakkinen has offered his
                  support for his fellow former F1 driver, Michael Schumacher
                  after the German has been reported as remaining in a 'stable'
                  condition in hospital after a terrifying skiing accident.
                </p>
                <p className="fourteen-readmore">Read more</p>
              </div>
            </div>
          </div>
        </div>
        <div className="fifteen">
          <div className="seven-ad">
            <h3>Column Feature Ad Space</h3>
          </div>
        </div>
        <div className="sixteen">
          <div
            className="coachf1-img"
            style={{
              backgroundImage: `url(${coachf1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <h2 className="sixteen-title">Photo of the week</h2>
            <h3 className="sixteen-minititle">
              Pastor Maldonado, Lotus, Formula 1 - 2015 - Spain
            </h3>
            <p className="sixteen-subtitle">Open Gallery</p>
          </div>
          <div className="side-component2">
            <div className="side-icon2">
              <PlayCircleIcon />
            </div>
          </div>
        </div>
        <div className="seventeen">
          <div className="seventeen-component">
            <h3 className="seventeen-title">Video Gallery</h3>
            <div className="seventeen-videos">
              <Videos
                img={news6}
                title="Vettel in th Ferrari FXXK"
                category="Via Ferrari.com"
              />
              <Videos
                img={news4}
                title="Don't Crack Under Pressure - A Legend Returns"
                category="Via McLaren"
              />
              <Videos
                img={news8}
                title="Spanish GP - Barcelona startegy"
                category="Via Ferrari.com"
              />
            </div>
            <div className="side-component3">
              <div className="side-icon3">
                <PlayCircleIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="eighteen">
          <div className="seven-ad">
            <h3>Grand Prix Ad Space</h3>
          </div>
        </div>
      </div>
      <div className="body-color">
        <div className="color-brown"></div>
        <div className="color-orange"></div>
        <div className="color-yellow"></div>
      </div>
    </>
  );
}

export default Body;
