import { Route, Routes } from 'react-router';
import './App.css'
import TaskDetails from './components/TaskDetails'
import TaskList from './components/TaskList'

function App() {

  const tasks = [
    {
      id: 1,
      title: 'Complete this assignment',
      description: 'Install react router, define task data, create the TaskList component, create the TaskDetail component, configure routes in App.jsx, add styling'
    },
    {
      id: 2,
      title: 'Complete this course',
      description: 'Finish all assignments and final project, graduate super summa cum laude'
    },
    {
      id: 3,
      title: `Create the world's most radical website`,
      description: 'We could describe the most radical website but it would explode your mind'
    }
  ];

  return (
    <div>
      <Routes>
        <Route path="/" element={<TaskList tasks = {tasks} />} />
      </Routes>
    </div>
  )
}

export default App
