import React, {useContext} from 'react';
import { ContextApi } from '../ContextApi';
import '../style/index.css'

function Introduction() {
  const { locale } = useContext(ContextApi);
  return (
    <div>
      <div className="container">
        <h1 className="text-center p-3">{locale.selfIntroduction}</h1>
        <div className="row">
          <div className="col">
            <h2>{locale.davidLin}</h2>
            <h4>{locale.FrontEndEngineerjob}</h4>
            <p>
              {locale.myStory}
            </p>
            <p>
              {locale.ironmanMedal}
            </p>
            <img
              src="https://d1dwq032kyr03c.cloudfront.net/images/ironman_sticker/12/self.png?sticker"
              alt=""
            />
            <div>
              <button type="button" class="btn btn-outline-dark">
                <a href="https://www.cakeresume.com/123davidbill" className="linkStyle">{locale.resume}</a>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Introduction;
