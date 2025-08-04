import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export const ContactTerminal = () => {
  const [currentCommand, setCurrentCommand] = useState('');
  const [output, setOutput] = useState<string[]>([
    'Welcome to CYBER.DEV Contact Terminal v2.1.0',
    'Type "help" for available commands.',
    ''
  ]);

  const commands = {
    help: () => [
      'Available commands:',
      '  email     - Display contact email',
      '  social    - Show social media links',
      '  location  - Current location',
      '  status    - Current availability',
      '  hire      - Contact for opportunities',
      '  clear     - Clear terminal',
      ''
    ],
    email: () => [
      'Email: cyber.dev@example.com',
      'PGP Key: Available on request',
      ''
    ],
    social: () => [
      'GitHub: github.com/cyberdev',
      'LinkedIn: linkedin.com/in/cyberdev',
      'Twitter: @cyber_dev',
      'Portfolio: cyber.dev',
      ''
    ],
    location: () => [
      'Location: The Matrix',
      'Timezone: UTC-8 (PST)',
      'Remote: Available worldwide',
      ''
    ],
    status: () => [
      'Status: Available for new projects',
      'Response time: Usually within 24 hours',
      'Preferred contact: Email or LinkedIn',
      ''
    ],
    hire: () => [
      'Interested in collaboration?',
      'I specialize in:',
      '  • Full-stack web development',
      '  • 3D web experiences',
      '  • Modern React applications',
      '  • Cyberpunk aesthetics',
      '',
      'Let\'s build something amazing together!',
      ''
    ],
    clear: () => {
      setOutput(['Terminal cleared.', '']);
      return [];
    }
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const newOutput = [...output, `$ ${cmd}`];
    
    if (trimmedCmd in commands) {
      const result = commands[trimmedCmd as keyof typeof commands]();
      if (trimmedCmd !== 'clear') {
        newOutput.push(...result);
      }
    } else if (trimmedCmd === '') {
      newOutput.push('');
    } else {
      newOutput.push(`Command not found: ${trimmedCmd}`, 'Type "help" for available commands.', '');
    }
    
    if (trimmedCmd !== 'clear') {
      setOutput(newOutput);
    }
    setCurrentCommand('');
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:cyber.dev@example.com', label: 'Email' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold matrix-text mb-6 font-mono">
            CONTACT.EXE
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            Establish secure connection to initiate collaboration
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="terminal p-0 overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between p-4 border-b border-matrix-green/20">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-matrix-green"></div>
            </div>
            <div className="text-sm text-muted-foreground font-mono">
              cyber.dev@matrix:~$
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 h-96 overflow-y-auto">
            <div className="font-mono text-sm space-y-1">
              {output.map((line, index) => (
                <div key={index} className={line.startsWith('$') ? 'text-matrix-green' : 'text-foreground'}>
                  {line}
                </div>
              ))}
            </div>
            
            {/* Input Line */}
            <div className="flex items-center mt-2 font-mono text-sm">
              <span className="text-matrix-green mr-2">$</span>
              <input
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleCommand(currentCommand);
                  }
                }}
                className="flex-1 bg-transparent border-none outline-none text-foreground"
                placeholder="Type a command..."
                autoFocus
              />
              <span className="animate-blink-caret">▋</span>
            </div>
          </div>
        </motion.div>

        {/* Quick Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="terminal p-4 text-center group hover:border-matrix-green/50 transition-all duration-300"
              >
                <Icon className="w-6 h-6 mx-auto mb-2 text-matrix-green group-hover:text-matrix-bright transition-colors" />
                <div className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                  {link.label}
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 terminal p-3">
            <div className="w-2 h-2 rounded-full bg-matrix-green animate-pulse-glow"></div>
            <span className="font-mono text-sm text-matrix-green">
              STATUS: ONLINE AND AVAILABLE
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};