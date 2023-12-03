import api from '@/api/config';

export const getCalculations = (year: string) => api.get(`/calculate/${year}`);
