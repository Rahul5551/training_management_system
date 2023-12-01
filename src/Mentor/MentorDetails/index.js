import { Typography } from "@mui/material"
import { AccordionActions } from "@mui/material"
import { Button } from "@mui/material"
import { Card, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import axios from "axios"
import { useContext } from "react"
import { useNavigate } from "react-router"
import { AppContext } from "../../AppContext"

export const MentorDetails = () => {
  const { mentorsData, setmentorid } = useContext(AppContext)
  const navigate = useNavigate();
  // console.log(mentorsData)
  const handleDelete = (mentorId) => {
    // Logic to handle mentor deletion based on mentorId
    axios.delete(`http://localhost:8080/api/mentors/${mentorId}`).then((resp)=>console.log(resp.data))
    console.log(`Deleting mentor with ID ${mentorId}`);
  };

  const handleUpdate = (mentorId) => {
    // Logic to handle mentor update based on mentorId
    setmentorid(mentorId);
    navigate(`/update-mentor-details`)
    console.log(`Updating mentor with ID ${mentorId}`);
  };

  const handleAddMentor =()=>{
    navigate('/add-mentor');
  }

  return (
    <Grid>
      <Typography variant='h4' align='center' mb={5}>Mentor Details</Typography>
      <TableContainer mb={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Mentor ID</TableCell>
              <TableCell>Mentor Name</TableCell>
              <TableCell>Expertise</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mentorsData.map((mentor) => (
              <TableRow key={mentor.mentorId}>
                <TableCell>{mentor.mentorId}</TableCell>
                <TableCell>{mentor.mentorName}</TableCell>
                <TableCell>{mentor.expertise}</TableCell>
                <TableCell>{mentor.status}</TableCell>
                <TableCell>
                  <Button variant="outlined" onClick={() => handleUpdate(mentor.mentorId)}>Update</Button>&nbsp;
                  <Button variant="outlined" onClick={() => handleDelete(mentor.mentorId)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <center><Button variant='outlined'  onClick={handleAddMentor} >ADD MENTOR</Button></center>
    </Grid>

  )
}