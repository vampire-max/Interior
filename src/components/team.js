import React from 'react'

import '../styles/team.scss'
import '../styles/glide.scss'
import member1 from '../img/member1.jpg'
import member2 from '../img/member2.jpg'
import member3 from '../img/member3.jpg'
import { SlideMulti } from './slideMulti'
import { Member } from './member'

export const Team = () => {
  const member = [
    {
      img: member1,
      name: 'Roman Ul Oman ',
      job: 'Project Manager',
    },
    {
      img: member2,
      name: 'Jeny Doe ',
      job: 'Lead Designer',
    },
    {
      img: member3,
      name: 'Naina Cooper ',
      job: 'Project Manager',
    },
  ]

  const responsive = {
    1300: 3,
    768: 2,
    480: 1,
  }

  return (
    <div id="team" className="team_SectionWrapper">
      <div className="team_section Container-Wrapper">
        <div className="section_header team_sectionHeader">
          <div className="react-reveal">
            <h5>OUR TEAM MEMBER</h5>
            <h2>Meet Our Perfectionist</h2>
          </div>
          <div className="react-reveal">
            <div className="CarouselWrapper" id="team">
              <div className="glide_track">
                <ul className="glide_slides">
                  <SlideMulti responsive={responsive}>
                    {member.map((item, index) => (
                      <Member member={item} key={index} />
                    ))}
                  </SlideMulti>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
