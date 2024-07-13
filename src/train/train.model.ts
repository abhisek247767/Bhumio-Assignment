// src/train/train.model.ts
export interface TrainComponent {
  start_role: string[];
  present_role: string;
  next_role: string[];
  action_by?: string[];
}

export interface Train {
  id: string;
  components: TrainComponent[];
}

export interface TrainModel {
  [key: string]: Train;
}
