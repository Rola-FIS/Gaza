import React, { useState } from 'react';
import { Menu, Dropdown, Drawer, Button } from 'antd';
import { MenuOutlined, GlobalOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";

const Header = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => setVisible(true);
    const onClose = () => setVisible(false);

    const menuItems = [
        { key: 'home', label: 'Home', },
        { key: '/sole-survivor-programs', label: 'The Sole Survivor'},
        { key: '/food-programs', label: 'Food Program'},
        { key: '/water-programs', label: 'Water Supply' },
        { key: '/family-care', label: 'Family Care' },
        { key: '/war-victim-care', label: 'War Victim Care' },
    ];

    const languageMenu = (
        <Menu>
            <Menu.Item key="en">English</Menu.Item>
            <Menu.Item key="ar">Arabic</Menu.Item>
        </Menu>
    );

    return (
        //bg-gradient-to-r from-blue-500 to-teal-500
        <header className="fixed w-full z-30  bg-white shadow-lg flex justify-between items-center px-6 md:px-32 h-16">

            {/* Logo */}
                <Link to={'/home'}>
                    <div className=" text-2xl font-bold text-orange-300">

                    LOGO
                    </div>
                </Link>
            {/* Desktop Menu */}
            <nav className="hidden md:flex  gap-4">
                {menuItems.map(item => (
                    <Link key={item.key} to={`${item.key}`} className="font-semibold items-center text-gray-700 hover:text-orange-300 transition-colors">
                        {item.label}
                    </Link>
                ))}
            </nav>


            {/*/!* Language Selector *!/*/}
            {/*<div className="hidden md:flex items-center">*/}
            {/*    <Dropdown overlay={languageMenu} placement="bottomRight" arrow>*/}
            {/*        <Button className="" icon={<GlobalOutlined />} />*/}
            {/*    </Dropdown>*/}
            {/*</div>*/}

            {/* Mobile Menu Button */}
            <Button
                className="md:hidden "
                type="text"
                icon={<MenuOutlined />}
                onClick={showDrawer}
            />

            {/* Mobile Drawer */}
            <Drawer
                title="Menu"
                placement="right"
                onClose={onClose}
                open={visible}
                className="md:hidden"
            >
                <nav className="space-y-4">
                    {menuItems.map(item => (
                        <a key={item.key} href={`#${item.key}`} className="text-gray-700 block hover:text-blue-500 transition-colors">
                            {item.label}
                        </a>
                    ))}
                </nav>
                <div className="mt-8">
                    <p className="font-semibold">Language</p>
                    <Menu mode="inline">
                        <Menu.Item key="en">English</Menu.Item>
                        <Menu.Item key="ar">Arabic</Menu.Item>
                    </Menu>
                </div>
            </Drawer>
        </header>
    );
};

export default Header;
