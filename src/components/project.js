import React from 'react'
import '../styles/project.scss'
import project from '../img/project.png'
import { SlideMulti } from './slideMulti'

export const Project = () => {
  const responsive = {
    1300: 1,
    768: 1,
    480: 1,
  }

  return (
    <div id="project" className="project_sectionWrapper">
      <div className="project_ContainerWrapper Container-Wrapper">
        <div className="react-reveal">
          <header className="project_sectionHeader section_header">
            <h5 className="title">WORK PROCEDURE</h5>
            <h2>How We Do Our Projects</h2>
          </header>
        </div>
        <div className="project_Wrapper">
          <div className="project_glide" id="project_carousel">
            <SlideMulti responsive={responsive}>
              <div>
                <p className="Text_Wrapper">
                  Create a mind map to brainstorm your project to inspire new
                  ideas. Use a simple piece of paper, poster, or whiteboard for
                  your mind map and we write the destination of your project in
                  the middle.We Write down related topics, subtopics, and
                  relevant concepts around the goal and branch from them to
                  create and follow different tangents.
                </p>
                <p className="Text_Wrapper">
                  When you conduct a group project, each group member can
                  benefit from the ideas of others and gain new insights by
                  brainstorming together.
                </p>
              </div>
              <div>
                <p className="Text_Wrapper">
                  Create a mind map to brainstorm your project to inspire new
                  ideas. Use a simple piece of paper, poster, or whiteboard for
                  your mind map and we write the destination of your project in
                  the middle.We Write down related topics, subtopics, and
                  relevant concepts around the goal and branch from them to
                  create and follow different tangents.
                </p>
                <p className="Text_Wrapper">
                  When you conduct a group project, each group member can
                  benefit from the ideas of others and gain new insights by
                  brainstorming together.
                </p>
              </div>
            </SlideMulti>
          </div>
          <div className="project_ImgWrapper">
            <img src={project} />
          </div>
        </div>
      </div>
    </div>
  )
}
