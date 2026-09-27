import api from '@/services/api';
import type { Submission } from '@shared/types/submission';

export const submitResponse = async (): Promise<any> => {
    const { data } = api.post('/submission');
    return data;
}