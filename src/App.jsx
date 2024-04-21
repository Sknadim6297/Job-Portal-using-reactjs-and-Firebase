import Header from "./Components/Header/Header"
import JobCard from "./Components/JobCard/JobCard"
import Navbar from "./Components/Navbar/Navbar"
import SearchBar from "./Components/SearchBar/SearchBar"
// import JobData from "./assets/JobData"
import { collection, query,orderBy, where, getDocs} from "firebase/firestore";
import {db} from './Firebase'
import { useState,useEffect } from "react"

function App() {

  const [jobs,setJobs]=useState([]);

  const fetchJobs = async() => {
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      console.log(job.id, " => ", job.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }
  useEffect(()=>{
    fetchJobs();
  },[]);

  return (
    <>
   <Navbar />
   <Header />
   <SearchBar />
   {
    jobs.map((job)=>(
      <JobCard key={job.id} {...job} />
    ))
   }
    </>
  )
}

export default App
