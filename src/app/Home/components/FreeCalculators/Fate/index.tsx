'use client';

import { Matrix } from '@/components/Matrix';
import { DefaultState } from '@/store/rootReducer';
import { useSelector } from 'react-redux';
import { FateForm } from './components/FateForm';

export const FateCalculator = () => {
  const { isLoading, combinations } = useSelector((state: DefaultState) => state.calculation);

  return <div className="lg:min-h-[300px]">{combinations ? <Matrix /> : <FateForm />}</div>;
};
