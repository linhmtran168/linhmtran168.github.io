import Link from 'next/link';

const Header = () => {
  return (
    <h2>
      <Link href="/">
        <a className="hover:underline">Blog</a>
      </Link>
    </h2>
  )
};

export default Header;