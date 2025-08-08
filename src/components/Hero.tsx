import Image from 'next/image';
import Link from 'next/link';

import ProfileImg from '../../public/images/profile-img.jpg';

function Hero() {
  return (
    <div className="hero-container">
      <Image
        src={ProfileImg}
        className="profile-img"
        width={300}
        height={300}
        alt="Muhammad Irfan's personal headshot"
      />
      <div className="hero-text">
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
      </div>
    </div>
  );
}

export default Hero;
