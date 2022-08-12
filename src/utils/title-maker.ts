/**
 */
import { publicApplicationName } from '@config/application';
/**
 */
export const titleMaker = (pageName: string): string => {
  return `${pageName} | ${publicApplicationName}`;
};
