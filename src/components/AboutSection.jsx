import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">     
               <div className="space-y-6">  
   <h3 className="text-2xl font-semibold">
  Full Stack Developer
</h3>

<p className="text-muted-foreground">
  I’m a Full Stack Developer with hands-on experience building scalable and efficient applications using Spring Boot and SQL.
</p>

<p className="text-muted-foreground">
  I have a strong foundation in REST API development, authentication, and backend system design, developed through CDAC training and real-world projects.
</p>

<p className="text-muted-foreground">
  I focus on writing clean, maintainable code and building practical solutions to real-world problems, and I’m seeking an SDE-1 opportunity to contribute and grow as a developer.
</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Resume/SATVIK-RESUME.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 gap-6">
            
            {/* CARD 1 */}
            <div className="gradient-border p-6 card-hover bg-card/40 backdrop-blur-md border border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground text-sm">
                    Building scalable web applications using Spring Boot, React, and SQL
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="gradient-border p-6 card-hover bg-card/40 backdrop-blur-md border border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Security & Authentication</h4>
                  <p className="text-muted-foreground text-sm">
                    JWT, OAuth 2.0 & role-based access control
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="gradient-border p-6 card-hover bg-card/40 backdrop-blur-md border border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Database Management</h4>
                  <p className="text-muted-foreground text-sm">
                    Designing schemas and writing efficient SQL queries
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