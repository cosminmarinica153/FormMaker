import { FileTypes } from './FileTypes';

export interface IForm {
  id: number;
  title: string;
  description: string;
  cards: {
    id: number;
    type: string;
    question: string;
    required: boolean;
    options?: string[];
    specificFileType?: FileTypes;
    maxFileSize?: string;
  }[];
}
