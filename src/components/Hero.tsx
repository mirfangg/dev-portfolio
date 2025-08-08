import Image from 'next/image';
import Link from 'next/link';
import { Parallax } from 'react-scroll-parallax';

import ProfileImg from '../../public/images/profile-img.jpg';

function Hero() {
  return (
    <div className="hero-container">
      <Parallax speed={5}>
        <Image
          src={ProfileImg}
          className="profile-img"
          width={300}
          height={300}
          alt="Muhammad Irfan's personal headshot"
        />
      </Parallax>

      <div className="hero-text">
        <Parallax speed={5}>
          <h1>Hello, I'm Muhammad Irfan 👋</h1>
          <p>
            I'm a Frontend Engineer based in Depok, West Java, Indonesia. I
            specialize in building user interface of websites and applications.
          </p>
          <div className="social-icons">
            <Link
              href="https://github.com/mirfangg"
              aria-label="GitHub"
              target="_blank"
            >
              <i className="fa-brands fa-github" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhammad-irfan-37751412a/"
              aria-label="LinkedIn"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin" />
            </Link>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default Hero;
