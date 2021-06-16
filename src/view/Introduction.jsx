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
              1998年生於台南，從小居住於台北，個性活潑，程式方面有過開發react,vue的相關經驗，最後選擇react為主要框架，主要還是因為個人認為react有著更高的靈活性，且與react相關redux,hooks都有開發經驗
            </p>
            <p>
              下圖是去年參加鐵人賽，獲得的勳章，本身學習程式喜歡做筆記，包括Notion,
              Github, medium都有我做筆記的痕跡
            </p>
            <img
              src="https://d1dwq032kyr03c.cloudfront.net/images/ironman_sticker/12/self.png?sticker"
              alt=""
            />
            <div>
              <button type="button" class="btn btn-outline-dark">
                <a href="https://www.cakeresume.com/123davidbill" className="linkStyle">履歷連結</a>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Introduction;
