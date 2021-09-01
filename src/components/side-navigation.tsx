import Link from 'next/link';
import Image from 'next/image';
import { IconMenu } from '@components/icons/menu';

export const SideNavigation = () => {
  const status = `Malah Ngoding Spaces v.0.0.1`;
  return (
    <>
      <div className="nav">
        <div className="nav-wrapper">
          <div className="menu">
            <Link href="/" passHref>
              <a>
                <Image
                  alt="Malah Ngoding Logo"
                  src="/static/favicons/android-chrome-96x96.png"
                  height={64}
                  width={64}
                />
              </a>
            </Link>
          </div>
          <div className="menu hover-flip">
            <IconMenu width={32} />
          </div>
        </div>
      </div>
      <div className="version-tag">
        <p>{status}</p>
      </div>
      <style jsx>{`
        .nav {
          border-right: 1px solid #ddd;
          height: 100vh;
          left: 0;
          position: fixed;
          top: 0;
          transition: transform 0.1s;
          width: 140px;
          z-index: 99999;
          background-color: #ffffff;
        }
        .menu {
          width: 140px;
          height: 140px;
          border-bottom: 1px solid #ddd;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .hover-flip:hover {
          background-color: #ddd;
          cursor: pointer;
        }
        .nav-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .version-tag {
          font-family: monospace;
          position: fixed;
          left: 0;
          bottom: 0;
          height: 12px;
          z-index: 100000;
          transform: rotate(90deg) translateX(-100px) translateY(12px);
        }
        .version-tag p {
          font-size: 10px;
          font-family: monospace;
        }
      `}</style>
    </>
  );
};
