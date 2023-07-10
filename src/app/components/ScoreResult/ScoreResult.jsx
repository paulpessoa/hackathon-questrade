import {
  Modal,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Snackbar,
} from "@mui/material";
import { WhatsApp, Chat, Email } from "@mui/icons-material";
import { useState } from "react";
// import Image from "next/image";
import ScoreIndicator from "../ScoreIndicator/ScoreIndicator";
import "./style.scss";

const ScoreResult = () => {
  const [open, setOpenScore] = useState(false);

  const handleOpen = () => {
    setOpenScore(true);
  };

  const handleClose = () => {
    setOpenScore(false);
  };

  return (
    <>
      <Button
        className="button-primary"
        color="warning"
        variant="contained"
        onClick={handleOpen}
        size="medium"
      >
        View Score
      </Button>

      <Modal open={open} onClose={handleClose}>
        <div className="modal-container">
          <Typography variant="h6" gutterBottom>
            Score Result
          </Typography>
          <ScoreIndicator />

          <div className="score-result-details">
            <div className="score-result-info">
              <div>
                <Typography className="title">Loan Limit</Typography>
                <Typography className="subtitle">$ 200,000.00</Typography>
              </div>

              <div>
                <Typography className="title">Term</Typography>
                <Typography className="subtitle">4.5 years</Typography>
              </div>
            </div>
            <div className="score-result-actions">
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="User Avatar" src="/images/logo.png" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Michey Mouse"
                    secondary="Personal Bank"
                  />
                  <div>
                    <IconButton>
                      <WhatsApp />
                    </IconButton>
                    <IconButton>
                      <Chat />
                    </IconButton>
                    <IconButton>
                      <Email />
                    </IconButton>
                  </div>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="User Avatar" src="/images/logo.png" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Spider Man"
                    secondary="Personal Bank"
                  />
                  <div>
                    <IconButton>
                      <WhatsApp />
                    </IconButton>
                    <IconButton>
                      <Chat />
                    </IconButton>
                    <IconButton>
                      <Email />
                    </IconButton>
                  </div>
                </ListItem>
                {/* Add more ListItems for additional users */}
              </List>
            </div>
          </div>
        </div>
      </Modal>

      <style jsx>{`
        .modal-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          width: 400px;
          padding: 24px;
          margin: auto;
          margin-top: 100px;
          border-radius: 8px;
          outline: none;
        }
      `}</style>
    </>
  );
};

export default ScoreResult;
