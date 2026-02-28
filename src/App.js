import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Achinta Kumar Dutta</h1>
        <h2>Site Reliability Engineer | Cloud & DevOps</h2>
        <p>
          Building reliable, scalable, and automated cloud infrastructure with
          a focus on performance, availability, and resilience.
        </p>

        <div className="buttons">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="/resume.pdf">Resume</a>
        </div>
      </section>

      {/* About */}
      <section>
        <h3>About Me</h3>
        <p>
          I am a Site Reliability Engineer with 4+ years of experience in cloud
          infrastructure, automation, and production operations. My expertise
          lies in designing highly available systems, improving reliability,
          and implementing DevOps best practices.
        </p>
      </section>

      {/* Skills */}
      <section>
        <h3>Skills</h3>
        <div className="grid">
          <div className="card">Azure</div>
          <div className="card">Terraform</div>
          <div className="card">Kubernetes</div>
          <div className="card">Docker</div>
          <div className="card">CI/CD</div>
          <div className="card">Prometheus & Grafana</div>
          <div className="card">Azure Monitor</div>
          <div className="card">Python & Shell</div>
        </div>
      </section>

      {/* Experience */}
      <section>
        <h3>Experience</h3>

        <div className="card">
          <h4>Site Reliability Engineer</h4>
          <p>2024 – Present</p>
          <ul>
            <li>Managing production cloud infrastructure</li>
            <li>Monitoring systems and resolving incidents</li>
            <li>Improving deployment reliability</li>
            <li>Performing root cause analysis</li>
          </ul>
        </div>

        <div className="card">
          <h4>DevOps Engineer</h4>
          <p>2022 – 2024</p>
          <ul>
            <li>Designed CI/CD pipelines</li>
            <li>Provisioned infrastructure using Terraform</li>
            <li>Managed Kubernetes workloads</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h3>Projects</h3>

        <div className="grid">
          <div className="card">
            <h4>Production Infrastructure Automation</h4>
            <p>Azure infrastructure provisioned using Terraform modules.</p>
          </div>

          <div className="card">
            <h4>Kubernetes Reliability Improvements</h4>
            <p>Enhanced deployment stability with health checks and monitoring.</p>
          </div>

          <div className="card">
            <h4>Observability Implementation</h4>
            <p>Implemented monitoring dashboards and alerts.</p>
          </div>

          <div className="card">
            <h4>Azure Service Bus Demo</h4>
            <p>Asynchronous messaging implementation using Python.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact">
        <h3>Contact</h3>
        <p>Email: yourmail@gmail.com</p>
        <p>Location: India</p>
      </section>
    </div>
  );
}

export default App;