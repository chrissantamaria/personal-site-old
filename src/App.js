import React from 'react';
import { Tooltip, IconButton, Container, Typography } from '@material-ui/core';
import { Email as EmailIcon } from '@material-ui/icons';
import { GitHubIcon, LinkedInIcon, PaperIcon } from './icons';
import './App.css';

// Helper component to create round icon button links with tooltip text
const IconLink = ({ title, link, children }) => (
  <Tooltip title={title}>
    <IconButton
      style={{ margin: '0 10px' }}
      color="inherit"
      href={link}
      target="_blank"
    >
      {children}
    </IconButton>
  </Tooltip>
);

export default function App() {
  return (
    <Container maxWidth="lg" className="container">
      <Typography variant="h1" style={{ marginBottom: 10 }}>
        Hi, I'm Chris Santamaria.
      </Typography>
      <Typography variant="h3" style={{ marginBottom: 70 }}>
        Student, fullstack web developer, and avid learner
      </Typography>

      <Typography variant="h5" component="p" style={{ marginBottom: 20 }}>
        I'm a Computer Science engineering student at the University of Virginia
        with experience in numerous software engineering work environments.
        Primarily skilled in full-stack web app development with Node.js and
        React but always looking for new areas to expand my skill set.
      </Typography>
      <Typography variant="h5" component="p" style={{ marginBottom: 40 }}>
        Feel free to reach out through any of the platforms below or view my
        resume. I'd love to get in touch!
      </Typography>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconLink title="GitHub" link="https://github.com/chrissantamaria">
          <GitHubIcon fontSize="large" />
        </IconLink>
        <IconLink
          title="LinkedIn"
          link="https://linkedin.com/in/chris-santamaria-10/"
        >
          <LinkedInIcon fontSize="large" />
        </IconLink>
        <IconLink title="Email" link="mailto:chris@santamaria.me?subject=Hey!">
          <EmailIcon fontSize="large" />
        </IconLink>
        <IconLink title="Resume" link="/resume.pdf">
          <PaperIcon fontSize="large" />
        </IconLink>
      </div>
    </Container>
  );
}
