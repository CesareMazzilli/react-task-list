import './App.css'
import './index.css'

const tasks = [
  {
    id: 1,
    title: "Implementare la homepage",
    priority: 1,
    estimatedTime: 120,
    state: "completed"
  },
  {
    id: 2,
    title: "Sviluppare il menu di navigazione",
    priority: 2,
    estimatedTime: 60,
    state: "completed"
  },
  {
    id: 3,
    title: "Creare il footer del sito",
    priority: 3,
    estimatedTime: 30,
    state: "completed"
  },
  {
    id: 4,
    title: "Ottimizzare le performance",
    priority: 1,
    estimatedTime: 180,
    state: "completed"
  },
  {
    id: 5,
    title: "Scrivere test per i componenti",
    priority: 2,
    estimatedTime: 90,
    state: "completed"
  },
  {
    id: 6,
    title: "Implementare la pagina dei contatti",
    priority: 3,
    estimatedTime: 60,
    state: "completed"
  },
  {
    id: 7,
    title: "Aggiungere animazioni CSS",
    priority: 2,
    estimatedTime: 30,
    state: "backlog"
  },
  {
    id: 8,
    title: "Integrare l'API di autenticazione",
    priority: 1,
    estimatedTime: 120,
    state: "in_progress"
  },
  {
    id: 9,
    title: "Aggiornare la documentazione",
    priority: 3,
    estimatedTime: 60,
    state: "backlog"
  },
  {
    id: 10,
    title: "Rifattorizzare il codice CSS",
    priority: 2,
    estimatedTime: 90,
    state: "in_progress"
  }
];

function App() {
  const completedFilter = tasks.filter((curCompleted) => curCompleted.state === "completed")
  const otherFilter = tasks.filter((curOther) => curOther.state !== "completed")

  console.log(completedFilter);
  console.log(otherFilter);
  
  const completedList = completedFilter.map((curcompletedFilter) => {
    return (
    <ul>
      <li key={curcompletedFilter.id}>
        <h5>{curcompletedFilter.title}<p className='fakebutton'>{curcompletedFilter.state}</p></h5>
        <p>{curcompletedFilter.priority}</p>
        <p>{curcompletedFilter.estimatedTime}</p>
        </li>
    </ul>)
  })

  const otherList = otherFilter.map((curotherFilter) => {
    return (
    <ul>
      <li key={curotherFilter.id}>
        <h5>{curotherFilter.title}<p className='fakebutton'>{curotherFilter.state}</p></h5>
        <p>{curotherFilter.priority}</p>
        <p>{curotherFilter.estimatedTime}</p>
        </li>
    </ul>)
  })

  return (
    <>
     <h1 className="title">Task Manager</h1>

     <h4>Current Tasks (4)</h4>
     {otherList}

     <hr />

     <h4>Completed Task</h4>
     {completedList}
    </>
  )
}

export default App