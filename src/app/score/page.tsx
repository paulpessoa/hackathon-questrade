"use client"
import './style.scss'

import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import Image from 'next/image';
import ScoreResult from '../components/ScoreResult/ScoreResult';
import { useState, FormEvent } from 'react';
import { SelectChangeEvent } from '@mui/material';


const Score = () => {
    const [age, setAge] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [employmentStatus, setEmploymentStatus] = useState('');
    const [partnerEmploymentStatus, setPartnerEmploymentStatus] = useState('');
    const [annualIncome, setAnnualIncome] = useState('');
    const [householdIncome, setHouseholdIncome] = useState('');
    const [debtAmount, setDebtAmount] = useState('');
    const [assetValue, setAssetValue] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Perform submission logic or API call here
        // Calculate the score based on the selected values

        // Clear the form or show the result
    };

    const handleChangeAge = (event: SelectChangeEvent<string>) => {
        setAge(event.target.value);
    };

    const handleChangeMaritalStatus = (event: SelectChangeEvent<string>) => {
        setMaritalStatus(event.target.value);
    };

    const handleChangeEmploymentStatus = (event: SelectChangeEvent<string>) => {
        setEmploymentStatus(event.target.value);
    };

    const handleChangePartnerEmploymentStatus = (event: SelectChangeEvent<string>) => {
        setPartnerEmploymentStatus(event.target.value);
    };

    const handleChangeAnnualIncome = (event: SelectChangeEvent<string>) => {
        setAnnualIncome(event.target.value);
    };

    const handleChangeHouseholdIncome = (event: SelectChangeEvent<string>) => {
        setHouseholdIncome(event.target.value);
    };

    const handleChangeDebtAmount = (event: SelectChangeEvent<string>) => {
        setDebtAmount(event.target.value);
    };

    const handleChangeAssetValue = (event: SelectChangeEvent<string>) => {
        setAssetValue(event.target.value);
    };








    return (
        <div className='form-container'>
            <h1>What is your SCORE?</h1>
            <Image width={200} height={200} src="/images/score.png" alt="Search" />
            <form onSubmit={handleSubmit}>
                <FormControl className='form-control' fullWidth>
                    <InputLabel id="age-label">What is your age</InputLabel>
                    <Select
                        labelId="age-label"
                        id="age-select"
                        value={age}
                        label="Age"
                        onChange={handleChangeAge}
                    >
                        <MenuItem value="75">Up to 20</MenuItem>
                        <MenuItem value="50">Between 20 and 30</MenuItem>
                        <MenuItem value="125">Between 30 and 50</MenuItem>
                        <MenuItem value="100">Above 50</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className='form-control' fullWidth>
                    <InputLabel id="marital-status-label">Marital Status</InputLabel>
                    <Select
                        labelId="marital-status-label"
                        id="marital-status-select"
                        value={maritalStatus}
                        label="Marital Status"
                        onChange={handleChangeMaritalStatus}
                    >
                        <MenuItem value="100">Single</MenuItem>
                        <MenuItem value="75">Common-law</MenuItem>
                        <MenuItem value="125">Married</MenuItem>
                        <MenuItem value="50">Divorced</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className='form-control' fullWidth>
                    <InputLabel id="employment-status-label">Employment Status</InputLabel>
                    <Select
                        labelId="employment-status-label"
                        id="employment-status-select"
                        value={employmentStatus}
                        label="Employment Status"
                        onChange={handleChangeEmploymentStatus}
                    >
                        <MenuItem value="125">Fixed Employee</MenuItem>
                        <MenuItem value="100">Self-employed</MenuItem>
                        <MenuItem value="100">Freelancer</MenuItem>
                        <MenuItem value="125">Business Owner</MenuItem>
                        <MenuItem value="75">Informal Work</MenuItem>
                        <MenuItem value="25">No Income</MenuItem>
                        <MenuItem value="50">Other</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className='form-control' fullWidth>
                    <InputLabel id="partner-employment-status-label">Partners Employment Status</InputLabel>
                    <Select
                        labelId="partner-employment-status-label"
                        id="partner-employment-status-select"
                        value={partnerEmploymentStatus}
                        label="Partner's Employment Status"
                        onChange={handleChangePartnerEmploymentStatus}
                    >
                        <MenuItem value="fixed-employee">Fixed Employee</MenuItem>
                        <MenuItem value="self-employed">Self-employed</MenuItem>
                        <MenuItem value="freelancer">Freelancer</MenuItem>
                        <MenuItem value="business-owner">Business Owner</MenuItem>
                        <MenuItem value="informal-work">Informal Work</MenuItem>
                        <MenuItem value="no-income">No Income</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className='form-control' fullWidth>
                    <InputLabel id="annual-income-label">Annual Income</InputLabel>
                    <Select
                        labelId="annual-income-label"
                        id="annual-income-select"
                        value={annualIncome}
                        label="Annual Income"
                        onChange={handleChangeAnnualIncome}
                    >
                        <MenuItem value="up-to-20k">Up to $20,000</MenuItem>
                        <MenuItem value="20k-to-40k">$20,000 to $40,000</MenuItem>
                        <MenuItem value="40k-to-70k">$40,000 to $70,000</MenuItem>
                        <MenuItem value="70k-to-100k">$70,000 to $100,000</MenuItem>
                        <MenuItem value="above-100k">Above $100,000</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className='form-control' fullWidth>
                    <InputLabel id="household-income-label">Household Income</InputLabel>
                    <Select
                        labelId="household-income-label"
                        id="household-income-select"
                        value={householdIncome}
                        label="Household Income"
                        onChange={handleChangeHouseholdIncome}
                    >
                        <MenuItem value="up-to-1-minimum-wage">Up to 1 minimum wage</MenuItem>
                        <MenuItem value="1-to-2-minimum-wages">1 to 2 minimum wages</MenuItem>
                        <MenuItem value="2-to-3-minimum-wages">2 to 3 minimum wages</MenuItem>
                        <MenuItem value="3-to-5-minimum-wages">3 to 5 minimum wages</MenuItem>
                        <MenuItem value="above-5-minimum-wages">Above 5 minimum wages</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className='form-control' fullWidth>
                    <InputLabel id="debt-amount-label">Debt Amount</InputLabel>
                    <Select
                        labelId="debt-amount-label"
                        id="debt-amount-select"
                        value={debtAmount}
                        label="Debt Amount"
                        onChange={handleChangeDebtAmount}
                    >
                        <MenuItem value="up-to-5k">Up to $5,000</MenuItem>
                        <MenuItem value="5k-to-10k">$5,000 to $10,000</MenuItem>
                        <MenuItem value="10k-to-30k">$10,000 to $30,000</MenuItem>
                        <MenuItem value="30k-to-50k">$30,000 to $50,000</MenuItem>
                        <MenuItem value="above-50k">Above $50,000</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className='form-control' fullWidth>
                    <InputLabel id="asset-value-label">Asset Value</InputLabel>
                    <Select
                        labelId="asset-value-label"
                        id="asset-value-select"
                        value={assetValue}
                        label="Asset Value"
                        onChange={handleChangeAssetValue}
                    >
                        <MenuItem value="up-to-20k">Up to $20,000</MenuItem>
                        <MenuItem value="20k-to-40k">$20,000 to $40,000</MenuItem>
                        <MenuItem value="40k-to-60k">$40,000 to $60,000</MenuItem>
                        <MenuItem value="60k-to-80k">$60,000 to $80,000</MenuItem>
                        <MenuItem value="above-80k">Above $80,000</MenuItem>
                    </Select>
                </FormControl>
                <div className='score-buttons'>
                    {/* <Button className='submit-button' type="submit" variant="contained" color="warning">Calculate Score</Button> */}
                    <ScoreResult/>

                </div>
            </form>
        </div>
    );
};

export default Score;








