import api from '@/services/api';

export const getAllChallenges = async () => {
    const {data} = await api.get('/challenges');
    return data;
}