import Image from "next/image";
import "./webflow.css";
import { Mulish } from "next/font/google";
import local from 'next/font/local';

const mulish = Mulish({
  subsets: ['latin']
});

const cooper = local({
  src: '../src/fonts/CooperLightBT.ttf'
});

const getClass = (...strings: (string | undefined)[]) => {
  return strings.filter((x) => !!x).join(" ");
};

export default function Home() {
  return (<div className={mulish.className}>
    <div className="navbar-logo-left">
      <div className="w-layout-hflex flex-block-2">
        <img src="/images/Group 80.svg" loading="lazy" width="188" alt="" className="image"/>
      </div>
    </div>
    <section className="hero-without-image">
      <div className="container-2">
        <div className="hero-wrapper-two">
          <h1 className={getClass("heading", cooper.className)}>The first-ever <br/>fully integrated design suite.</h1>
          <p className="margin-bottom-24px-2">Harmony transforms any application into an interactive design canvas. Changes shipped directly to your codebase. Made for designers.</p>
          <div className="w-layout-hflex flex-block">
            <div>
              <a href="#" className="button w-button">Join the Beta</a>
            </div>
            <div>
              <a href="#" className="button-2 w-button">Log In</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="hero-heading-left">
      <div className="container-3">
        <div className="hero-wrapper-2">
          <div className="hero-split-2">
            <h1 className={getClass("heading-2", cooper.className)}>Revolutionary <br/>dev/design multiplayer.</h1>
            <p className="margin-bottom-24px-3">Collaborate in the same environment, updating code and design simultaneously. Remove costly back-and-forth between teams with true agile development.</p>
          </div>
          <div className="hero-split-2">
            <img src="/images/Harmony.ai - 2024-02-22T180427.396 1 (1).svg" loading="lazy" width="326" alt="" className="shadow-two-2"/>
          </div>
        </div>
      </div>
      <div className="container-3">
        <div className="hero-wrapper-2">
          <div className="hero-split-2">
            <h1 className={getClass("heading-2", cooper.className)}>Eliminate your <br/>developer’s design burden.</h1>
            <p className="margin-bottom-24px-3">Ship design changes instantly with production-ready code, saving weeks of developer time. Changes made directly in your codebase with seamless Github integration.</p>
          </div>
            <img src="/images/Harmony.ai - 2024-02-01T125854.129 1 (1).svg" loading="lazy" width="293" height="Auto" alt="" className="shadow-two-2"/>
        </div>
      </div>
      <div className="container-3">
        <div className="hero-wrapper-2">
          <div className="hero-split-2">
            <h1 className={getClass("heading-2", cooper.className)}>Accelerate with instant design iteration.</h1>
            <p className="margin-bottom-24px-3">See your design changes instantly in the application without having to wait for your developer. Prototype new features and designs in minutes.</p>
          </div>
          <div className="hero-split-2">
            <img src="/images/Harmony.ai - 2024-01-31T155905.284 1 (1).svg" loading="lazy" width="283" alt="" className="shadow-two-2"/>
          </div>
        </div>
      </div>
      <div className="container-3">
        <div className="hero-wrapper-2">
          <div className="hero-split-2">
            <h1 className={getClass("heading-2", cooper.className)}>Developer tools built for designers.</h1>
            <p className="margin-bottom-24px-3">Build inside your application with a familiar design canvas. Create with your team’s design elements, components, and br/and. Absolutely no technical context required.</p>
          </div>
          <img src="/images/Harmony.ai - 2024-02-01T125708.592 1 (1).svg" loading="lazy" width="288" alt="" className="shadow-two-2"/>
        </div>
      </div>
    </section>
    <section className="hero-without-image-2">
      <div className="hero-wrapper-two-2">
        <h1 className={getClass("heading-3", cooper.className)}>Join the beta today.</h1>
        <a href="#" className="button w-button">Join the Beta</a>
      </div>
    </section>
    <section className="section">
      <div className="w-layout-hflex flex-block-3">
        <div className="footer-social-block">
          <a href="#" className="footer-social-link w-inline-block">
            <img src="/images/Group 80 (3).svg" loading="lazy" width="20" alt=""/>
          </a>
          <a href="#" className="footer-social-link w-inline-block">
            <img src="/images/Harmony.ai - 2024-02-23T171929.975 1 (2).svg" loading="lazy" width="20" alt=""/>
          </a>
        </div>
        <div>
          <div className="text-block">© 2024 Harmony Suite LLC</div>
        </div>
      </div>
    </section>
    </div>
  );
}
