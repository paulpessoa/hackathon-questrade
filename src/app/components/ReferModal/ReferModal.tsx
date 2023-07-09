import { useState, ChangeEvent, FormEvent } from 'react';
import { Button, Modal, Typography, TextField, Snackbar, FormHelperText } from '@mui/material';
import './style.scss'

const ReferModal = () => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [error, setError] = useState('');
    const [affiliateLink, setAffiliateLink] = useState('');
    const [copyNotificationOpen, setCopyNotificationOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Perform submission logic or API call here

        // Show notification
        setNotificationOpen(true);

        // Close modal after 5 seconds
        setTimeout(() => {
            setNotificationOpen(false);
            handleClose();
        }, 5000);
    };

    const handleNotificationClose = () => {
        setNotificationOpen(false);
    };

    const handleCopyLink = () => {
        const affiliateLink = 'https://lionlend.com/ref=id_refer'; // Coloque aqui o link de afiliado correto
        navigator.clipboard.writeText(affiliateLink);
        setAffiliateLink(affiliateLink);
        setCopyNotificationOpen(true);

        // Close copy notification after 3 seconds
        setTimeout(() => {
            setCopyNotificationOpen(false);
        }, 3000);
    };

    return (
        <>
            <Button className="button-primary" color="warning" variant="contained" onClick={handleOpen} size="medium">Refer a friend</Button>

            <Modal open={open} onClose={handleClose}>
                <div className="modal-container">
                    <Typography variant="h6" gutterBottom>
                        Refer a Friend
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Name"
                            name="name"
                            value={name}
                            onChange={handleInputChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Email"
                            type='email'
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <FormHelperText id="my-helper-text">We will never share your email.</FormHelperText>
                        <div className='modal-buttons'>
                            <Button type="button" variant="outlined" color="primary" onClick={handleCopyLink}>
                                Copy Link
                            </Button>

                            <Button type="submit" variant="contained" color="primary">
                                Send invite
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>

            <Snackbar
                open={notificationOpen}
                autoHideDuration={5000}
                onClose={handleNotificationClose}
                message="Sent successfully"
            />

            <Snackbar
                open={copyNotificationOpen}
                autoHideDuration={3000}
                onClose={() => setCopyNotificationOpen(false)}
                message="Affiliate link copied"
            />

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

export default ReferModal;
