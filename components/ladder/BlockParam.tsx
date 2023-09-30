import BlockParamDesc from './BlockParamDesc';
import BlockParamValue from './BlockParamValue';

export type FbParam = { desc: string; varName?: string; isRequired?: boolean; value: boolean | number | null };
export type FbParams = (FbParam | null)[];

interface Props {
  param: FbParam;
  position: 'in' | 'out';
  row: number;
  simulation: boolean;
}

export default function BlockParam({ param, position, row, simulation }: Props) {
  const descColumn = position === 'in' ? 2 : 4;
  const valueColumn = position === 'in' ? 1 : 5;
  const justifyDesc = position === 'in' ? 'left' : 'right';
  const justifyValue = position === 'in' ? 'right' : 'left';
  return (
    <>
      <BlockParamDesc desc={param.desc} column={descColumn} row={row} justify={justifyDesc} />
      <BlockParamValue
        value={param.value}
        column={valueColumn}
        isRequired={param.isRequired}
        varName={param.varName}
        row={row}
        justify={justifyValue}
        simulation={simulation}
      />
    </>
  );
}
