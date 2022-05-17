import React from 'react'
import coverImage from "../../assets/cover/photo diego.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "15%", height: "15%"}} alt="cover" />
      <div className="my-2">
        <p>
          I used to be a senior software developer in Informix 4gl and worked with Oracle, Informix, Sql and Sybase Databases, i did work for 16 years doing this job, then i came to the United States, worked on remodeling for several years and now im finishing the coding bootcamp at UCF to become a full stack web developer, im married, father of one girl and one boy, and i like to coding.
      </p>
      </div>
    </section>
  )
}

export default About