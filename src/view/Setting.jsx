import React, {useContext} from 'react';
import { ContextApi } from '../ContextApi';
import Particle from '../Widgets/Particles';

function Setting() {
    const { setLang, locale, setTheme, theme, textTheme, bgTheme } = useContext(ContextApi);
  return (
    <div style={{backgroundColor: bgTheme, height: '93.7vh'}}>
      <div className="container d-flex justify-content-center align-items-center" style={{height: '80vh'}}>
        <div className="row">
          <h1 style={{color: textTheme}}>{locale.lang}:</h1>
          {/* <div> */}
            <button type="button" className="btn btn-outline-dark btn-sm m-1" onClick={()=>setLang('zh')} style={{color: textTheme}}>
              {locale.zh}
            </button>
            <button type="button" className="btn btn-outline-dark btn-sm m-1" onClick={()=>setLang('en')} style={{color: textTheme}}>
              {locale.en}
            </button>
          {/* </div> */}

          <h1 style={{color: textTheme}}>{locale.theme}:</h1>
          {/* <div> */}
            <button type="button" className="btn btn-outline-dark btn-sm m-1" onClick={()=>setTheme('light')} style={{color: textTheme}}>
              {locale.themeLight}
            </button>
            <button type="button" className="btn btn-outline-dark btn-sm m-1" onClick={()=>setTheme('dark')} style={{color: textTheme}}>
              {locale.themeDark}
            </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
export default Setting;
