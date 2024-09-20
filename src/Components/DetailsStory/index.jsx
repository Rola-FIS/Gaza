import React from 'react';
import { Card, Tag, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const StoryDetails = ({ title, author, date, tags, content }) => {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <Card className="shadow-lg">
                <div className="flex items-center mb-4">
                    <Avatar size="large" icon={<UserOutlined />} />
                    <div className="ml-4">
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <p className="text-gray-600">by {author} on {date}</p>
                    </div>
                </div>
                <div className="mb-4">
                    {tags.map(tag => (
                        <Tag key={tag}>{tag}</Tag>
                    ))}
                </div>
                <div className="prose prose-lg">
                    {content}
                </div>
            </Card>
        </div>
    );
};

export default StoryDetails;
