function AddTask () {
    return (
    <div id="addTask" class="relative justify-center mt-4 shadow-lg">
        <svg class="absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6 ml-2 text-gray-500 z-10" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
        </svg>

        <input type="text" id="taskInput"
            class="rounded-base py-1 w-full pl-10 focus:border-blue-500 border-blue-500 active:border-blue-500 border-2 block rounded-t-base text-2xl focus:ring-blue-500 focus:outline-none" 
            placeholder="Add Task..." />
    </div>
    )
}

export default AddTask;