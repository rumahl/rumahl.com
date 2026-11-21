'use client';
import type {ReactNode} from 'react';
import {MarkdownCode} from '@/components/rumahl/rich-markdown';

/** Responsive table with a shared header style. First column is emphasised. */
export function DataTable({columns, rows, dense = false, caption}: {columns: string[]; rows: ReactNode[][]; dense?: boolean; caption?: string}) {
  return (
    <div className="rwds-table-wrap">
      <table className="rwds-table" data-dense={dense ? true : undefined}>
        {caption ? <caption style={{textAlign: 'left', padding: '12px 16px', color: 'var(--foreground-muted)', fontSize: 13}}>{caption}</caption> : null}
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Colour role preview. Pass the CSS custom property name, e.g. `--accent`. */
export function Swatch({token, description}: {token: string; description?: string}) {
  return (
    <div className="rwds-swatch">
      <div className="rwds-swatch-chip" style={{background: `var(${token})`}} />
      <div className="rwds-swatch-meta">
        <strong>{description ?? token}</strong>
        <code>{token}</code>
      </div>
    </div>
  );
}

/** Syntax-highlighted code, shared with the documentation. */
export function CodeBlock({language = 'text', code}: {language?: string; code: string}) {
  return <MarkdownCode language={language} content={code} />;
}
