import React from 'react';
import SkillData from '../Widgets/SkillData'


function Skill() {
  return (
    <div>
      <div className="container">
        <h1 className="text-center p-3">技術</h1>
        <div className="row">
          {SkillData.map((item) => (
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
