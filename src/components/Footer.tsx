import Link from 'next/link';

function Footer() {
  return (
    <>
      <hr />
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Muhammad Irfan's Portfolio</p>
        <div className="social_icons">
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
    </>
  );
}

export default Footer;
