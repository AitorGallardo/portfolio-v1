import { Experiences } from "@/components/experience/exeperiences";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";
import { AppThemeSwitcher } from "@/components/theme";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <div className="mt-4 mb-8 flex justify-end text-muted text-small">
        <AppThemeSwitcher />
      </div>
      <FadeIn.Item>
        <div className="flex justify-between">
          <div className="w-full">
            <h1>Aitor Gallardo Muñoz</h1>
            <div className="flex w-full items-center justify-between gap-2">
              <h2>Full-Stack &amp; AI Engineer</h2>
              {/* <a 
                href="/path-to-cv.pdf"
                className="text-sm text-muted hover:text-primary transition-colors"
                download
              >
                Download CV
              </a> */}
            </div>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <p>
          Full-stack engineer who ships products end-to-end — from product design and frontend to serverless backends and applied AI. Most
          recently I built and shipped <a href="https://xsaved.com" className="underline transition-colors hover:text-primary">XSaved</a> solo: a
          local-first, AI-organized bookmark manager for X, spanning a Chrome extension, native iOS and Mac apps, and the backend behind them.
        </p>
      </FadeIn.Item>
      <FadeIn.Item>
        <Experiences />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="projects" singleDate={true} showCount={false} />
      </FadeIn.Item>
      <Spacer />
      {/* <FadeIn.Item>
        <Footer />
      </FadeIn.Item> */}
      {/* <DeployButton /> */}
      <div className="fixed right-8 bottom-8 flex gap-4 text-muted text-small">
        <a href="https://xsaved.com" className="transition-colors hover:text-primary">
          XSaved
        </a>
        <a href="https://github.com/aitorgallardo">GitHub</a>
        <a href={`${process.env.NEXT_PUBLIC_BASE_PATH}/documents/cv.pdf`} className="transition-colors hover:text-primary" download>
          Download CV
        </a>
        <a href="https://aitorgallardo.github.io/portfolio-v0/">Portfolio v0</a>
      </div>
    </FadeIn.Container>
  );
}
