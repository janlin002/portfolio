import React, { useContext } from 'react';
import Typewriter from 'typewriter-effect';
import { ContextApi } from '../ContextApi';
import '../style/index.css';

function MainPage() {
  const { locale, bgTheme, textTheme } = useContext(ContextApi);
  return (
    <div style={{height: '93.7vh', backgroundColor: bgTheme}}>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: '80vh'}}
      >
        <div className="row">
          <div className="typewriterWidth">
            <h1 style={{color:textTheme}}>{locale.hello}</h1>

            <h1 style={{color:textTheme}}>{locale.myName}</h1>
            <h1 style={{color:textTheme}}>{locale.iAm}</h1>
            <h1 style={{color:textTheme}}>
              <Typewriter
                options={{
                  strings: [locale.FrontEndEngineer, locale.DivingLover],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainPage;
