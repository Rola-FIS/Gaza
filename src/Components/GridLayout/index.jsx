import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Card } from 'antd';
const { Meta } = Card;
import {useNavigate} from "react-router-dom";
import {baseURL} from "../../Service/axios";



const MasonryGrid = ({data}) => {
    console.log(data,'data')
    const navigate = useNavigate();
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 320: 1, 750: 2, 900: 3 }}>
            <Masonry gutter="16px">
                {data?.length ?
                    data?.map((item, index) => (
                    <Card
                        onClick={() => navigate(`/${item.story_type}/${item.name}`)}
                        key={index}
                        hoverable
                        style={{
                            width: '100%',          // Ensure the card takes full width within the masonry grid
                            marginBottom: '16px',   // Adds space between cards
                            borderRadius: '10px',   // Rounded corners for the card
                            overflow: 'hidden',     // Ensure content stays inside the card
                        }}
                        cover={
                            <img alt={item.title}
                                    src={item.intro_image?.includes('http') ? item.intro_image : baseURL.concat(item.intro_image)}
                                    style={{
                                        width: '100%',       // Image should take full width of the card
                                        height: 'auto',      // Maintain aspect ratio of the image
                                        objectFit: 'cover',  // Ensure image fills the area without distortion
                                        borderTopLeftRadius: '10px',  // Match the card's border-radius
                                        borderTopRightRadius: '10px', // Match the card's border-radius
                                    }}
                            />
                        }
                    >
                        <Meta title={item.title}
                              style={{
                            padding: '16px',   // Add padding around the card content
                        }}
                              description={item.story_description} />
                    </Card>
                ))

                :
                    <div>
                      There is no programs added yet
                    </div>
                }
            </Masonry>
        </ResponsiveMasonry>

    );
};

export default MasonryGrid;
