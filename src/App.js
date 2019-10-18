import React from 'react';
import { Tooltip, IconButton, Typography } from '@material-ui/core';
import { Email as EmailIcon } from '@material-ui/icons';
import { GitHubIcon, LinkedInIcon, PaperIcon } from './icons';
import { Background, Container, Header, IconRow } from './styles';

// Helper component to create round icon button links with tooltip text
const IconLink = ({ title, link, IconComponent }) => (
  <Tooltip title={title}>
    <IconButton
      style={{ marginRight: 10 }}
      color="inherit"
      href={link}
      target="_blank"
    >
      <IconComponent fontSize="large" />
    </IconButton>
  </Tooltip>
);

export default () => (
  <Background>
    <Container>
      <Header>
        <Typography variant="h2" component="h1" gutterBottom>
          Hi! I'm Chris.
        </Typography>
        <Typography variant="h4" component="h2">
          Student, fullstack web developer, and avid learner
        </Typography>
      </Header>

      <Typography variant="h6" component="p">
        I'm a Computer Science student at the University of Virginia with varied
        experience in software engineering work environments. I'm primarily
        skilled in fullstack web app development with Node.js and React but
        always looking for new areas to expand my skill set.
        <br />
        <br />
        Feel free to reach out through any of the platforms below or view my
        resume.
        <br />
        I'd love to get in touch!
      </Typography>

      <IconRow>
        <IconLink
          title="GitHub"
          link="https://github.com/chrissantamaria"
          IconComponent={GitHubIcon}
        />
        <IconLink
          title="LinkedIn"
          link="https://linkedin.com/in/chris-santamaria-10/"
          IconComponent={LinkedInIcon}
        />
        <IconLink title="Resume" link="/resume.pdf" IconComponent={PaperIcon} />
        <IconLink
          title="Email"
          link="mailto:chris@santamaria.me?subject=Hey!"
          IconComponent={EmailIcon}
        />
      </IconRow>
    </Container>
  </Background>
);
