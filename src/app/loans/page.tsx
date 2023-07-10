"use client"
import './style.scss'

import { Container, Typography, Tooltip, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import Image from 'next/image';

const LoanList = () => {
    const loanData = [
        {
            imageSrc: '/banks/nubank.png',
            lendingPartner: 'Nubank',
            aprFrom: '8.49%',
            term: '2 - 7 Years',
            maxAmount: '$ 50,000',
            scoreRequired: '350<',
            link: '#'
        },
        {
            imageSrc: '/banks/inter.png',
            lendingPartner: 'Inter',
            aprFrom: '6.99%',
            term: '3 - 5 Years',
            maxAmount: '$ 30,000',
            scoreRequired: '-',
            link: '#'
        },
        {
            imageSrc: '/banks/c6bank.png',
            lendingPartner: 'C6 Bank',
            aprFrom: '10.99%',
            term: '1 - 10 Years',
            maxAmount: '$ 100,000',
            scoreRequired: '500<',
            link: '#'
        },
        {
            imageSrc: '/banks/bancodobrasil.png',
            lendingPartner: 'Banco do Brasil',
            aprFrom: '10.99%',
            term: '1 - 10 Years',
            maxAmount: '$ 100,000',
            scoreRequired: '860<',
            link: '#'
        },
        {
            imageSrc: '/banks/mercadopago.png',
            lendingPartner: 'Mercado Pago',
            aprFrom: '10.99%',
            term: '1 - 10 Years',
            maxAmount: '$ 100,000',
            scoreRequired: '300<',
            link: '#'
        }
    ];

    return (

        <Container className='loan-list'>
            <h1>Find the Best Loan for You</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Lending Partner</TableCell>
                            <TableCell align="left">Score</TableCell>
                            <TableCell align="center">Term</TableCell>
                            <TableCell align="center">Max</TableCell>
                            <TableCell align="right">APR From</TableCell>
                            <TableCell align="right">Sort By</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loanData.map((loan, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <div className="product-image">
                                        <Tooltip title={loan.lendingPartner} placement="right">
                                            <Image width={60} height={60} src={loan.imageSrc} alt={loan.lendingPartner} />
                                        </Tooltip>
                                    </div>
                                </TableCell>
                                <TableCell align="left">{loan.scoreRequired}</TableCell>
                                <TableCell align="center">{loan.term}</TableCell>
                                <TableCell align="center">{loan.maxAmount}</TableCell>
                                <TableCell align="right">{loan.aprFrom}</TableCell>
                                <TableCell align="right">
                                    <Button variant="contained" color="warning" href={loan.link} target="_blank" rel="noopener noreferrer">
                                        See Offers →
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default LoanList;
