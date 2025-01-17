import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Us",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Md Alishan Ali" },
    { id: 2, title: "Email:", text: "md.alishanali88@gmail.com" },
    { id: 3, title: "Phone:", text: "+91 63914 17248" },
    { id: 4, title: "Linkedin", text: "Md Alishan Ali" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader text-center">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/man-01.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                Hello! I'm Md Alishan Ali , a passionate software engineer. I
                develop web applications, and learning to develope native app.
                My core skill is based on JavaScript and I love to do most of
                the things using JavaScript. I love to make the web more open to
                the world. I am observant and detail-oriented aspiring
                full-stack developer with a specialization in MERN stack.
                Self-motivated and curious, with a keen interest in building
                user-centric products. Looking forward to honing skills in a
                challenging work environment.
              </div>
              <div className="about__info-p2">Feel Free to Contact me...</div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
