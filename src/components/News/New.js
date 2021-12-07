import React from 'react'
import './index.scss'

export const New = ({ newItem }) => {
  return (
    <div className="news_newItem">
      <div className="react-reveal">
        <h3>{newItem.title}</h3>
      </div>
      <div className="react-reveal">
        <p className="Text_Wrapper">{newItem.body}</p>
      </div>
      <div className="react-reveal">
        <a className="read_more_btn" href={newItem.url}>
          <span className="arrow"></span>
          <span className="text">Read</span>
        </a>
      </div>
    </div>
  )
}
