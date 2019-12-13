import React from 'react';
import { Tooltip, IconButton } from '@material-ui/core';

// Helper component to create round icon button links with tooltip text
export default ({ title, link, icon: Icon }) => (
  <Tooltip title={title}>
    <IconButton
      style={{ marginRight: 10 }}
      color="inherit"
      href={link}
      target="_blank"
    >
      <Icon fontSize="large" />
    </IconButton>
  </Tooltip>
);
