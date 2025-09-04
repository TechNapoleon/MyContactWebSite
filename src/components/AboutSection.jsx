import {Briefcase, Code, User} from "lucide-react";

export const AboutSection = () => {

    return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary"> Me </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div className="space-y-6">
                <h3 className="font-semibold">
                <span className="text-3xl">Software Developer</span> <br /> <span className="text-2xl">C# · Python · Big Data</span>
                </h3>

                <p className="text-muted-foreground">
                I develop backend services and microservices in C# (.NET/IIS) and Python. At SAS, I work on data-heavy systems and integrate Big Data tools (Hadoop, Trino, Vertica), transforming requirements into reliable features and automations. My focus is on writing clean code, designing simple solutions, and delivering on time.
                </p>

                <p className="text-muted-foreground">
                As I grow in my development career, I stay open to feedback, focused on learning, and comfortable owning tasks end-to-end. I’m also pursuing a B.A. in Business Administration & Information Systems, and I’m eager to contribute to a collaborative team while developing practical, business-focused solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-5 justify-center">
                    <a className="cosmic-button" href="#projects">Contact Me</a>
                    <a className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300" href="#">Download CV</a>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="text-semibold text-lg">Software Development</h4>
                            <p className="font-muted-foreground">
                                Building backend services and microservices with C# and Python, and applying modern practices to deliver efficient, reliable solutions.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="text-semibold text-lg">Data & Systems Expertise</h4>
                            <p className="font-muted-foreground">
                                Hands-on experience with data analysis, Big Data technologies (Hadoop, Trino, Vertica), and Linux system management — bringing a strong technical foundation to my development work.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="text-semibold text-lg">Information Systems & Teamwork</h4>
                            <p className="font-muted-foreground">
                                Background in information systems management and data-driven projects, with experience collaborating, guiding small teams, and turning complex requirements into practical solutions.
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