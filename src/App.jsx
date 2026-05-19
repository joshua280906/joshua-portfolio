import { useState } from "react";

export default function PortfolioWebsite() {
  // add form state and handler
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // fall back to mailto (opens user's email client)
    const to = "jjjthomas200@gmail.com";
    const subject = encodeURIComponent(form.subject || "Contact from portfolio");
    const body = encodeURIComponent(
      `Name: ${form.name || "-"}\nEmail: ${form.email || "-"}\n\n${form.message || "-"}`
    );
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
    window.open(mailto, "_blank", "noreferrer");
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans">

      {/* Background Glow */}
      <div
        className="fixed inset-0 -z-10"
        style={{ background: 'radial-gradient(circle at top, rgba(0,255,255,0.12), transparent 35%)' }}
      />

      {/* Navbar */}
      <nav className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center px-5 sm:px-8 md:px-20 py-4 border-b border-cyan-400/10 backdrop-blur-md sticky top-0 bg-black/70 z-50 gap-4 md:gap-0">

        <a href="#top" className="inline-flex items-center">
          <img
            src="/logo.png"
            alt="JJT logo"
            className="w-16 h-16 md:w-35 md:h-35 object-contain"
          />
        </a>

        <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-8 text-zinc-300 text-xs sm:text-sm">

          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#experience" className="hover:text-cyan-400 transition">
            Experience
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>  

          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#education" className="hover:text-cyan-400 transition">
            Education
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>

          <a
            href="/resume.pdf"
            download
            className="border border-cyan-400 text-cyan-400 px-5 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition inline-block text-center"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-5 sm:px-8 md:px-20 py-12 md:py-20 gap-8 md:gap-20">

        {/* Left Side */}
        <div className="flex-1 max-w-3xl">

          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-6">
           • Cybersecurity • Machine Learning • Linux
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6 text-center lg:text-left">
            Hello, my name is
            <br />
            <span className="text-cyan-400 whitespace-nowrap">
              Jenis Joshua Thomas M
            </span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-10 text-center lg:text-left">
            Cybersecurity enthusiast and machine learning developer with strong
            interests in ethical hacking, Linux systems, networking, and modern
            web technologies. Passionate about building impactful technical
            projects and continuously learning new technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-5 mb-10">

            <a
              href="/resume.pdf"
              download
              className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-400/30 inline-block text-center"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/joshua280906?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-2xl font-bold hover:bg-cyan-400 hover:text-black transition duration-300 inline-flex items-center justify-center"
            >
              View Projects
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-5">

            <a
              href="https://github.com/joshua280906"
              target="_blank"
              rel="noopener noreferrer"
              title="View my GitHub"
              aria-label="GitHub"
              className="w-14 h-14 rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-black transition cursor-pointer"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0.297c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.525.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.654 1.651.242 2.873.119 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.624-5.479 5.921.43.371.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.289 0 .321.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/jenis-joshua-thomas-m-31928a324/"
              target="_blank"
              rel="noopener noreferrer"
              title="View my LinkedIn"
              aria-label="LinkedIn"
              className="w-14 h-14 rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-black transition cursor-pointer"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM9 8h3.6v2.2h.05c.5-.95 1.72-1.95 3.54-1.95C20.5 8.25 22 10.5 22 14.3V24h-4V15.5c0-2.05-.04-4.69-2.86-4.69-2.86 0-3.3 2.24-3.3 4.56V24H9V8z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/__joshua_m__?igsh=bGd4b3EyZXppd3Vq"
              target="_blank"
              rel="noopener noreferrer"
              title="View my Instagram"
              aria-label="Instagram"
              className="w-14 h-14 rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-black transition cursor-pointer"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.055 1.97.24 2.427.402.59.214 1.01.472 1.455.917.445.445.703.865.917 1.455.162.457.347 1.257.402 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.97-.402 2.427-.214.59-.472 1.01-.917 1.455-.445.445-.865.703-1.455.917-.457.162-1.257.347-2.427.402-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.24-2.427-.402-.59-.214-1.01-.472-1.455-.917-.445-.445-.703-.865-.917-1.455-.162-.457-.347-1.257-.402-2.427C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.055-1.17.24-1.97.402-2.427.214-.59.472-1.01.917-1.455.445-.445.865-.703 1.455-.917.457-.162 1.257-.347 2.427-.402C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.148 0-3.518.012-4.754.069-1.02.049-1.574.218-1.94.363-.492.189-.845.415-1.214.784-.369.369-.595.722-.784 1.214-.145.366-.314.92-.363 1.94-.057 1.236-.069 1.606-.069 4.754s.012 3.518.069 4.754c.049 1.02.218 1.574.363 1.94.189.492.415.845.784 1.214.369.369.722.595 1.214.784.366.145.92.314 1.94.363 1.236.057 1.606.069 4.754.069s3.518-.012 4.754-.069c1.02-.049 1.574-.218 1.94-.363.492-.189.845-.415 1.214-.784.369-.369.595-.722.784-1.214.145-.366.314-.92.363-1.94.057-1.236.069-1.606.069-4.754s-.012-3.518-.069-4.754c-.049-1.02-.218-1.574-.363-1.94-.189-.492-.415-.845-.784-1.214-.369-.369-.722-.595-1.214-.784-.366-.145-.92-.314-1.94-.363-1.236-.057-1.606-.069-4.754-.069zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center items-center relative">

          {/* Glow Circle */}
          <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] bg-cyan-400 rounded-full blur-[120px] opacity-20" />

          {/* Main Circle */}
          <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center relative shadow-2xl shadow-cyan-400/20">

            {/* Profile Image */}
            <div className="w-[230px] h-[230px] sm:w-[290px] sm:h-[290px] md:w-[410px] md:h-[410px] rounded-full bg-black border-4 border-cyan-300 overflow-hidden flex items-center justify-center">

              <img
                src="/profile.png"
                alt="Jenis Joshua Thomas M"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="px-5 sm:px-8 md:px-20 py-32 border-t border-cyan-400/10 relative overflow-hidden"
      >

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-400/10 blur-[140px]" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center relative z-10">

          {/* Left Side Image */}
          <div className="flex justify-center">

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-cyan-400/20 blur-[80px] rounded-3xl" />

              {/* Card */}
              <div className="relative bg-zinc-900 border border-cyan-400/30 rounded-3xl p-4 shadow-2xl shadow-cyan-400/10">

                <div className="w-[260px] sm:w-[320px] md:w-[420px] h-[360px] sm:h-[420px] md:h-[520px] rounded-2xl bg-black border border-cyan-400/20 flex items-center justify-center overflow-hidden">

                  <img
  src="/whoami.png"
  alt="Jenis Joshua Thomas M"
  className="w-full h-full object-cover"
