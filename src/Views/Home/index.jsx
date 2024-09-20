import SliderSection from "../../Components/Slider/index";
import React from "react";
import CoverStory from "../../assets/images/war12.webp"
import Program2 from "../../assets/images/war10.jpg"
import Program3 from "../../assets/images/war11.jpg"
import {Button, Card, Divider} from "antd";
import './style.css'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import ContentSlider from "./swiper";
export default function Home(){

    return(
        <div>
            {/*<div className='flex w-full gap-4'>*/}
            {/*    <div>*/}
            {/*        <h4>الناجي الوحيد </h4>*/}
            {/*        <Card hoverable bordered={false} size='small'*/}
            {/*              // style={{ width:  320, height:320 }}*/}
            {/*              cover={<img alt="" src={CoverStory} />}*/}
            {/*        >*/}
            {/*            <h4>قصة</h4>*/}
            {/*            <p>Description</p>*/}
            {/*        </Card>*/}
            {/*    </div>*/}
            {/*   <div className='flex flex-col gap-2'>*/}
            {/*       <Card hoverable bordered={false} size='small'*/}
            {/*             // style={{ width:  320, height:320 }}*/}
            {/*             cover={<img alt="" src={CoverStory} />}*/}
            {/*       >*/}
            {/*           <h4>قصة</h4>*/}
            {/*           <p>Description</p>*/}
            {/*       </Card>*/}
            {/*       <Card hoverable bordered={false} size='small'*/}
            {/*             // style={{ width:  320, height:320 }}*/}
            {/*             cover={<img alt="" src={CoverStory} />}*/}
            {/*       >*/}
            {/*           <h4>قصة</h4>*/}
            {/*           <p>Description</p>*/}
            {/*       </Card>*/}
            {/*   </div>*/}

            {/*</div>*/}

            {/*الناجي الوحيد*/}
            <div className=' img-cover relative h-[550px] w-full'>
                {/*<img*/}
                {/*    className="img-cover h-full w-full object-cover"*/}
                {/*    src={CoverStory}*/}
                {/*    alt=""*/}
                {/*/>*/}
                <div className='absolute right-4 rounded -bottom-16 h-max-content w-80 bg-orange-300 p-4'>
                    <h3 className=' font-bold'>The Sole Survivor</h3>
                    <p className='leading-relaxed'>
                        It is very difficult to be a young mother because the war drains all your energy. The fear of losing my daughter in an airstrike paralyzes my nerves.
                    </p>
                </div>
            </div>
        {/*        QUICK STATES*/}
            <div className='mt-16 p-6'>
                <h2 className='underline underline-offset-8 text-lg text-gray-700 font-bold'>Quick Statistics</h2>
                <div className='flex mt-10 gap-8 justify-center'>
                    <Card hoverable bordered size='small' className='flex-0'
                          style={{ width: 250, height: 100, padding: '10px 15px', borderTop:'3px solid orange' }}>
                        <h4 className='text-gray-700 font-bold tracking-[1px]'>Number of Martyrs</h4>
                        <h2 className='font-bold text-orange-700 ml-2 '>40,000</h2>
                    </Card>
                    <Card hoverable bordered size='small' className='flex-0'
                          style={{ width: 250, height: 100, padding: '10px 15px', borderTop:'3px solid orange' }}>
                        <h4 className='text-gray-700 font-bold tracking-[1px]'>Number of Injured</h4>
                        <h2 className='font-bold text-red-300 ml-2'>65,000</h2>
                    </Card>
                    <Card hoverable bordered size='small' className='flex-0'
                          style={{ width: 250, height: 100, padding: '10px 15px', borderTop:'3px solid orange' }}>
                        <h4 className='text-gray-700 font-bold tracking-[1px]'>Age Distribution</h4>
                        <h2 className='font-bold text-yellow-500 ml-2'>65%</h2>
                    </Card>
                    <Card hoverable bordered size='small' className='flex-0'
                          style={{ width: 250, height: 100, padding: '10px 15px', borderTop:'3px solid orange' }}>
                        <h4 className='text-gray-700 font-bold tracking-[1px]'>Number of Martyrs</h4>
                        <h2 className='font-bold text-blue-500 ml-2'>122,000</h2>
                    </Card>
                </div>
            </div>

            <div className='mt-16 p-6'>
                <h2 className='underline underline-offset-8 text-lg text-gray-700 font-bold '>Stories You Should See</h2>
                <div className='flex justify-between mt-5'>
                    <p className='text-gray-600 w-[60%] mb-0 '>
                        Israel is trying to wipe out as many Palestinians as possible. This is genocide
                    </p>
                    <Button className='bg-orange-300 p-4  text-white font-bold'>View All</Button>
                </div>

                <ResponsiveMasonry className='mt-5'
                                   // columns={{ 320: 1, 480: 2, 800: 3 }}
                                   // breakpoints={{ 350: 2, 750: 3, 900: 4 }}
                                   columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter="16px">

                        <Card
                            hoverable
                            bordered
                            size="small"
                            className="relative group"
                            // style={{ width: 420 }}
                            cover={<img alt="" src={CoverStory} />}
                        >
                            <div className="flex flex-col gap-2 ">
                                {/*<h4>01</h4>*/}
                                <h4>Nothing is left</h4>
                                <p className="text-gray-500">
                                    Israel’s military tells Gaza residents to go home but they find only rubble
                                </p>
                                <Button className=" bg-orange-300 p-4  text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 "
                                >
                                    Donate
                                </Button>
                                <span className="bg-gray-100 w-max rounded-xl text-gray-500 p-2">
                                    JULY 15 - 2024
                                </span>
                            </div>
                        </Card>
                        <Card
                            hoverable
                            bordered
                            size="small"
                            className="relative group"
                            // style={{ width: 220 }}
                            cover={<img alt="" src={CoverStory} />}
                        >
                            <div className="flex flex-col gap-2 ">
                                {/*<h4>01</h4>*/}
                                <h4>Nothing is left</h4>
                                <p className="text-gray-500">
                                    Israel’s military tells Gaza residents to go home but they find only rubble
                                </p>
                                <Button className=" bg-orange-300 p-4  text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 "
                                >
                                    Donate
                                </Button>
                                <span className="bg-gray-100 w-max rounded-xl text-gray-500 p-2">
                                    JULY 15 - 2024
                                </span>
                            </div>
                        </Card>
                        <Card
                            hoverable
                            bordered
                            size="small"
                            className="relative group"
                            // style={{ width: 320 }}
                            cover={<img alt="" src={CoverStory} />}
                        >
                            <div className="flex flex-col gap-2 ">
                                {/*<h4>01</h4>*/}
                                <h4>Nothing is left</h4>
                                <p className="text-gray-500">
                                    Israel’s military tells Gaza residents to go home but they find only rubble
                                </p>
                                <Button className=" bg-orange-300 p-4  text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 "
                                >
                                    Donate
                                </Button>
                                <span className="bg-gray-100 w-max rounded-xl text-gray-500 p-2">
                                    JULY 15 - 2024
                                </span>
                            </div>
                        </Card>

                    </Masonry>
                </ResponsiveMasonry>
            </div>

            <div className='mt-10   max-h-[620px] ms-5 me-5  '>
                <div className='min-h-[420px] flex bg-white rounded-3xl '>
                    <div className='p-6  w-96 flex flex-col leading-relaxed  justify-center'>
                        <h3 className='font-bold'>
                            Nothing is left: Israel’s military tells Gaza residents to go home but they find only rubble
                        </h3>
                        <p className=' ' >
                            One man, Abdulfattah Al Bourdaini, said: “We came home and found nothing, no power, no gas, no house, and we cannot change our clothes.”

                            All he had been able to salvage was a teddy bear for the son he hoped one day to have.

                            “I am penniless like the day I was born,” Al Bourdaini said. “I have nothing. I came to check on my house, didn’t find a house or anything, nothing is left… There is nothing left to cry about.”
                        </p>

                    </div>
                    <div className='img-opacity relative flex-1 w-32 items-center rounded-l'>
                        <img
                            src={CoverStory}
                            alt='Background'
                            className='object-cover w-full h-full '
                        />
                    </div>
                </div>
                <div className='flex mt-2  ' >
                    <div className='p-6  w-96 flex flex-col leading-relaxed  '>
                        {/*Is US economy better or worse now than under Trump?*/}
                        {/*BBC Verify looks at jobs, inflation, stocks and other indicators to compare the Trump and Biden economies.*/}

                        {/*14 hrs ago*/}
                        {/*BBC Verify*/}
                    </div>
                    <div className='flex flex-1 w-32 items-center '>
                        <Card  bordered size='small'
                               cover={<img alt="" src={CoverStory} />}
                               className='flex-0 bg-inherit  '
                               style={{ width: 300, height: 'max-content', padding: '10px 15px', }}>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <p className='text-gray-600 font-bold  underline underline-offset-8 '>The Sole Survivor</p>
                                    <p className='text-gray-500 text-xs	 '>12 June, 2024</p>
                                </div>
                                {/*<Button className='bg-orange-300 text-white '>View</Button>*/}
                            </div>

                        </Card>
                        <Card hoverable bordered size='small'
                              cover={<img alt="" src={CoverStory} />}
                              className='flex-0 bg-inherit '
                              style={{ width: 300, height: 'max-content', padding: '10px 15px', }}>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <p className='text-gray-600 font-bold underline underline-offset-8 '>The Sole Survivor</p>
                                    <p className='text-gray-500 text-xs	 '>12 June, 2024</p>
                                </div>
                                {/*<Button className='bg-orange-300 text-white'>View</Button>*/}
                            </div>

                        </Card>
                        <Card  bordered size='small'
                              cover={<img alt="" src={CoverStory} />}
                              className='flex-0 bg-inherit '
                              style={{ width: 300, height: 'max-content', padding: '10px 15px', }}>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <p className='text-gray-600 font-bold  underline underline-offset-8 '>The Sole Survivor</p>
                                    <p className='text-gray-500 text-xs	 '>12 June, 2024</p>
                                </div>
                                {/*<Button className='bg-orange-300 text-white'>View</Button>*/}
                            </div>

                        </Card>
                        <Card  bordered size='small'
                              cover={<img alt="" src={CoverStory} />}
                              className='flex-0 bg-inherit '
                              style={{ width: 300, height: 'max-content', padding: '10px 15px', }}>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <p className='text-gray-600 font-bold  underline underline-offset-8'>The Sole Survivor</p>
                                    <p className='text-gray-500 text-xs	 '>12 June, 2024</p>
                                </div>
                                {/*<Button className='bg-orange-300 text-white'>View</Button>*/}
                            </div>

                        </Card>
                     </div>
                </div>

            </div>
            {/*<div className='mt-16'>*/}
            {/*    <h2 className='underline underline-offset-8 text-lg text-gray-700 font-bold'>Stories You Should See</h2>*/}
            {/*    <ContentSlider />*/}
            {/*</div>*/}

            <div className='mt-16 p-12 mb-32 max-h-max'>
                <h2 className='underline underline-offset-8 text-lg text-gray-700 font-bold flex justify-center'>Family Care</h2>
                <div className=' flex gap-4 mt-10  min-h-[400px] '>
                    {/*<ResponsiveMasonry className='mt-5'*/}
                    {/*    // columns={{ 320: 1, 480: 2, 800: 3 }}*/}
                    {/*    // breakpoints={{ 350: 2, 750: 3, 900: 4 }}*/}
                    {/*                   columnsCountBreakPoints={{ 750: 1, 250: 2 }}*/}
                    {/*>*/}
                    {/*    <Masonry gutter="16px">*/}

                            <div className=' flex-1 w-[55%] max-h-[500px] '>
                            <div className='flex flex-col gap-2  '>
                                <div className='relative'>

                                    <img alt=""
                                         src={CoverStory}
                                         className='rounded w-[100%] object-cover  max-h-[350px]'
                                    />
                                    <h3 className=' ml-auto mr-auto font-bold absolute left-4 bottom-0 text-white'>Family Program 1</h3>

                                </div>
                                <div>
                                    <p className="text-gray-500">
                                        Israel’s military tells Gaza residents to go home but they find only rubble
                                        Israel’s military tells Gaza residents to go home but they find only rubble
                                        Israel’s military tells Gaza residents to go home but they find only rubble
                                        Israel’s military tells Gaza residents to go home but they find only rubble
                                    </p>
                                    <div className='flex justify-between'>
                                 <span className=" w-max rounded-xl text-gray-500 p-1" style={{fontSize:'10px'}}>
                                    JULY 15 - 2024
                                 </span>
                                        <Button
                                            className='bg-orange-300 w-32 text-white font-bold '
                                            // className=" bg-orange-300 p-4  text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 "
                                        >
                                            Donate
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            {/*<Button className='float-start text-gray-700 mt-5'*/}
                            {/*        type=''>View More </Button>*/}
                        </div>
                            <div className='flex flex-col w-[25%]   max-h-[400px]'>
                            <div className='flex flex-col  gap-4 '>
                                <div className='w-[80%] flex flex-col gap-2  max-h-[400px]'>
                                    <div className='relative'>
                                        <img alt=""
                                             src={Program2}
                                             className='rounded w-full object-cover    max-h-[200px] '
                                        />
                                        <h3 className=' ml-auto mr-auto font-bold absolute left-4 bottom-0 text-white'>Family Program 2</h3>

                                    </div>

                                    <div>
                                        <p className="text-gray-500">
                                            Israel’s military tells Gaza residents to go home but they find only rubble
                                        </p>
                                        <div className='flex justify-between'>
                                            <span className=" w-max rounded-xl text-gray-500 p-1" style={{fontSize:'12px'}}>
                                                JULY 15 - 2024
                                             </span>
                                            <Button
                                                className='bg-orange-300 w-32 text-white font-bold '
                                                // className=" bg-orange-300 p-4  text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 "
                                            >
                                                Donate
                                            </Button>
                                        </div>
                                </div>

                                </div>
                                <div className='w-[80%] flex flex-col gap-2 '>
                                    <div className='relative'>
                                        <img alt=""
                                             src={Program3}
                                             className='rounded w-full object-cover    max-h-[200px] '
                                        />
                                        <h3 className=' ml-auto mr-auto font-bold absolute left-4 bottom-0 text-white'>Family Program 3</h3>

                                    </div>

                                    <div>
                                        <p className="text-gray-500">
                                            Israel’s military tells Gaza residents to go home but they find only rubble
                                        </p>
                                        <div className='flex justify-between'>
                                            <span className=" w-max rounded-xl text-gray-500 p-1" style={{fontSize:'12px'}}>
                                                JULY 15 - 2024
                                             </span>
                                            <Button
                                                className='bg-orange-300 w-32 text-white font-bold '
                                                // className=" bg-orange-300 p-4  text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 "
                                            >
                                                Donate
                                            </Button>
                                        </div>
                                </div>

                                </div>

                            </div>
                        </div>

                    {/*    </Masonry>*/}
                    {/*</ResponsiveMasonry>*/}
                </div>

            </div>
            <section className='mt-16 bg-[#203b51e0] pt-6 pb-6'>
                <Divider style={{backgroundColor:'white'}}/>
                <h2 className='pl-6 text-white text-lg text-gray-700 font-bold '>War Victim Care</h2>
                <div className='pl-6 flex gap-4 max-w-full	 overflow-x-auto	'>

                    <Card  size='small'
                           cover={<img alt="" src={CoverStory} />}
                           className='flex-0 bg-gray-300  '
                           style={{ width: 300, height: 'max-content', padding: '10px 15px', }}>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='text-gray-600 font-bold  underline underline-offset-8 '>The Sole Survivor</p>
                                <p className='text-gray-500 text-xs	 '>12 June, 2024</p>
                            </div>
                        </div>

                    </Card>
                    <Card  size='small'
                           cover={<img alt="" src={CoverStory} />}
                           className='flex-0 bg-gray-300  '
                           style={{ width: 300, height: 'max-content', padding: '10px 15px', }}>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='text-gray-600 font-bold  underline underline-offset-8 '>The Sole Survivor</p>
                                <p className='text-gray-500 text-xs	 '>12 June, 2024</p>
                            </div>
                        </div>

                    </Card>
                    <Card  size='small'
                           cover={<img alt="" src={CoverStory} />}
                           className='flex-0 bg-gray-300  '
                           style={{ width: 300, height: 'max-content', padding: '10px 15px', }}>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='text-gray-600 font-bold  underline underline-offset-8 '>The Sole Survivor</p>
                                <p className='text-gray-500 text-xs	 '>12 June, 2024</p>
                            </div>
                        </div>

                    </Card>
                    <Card  size='small'
                           cover={<img alt="" src={CoverStory} />}
                           className='flex-0 bg-gray-300  '
                           style={{ width: 300, height: 'max-content', padding: '10px 15px', }}>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='text-gray-600 font-bold  underline underline-offset-8 '>The Sole Survivor</p>
                                <p className='text-gray-500 text-xs	 '>12 June, 2024</p>
                            </div>
                        </div>

                    </Card>
                </div>
                <Divider style={{backgroundColor:'white'}}/>

            </section>
            <section className='mt-10 pl-6 pr-6 '>
                <h2 className='underline underline-offset-8 text-lg text-gray-700 font-bold flex '>Food Program</h2>
                <div className='flex gap-6 mt-10 pl-10 pr-10'>
                    <img alt=""
                         src={Program2}
                         className='rounded w-full  object-cover object-center flex-1 max-h-[500px]	 '
                    />
                    <div className='flex   mt-16 flex-col gap-4	'>
                        <h3 className='font-semibold'>
                            Lorem Ipsum Lorem Ipsum
                        </h3>
                        <p className='w-96 tracking-[2px] text-xs'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                        <Button className='w-32 mt-8'>
                            See More
                        </Button>
                    </div>
                </div>
            </section>
            <Divider  style={{backgroundColor:'#c7b9b9', width:'3px'}}/>
            <section className='mt-16 pl-6 pr-6 '>
                <h2 className='underline underline-offset-8 text-lg text-gray-700 font-bold flex  '>Water Supply</h2>
                <div className='flex gap-6 mt-10 pl-10 pr-10'>
                    <div className='flex   mt-16 flex-col gap-4	'>
                        <h3 className='font-semibold'>
                            Lorem Ipsum Lorem Ipsum
                        </h3>
                        <p className='w-96 tracking-[2px] text-xs'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                        <Button className='w-32 mt-8'>
                            See More
                        </Button>
                    </div>
                    <img alt=""
                         src={Program3}
                         className='rounded w-full  object-cover object-center flex-1 max-h-[500px]	 '
                    />

                </div>
            </section>
        </div>
    )
}