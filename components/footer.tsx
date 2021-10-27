import Wrapper from './wrapper';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const twitterId = process.env.NEXT_PUBLIC_TWITTER_ID;
const githubId = process.env.NEXT_PUBLIC_GITHUB_ID;

const Footer = (): JSX.Element => {
  return (
    <footer className="border-t layout-separator mt-5 mb-10">
      <Wrapper>
        <div className="flex lg:flex-row flex-col flex-wrap justify-between pt-4">
          <div className="lg:w-1/4 w-auto">
            <ul>
              <li>
                <Link href={`https://github.com/${githubId}`}>
                  <a className="hover:underline">
                    <FontAwesomeIcon icon={faGithub} /> {githubId}
                  </a>
                </Link>
              </li>
              <li>
                <Link href={`https://twitter.com/${twitterId}`}>
                  <a className="hover:underline">
                    <FontAwesomeIcon icon={faTwitter} /> {twitterId}
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:w-2/4 w-auto">
            <p className="font-thin">
              This is a blog where a lazy developer ranting about his developer&lsquo;s life and his never ending
              journey in the land of knowledge.
            </p>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
