import React, { useState } from 'react';

import { TABLE_ROW_LIMIT } from '../constants';

import s from '../style/shared/Table.module.scss';

type TableProps<T> = {
    data: Array<T>;
    headers?: IHeadRowTitle[];
    rowLimit?: number;
    hideOverLimit?: boolean;
};

export function Table<T extends object>({
    data = [],
    headers,
    rowLimit = TABLE_ROW_LIMIT,
    hideOverLimit = false,
}: TableProps<T>) {
    const [expanded, setExpanded] = useState(!hideOverLimit);

    const handleExpandedChange = () => setExpanded((prev) => !prev);

    return (
        <div className={s.wrapper}>
            <table className={s['app-table']}>
                <TableHeadRow headers={headers ?? []} />
                <tbody>
                    {data.map((item, index) =>
                        hideOverLimit &&
                        !expanded &&
                        index >= rowLimit ? null : (
                            <TableRow
                                key={index}
                                content={item}
                                index={index + 1}
                            />
                        ),
                    )}
                </tbody>
            </table>
            <button className="btn my-2" onClick={handleExpandedChange}>
                {expanded ? 'Hide' : 'Show more'}
            </button>
        </div>
    );
}

export interface IHeadRowTitle {
    id: string;
    title: string;
}

type HeadRowProps = {
    headers: IHeadRowTitle[];
};

// не думаю, что это пригодится вне Table
// но добавлю export вдруг что
export const TableHeadRow = ({ headers }: HeadRowProps) => {
    return (
        <thead>
            <tr>
                {headers.map((header, index) => (
                    <th key={`${header.title}-${index}`}>{header.title}</th>
                ))}
            </tr>
        </thead>
    );
};

// export interface ITableContent<T> {
//     [ceil: T]: string;
// }

type TableRowProps<T> = {
    content: T;
    // номер строки
    index: number;
};

// и это тоже...
export function TableRow<T extends object>({
    content,
    index,
}: TableRowProps<T>) {
    return (
        <tr>
            <th>{index}</th>
            {Object.keys(content).map((el, index) => (
                <td key={`${el}-${index}`} className={s['app-table__row']}>
                    {String(content[el as keyof typeof content])}
                </td>
            ))}
        </tr>
    );
}
