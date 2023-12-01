import { Grid } from "@mui/material"
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router"
import { AppContext } from "../../AppContext";
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from "axios";


export const UpdateMentorDetails=()=>{
    const {mentorId, mentorsData} = useContext(AppContext);


// console.log('Mentor Name:', mentorName);
const filteredMentor = mentorsData.filter((mentor) => mentor.mentorId === mentorId)[0];
const mentorsName = filteredMentor ? filteredMentor.mentorName : '';
const expertised = filteredMentor ? filteredMentor.expertise :'';
const statuss = filteredMentor ? filteredMentor.status:'';
    const [mentorName, setMentorName] = useState(mentorsName);
    const [expertise, setExpertise] = useState(expertised);
    const [status, setStatus] = useState(statuss);
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
        axios.put(`http://localhost:8080/api/mentors/${mentorId}`,{
            "mentorName":mentorName,
            "expertise":expertise,
            "status":status
        }).then((resp)=>{console.log(resp.data);navigate('/')})
        setMentorName(mentorsName);
        setExpertise(expertised);
        setStatus(statuss);
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
    )
}