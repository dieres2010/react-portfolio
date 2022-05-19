import React from 'react'
import coverImage from "../../assets/cover/photo diego.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "15%", height: "15%"}} class="img-fluid" alt="cover" />
      <div className="my-2">
        <p>
          My name is Diego Restrepo and I am a Software Engineering and a recently graduated Full Stack Web Developer from UCF coding bootcamp. I am a fast learner and accomplished coder and programmer, and I will enjoy using my skills to contribute to my future employers. I graduated in 1998 from the University Antonio Narino in Medellin, Colombia with a Bachelor's Degree in Software Engineering. I love cats and like to do home remodeling
      </p>
      </div>
    </section>
  )
}

export default About