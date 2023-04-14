import { useState, useEffect } from 'react';
export const getFiles = async (filename) => {
    const url = new URL('http://localhost:3050/api/files/data');
    if (filename) {
        url.searchParams.append('fileName', filename);
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        const validateFilename = filename ? [data] : data;
        validateFilename.forEach(element => {
            element.lines.forEach(line => {
                line.file = element.file;
            });
        });
        return validateFilename;
    } catch (error) {
        throw error;
    }
}



export const useFiles = (filename) => {
    const [fileData, setFileData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getFiles(filename);
                setFileData(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchData();
    }, [filename, setFileData]);

    return { fileData, loading, error };
}
