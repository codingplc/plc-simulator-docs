interface Props {
  column: number;
  isRequired?: boolean;
  varName?: string;
  justify: 'left' | 'right';
  row: number;
  value: number | boolean | null;
  simulation: boolean;
}

export default function BlockParamValue({ column, isRequired, justify, row, value, varName, simulation }: Props) {
  const name = varName === undefined && isRequired ? '<???>' : varName;
  const stringValue = typeof value === 'boolean' ? value.toString() : value;

  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: justify === 'left' ? 'row' : 'row-reverse',
        gridColumn: column,
        gridRow: row,
        justifyContent: justify,
        minWidth: typeof value === 'boolean' ? '3.75em' : 'auto',
      }}
    >
      <div
        style={{
          alignSelf: 'end',
          backgroundColor: 'darkgrey',
          marginBottom: `calc((0.875em + 0.25em) / 2)`,
          height: '0.25em',
          width: '1em',
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: justify === 'left' ? 'flex-start' : 'flex-end',
        }}
      >
        {(simulation || !varName) && (
          <span className={`${varName ? 'bg-neutral-300 dark:bg-neutral-700' : 'bg-transparent'} leading-5 mx-1 px-0.5 text-sm`}>{stringValue}</span>
        )}
        <span className={`${varName ? 'text-neutral-700 dark:text-neutral-300' : 'text-red-500'} text-sm mx-1 whitespace-nowrap`}>{name}</span>
      </div>
    </div>
  );
}
