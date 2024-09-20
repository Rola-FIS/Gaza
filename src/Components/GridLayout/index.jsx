import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Card } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design styles
import {useNavigator} from 'react-router-dom'
const { Meta } = Card;

// const data = [
//     // Example data
//     {
//         title: 'Card 1',
//         description: 'This is card 1 description',
//         image: 'https://via.placeholder.com/300'
//     },
//     {
//         title: 'Card 2',
//         description: 'This is card 2 description',
//         image: 'https://via.placeholder.com/300'
//     },
//     // Add more card objects as needed
// ];

const MasonryGrid = ({data}) => {
    const navigate = useNavigate()
    return (
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
            <Masonry>
                {data.map((item, index) => (
                    <Card
                        onClick={()=>navigate(item.path)}
                        key={index}
                        hoverable
                        cover={<img alt={item.title} src={item.image} />}
                        className="m-2"
                    >
                        <Meta title={item.title} description={item.description} />
                    </Card>
                ))}
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default MasonryGrid;
