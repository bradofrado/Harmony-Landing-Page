import Image from "next/image";

import { mulish } from "@/src/utils/fonts";
import { Header } from "@/src/components/core/header";
import { DesignerDeveloperSwitcher } from "@/src/components/designer-developer-switcher";
import { RotatingText } from "@/src/components/rotating-text";
import { Banner } from "@/src/components/core/banner";
import { Button } from "@/src/components/core/button";
import { Video } from "@/src/components/core/video";


export default function Home() {
  return (<div className={`${mulish.className} overflow-auto`}>
    <div className="navbar-logo-left">
      <div className="w-layout-hflex flex-block-2">
        <img src="/images/Group 80.svg" loading="lazy" width="188" alt="" className="image"/>
      </div>
    </div>
    <Banner className="sticky top-0 z-50">
      <div className="flex justify-evenly md:justify-center items-center lg:gap-10 gap-0 text-sm lg:text-lg">
        <div>Talk with us about our vision.<span></span></div>
        <Button as="a" href="https://j48inpgngmc.typeform.com/to/XEHBk6xJ" target="_blank">
          <span className="hidden sm:block">Schedule a Pitch</span>
          <span className="block sm:hidden">Schedule a Pitch</span>
        </Button>
      </div>
    </Banner>
    <section className="flex py-12 lg:py-32 xl:py-40 2xl:py-48 px-0 lg:px-8 bg-[#f7f7f7] relative">
      <div className="hidden md:block hero-without-image -left-[50%]"/>
      <div className="hidden lg:block hero-without-image left-[50%]"/>
      <div className="container-2 z-10">
        <div className="hero-wrapper-two">
          <Header className="text-center md:text-left" level={1}><div>Enable your <RotatingText className="text-[#0c4f6d] font-bold inline-block md:w-[403px]" texts={['designers', 'product managers', 'UX experts', 'decision makers']}/></div> <div>to ship UI <span className="text-[#0c4f6d] font-bold">without developers</span>.</div></Header>
          <p className="margin-bottom-24px-2 !text-[17px] md:!text-xl !max-w-[650px] px-6 lg:px-0">Harmony transforms your SaaS app into an interactive design canvas. Changes shipped directly to your codebase. Made for designers.</p>
          <div className="w-layout-hflex flex-block mb-6">
            <div>
              <a href="https://j48inpgngmc.typeform.com/to/Ch60XpCt" className="button w-button">Join the Beta</a>
            </div>
            <div className="hidden md:block">
              <a href="https://dashboard.harmonyui.app/setup/quick?teamId=clua06nan0001dvpho5cb10sr" className="button-2 w-button">Try Interactive Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="hero-heading-left">
      <div className="container-3">
        <div>
          <Video src="./harmony-preview-video.mp4" type='player'/>
        </div>
      </div>
    </section>
    <section className="hero-heading-left">
      <div className="container-3 m-10 hero-wrapper-2 flex-col !items-stretch">
          <div className="text-lg md:text-4xl tracking-tight text-slate-900">
            "Having experienced the costly back and forth with the engineer trying to nail the design, I immediately saw Harmony's value to not only save time but money AND produce a better product that's driven by end user inputs. We jumped right in to try it out."
          </div>
          <div className="border-t mt-4 pt-4">
            <div className="font-display text-base text-slate-900">
              Keith
            </div>
            <div className="mt-1 text-sm text-slate-500">
              CEO at Hintible
            </div>
          </div>
      </div>
    </section>
    <section className="hero-heading-left">
      <div className="container-3">
        <div className="hero-wrapper-2">
          <div className="hero-split-2">
            <Header className="text-3xl pb-2.5" level={3}>Fully integrate with an existing codebase.</Header>
            <p className="margin-bottom-24px-3">Harmony constructs a “map” of your UI code, allowing your team to edit your app with modern design tools.</p>
          </div>
          <div className="hero-split-2">
            <img src="/images/Harmony.ai - 2024-02-22T180427.396 1 (1).svg" loading="lazy" width="326" alt="" className="shadow-two-2"/>
          </div>
        </div>
      </div>
      <div className="container-3">
        <div className="hero-wrapper-2">
          <div className="hero-split-2">
            <Header className="text-3xl pb-2.5" level={3}>Eliminate your developer’s design burden.</Header>
            <p className="margin-bottom-24px-3">Ship design changes instantly with production-ready code, saving weeks of developer time. Changes made directly in your codebase with seamless Github integration.</p>
          </div>
            <img src="/images/Harmony.ai - 2024-02-01T125854.129 1 (1).svg" loading="lazy" width="293" height="Auto" alt="" className="shadow-two-2"/>
        </div>
      </div>
      <div className="container-3">
        <div className="hero-wrapper-2">
          <div className="hero-split-2 items-start justify-center">
            <Header className="text-3xl pb-2.5" level={3}>Accelerate with instant design iteration.</Header>
            <p className="margin-bottom-24px-3">See your design changes instantly in the application without having to wait for your developer. Prototype new features and designs in minutes.</p>
          </div>
          <div className="hero-split-2">
            <img src="/images/Harmony.ai - 2024-01-31T155905.284 1 (1).svg" loading="lazy" width="283" alt="" className="shadow-two-2"/>
          </div>
        </div>
      </div>
      <div className="container-3">
        <div className="hero-wrapper-2">
          <div className="hero-split-2 items-start">
            <Header className="text-3xl pb-2.5" level={3}>Developer tools built for designers.</Header>
            <p className="margin-bottom-24px-3">Build inside your application with a familiar design canvas. Create with your team’s design elements, components, and brand. Absolutely no technical context required.</p>
          </div>
          <img src="/images/Harmony.ai - 2024-02-01T125708.592 1 (1).svg" loading="lazy" width="288" alt="" className="shadow-two-2"/>
        </div>
      </div>
    </section>
    <section className="hero-heading-left">
      <div className="container-3">
        <div className="header-wrapper mb-6">
          <Header className="mr-0 pr-0" level={2}>Pure <Emphasize>Harmony</Emphasize> for developers.</Header>
        </div>
        <div className="mb-5">
            <Video src="https://www.loom.com/embed/3e6c689d979b4251903e7a5c67312bfc?sid=5489f8cb-87e9-46a3-9af6-9039df000d47"/>
        </div>
      </div>
    </section>
    <section className="hero-without-image-2 pt-20">
      <div className="hero-wrapper-two-2 justify-start py-5">
        <Header className="text-3xl mb-2.5" level={3}>Join the beta today.</Header>
        <a href="https://j48inpgngmc.typeform.com/to/Ch60XpCt" className="button w-button">Join the Beta</a>
      </div>
    </section>
    <section className="section">
      <div className="w-layout-hflex flex-block-3">
        <div className="footer-social-block">
          <a href="mailto:founders@harmonyui.app" className="footer-social-link w-inline-block">
            <img src="/images/Group 80 (3).svg" loading="lazy" width="20" alt=""/>
          </a>
          <a href="https://www.linkedin.com/company/harmonyui" target="_blank" className="footer-social-link w-inline-block">
            <img src="/images/Harmony.ai - 2024-02-23T171929.975 1 (2).svg" loading="lazy" width="20" alt=""/>
          </a>
        </div>
        <div>
          <div className="text-block">© 2024 Harmony UI, Inc</div>
        </div>
      </div>
    </section>
    </div>
  );
}

const Emphasize: React.FunctionComponent<{children: React.ReactNode}> = ({children}) => {
  return <span className="text-[#0c4f6d] font-bold">{children}</span>
}
