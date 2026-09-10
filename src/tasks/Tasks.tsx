import type { TasksBody } from '../types/Types';

function Tasks({ tasks }: TasksBody) {
  console.log(tasks);
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <p>{task.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
