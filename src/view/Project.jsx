import React, {useContext} from 'react';
import { ContextApi } from '../ContextApi';
import cardData from '../Widgets/CardData';

function Project() {
    const { locale } = useContext(ContextApi)
  return (
    <div className="container">
      <div className="h1 text-center p-3">{locale.project}</div>
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
              <a
                href="https://github.com/janlin002/keyBoard-store"
                class="btn btn-outline-dark btn-sm d-flex justify-content-center"
              >
                {locale.checkoutProject}
              </a>
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
              <a
                href="https://github.com/janlin002/HCARE"
                class="btn btn-outline-dark btn-sm d-flex justify-content-center"
              >
                {locale.checkoutProject}
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div class="card cardHover">
            <img src={cardData[2].cardImg} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title text-center">{locale.project2CardTitle}</h4>
              <h5 className="text-center">{locale.projectFeatures}:</h5>
              <ul>
                <li>Vue</li>
                <li>Vuex</li>
                <li>vue-router</li>
                <li>bootstrap</li>
              </ul>
              <a
                href="https://github.com/janlin002/thecave"
                class="btn btn-outline-dark btn-sm d-flex justify-content-center"
              >
                {locale.checkoutProject}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
