import { useEffect, useState } from 'react';

const DashboardContent = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/file.json');
            const result = await response.json();
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <div className="ml-64 p-4">
            <h2 className="text-xl font-bold">Dashboard Data</h2>
            <div className="mt-4">
                {data ? (
                    <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default DashboardContent;
