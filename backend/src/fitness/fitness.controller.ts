import express, { Request, Response } from 'express';
import { FitnessService } from './fitness.service';
import { Controller, Get, Query, Delete, Param, Patch, Body } from '@nestjs/common';
import { CreateFitnessDto } from './fitness.dto';

@Controller('fitness')
export class FitnessController {
  constructor(private readonly fitnessService: FitnessService) {}
  @Get('getfitness')
  async getFitness(@Query() query) {
    try {
      const result = await this.fitnessService.getFitness(query);
      return result;
    } catch (err) {
      console.log(err);
    }
  }
  @Get('getAllFitness')
  async getAllfitness() {
    try {
      const result = await this.fitnessService.getAllfitness();
      return result;
    } catch (err) {
      console.log(err);
    }
  }
  @Delete(':_id')
  async deleteFitness(@Param('_id') _id: string){
    const result = await this.fitnessService.deleteFitness(_id);
    return result 
  }
  @Patch(':_id')
  async updateProduct(
    @Param('_id') id: string,
    @Body() updateFitnessInput
  ) {
    const result = await this.fitnessService.updateFitness(
      id,
      updateFitnessInput,
    );
    return result;
  }
}
