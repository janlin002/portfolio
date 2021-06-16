import React, {useContext} from 'react';
import {SkillDataZh, SkillDataEn} from '../Widgets/SkillData';
import { ContextApi } from '../ContextApi';


function Skill() {
  const { lang, locale } = useContext(ContextApi);
  const SkillLocale = lang === 'zh' ? SkillDataZh : SkillDataEn
  return (
    <div>
      <div className="container">
        <h1 className="text-center p-3">{locale.skill}</h1>
        <div className="row">
          {SkillLocale.map((item) => (
            <div className="col-sm-4 pb-3">
              <div class="card cardHover">
                <div class="card-header">
                  <img
                    src={item.skillIcon}
                    style={{ width: '19px', marginRight: '3px' }}
                    alt=""
                  />
                  {item.skillName}
                </div>
                <div class="card-body">
                  <p class="card-text">{item.skillInfo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
