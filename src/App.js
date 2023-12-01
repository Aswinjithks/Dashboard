import Header from "./components/header";
import AssignedJobs from "./components/Jobs/assignedJobs";
import UnAssignedJobs from "./components/Jobs/unassignedJobs";
import FinishedJobs from "./components/Jobs/finishedJobs";
import ProjectRouter from './routes'
function App() {
  return (
    <div>
      <ProjectRouter/>
    </div>
  );
}

export default App;
