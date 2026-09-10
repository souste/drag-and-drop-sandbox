import { seededColumns } from '../data/seed';
import Tasks from '../tasks/Tasks';
import type { ColumnBody } from '../types/Types';

function Columns() {
  return (
    <div>
      <p>Columns</p>
      {seededColumns.map((column: ColumnBody) => (
        <div key={column.id}>
          <p>{column.title}</p>
          <Tasks tasks={column.tasks} />
        </div>
      ))}
    </div>
  );
}

export default Columns;
