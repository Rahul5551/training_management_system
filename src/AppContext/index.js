import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

// Create the context
export const AppContext = createContext();

// Create a provider component
export const AppContextProvider = ({ children }) => {
  const [mentorsData, setMentorsData] = useState([])
  const [projects, setProjects] = useState([]);
  const [mentorId, setmentorid] = useState (0);
  useEffect(()=>{
    try {
      (async()=>{
        const res = await axios.get('http://localhost:8080/api/mentors');
        setMentorsData(res.data)
     })()
    } catch (error) {
      console.log(error)
    }
  },[])

  const contextValues = {
    mentorsData,
    projects,
    setmentorid, 
    mentorId,
  };

  return (
    <AppContext.Provider value={contextValues}>
      {children}
    </AppContext.Provider>
  );
};

