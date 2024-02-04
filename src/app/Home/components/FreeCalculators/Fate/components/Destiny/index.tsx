import { Destiny } from '@/components/Destiny';
import { DefaultState } from '@/store/rootReducer';
import { useSelector } from 'react-redux';

export const DestinyBlock = () => {
  const combinations = useSelector((state: DefaultState) => state.calculation.combinations!!);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap justify-evenly gap-10 md:gap-0">
        <Destiny
          coordinates={[combinations?.pa, combinations?.pa1, combinations?.pa2]}
          titleId="program.male-line"
          type="inline"
        />
        <Destiny
          coordinates={[combinations?.pb, combinations?.pb1, combinations?.pb2]}
          titleId="program.female-line"
          type="inline"
        />
      </div>
      <div className="flex flex-wrap justify-between gap-10 md:gap-0">
        <Destiny
          coordinates={[combinations?.pc, combinations?.pc1, combinations?.pc2]}
          titleId="program.personal"
        />
        <Destiny
          coordinates={[combinations?.pd, combinations?.pd1, combinations?.pd2]}
          titleId="program.social"
        />
        <Destiny
          coordinates={[combinations?.pe, combinations?.pe1, combinations?.pe2]}
          titleId="program.spirit"
        />
      </div>
    </div>
  );
};
