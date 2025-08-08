import Link from 'next/link';

function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">Muhammad Irfan's Portfolio</Link>
      </div>
    </div>
  );
}

export default Navbar;
