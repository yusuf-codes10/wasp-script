import api from "@/services/api";
import type { Challenge, toDisplayChallenge } from "@shared/types/challenge";

export const getAllChallenges = async (
  page: number = 5,
  limit: number = 1,
  query: string = "",
): Promise<{
    challenges: toDisplayChallenge[];
    total: any;
}> => {
  const res  = await api.get(`/challenges`, {
    params: { page, limit, difficulty: query || undefined },
  });
  const { response: challenges, count: total } = res.data;
  return {challenges, total};
};

export const getChallengeById = async (id: number): Promise<Challenge> => {
  const { data } = await api.get(`/challenges/${id}`);
  return data;
};
