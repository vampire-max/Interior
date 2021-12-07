import React from 'react'
import { FeatureItem } from './FeatureItem'
import '../styles/service.scss'
import feature1 from '../img/feature1.svg'
import feature2 from '../img/feature2.svg'
import feature3 from '../img/feature3.svg'

export const Service = () => {
  const features = [
    {
      img: feature1,
      title: 'Corporate Design',
      content:
        'Corporate design is a crucial part of your brand. Our approach corporate design is extraordinary.',
    },
    {
      img: feature2,
      title: 'Landscape Design',
      content:
        'Learn more about landscape plans, how to design them, what to watch out for in your layout.',
    },
    {
      img: feature3,
      title: 'Interior Design',
      content:
        'Discover our design ideas, beautiful photos and how-to projects to create Interior Design.',
    },
  ]
  return (
    <div id="feature" className="feature_sectionwrapper">
      <div className="react-reveal">
        <div className="section_header">
          <h5>Our services</h5>
          <h2>Featured Service that We Provide</h2>
        </div>
        <div className="service_containerWrapper Container-Wrapper">
          <div className="react-reveal">
            <div className="service_feature">
              {features.map((item, index) => (
                <FeatureItem feature={item} key={`feature-${index}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
