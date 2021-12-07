import React from 'react'
import '../styles/service.scss'

export const FeatureItem = ({ feature }) => {
  return (
    <div className="blog_post">
      <div className="thumbnail">
        <img src={feature.img} />
      </div>
      <div className="content">
        <h3>{feature.title}</h3>
        <p className="excerpt">{feature.content}</p>
      </div>
    </div>
  )
}
