import Image from 'next/image';

import TakengonLakeImg from '../../public/images/takengon-lake.jpg';

function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            As a developer, I have always been passionate about creating elegant
            and effective solutions to complex problems. I have a strong
            foundation in software development, with a focus on web technologies
            such as HTML, CSS, and JavaScript. I enjoy working on both the
            front-end and back-end of applications, and I am always looking for
            ways to optimize performance, improve user experience, and ensure
            the highest level of code quality.
          </p>
        </div>
        <div className="about-img">
          <Image
            src={TakengonLakeImg}
            className="profile-img"
            width={300}
            height={500}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
