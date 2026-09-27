import api from '@/services/api';
import type { AIAnswer, Submission } from '@shared/types/submission';

export const submitResponse = async (submission: Submission): Promise<AIAnswer> => {
    const { data } = await api.post('/submission', submission);
    return data;
}