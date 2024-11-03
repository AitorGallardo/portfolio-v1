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
          <div>
            <h1>Aitor Gallardo Muñoz</h1>
            <h2>Software Engineer</h2>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <p>
          Full-stack software engineer passionate about building impactful solutions. I combine technical expertise with creative problem-solving to deliver
          robust applications. Always eager to learn and collaborate with forward-thinking teams.
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
      <div className="fixed right-8 bottom-8 text-muted text-small">
        <a href="https://aitorgallardo.github.io/portfolio-v0/">Portfolio v0</a>
      </div>
    </FadeIn.Container>
  );
}
