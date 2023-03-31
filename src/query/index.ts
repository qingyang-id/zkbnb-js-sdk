import { QueryClient } from './query';
import { QueryServer } from './queryServer';

export * from './query';
export * from './queryServer';
export * from './response';
export * from './type';
export * from './errors';

export const Query = typeof window === 'undefined' ? QueryServer : QueryClient;
