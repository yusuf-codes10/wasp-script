import api from '@/services/api';
import type { Challenge } from '@shared/types/challenge';

export const getAllChallenges = async (): Promise<Challenge> => {
    const {data} = await api.get('/challenges');
    return data;
}