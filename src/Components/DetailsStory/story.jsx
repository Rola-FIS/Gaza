import React from 'react';
import {Card, Tag, Avatar, Button} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {baseURL} from "../../Service/axios";
import DOMPurify from 'dompurify';

const Details = ({ title, story_description, published_on, intro_image, content }) => {
    const cleanContent = DOMPurify.sanitize(content);

    return (
        <div className="max-w-4xl mx-auto p-4">
            <Card className="bg-transparent">
                <div className="flex flex-col">
                    <div className="flex items-baseline gap-4 justify-between ">
                        <h1 className="text-2xl font-bold mb-0">{title}</h1>
                        <Button type='primary' className='bg-orange-300 font-bold'>Donate</Button>
                    </div>
                    <span className="text-gray-600 mt-2"> {story_description}</span>
                    <span className="text-gray-600 font-light "> {published_on}</span>

                </div>
                <div className="mt-5 mb-4 max-w-[60vw] flex justify-center items-center m-auto">
                    <img
                        className="w-full h-auto object-cover min-h-[200px] max-h-[400px]"
                        src={intro_image?.includes('http') ? intro_image : baseURL.concat(intro_image)}
                        alt={title}
                    />
                </div>
                {/*<div className="prose prose-lg">*/}
                {/*    {content}*/}
                {/*</div>*/}
                <div
                    dangerouslySetInnerHTML={{ __html: cleanContent }}
                />
            </Card>
        </div>
    );
};

export default Details;
