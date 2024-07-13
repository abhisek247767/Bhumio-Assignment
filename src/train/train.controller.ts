// src/train/train.controller.ts
import { Controller, Get, Post, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { TrainService } from './train.service';
import { TrainComponent } from './train.model';

@Controller('train')
export class TrainController {
  constructor(private readonly trainService: TrainService) {}

  @Post('start/:trainId/:componentIndex')
  startComponent(@Param('trainId') trainId: string, @Param('componentIndex') componentIndex: number) {
    try {
      const message = this.trainService.startComponent(trainId, componentIndex);
      return { message };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Post('stop/:trainId/:componentIndex')
  stopComponent(@Param('trainId') trainId: string, @Param('componentIndex') componentIndex: number) {
    try {
      const message = this.trainService.stopComponent(trainId, componentIndex);
      return { message };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Post('add-node/:trainId')
  addNodeToTrain(@Param('trainId') trainId: string, @Body() newComponent: TrainComponent) {
    try {
      const message = this.trainService.addNodeToTrain(trainId, newComponent);
      return { message };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Post('create')
  createNewTrain() {
    const newTrainId = this.trainService.createNewTrain();
    return { message: `New train created with ID ${newTrainId}`, trainId: newTrainId };
  }

  @Get(':trainId')
  getTrainModel(@Param('trainId') trainId: string) {
    try {
      return this.trainService.getTrainModel(trainId);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Get()
  getAllTrains() {
    return this.trainService.getAllTrains();
  }
}
