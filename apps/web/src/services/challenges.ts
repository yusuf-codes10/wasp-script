import api from '@/services/api';
import type { Challenge, toDisplayChallenge } from '@shared/types/challenge';

export const getAllChallenges = async (page:  number = 5, limit: number = 1, query: string = ''): Promise<toDisplayChallenge[]> => {
    const {data} = await api.get(`/challenges?page=${page}&limit=${limit}`);
    return data;
}

export const getChallengeById = async (id: number): Promise<Challenge> => {
    const { data } = await api.get(`/challenges/${id}`);
    return data;
}