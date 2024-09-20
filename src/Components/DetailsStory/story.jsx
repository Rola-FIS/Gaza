import React from 'react';
import { Card, Tag, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Details = ({ title, author, date, src, content }) => {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <Card className="shadow-lg">
                <div className="flex items-center ">
                    <div className="">
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <span className="text-gray-600 ml-5"> {author} on {date}</span>
                    </div>
                </div>
                <div className="mb-4 max-w-[60vw] min-h-5 block m-auto">
                 <img src={src} alt={title}/>
                </div>
                <div className="prose prose-lg">
                    {content}
                </div>
            </Card>
        </div>
    );
};

export default Details;
