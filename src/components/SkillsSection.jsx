import { useState } from "react";

const skills = [
  // Backend
  {name: "C#", level:72 , category: "Backend"},
  {name: "Python", level:84 , category: "Backend"},
  {name: "FastAPI", level:80 , category: "Backend"},
  {name: "Microservices Architecture", level:74 , category: "Backend"},

  // Frontend
  {name: "HTML/CSS", level:72 , category: "Frontend"},
  {name: "JavaScript", level:72 , category: "Frontend"},
  {name: "React", level:62 , category: "Frontend"},
  {name: "TailWind CSS", level:70 , category: "Frontend"},

  // DBS & Big Data
  {name: "SQL", level:88 , category: "DBS & Big Data"}, 
  {name: "Oracle", level:80 , category: "DBS & Big Data"},       
  {name: "Hadoop", level:78 , category: "DBS & Big Data"},
  {name: "Trino", level:72 , category: "DBS & Big Data"},
  {name: "Vertica", level:70 , category: "DBS & Big Data"},

  // Data & Analytics
  {name: "Data Analysis", level:84 , category: "Data"},
  {name: "Data Visualization", level:76 , category: "Data"},
  {name: "Web Scraping", level:72 , category: "Data"},

  // Other
  {name: "Linux System Administration", level:72 , category: "Other"},
  {name: "Docker", level:72 , category: "Other"},
  {name: "Git", level:80 , category: "Other"},                  
  {name: "Information Systems Management", level:84 , category: "Other"},
  {name: "SAS Systems Management", level:88 , category: "Other"},
  {name: "RAG systems (design  & development)", level:70 , category: "Other"},

  // Soft Skills
  {name: "Problem-Solving", level:85 , category: "Soft Skills"},
  {name: "Communication", level:80 , category: "Soft Skills"},
  {name: "Collaboration", level:78 , category: "Soft Skills"},
  {name: "Adaptability", level:82 , category: "Soft Skills"},
  {name: "Continuous Learning", level:90 , category: "Soft Skills"} 
];

const categories = ["All", ...new Set(skills.map(skill => skill.category))];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills = skills.filter(skill => 
        activeCategory === "All" || skill.category === activeCategory
    );

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-3 mb-12 space-x-2">
                    {categories.map((category, key) => (
                        <button key={key} className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize ${activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"}`}
                         onClick={() => setActiveCategory(category)}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover"> 
                            <div className="mb-4 text-left">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-background/50 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                     style={{ width: `${skill.level}%` }}/>
                            </div>
                            <div className="mt-1 text-right">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
}