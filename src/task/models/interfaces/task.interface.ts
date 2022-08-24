export interface TaskKey {
  id: string;
}

export interface Task extends TaskKey {
  name: string;
  description: string;
}
