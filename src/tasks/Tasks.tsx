import Task from './Task';
import type { TasksBody } from '../types/Types';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

function Tasks({ tasks }: TasksBody) {
  return (
    <div className="flex flex-col gap-5">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Task id={task.id} title={task.title} key={task.id} />
        ))}
      </SortableContext>
    </div>
  );
}

export default Tasks;
