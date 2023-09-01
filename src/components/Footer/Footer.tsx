import IconFacebook from "../../icons/IconFacebook.tsx";
import IconPinterest from "../../icons/IconPinterest.tsx";
import IconTwitter from "../../icons/IconTwitter.tsx";
import Logo from "../../icons/Logo.tsx";
import { Link } from "wouter";
import SCFooter from "./Footer.styled.tsx";

export default function Footer() {
  return (
    <SCFooter>
      <div className="left">
        <div className="logo">
          <Logo />
          <div className="links">
            <Link className="fs-body-1 link-primary" to="/fem_my_team/">
              home
            </Link>
            <Link className="fs-body-1 link-primary" to="about">
              about
            </Link>
          </div>
        </div>
        <div className="location">
          <p className="fs-body-2">987 Hillcrest Lane</p>
          <p className="fs-body-2">Irvine, CA</p>
          <p className="fs-body-2">California 92714</p>
          <p className="fs-body-2">Call Us : 949-833-7432</p>
        </div>
      </div>
      <div className="right">
        <div className="socials">
          <a
            className="social-link"
            href="https://4chan.org/g/catalog"
            target="_blank"
          >
            <IconFacebook />
          </a>
          <a
            className="social-link"
            href="https://ol.reddit.com/r/linux"
            target="_blank"
          >
            <IconPinterest />
          </a>
          <a className="social-link" href="https://nitter.net" target="_blank">
            <IconTwitter />
          </a>
        </div>
        <p className="copyright fs-body-2">
          Copyright 2020. All Rights Reserved
        </p>
      </div>
    </SCFooter>
  );
}
