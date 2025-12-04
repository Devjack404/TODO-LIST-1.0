function Task({ task, onToggleComplete, onDelete }){ // Menerima props: task, onToggleComplete, onDelete
    return (
    <>
        <li className="py-3 flex justify-between items-center px-4">
            <div className="flex items-center "> 
                <input 
                    type="checkbox"  
                    id={`task-${task.id}`} // Tambahkan ID unik untuk checkbox
                    className="w-5 h-5 mr-2 peer" // Tambahkan 'peer' untuk styling label
                    checked={task.completed} // Kontrol status checked dari prop task
                    onChange={() => onToggleComplete(task.id)} // Panggil fungsi onToggleComplete saat checkbox diubah
                />
                <label 
                    htmlFor={`task-${task.id}`} // Gunakan ID unik untuk htmlFor agar terhubung dengan checkbox
                    className="text-lg px-4 cursor-pointer peer-checked:line-through peer-checked:text-gray-400"
                >
                    {task.text} {/* Tampilkan teks tugas dari prop */}
                </label>
            </div>
            <button 
                aria-label="Hapus Tugas" 
                onClick = {() => onDelete(task.id)} // Panggil fungsi onDelete saat tombol diklik
                className="text-red-600 hover:text-red-800 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M22 5a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h5V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h5a1 1 0 0 1 1 1zM4.934 21.071 4 8h16l-.934 13.071a1 1 0 0 1-1 .929H5.931a1 1 0 0 1-.997-.929zM15 18a1 1 0 0 0 2 0v-6a1 1 0 0 0-2 0zm-4 0a1 1 0 0 0 2 0v-6a1 1 0 0 0-2 0zm-4 0a1 1 0 0 0 2 0v-6a1 1 0 0 0-2 0z"/>
                </svg>
            </button>
        </li>
    </>
    )   
};

export default Task;
