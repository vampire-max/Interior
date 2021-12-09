import React from 'react'
import { Social } from './social'
import '../styles/team.scss'
import '../styles/glide.scss'

export const Member = ({ member }) => {
  return (
    <div className="team_card">
      <div className="team_ImgWrapper">
        <img src={member.img} />
      </div>
      <div className="team_textWrapper">
        <div className="name_plate">
          <h3>{member.name}</h3>
          <p>{member.job}</p>
        </div>
        <Social />
      </div>
    </div>
  )
}
