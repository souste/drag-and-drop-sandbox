import type { TasksBody } from '../types/Types';

function Tasks({ tasks }: TasksBody) {
  console.log(tasks);
  return (
    <div className="flex flex-col gap-5">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-yellow-300 px-3 py-7 text-gray-900 shadow-lg shadow-white/30"
        >
          <p>{task.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
