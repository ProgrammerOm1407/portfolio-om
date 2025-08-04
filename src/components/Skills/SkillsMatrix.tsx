import { motion } from 'framer-motion';
import { useState } from 'react';

const skillCategories = [
  {
    name: "Frontend",
    color: "matrix-green",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Three.js", level: 85 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 80 }
    ]
  },
  {
    name: "Backend",
    color: "neon-purple",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "GraphQL", level: 78 },
      { name: "Docker", level: 85 }
    ]
  },
  {
    name: "DevOps",
    color: "cyber-blue",
    skills: [
      { name: "AWS", level: 80 },
      { name: "Linux", level: 85 },
      { name: "Git", level: 95 },
      { name: "CI/CD", level: 75 },
      { name: "Kubernetes", level: 70 },
      { name: "Terraform", level: 65 }
    ]
  }
];

export const SkillsMatrix = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-20 px-6 relative">
      {/* Matrix Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-matrix-green/0 via-matrix-green/30 to-matrix-green/0 animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="terminal inline-block p-4 mb-6">
            <div className="font-mono text-matrix-green text-sm">
              $ sudo apt-get install skills
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold matrix-text mb-6 font-mono">
            SKILL_MATRIX
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
            Technical proficiencies acquired through years of digital exploration
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 font-mono font-bold border-2 transition-all duration-300 ${
                activeCategory === index
                  ? `border-${category.color} text-${category.color} glow-${category.color.split('-')[0]} bg-${category.color}/10`
                  : 'border-muted text-muted-foreground hover:border-matrix-green hover:text-matrix-green'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name.toUpperCase()}
            </motion.button>
          ))}
        </div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="terminal p-8"
        >
          <div className="font-mono text-sm mb-6">
            <span className="text-matrix-green">$</span> cat {skillCategories[activeCategory].name.toLowerCase()}_skills.json
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-mono text-foreground">{skill.name}</span>
                  <span className={`font-mono text-${skillCategories[activeCategory].color} text-sm`}>
                    {skill.level}%
                  </span>
                </div>
                
                <div className="relative">
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-${skillCategories[activeCategory].color} relative`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r from-transparent to-${skillCategories[activeCategory].color}-bright opacity-50`}></div>
                    </motion.div>
                  </div>
                  
                  {/* Glowing effect */}
                  <div 
                    className={`absolute top-0 left-0 h-2 bg-${skillCategories[activeCategory].color} rounded-full blur-sm opacity-60`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Terminal Output */}
          <div className="mt-8 pt-6 border-t border-matrix-green/20">
            <div className="font-mono text-xs text-muted-foreground space-y-1">
              <div>
                <span className="text-matrix-green">$</span> echo "Status: Skills loaded successfully"
              </div>
              <div className="pl-4">
                Status: Skills loaded successfully
              </div>
              <div>
                <span className="text-matrix-green">$</span> uptime
              </div>
              <div className="pl-4">
                Experience: {new Date().getFullYear() - 2018} years of continuous learning
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};