import { DeployButton } from "@/components/deploy";
import { Experiences } from "@/components/experience/exeperiences";
import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
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
Full-stack software engineer passionate about building impactful solutions. I combine technical expertise with creative problem-solving to deliver robust applications. Always eager to learn and collaborate with forward-thinking teams.
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
    </FadeIn.Container>
  );
}
