import type { TasksBody } from '../types/Types';

function Tasks({ tasks }: TasksBody) {
  console.log(tasks);
  return (
    <div className="flex flex-col gap-5">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="text-red bg-yellow-300 p-3 pt-7 pb-7 text-gray-900"
        >
          <p>{task.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
