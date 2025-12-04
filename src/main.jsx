import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { useState } from 'react' // Import useState
import Nav from './components/Navbar'
import AddTask from './components/AddTask'
import Task from './components/Task'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Bungkus logika utama dalam komponen App */}
  </StrictMode>,
)

// Komponen App untuk mengelola state dan logika utama
function App() {
  const [tasks, setTasks] = useState([]); // State untuk menyimpan daftar tugas

  // Fungsi untuk menambah tugas baru
  const handleAddTask = (taskText) => {
    if (taskText.trim() === "") return; // Jangan tambah kalau kosong

    const newTask = {
      id: Date.now(), // ID unik
      text: taskText,
      completed: false, // Tugas baru belum selesai
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Fungsi untuk menghapus tugas
  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Fungsi untuk mengubah status selesai tugas
  const handleToggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      {/* <Nav /> */}
      <div className='my-4 font-sans sm:text-center text-center'>
        <h1 className='font-sans text-2xl  font-bold lg:text-4xl'>SIMPLE TODO LIST</h1>
      </div>
      <AddTask onAddTask={handleAddTask} /> {/* Meneruskan fungsi penambah tugas */}
      {tasks.map((task) => (
        <Task key={task.id} task={task} onToggleComplete={handleToggleComplete} onDelete={handleDeleteTask} />
      ))}
    </>
  );
}
