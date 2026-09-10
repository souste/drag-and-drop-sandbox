export type ColumnBody = {
  id: string;
  title: string;
  tasks: TaskBody[];
};

export type TasksBody = {
  tasks: TaskBody[];
};

export type TaskBody = {
  id: string;
  title: string;
};
