import React from 'react'
import './index.scss'
import { New } from './New'

export const News = () => {
  const news = [
    {
      title: 'Corporate design is a crucial part of your brand.',
      body:
        'Corporate design is a crucial part of your brand. Our approach corporate design is extraordinary. Please come and visit us',
      url: '',
    },
    {
      title: 'Learn more about landscape plans, how to design them.',
      body:
        'Learn more about landscape plans, how to design them, what to watch out for in your layout. We deign the appropriate layout for our clients to deliver best',
      url: '',
    },
    {
      title: 'Discover our design ideas, beautiful photos for interior design.',
      body:
        'Discover our design ideas, beautiful photos and how-to projects to create Interior Design. We try to reflect your personality on our design',
      url: '',
    },
    {
      title: 'Interior design is an art and we are trying to paint monalisa.',
      body:
        'With the best players in the designing sector, we explore a whole new world of interior design.Our approach corporate design is extraordinary',
      url: '',
    },
  ]
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
        <div className="news_Wrapper Container-Wrapper">
          {news.map((item, index) => (
            <New newItem={item} key={`new ${index}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
