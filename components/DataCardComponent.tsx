import React, { useEffect } from 'react';
import { Spinner } from "@heroui/react";
import { getRequest } from '@/util/axios';

export const DataCard = ({day}: {day: string}) => {
    const [data, setData] = React.useState<any>(null);

    useEffect(() => {
        getRequest(`/photo/${day}`, (responseData: any) => {
            setData(responseData);
        });
    }, []);

    return (
    <div className="container mx-auto p-4 rounded-lg bg-white/10">
        {!data && 
        <div className="flex items-center justify-center min-h-[200px]">
            <Spinner classNames={{label: "text-[#F1F5F9] color-[#F1F5F9] mt-4"}} label="Loading..." size='lg' variant='wave'/>
        </div>
        }
        {data && 
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
            <div className=" rounded-lg shadow-md p-6 text-center bg-[#131C30]">
                <h3 className="text-lg font-black text-[#90A1B9] mb-2">
                    Edited Percentage
                </h3>
                    <p className="text-5xl text-[#F1F5F9]">{data.edited || 0}%</p>
                </div>
            <div className="rounded-lg shadow-md p-6 text-center bg-[#131C30]">
                <h3 className="text-lg font-black text-[#90A1B9] mb-2">
                    Uploaded Percentage
                </h3>
                <p className="text-5xl text-[#F1F5F9]">{data.uploaded || 0}%</p>
            </div>
        </div>
        }
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(data || {}).map(([key, value]) => (
            <div key={key} className="rounded-lg shadow-md p-6 text-center bg-[#131C30]">
                <h3 className="text-lg font-black text-[#90A1B9] mb-2">
                    {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </h3>
                <p className="text-5xl text-[#F1F5F9]">{JSON.stringify(value)}</p>
            </div>
            ))}
        </div>
    </div>
    )
}