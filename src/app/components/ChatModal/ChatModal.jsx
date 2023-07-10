"use client"

import React, { useState } from 'react';
import { DialogTitle, DialogContent, TextField, Button } from '@mui/material';

const ChatModal = ({ onClose }) => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar mensagem

    // Limpar o campo de mensagem
    setMessage('');
  };

  return (
    <>
      <DialogTitle>Support Chat</DialogTitle>
      <DialogContent>
        {/* Renderizar as mensagens anteriores aqui */}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Your Message"
            value={message}
            onChange={handleMessageChange}
            fullWidth
            multiline
            autoFocus
          />
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </form>
      </DialogContent>
    </>
  );
};

export default ChatModal;
