import { seededColumns } from '../data/seed';
import Tasks from '../tasks/Tasks';
import type { ColumnBody } from '../types/Types';

function Columns() {
  return (
    <div>
      <div className="flex flex-row justify-center gap-10">
        {seededColumns.map((column: ColumnBody) => (
          <div key={column.id} className="p-5">
            <p className="mb-5 border-b border-white pb-2.5 text-center text-2xl font-bold text-white">
              {column.title}
            </p>
            <Tasks tasks={column.tasks} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Columns;
