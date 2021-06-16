import React,{useContext} from 'react';
import { ContextApi } from '../ContextApi';

function Link() {
  const { locale } =useContext(ContextApi);
  return (
    <div>
      <div className="container">
        <h1 className="text-center p-3">{locale.link}</h1>
        <div className="row">
          <div className="col-sm-3">
            <a href="https://github.com/janlin002">
              <div class="card" style={{border: '0px'}}>
                <img src="https://miro.medium.com/max/719/1*WaaXnUvhvrswhBJSw4YTuQ.png" class="card-img-top" alt="..." />
                </div>
            </a>
          </div>
          <div className="col-sm-3">
            <a href="https://ithelp.ithome.com.tw/users/20129747">
               <div class="card" style={{border: '0px'}}>
                <img src="https://ithelp.ithome.com.tw/storage/image/fbpic.jpg" class="card-img-top" alt="..." />
                </div>
            </a>
          </div>
          <div className="col-sm-3">
            <a href="https://www.notion.so/Jan-s-a5e3536df10849118641cc3d1ed6b46b">
              <div class="card" style={{border: '0px'}}>
                <img src="https://i2.wp.com/fortelabs.co/wp-content/uploads/2019/04/notion.001.jpeg?fit=1920%2C1080&ssl=1" class="card-img-top" alt="..." />
                </div>
            </a>
          </div>
          <div className="col-sm-3">
          <a href="https://123davidbill.medium.com/">
              <div class="card" style={{border: '0px'}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2zH1ZRt6gyxk5iijn4_dK4sPrBRhp6BRYQ&usqp=CAU" class="card-img-top" alt="..." />
                </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Link;
