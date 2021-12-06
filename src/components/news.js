import React from 'react'
import '../styles/news.scss'

export const News = () => {
  return (
    <div id="news" className="news_sectionWrapper ">
      <div className="news_ContentWrapper">
        <div className="row">
          <div className="col">
            <div className="react-reveal">N</div>
          </div>
          <div className="col">
            <div className="react-reveal">E</div>
          </div>
          <div className="col">
            <div className="react-reveal">W</div>
          </div>
          <div className="col">
            <div className="react-reveal">S</div>
          </div>
        </div>
        <div className="news_Wrapper">
          <div className="news_newItem">
            <div className="react-reveal">
              <h3>Corporate design is a crucial part of your brand.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
