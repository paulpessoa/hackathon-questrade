"use client"
import React, { useState } from 'react';
import { SpeedDial, SpeedDialIcon, SpeedDialAction, Snackbar } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ChatIcon from '@mui/icons-material/Chat';

const actions = [
  { icon: <WhatsAppIcon />, name: 'WhatsApp' },
  { icon: <EmailIcon />, name: 'Email' },
  { icon: <ChatIcon />, name: 'Chat' },
];

const SupportSpeedDial = () => {
  const [open, setOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleActionClick = (action) => {
    setSelectedAction(action);
    setNotificationOpen(true);
    setOpen(false);

    // Close notification after 3 seconds
    setTimeout(() => {
      setNotificationOpen(false);
    }, 3000);
  };

  const handleNotificationClose = () => {
    setNotificationOpen(false);
  };

  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        color="orange"
        FabProps={{ color: 'warning' }}
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SupportAgentIcon />}
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleActionClick(action.name)}
          />
        ))}
      </SpeedDial>

      <Snackbar
        open={notificationOpen}
        autoHideDuration={3000}
        onClose={handleNotificationClose}
        message={`Clicked on ${selectedAction}`}
      />
    </>
  );
};

export default SupportSpeedDial;
