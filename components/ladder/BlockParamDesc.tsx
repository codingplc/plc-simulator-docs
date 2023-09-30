interface Props {
  desc: string;
  column: number;
  justify: 'left' | 'right';
  row: number;
}

export default function BlockParamDesc({ column, justify, desc, row }: Props) {
  const twJustify = justify === 'left' ? 'justify-left' : 'justify-right';
  return (
    <div
      className={`flex text-sm mx-1 items-end ${twJustify}`}
      style={{
        gridColumn: column,
        gridRow: row,
      }}
    >
      <span className="text-sm text-neutral-700">{desc}</span>
    </div>
  );
}
