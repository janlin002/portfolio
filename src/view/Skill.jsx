import React, { useContext, useEffect } from 'react';
import { SkillDataZh, SkillDataEn } from '../Widgets/SkillData';
import { ContextApi } from '../ContextApi';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skill() {
  const { lang, locale } = useContext(ContextApi);
  const SkillLocale = lang === 'zh' ? SkillDataZh : SkillDataEn;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="container">
        <h1 className="text-center p-3">{locale.skill}</h1>
        <div data-aos="fade-up">
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
    </div>
  );
}

export default Skill;
