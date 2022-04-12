import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState ([
    {
        id: 1,
        text: 'Dr Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
     {
         id: 2,
         text: 'Meeting',
         day: 'Feb 6th at 2:00pm',
         reminder: true,
     },
     {
         id: 3, 
         text: 'Shopping',
         day: 'Feb 7th at 12:00pm',
         reminder: false,
     },
])
  
// Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}

  return (
    <div className="container">
      <Header />
      <Tasks task={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
