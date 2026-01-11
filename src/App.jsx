import { useState } from "react";
import AddTask from "./components/AddTasks";
import Task from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Passar aspirador no quarto",
      description: "Passar arpirador no quarto casal",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Troucar roupa de cama",
      description: "Trocar roupa de cama quarto casal",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Passar pano nos móveis",
      description: "Passar pano nos móveis quarto casal",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w=[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Task tasks={tasks} onTaskClick={onTaskClick} />
      </div>
    </div>
  );
}

export default App;
