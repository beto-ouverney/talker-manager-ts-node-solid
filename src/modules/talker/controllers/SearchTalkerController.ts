import { Request, Response } from 'express';
import { SearchTalkerUseCase } from '../useCase/SearchTalkerUseCase';

class SearchTalkerController {
  searchTalkerUseCase: SearchTalkerUseCase;
  constructor(searchTalkerUseCase: SearchTalkerUseCase) {
    this.searchTalkerUseCase = searchTalkerUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { search } = request.query;
    const searchTxt = search ? search.toString() : '';
    const result = await this.searchTalkerUseCase.execute(searchTxt);
    return response.status(200).json(result);
  }
}

export { SearchTalkerController };
