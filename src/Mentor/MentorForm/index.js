import React, { useState } from 'react';
import { TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router';

const MentorForm = () => {
  const [mentorName, setMentorName] = useState('');
  const [expertise, setExpertise] = useState('');
  const [status, setStatus] = useState('');
    const navigate = useNavigate();
  const handleMentorNameChange = (event) => {
    setMentorName(event.target.value);
  };

  const handleExpertiseChange = (event) => {
    setExpertise(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission (e.g., API call or other actions)
    console.log('Mentor Name:', mentorName);
    console.log('Expertise:', expertise);
    console.log('Status:', status);
    // Reset form fields after submission
    axios.post('http://localhost:8080/api/mentors/create',{
        "mentorName":mentorName,
        "expertise":expertise,
        "status":status
    }).then((resp)=>{console.log(resp.data);navigate('/')})
    setMentorName('');
    setExpertise('');
    setStatus('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Mentor Name"
            value={mentorName}
            onChange={handleMentorNameChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Expertise"
            value={expertise}
            onChange={handleExpertiseChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              value={status}
              label="Status"
              onChange={handleStatusChange}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default MentorForm;
