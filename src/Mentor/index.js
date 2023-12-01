import { Route, Router, Routes } from "react-router"
import { MentorDetails } from "./MentorDetails"
import MentorForm from "./MentorForm"
import { UpdateMentorDetails } from "./UpdateMentor"

export const MentorRouterRouter=()=>{
    return(
        <Routes>
            <Route path='/'  element={<MentorDetails />} />
            <Route path='/update-mentor-details/?' Component={UpdateMentorDetails} />
            <Route path='/add-mentor' Component={MentorForm} />
        </Routes>
    )
}