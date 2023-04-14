import React from 'react';
import { Table } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { getFiles } from '../hooks/fetchData';
import { useEffect, useState } from 'react';

const TableFiles = () => {
    const [searchParams] = useSearchParams();
    const filename = searchParams.get('fileName');
    const [data, setData] = useState({ data: [] });

    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function getData() {
            try {

                const result = await getFiles(filename);
                setData(result);
                setLoading(false);
            } catch (err) {
                setErr(err.message);
                setLoading(false);
            }
        }

        getData();
    }, [])

    if (loading) {
        return <p>Loading...</p>;
    }

    if (err) {
        return <p>An error occurred: {err.message}</p>;
    }

    // render the component using the fetched data here

    const headers = [
        { key: 'fileName', display: 'File Name' },
        { key: 'text', display: 'Text' },
        { key: 'number', display: 'Number' },
        { key: 'hex', display: 'Hex' },
    ];

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {headers.map(header => (
                        <th key={header.key}>{header.display}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row) =>
                    row.lines.map((line, index) => (
                        <tr key={`${row.file}_${index}`}>
                            <td>{line.file}</td>
                            <td>{line.text}</td>
                            <td>{line.number}</td>
                            <td>{line.hex}</td>
                        </tr>
                    ))
                )}
            </tbody>
        </Table>
    );
}

export default TableFiles;
