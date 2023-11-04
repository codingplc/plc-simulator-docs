import BlockParam, { FbParams } from './BlockParam';

interface Props {
  blockVarName: string | undefined | null;
  inOutNames: [string, string];
  params: { in: FbParams; out: FbParams };
  type: string;
  simulation: boolean;
}

export default function FunctionBlock(props: Props) {
  const { blockVarName, inOutNames, params, type, simulation = false } = props;
  const { in: inParams, out: outParams } = params;
  const paramsCount = Math.max(inParams.length, outParams.length);
  const rows = 4 + paramsCount;
  return (
    <div
      className="mt-2"
      style={{
        boxSizing: 'border-box',
        display: 'inline-grid',
        gridTemplateColumns: 'minmax(min-content, 1fr) minmax(min-content, 1em) minmax(min-content, 0.25em) minmax(min-content, 1em) minmax(min-content, 1fr)',
        gridTemplateRows: `1.25em 1.25em 1.25em repeat(${paramsCount}, min-content)`,
      }}
    >
      <div
        style={{
          backgroundColor: '#3D3D3D',
          gridColumn: '2 / 5',
          gridRow: `2 / ${rows}`,
        }}
      />
      <div
        style={{
          gridColumn: '2 / 5',
          gridRow: `4 / ${rows}`,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          width: '100%',
        }}
      />
      <div
        style={{
          gridColumnStart: 1,
          gridColumnEnd: 6,
          gridRow: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '16em',
            padding: '0 0.5em',
            height: '100%',
          }}
        >
          <span
            className=""
            style={{
              fontWeight: blockVarName === undefined ? 'bold' : '500',
              fontSize: '0.875em',
              color: blockVarName === undefined ? '#FF0000' : '',
              whiteSpace: 'nowrap',
            }}
          >
            {blockVarName === undefined ? '<???>' : blockVarName}
          </span>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gridColumnStart: 2,
          gridColumnEnd: 5,
          gridRow: 2,
          justifyContent: 'center',
          height: '1.25em',
          padding: '0 0.375em',
        }}
      >
        <span
          style={{
            color: '#FFFFFF',
            fontWeight: '500',
            fontSize: '0.9375em',
          }}
        >
          {type}
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          gridColumnStart: 1,
          gridColumnEnd: 2,
          gridRow: 3,
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: '#3D3D3D',
            height: '0.25em',
            margin: 'auto',
            minWidth: '1em',
            width: '100%',
          }}
        />
      </div>
      <div
        style={{
          gridColumn: '2 / 5',
          gridRow: 3,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
        }}
      />
      <div
        style={{
          alignItems: 'end',
          display: 'flex',
          justifyContent: 'left',
          gridColumn: 2,
          gridRow: 3,
          margin: '0 0.25em',
        }}
      >
        <span style={{ color: '#333333', fontSize: '0.875em' }}>{inOutNames[0]}</span>
      </div>
      <div
        style={{
          alignItems: 'end',
          display: 'flex',
          justifyContent: 'right',
          gridColumn: 4,
          gridRow: 3,
          margin: '0 0.25em',
        }}
      >
        <span style={{ color: '#333333', fontSize: '0.875em' }}>{inOutNames[1]}</span>
      </div>
      <div
        style={{
          display: 'flex',
          gridColumnStart: 5,
          gridColumnEnd: 6,
          gridRow: 3,
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: '#3D3D3D',
            height: '0.25em',
            margin: 'auto',
            minWidth: '1em',
            width: '100%',
          }}
        />
      </div>
      {inParams.map(
        (param, index) => param !== null && <BlockParam key={crypto.randomUUID()} param={param} row={4 + index} position="in" simulation={simulation} />,
      )}
      {outParams.map(
        (param, index) => param !== null && <BlockParam key={crypto.randomUUID()} param={param} row={4 + index} position="out" simulation={simulation} />,
      )}
    </div>
  );
}
