import React, { useContext, useEffect } from 'react';
import { ContextApi } from '../ContextApi';
import '../style/index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Introduction() {
  const { locale } = useContext(ContextApi);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="container">
        <h1 className="text-center p-3">{locale.selfIntroduction}</h1>
        <div data-aos="fade-left">
          <div className="row">
            <div className="col">
              <h2>{locale.davidLin}</h2>
              <h4>{locale.FrontEndEngineerjob}</h4>
              <p>{locale.myStory}</p>
              <p>{locale.ironmanMedal}</p>
              <img
                src="https://d1dwq032kyr03c.cloudfront.net/images/ironman_sticker/12/self.png?sticker"
                alt=""
              />
              <div>
                <button type="button" class="btn btn-outline-dark">
                  <a
                    href="https://www.cakeresume.com/123davidbill"
                    className="linkStyle"
                  >
                    {locale.resume}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
