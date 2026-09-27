import api from '@/services/api';
import type { AIAnswer } from '@shared/types/submission';

export const submitResponse = async (): Promise<AIAnswer> => {
    const { data } = await api.post('/submission');
    return data;
}