/>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-cyan-400 mb-8 leading-tight text-center lg:text-left">
              Who I Am <br /> What I Build...
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              I’m a cybersecurity enthusiast and machine learning developer
              passionate about ethical hacking, Linux systems, networking,
              and modern web technologies. I enjoy building impactful digital
              solutions while continuously improving my technical expertise.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-10">

              <div className="bg-zinc-900 border border-cyan-400/20 rounded-2xl p-6 text-center">
                <h3 className="text-4xl font-black text-cyan-400 mb-2">
                  3+
                </h3>
                <p className="text-zinc-400 text-sm">
                  Years Learning
                </p>
              </div>

              <div className="bg-zinc-900 border border-cyan-400/20 rounded-2xl p-6 text-center">
                <h3 className="text-4xl font-black text-cyan-400 mb-2">
                  10+
                </h3>
                <p className="text-zinc-400 text-sm">
                  Projects
                </p>
              </div>

              <div className="bg-zinc-900 border border-cyan-400/20 rounded-2xl p-6 text-center">
                <h3 className="text-4xl font-black text-cyan-400 mb-2">
                  12+
                </h3>
                <p className="text-zinc-400 text-sm">
                  Technologies
                </p>
              </div>

              <div className="bg-zinc-900 border border-cyan-400/20 rounded-2xl p-6 text-center">
                <h3 className="text-4xl font-black text-cyan-400 mb-2">
                  5+
                </h3>
                <p className="text-zinc-400 text-sm">
                  Certifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="px-5 sm:px-8 md:px-20 py-32 border-t border-cyan-400/10 bg-black"
      >

        <div className="max-w-7xl mx-auto">

          <div className="mb-20">

            <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
              Career Journey
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white">
              Experience &
              <span className="text-cyan-400"> Leadership</span>
            </h2>
          </div>

          <div className="relative border-l border-cyan-400/20 ml-4 md:ml-10 space-y-16">

            <div className="relative pl-12">

              <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-cyan-400" />

              <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8">

                <h3 className="text-3xl font-black text-white mb-2">
                  AICTE Cybersecurity Internship
                </h3>

                <p className="text-cyan-400 font-semibold mb-4">
                  Virtual Internship Program • 2025
                </p>

                <p className="text-zinc-400 text-lg leading-relaxed">
                  Successfully completed the AICTE Virtual Internship Program
                  focused on cybersecurity concepts, networking, Linux systems,
                  and ethical hacking practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="px-5 sm:px-8 md:px-20 py-32 border-t border-cyan-400/10 bg-black"
      >

        <div className="max-w-7xl mx-auto">

          <div className="mb-20">

            <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
              Featured Work
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-white">
              Projects &
              <span className="text-cyan-400"> Technical Builds</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10">

            {/* Project 1 */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl overflow-hidden">

              <div className="h-56 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                <h3 className="text-3xl font-black text-cyan-400 text-center px-6">
                  Skin Cancer Detection ML
                </h3>
              </div>

              <div className="p-8">

                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                  Developed an AI-powered skin cancer detection system using
                  machine learning and image classification techniques.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">

                  <span className="px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-300 text-sm">
                    Python
                  </span>

                  <span className="px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-300 text-sm">
                    TensorFlow
                  </span>

                  <span className="px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-300 text-sm">
                    OpenCV
                  </span>
                </div>

                {/* View Project button */}
                <div className="mt-4">
                  <a
                    href="https://github.com/joshua280906/Skin-Cancer-ML"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-block bg-cyan-400 text-black py-4 rounded-2xl font-bold text-center hover:scale-[1.02] transition duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="px-5 sm:px-8 md:px-20 py-32 border-t border-cyan-400/10 bg-black"
      >

        <div className="max-w-7xl mx-auto">

          <div className="mb-20">

            <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
              Technical Expertise
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-white">
              Skills &
              <span className="text-cyan-400"> Technologies</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Skill Card */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8">

              <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-3xl mb-8">
                🛡️
              </div>

              <h3 className="text-3xl font-black text-white mb-4">
                Cybersecurity
              </h3>

              <p className="text-zinc-400 leading-relaxed mb-8">
                Ethical hacking, Linux systems, networking concepts,
                cybersecurity labs, and security practices.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8">

              <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-3xl mb-8">
                🤖
              </div>

              <h3 className="text-3xl font-black text-white mb-4">
                Machine Learning
              </h3>

              <p className="text-zinc-400 leading-relaxed mb-8">
                Python, TensorFlow, OpenCV, image processing,
                and machine learning workflows.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8">

              <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-3xl mb-8">
                💻
              </div>

              <h3 className="text-3xl font-black text-white mb-4">
                Web Development
              </h3>

              <p className="text-zinc-400 leading-relaxed mb-8">
                React, JavaScript, Tailwind CSS,
                GitHub workflows, and frontend development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="px-5 sm:px-8 md:px-20 py-32 border-t border-cyan-400/10 bg-black"
      >

        <div className="max-w-7xl mx-auto">

          <div className="mb-20">

            <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
              Academic Journey
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-white">
              Education &
              <span className="text-cyan-400"> Learning</span>
            </h2>
          </div>

          <div className="relative border-l border-cyan-400/20 ml-4 md:ml-10 space-y-16">

            <div className="relative pl-12">

              <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-cyan-400" />

              <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8">

                <h3 className="text-3xl font-black text-white mb-2">
                  Bachelor of Technology
                </h3>

                <p className="text-cyan-400 font-semibold mb-4">
                  Computer Science and Engineering
                </p>

                <p className="text-zinc-400 text-lg leading-relaxed">
                  Pursuing technical education focused on programming,
                  cybersecurity, Linux systems, machine learning,
                  networking, and software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
<section
  id="certifications"
  className="px-5 sm:px-8 md:px-20 py-32 border-t border-cyan-400/10 relative overflow-hidden bg-black"
>

  {/* Background Glow */}
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 blur-[140px]" />

  <div className="max-w-7xl mx-auto relative z-10">

    {/* Heading */}
    <div className="mb-20">

      <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
        Achievements & Recognition
      </p>

      <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
        Certifications &
        <span className="text-cyan-400"> Achievements</span>
      </h2>

      <p className="text-zinc-400 text-lg mt-6 max-w-3xl leading-relaxed">
        Certifications, internship programs, and technical achievements that
        reflect my continuous learning journey in cybersecurity, machine
        learning, Linux systems, and software development.
      </p>
    </div>

    {/* Certification Cards */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

      {/* Certification Card 1 */}
      <div className="group bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-400/10 transition duration-500">

        {/* Top */}
        <div className="flex items-start justify-between mb-8">

          {/* Icon */}
          <div className="w-20 h-20 rounded-3xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-4xl group-hover:scale-110 transition duration-500">
            🛡️
          </div>

          {/* Year */}
          <div className="px-5 py-2 rounded-full border border-cyan-400/20 text-cyan-300 text-sm">
            2025
          </div>
        </div>

        {/* Content */}
        <h3 className="text-3xl font-black text-white mb-4">
          AICTE Cybersecurity Internship
        </h3>

        <p className="text-cyan-400 font-semibold mb-6">
          Virtual Internship Program
        </p>

        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
          Successfully completed the AICTE Virtual Internship Program focused
          on cybersecurity fundamentals, networking, Linux systems, ethical
          hacking concepts, and practical security workflows.
        </p>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-3 mb-8">

          <span className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm">
            Cybersecurity
          </span>

          <span className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm">
            Linux
          </span>

          <span className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm">
            Networking
          </span>

          <span className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm">
            Security
          </span>
        </div>

        {/* Button */}
        <a
          href="/certificate.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-block bg-cyan-400 text-black py-4 rounded-2xl font-bold hover:scale-[1.02] transition duration-300 text-center"
        >
          View Certificate
        </a>
      </div>

      {/* Certification Card 2 */}
      <div className="group bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-400/10 transition duration-500">

        {/* Top */}
        <div className="flex items-start justify-between mb-8">

          {/* Icon */}
          <div className="w-20 h-20 rounded-3xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-4xl group-hover:scale-110 transition duration-500">
            💻
          </div>

          {/* Year */}
          <div className="px-5 py-2 rounded-full border border-cyan-400/20 text-cyan-300 text-sm">
            Ongoing
          </div>
        </div>

        {/* Content */}
        <h3 className="text-3xl font-black text-white mb-4">
          Linux & Technical Learning
        </h3>

        <p className="text-cyan-400 font-semibold mb-6">
          Self Learning & Practice Labs
        </p>

        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
          Continuously improving practical skills through Linux practice,
          cybersecurity labs, GitHub projects, networking environments,
          machine learning experimentation, and frontend development.
        </p>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-3 mb-8">

          <span className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm">
            Kali Linux
          </span>

          <span className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm">
            GitHub
          </span>

          <span className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm">
            React
          </span>

          <span className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm">
            Machine Learning
          </span>
        </div>

        {/* Button */}
        <button className="w-full border border-cyan-400 text-cyan-400 py-4 rounded-2xl font-bold hover:bg-cyan-400 hover:text-black transition duration-300">
          Explore Journey
        </button>
      </div>
    </div>
  </div>
</section>

{/* Research & Patents Section */}
<section
  id="research"
  className="px-5 sm:px-8 md:px-20 py-32 border-t border-cyan-400/10 relative overflow-hidden bg-black"
>

  {/* Background Glow */}
  <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/10 blur-[140px]" />

  <div className="max-w-7xl mx-auto relative z-10">

    {/* Heading */}
    <div className="mb-20">

      <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
        Innovation & Exploration
      </p>

      <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
        Research &
        <span className="text-cyan-400"> Patents</span>
      </h2>

      <p className="text-zinc-400 text-lg mt-6 max-w-3xl leading-relaxed">
        Exploring innovative ideas, intelligent systems, forensic analysis,
        AI-powered solutions, and technical research concepts focused on
        cybersecurity, healthcare, machine learning, and digital investigation.
      </p>
    </div>

    {/* Research Grid */}
    <div className="grid lg:grid-cols-1 gap-10">

      {/* Patent Card */}
      <div className="group bg-zinc-900/60 border border-zinc-800 rounded-3xl overflow-hidden hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-400/10 transition duration-500">

        {/* Banner */}
        <div className="h-64 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center relative overflow-hidden">

          {/* Glow */}
          <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 transition duration-500" />

          <div className="relative z-10 text-center px-8">

            <div className="text-6xl mb-6">
              📜
            </div>

            <h3 className="text-4xl font-black text-cyan-400">
              Patent Research
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-10">

          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            Research and patent-oriented Detection of Pneumonia and Tuberculosis from Chest X-ray Images Using Deep Learning with a  Streamlit Interface 
          </p>

          {/* Details */}
          <div className="space-y-4 mb-8">

            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-cyan-400" />

              <p className="text-zinc-300">
                Patent Filing Documentation
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-cyan-400" />

              <p className="text-zinc-300">
                Research Collaboration
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-cyan-400" />

              <p className="text-zinc-300">
                Innovation & Technical Exploration
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">

            <span className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm">
              Patent
            </span>

            <span className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm">
              Research
            </span>

            <span className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm">
              Innovation
            </span>

            <span className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm">
              AI
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4">

            <a
              href="/patent.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-cyan-400 text-black py-4 rounded-2xl font-bold text-center hover:scale-[1.02] transition duration-300"
            >
              View Patent
            </a>

            <a
              href="/patent.pdf"
              download
              className="flex-1 border border-cyan-400 text-cyan-400 py-4 rounded-2xl font-bold text-center hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
<section
  id="contact"
  className="px-5 sm:px-8 md:px-20 py-32 border-t border-cyan-400/10 relative overflow-hidden bg-black"
>

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-400/10 blur-[140px]" />
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px]" />

  <div className="max-w-7xl mx-auto relative z-10">

    {/* Heading */}
    <div className="text-center mb-24">

      <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
        Let’s Build Something Great
      </p>

      <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-6">
        Get In
        <span className="text-cyan-400"> Touch</span>
      </h2>

      <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
        Interested in collaborating, discussing cybersecurity, machine learning,
        research ideas, or innovative technical projects? Feel free to connect
        with me through the platforms below.
      </p>
    </div>

    {/* Main Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

      {/* Left Side - Contact Cards */}
      <div className="space-y-8">

        {/* Email Card */}
        <div className="group bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-400/10 transition duration-500">

          <div className="flex items-start gap-6">

            {/* Icon */}
            <div className="w-20 h-20 rounded-3xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-4xl group-hover:scale-110 transition duration-500">
              📧
            </div>

            {/* Content */}
            <div>

              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                Email
              </h3>

              <p className="text-zinc-400 text-lg mb-4">
                Reach out for collaborations, technical discussions,
                internship opportunities, or project ideas.
              </p>

              <a
                href="mailto:jjjthomas200@gmail.com"
                className="text-cyan-400 text-lg font-semibold hover:underline"
              >
                jjjthomas200@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* GitHub Card */}
        <div className="group bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-400/10 transition duration-500">

          <div className="flex items-start gap-6">

            {/* Icon */}
            <div className="w-20 h-20 rounded-3xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-4xl group-hover:scale-110 transition duration-500">
              💻
            </div>

            {/* Content */}
            <div>

              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                GitHub
              </h3>

              <p className="text-zinc-400 text-lg mb-4">
                Explore my projects, machine learning experiments,
                cybersecurity work, and frontend development repositories.
              </p>

              <a
                href="https://github.com/joshua280906"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 text-lg font-semibold hover:underline"
              >
                github.com/joshua280906
              </a>
            </div>
          </div>
        </div>

        {/* LinkedIn Card */}
        <div className="group bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-400/10 transition duration-500">

          <div className="flex items-start gap-6">

            {/* Icon */}
            <div className="w-20 h-20 rounded-3xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-4xl group-hover:scale-110 transition duration-500">
              🔗
            </div>

            {/* Content */}
            <div>

              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                LinkedIn
              </h3>

              <p className="text-zinc-400 text-lg mb-4">
                Connect professionally and stay updated with my latest
                technical achievements, research, and projects.
              </p>

              <a
                href="https://www.linkedin.com/in/jenis-joshua-thomas-m-31928a324/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 text-lg font-semibold hover:underline"
              >
                linkedin.com/in/jenis-joshua-thomas-m-31928a324
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-[2rem] p-6 sm:p-8 md:p-10 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-400/10 transition duration-500">

        <h3 className="text-4xl font-black text-white mb-8">
          Send A Message
        </h3>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div>
            <label className="block text-zinc-300 mb-3 text-sm uppercase tracking-wider">
              Full Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter your name"
              className="w-full bg-black/60 border border-zinc-700 rounded-2xl px-6 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-zinc-300 mb-3 text-sm uppercase tracking-wider">
              Email Address
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
              className="w-full bg-black/60 border border-zinc-700 rounded-2xl px-6 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-zinc-300 mb-3 text-sm uppercase tracking-wider">
              Subject
            </label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              type="text"
              placeholder="Project / Collaboration / Research"
              className="w-full bg-black/60 border border-zinc-700 rounded-2xl px-6 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-zinc-300 mb-3 text-sm uppercase tracking-wider">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="6"
              placeholder="Write your message..."
              className="w-full bg-black/60 border border-zinc-700 rounded-2xl px-6 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-cyan-400 text-black py-5 rounded-2xl font-black text-lg hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-400/20 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-cyan-400/10 py-8 px-5 text-center text-zinc-500 text-xs sm:text-sm">
        © 2026 Jenis Joshua Thomas M. All rights reserved.
      </footer>
    </div>
  );
}