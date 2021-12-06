import React from 'react'
import '../styles/service.scss'
import feature1 from '../img/feature1.svg'
import feature2 from '../img/feature2.svg'
import feature3 from '../img/feature3.svg'

export const Service = () => {
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
              <div className="blog_post">
                <div className="thumbnail">
                  <img src={feature1} />
                </div>
                <div class="content">
                  <h3 class="title">Corporate Design</h3>
                  <p class="excerpt">
                    Corporate design is a crucial part of your brand. Our
                    approach corporate design is extraordinary.
                  </p>
                </div>
              </div>
              <div className="blog_post">
                <div className="thumbnail">
                  <img src={feature2} />
                </div>
                <div class="content">
                  <h3 class="title">Landscape Design</h3>
                  <p class="excerpt">
                    Learn more about landscape plans, how to design them, what
                    to watch out for in your layout.
                  </p>
                </div>
              </div>
              <div className="blog_post">
                <div className="thumbnail">
                  <img src={feature3} />
                </div>
                <div class="content">
                  <h3 class="title">Interior Design</h3>
                  <p class="excerpt">
                    Discover our design ideas, beautiful photos and how-to
                    projects to create Interior Design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
