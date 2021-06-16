import React, { useContext, useEffect } from 'react';
import cardData from '../Widgets/CardData';
import { ContextApi } from '../ContextApi';
import '../style/index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  const { locale } = useContext(ContextApi);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div class="card cardHover">
              <img src={cardData[0].cardImg} class="card-img-top" alt="..." />
              <div class="card-body">
                <h4 class="card-title text-center">{locale.project1CardTitle}</h4>
                <h5 className="text-center">{locale.projectFeatures}:</h5>
                <ul>
                    <li>react</li>
                    <li>redux</li>
                    <li>react-redux</li>
                    <li>react-router</li>
                    <li>bootstrap</li>
                    <li>lodash</li>
                </ul>
                <a href="https://github.com/janlin002/keyBoard-store" class="btn btn-outline-dark btn-sm d-flex justify-content-center">{locale.checkoutProject}</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div class="card cardHover">
              <img src={cardData[1].cardImg} class="card-img-top" alt="..." />
              <div class="card-body">
                <h4 class="card-title text-center">{locale.project2CardTitle}</h4>
                <h5 className="text-center">{locale.projectFeatures}:</h5>
                <ul>
                    <li>react</li>
                    <li>react hooks(useState, useContext, useReducer...)</li>
                    <li>react-router</li>
                    <li>bootstrap</li>
                </ul>
                <a href="https://github.com/janlin002/HCARE" class="btn btn-outline-dark btn-sm d-flex justify-content-center">{locale.checkoutProject}</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div class="card cardHover">
              <img src={cardData[2].cardImg} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</Fa> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
