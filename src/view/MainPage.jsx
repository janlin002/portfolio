import React, { useContext } from 'react';
import Typewriter from 'typewriter-effect';
import { ContextApi } from '../ContextApi';
import Skill from './Skill';
import Link from './Link';
import Introduction from './Introduction';
import Project from './Project'
import '../style/index.css';
import ReactGA from 'react-ga';

function MainPage() {
  const { locale, bgTheme, textTheme } = useContext(ContextApi);
  return (
    <div style={{ height: '93.7vh', backgroundColor: bgTheme }}>
      <div className="container-fluid bg-dark">
        <div className="row">
          <section class="py-5 text-center container ">
            <div class="row py-lg-5">
              <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="fw-light d-flex justify-content-center">
                  <div className="typewriterWidth">
                    <h1 className="text-white">
                      <Typewriter
                        options={{
                          strings: [locale.myName, locale.FrontEndEngineer],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </h1>
                  </div>
                </h1>
                <p class="lead text-white">
                  {locale.navbarInfo}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Skill/>
      <Introduction />
      <Project />
      <Link />
    </div>
  );
}
export default MainPage;
