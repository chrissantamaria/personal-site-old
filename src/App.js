import React from 'react';
import { Tooltip, IconButton, Container, Typography } from '@material-ui/core';
import { Email as EmailIcon } from '@material-ui/icons';
import { GitHubIcon, LinkedInIcon, PaperIcon } from './icons';
import './App.css';

// Helper component to create round icon button links with tooltip text
const IconLink = ({ title, link, children }) => (
  <Tooltip title={title}>
    <IconButton
      style={{ marginRight: 10 }}
      color="inherit"
      href={link}
      target="_blank"
    >
      {children}
    </IconButton>
  </Tooltip>
);

export default () => (
  <Container maxWidth="md" className="container">
    <Typography variant="h2" style={{ marginBottom: 10 }}>
      Hi! I'm Chris.
    </Typography>
    <Typography variant="h4" style={{ marginBottom: 40 }}>
      Student, fullstack web developer, and avid learner
    </Typography>

    <Typography variant="h6" style={{ marginBottom: 20 }}>
      I'm a Computer Science student at the University of Virginia with varied
      experience in software engineering work environments. I'm primarily
      skilled in fullstack web app development with Node.js and React but always
      looking for new areas to expand my skill set.
    </Typography>
    <Typography variant="h6" component="p" style={{ marginBottom: 40 }}>
      Feel free to reach out through any of the platforms below or view my
      resume.
      <br />
      I'd love to get in touch!
    </Typography>

    <div style={{ display: 'flex', alignItems: 'center', marginLeft: -10 }}>
      <IconLink title="GitHub" link="https://github.com/chrissantamaria">
        <GitHubIcon fontSize="large" />
      </IconLink>
      <IconLink
        title="LinkedIn"
        link="https://linkedin.com/in/chris-santamaria-10/"
      >
        <LinkedInIcon fontSize="large" />
      </IconLink>
      <IconLink title="Resume" link="/resume.pdf">
        <PaperIcon fontSize="large" />
      </IconLink>
      <IconLink title="Email" link="mailto:chris@santamaria.me?subject=Hey!">
        <EmailIcon fontSize="large" />
      </IconLink>
    </div>
  </Container>
);
