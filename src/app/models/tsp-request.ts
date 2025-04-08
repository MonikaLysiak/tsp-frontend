import { GeneticParameters } from "./genetic-parameters";

export class TspRequest extends FormData {
  constructor() {
    super();
  }

  setFile(file: File) {
    this.set('file', file, file.name);
  }

  setGeneticParameters(geneticParameters: GeneticParameters) {
    this.set('geneticParameters', JSON.stringify(geneticParameters));
  }
}