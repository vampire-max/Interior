import React from 'react'

import '../styles/team.scss'
import '../styles/glide.scss'
import member1 from '../img/member1.jpg'
import member2 from '../img/member2.jpg'
import member3 from '../img/member3.jpg'
import { Social } from './social'

export const Team = () => {
  return (
    <div id="team" className="team_SectionWrapper">
      <div className="team_section Container-Wrapper">
        <div className="section_header team_sectionHeader">
          <div className="react-reveal">
            <h5>OUR TEAM MEMBER</h5>
            <h2>Meet Our Perfectionist</h2>
          </div>
          <div className="react-reveal">
            <div className="CarouselWrapper">
              <div className="glide_track">
                <ul className="glide_slides">
                  <li className="glider_sliderWrapper glide_slide">
                    <div className="team_card">
                      <div className="team_ImgWrapper">
                        <img src={member1} />
                      </div>
                      <div className="team_textWrapper">
                        <div className="name_plate">
                          <h3>Roman Ul Oman</h3>
                          <p>Project Manager</p>
                        </div>
                        <Social />
                      </div>
                    </div>
                  </li>
                  <li className="glider_sliderWrapper glide_slide">
                    <div className="team_card">
                      <div className="team_ImgWrapper">
                        <img src={member2} />
                      </div>
                      <div className="team_textWrapper">
                        <div className="name_plate">
                          <h3>Jeny Doe</h3>
                          <p>Lead Designer</p>
                        </div>
                        <Social />
                      </div>
                    </div>
                  </li>
                  <li className="glider_sliderWrapper glide_slide">
                    <div className="team_card">
                      <div className="team_ImgWrapper">
                        <img src={member3} />
                      </div>
                      <div className="team_textWrapper">
                        <div className="name_plate">
                          <h3>Naina Cooper</h3>
                          <p>Maketing Manager</p>
                        </div>
                        <Social />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
