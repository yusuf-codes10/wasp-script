import api from "@/services/api";
import type { Challenge, toDisplayChallenge } from "@shared/types/challenge";

export const getAllChallenges = async (
  page: number = 1,
  limit: number = 5,
  difficulty: string = "",
  search: string = ""
): Promise<{
    challenges: toDisplayChallenge[];
    total: any;
}> => {
  const res  = await api.get(`/challenges`, {
    params: { page, limit, difficulty: difficulty || undefined, search: search || undefined },
  });
  const { response: challenges, count: total } = res.data;
  return {challenges, total};
};

export const getChallengeById = async (id: number): Promise<Challenge> => {
  const { data } = await api.get(`/challenges/${id}`);
  return data;
};
