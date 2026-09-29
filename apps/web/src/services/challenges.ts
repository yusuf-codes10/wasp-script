import api from '@/services/api';
import type { Challenge, toDisplayChallenge } from '@shared/types/challenge';

export const getAllChallenges = async (): Promise<toDisplayChallenge[]> => {
    const {data} = await api.get('/challenges');
    return data;
}

export const getChallengeById = async (id: number): Promise<Challenge> => {
    const { data } = await api.get(`/challenges/${id}`);
    return data;
}