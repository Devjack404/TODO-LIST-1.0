import { useState } from 'react'; // Import useState

function AddTask ({ onAddTask }) { // Menerima prop onAddTask
    const [input, setInput] = useState(''); // State lokal untuk input teks

    const handleSubmit = (e) => {
        e.preventDefault(); // Mencegah refresh halaman
        if (input.trim() === '') return; // Jangan tambah kalau kosong
        onAddTask(input); // Panggil fungsi dari parent
        setInput(''); // Kosongkan input setelah menambah
    };

    return (
    <form onSubmit={handleSubmit} className="relative justify-center mt-4 shadow-lg"> {/* Gunakan form untuk submit */}
        <div className="relative">
            <svg className="absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6 ml-2 text-gray-500 z-10" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
            </svg>
            <input 
                type="text" 
                id="taskInput"
                className="rounded-base py-1 w-full pl-10 focus:border-blue-500 border-blue-500 active:border-blue-500 border-2 block rounded-t-base text-2xl focus:ring-blue-500 focus:outline-none" 
                placeholder="Add Task..." 
                value={input} // Bind input value ke state
                onChange={(e) => setInput(e.target.value)} // Update state saat input berubah
            />
        </div>
        {/* Anda bisa menambahkan tombol submit di sini jika tidak ingin mengandalkan Enter */}
    </form>
    )
}

export default AddTask;