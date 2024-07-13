// src/train/train.service.ts
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { TrainModel, TrainComponent, Train } from './train.model';

@Injectable()
export class TrainService {
  private trains: TrainModel;

  constructor() {
    this.loadTrains();
  }

  private loadTrains() {
    const data = fs.readFileSync('roles.json', 'utf8');
    this.trains = JSON.parse(data);
  }

  private saveTrains() {
    fs.writeFileSync('roles.json', JSON.stringify(this.trains, null, 2));
  }

  startComponent(trainId: string, componentIndex: number) {
    const train = this.trains[trainId];
    if (train && train.components[componentIndex]) {
      const component = train.components[componentIndex];
      component.present_role = component.next_role[0]; // Update the present_role to the first next_role
      this.saveTrains();
      return `${component.present_role} of train ${trainId} started`;
    } else {
      throw new Error(`Component with index ${componentIndex} in train ${trainId} not found`);
    }
  }

  stopComponent(trainId: string, componentIndex: number) {
    const train = this.trains[trainId];
    if (train && train.components[componentIndex]) {
      const component = train.components[componentIndex];
      component.present_role = 'Stopped'; // Update the present_role to indicate it's stopped
      this.saveTrains();
      return `${component.present_role} of train ${trainId} stopped`;
    } else {
      throw new Error(`Component with index ${componentIndex} in train ${trainId} not found`);
    }
  }

  addNodeToTrain(trainId: string, newComponent: TrainComponent) {
    const train = this.trains[trainId];
    if (train) {
      train.components.push(newComponent);
      this.saveTrains();
      return `Component added to train ${trainId}`;
    } else {
      throw new Error(`Train with ID ${trainId} not found`);
    }
  }

  createNewTrain() {
    const newTrainId = uuidv4();
    this.trains[newTrainId] = { id: newTrainId, components: [] };
    this.saveTrains();
    return newTrainId;
  }

  getTrainModel(trainId: string) {
    const train = this.trains[trainId];
    if (train) {
      return train;
    } else {
      throw new Error(`Train with ID ${trainId} not found`);
    }
  }

  getAllTrains() {
    return this.trains;
  }
}
