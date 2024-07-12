import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import { FaTachometerAlt, FaList } from 'react-icons/fa';
import { BiStats } from 'react-icons/bi';
import { FaRegCalendarDays, FaUserDoctor, FaMoneyBillTrendUp, FaUserNurse } from "react-icons/fa6";
import { BsPower } from 'react-icons/bs';
import { IoMdSettings, IoIosHelpCircle, IoMdLink } from "react-icons/io";
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { GoLinkExternal,GoPlus } from "react-icons/go";
import { PiLinkSimpleThin } from "react-icons/pi";

import { useNavigate } from 'react-router-dom';
import AddLinkModal from '../../components/Modal/AddLinkModal'; // Ensure you import the modal component

import './custom.scss';
import { dashboardScreenPath, dayScreenPath, employeeScreenPath, patientScreenPath, paymentScreenPath, reportScreenPath, settingsScreenPath } from '../../routes/pathNames';

const SideBar = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [externalLinksCollapsed, setExternalLinksCollapsed] = useState(true);
  const [externalLinks, setExternalLinks] = useState([
    { name: 'Sunlife', url: 'https://www.sunnet.sunlife.com/signin/mysunlife/home.wca' },
    { name: 'Rogers Bill', url: 'https://eportal.rogers.com/webepom/index.php/welcome' },
    { name: 'Blue Cross', url: 'https://secure.medavie.bluecross.ca/eai/login' },
    { name: 'Physiosupplies Canada', url: 'https://physiosuppliescanada.ca/account/login' },
    { name: 'Canada Life', url: 'https://eportal.rogers.com/webepom/index.php/welcome' },
    { name: 'Mone', url: 'https://secure.medavie.bluecross.ca/eai/login' },
    { name: 'Physiosupplies Canada', url: 'https://physiosuppliescanada.ca/account/login' },
    // Add more default links as needed
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addExternalLink = (name, url) => {
    setExternalLinks([...externalLinks, { name, url }]);
  };

  return (
    <div className='100%'>
      <ProSidebar collapsedWidth="4.5rem" collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)}>
        <SidebarHeader>
          <div className="flex flex-row items-center justify-between p-4">
            {!collapsed && (
              <div onClick={() => navigate('/')} className="flex flex-col items-start cursor-pointer font-bold text-lg">
                <img src={require("../../assets/images/logo.png")} alt="Logo" className="h-8 mb-2" />
                <span>South Coast</span>
                <span className="text-sm">Medical Admin Dashboard</span>
              </div>
            )}
            <FaList size={18} className="cursor-pointer" onClick={() => setCollapsed(!collapsed)} />
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            {!collapsed && <p className="menu-section px-4 pt-4 text-sm text-[#A9A9A9]">Main Menu</p>}
            <MenuItem onClick={() => navigate(dashboardScreenPath)} icon={<FaTachometerAlt size={'22px'} />}>
              <span className="text-base">Overview</span>
            </MenuItem>
            <MenuItem onClick={() => navigate(patientScreenPath)} icon={<FaUserNurse size={'22px'} />}>
              <span className="text-base">Patients</span>
            </MenuItem>
            <MenuItem onClick={() => navigate(dayScreenPath)} icon={<FaRegCalendarDays size={'22px'} />}>
              <span className="text-base">Appointment</span>
            </MenuItem>
            {!collapsed && <p className="menu-section px-4 pt-4 text-[#A9A9A9]">Other Menu</p>}
            <MenuItem onClick={() => navigate(employeeScreenPath)} icon={<FaUserDoctor size={'22px'} />}>
              <span className="text-base">Staff</span>
            </MenuItem>
            <MenuItem onClick={() => navigate(paymentScreenPath)} icon={<FaMoneyBillTrendUp size={'22px'} />}>
              <span className="text-base">Payment</span>
            </MenuItem>
            <MenuItem onClick={() => navigate(reportScreenPath)} icon={<BiStats size={'22px'} />}>
              <span className="text-base">Report</span>
            </MenuItem>

           
            {!collapsed && <p className="menu-section px-4 pt-4 text-[#A9A9A9]">Help & Settings</p>}
            <MenuItem icon={<GoLinkExternal size={'22px'}/>} onClick={() => setExternalLinksCollapsed(!externalLinksCollapsed)}>
              <span className="text-base">External Links</span>
              {externalLinksCollapsed ? <MdExpandMore /> : <MdExpandLess />}
            </MenuItem>
            {!externalLinksCollapsed && (
              <>
                {externalLinks.map(link => (
                  <MenuItem icon = {<PiLinkSimpleThin size={'22px'}/>} key={link.name} onClick={() => window.open(link.url, '_blank')}>
                    <span className="text-base">{link.name}</span>
                  </MenuItem>
                ))}
                <MenuItem icon = {<GoPlus size={'22px'}/>} onClick={() => setIsModalOpen(true)}>
                  <span className="text-base">Add New Link</span>
                </MenuItem>
              </>
            )}
            <MenuItem onClick={() => navigate(settingsScreenPath)} icon={<IoMdSettings size={'22px'} />}>
              <span className="text-base">Settings</span>
            </MenuItem>
            <MenuItem icon={<IoIosHelpCircle size={'22px'} />}>
              <span className="text-base">Help & Center</span>
            </MenuItem>
          </Menu>
        </SidebarContent>

        <SidebarFooter>
          <div className="flex items-center justify-center p-4 cursor-pointer">
            {!collapsed && <span className="mr-2">Log Out</span>}
            <BsPower size={20} />
          </div>
        </SidebarFooter>
      </ProSidebar>
      <AddLinkModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} addLink={addExternalLink} />
    </div>
  );
};

export default SideBar;
