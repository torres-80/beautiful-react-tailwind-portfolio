import { Briefcase, CircuitBoard, User } from "lucide-react";

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

            <p className="text-muted-foreground">
              {" "}
              Hpye myself up in this section. Need to figure out how{" "}
            </p>

            <p className="text-muted-foreground">
              {" "}
              Passionate about back-end development and cloud engineering
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Contact Me
              </a>

              <a
                href="/ivan resumepdf-1 copy.pdf"
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
                  <CircuitBoard className="h- w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Computer Engineering
                  </h4>
                  <p className="text-muted-foreground">
                    Studying Computer Engineering @ K-State
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary-10">
                  <User className="h- w-6 text-primary" />
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">
                      something that relates to the user from my end
                    </h4>
                    <p className="text-muted-foreground">
                      could be something like, seamless integration of AWS
                      services
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary-10">
                  <Briefcase className="h- w-6 text-primary" />
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Experience</h4>
                    <p className="text-muted-foreground">
                      Colorado State University : CLI program for filtering data
                      (make this better in the future) Amazon: Area Manager
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
