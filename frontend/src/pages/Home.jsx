import { useEffect, useState } from "react"

// components
import WorkoutDetails from "../components/WorkoutDetails"

const Home = () => {
  const [workouts, setWorkouts] = useState(null)

  useEffect(() => {
    const fetchWorkouts = () => {
      fetch('/api/workouts')
      .then(res =>{
        if(res.ok){
            console.log(res.json());
            return res
        }
        throw res;
      })
      .then(data => {
        setWorkouts(data);
      })
      .catch(err => {
        console.log(err);   
      })

    }

    fetchWorkouts()
  }, [])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
        {workouts && console.log(workouts.map(w => console.log(w)))}
      </div>
    </div>
  )
}

export default Home