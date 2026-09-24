import { Briefcase, CircuitBoard, GraduationCap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w5xl">
        <h2 className="text-3x; md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              {" "}
              Motivated & hardworking Computer Science Student
            </h3>

            <p className="text-muted-foreground"> </p>

            <p className="text-muted-foreground">
              {" "}
              Passionate about mathematics, physics, software development and working
              with people to solve real-world problems!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Contact Me
              </a>

              <a
                href="/ivan_torresResume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {" "}
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary-10">
                  <CircuitBoard className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Computer Science
                  </h4>
                  <p className="text-muted-foreground">
                    Studying Computer Science @ K-State
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary-10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Relevant Coursework</h4>
                  <p className="text-muted-foreground">
                    Programming fundamentals, Data and Program Structures,
                    Computer Architecture, 
                    Computer Design, Microcontrollers
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary-10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Experience</h4>
                  <p className="text-muted-foreground">
                    Colorado State University : CLI program for filtering data
                    relating to environmental impact of Imidacloprid on bees.
                    (make this better in the future)
                  </p>
                  <br />
                  <p>
                    Amazon Area Manager: Effectively lead a team of over 40
                    employees. Implemented process enhancement utilizing
                    methodologies such as Lean, Kaizen, and/or Six Sigma.{" "}
                  </p>
                  <br />
                  <p>
                    High School Spanish Teacher: Providing world-class Spanish
                    instruction to students grades 9th-12th.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
