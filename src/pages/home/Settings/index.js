import React, { useState } from 'react';
import SideBar from '../../../components/SideBar';
import Topbar from '../../../components/TopBar';

const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState('ProfileSettings');

  return (
    <div className="flex h-screen bg-gray-50">
      <SideBar />
      <div className="flex flex-col flex-grow">
        <Topbar />
        <div className="p-8">
          <div className="bg-white shadow-md rounded-lg mb-8">
            <div className="flex justify-between items-center border-b p-6">
              <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-4">
                  <button
                    className={`py-2 px-4 rounded-lg ${activeSection === 'ProfileSettings' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => setActiveSection('ProfileSettings')}
                  >
                    Profile Settings
                  </button>
                  <button
                    className={`py-2 px-4 rounded-lg ${activeSection === 'SecuritySettings' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => setActiveSection('SecuritySettings')}
                  >
                    Security Settings
                  </button>
                  <button
                    className={`py-2 px-4 rounded-lg ${activeSection === 'NotificationPreferences' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => setActiveSection('NotificationPreferences')}
                  >
                    Notification Preferences
                  </button>
                  <button
                    className={`py-2 px-4 rounded-lg ${activeSection === 'SystemSettings' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => setActiveSection('SystemSettings')}
                  >
                    System Settings
                  </button>
                </div>
              </div>
              {activeSection === 'ProfileSettings' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">Profile Settings</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Address</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Enter your address"
                      />
                    </div>
                  </div>
                </div>
              )}
              {activeSection === 'SecuritySettings' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">Security Settings</h2>
                  <div>
                    <label className="block text-gray-700 mb-2">Change Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Enter new password"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-700 mb-2">Enable Two-Factor Authentication</label>
                    <input
                      type="checkbox"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
              )}
              {activeSection === 'NotificationPreferences' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">Notification Preferences</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-gray-700 mb-2">Email Notifications</label>
                      <input
                        type="checkbox"
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">SMS Notifications</label>
                      <input
                        type="checkbox"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </div>
              )}
              {activeSection === 'SystemSettings' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">System Settings</h2>
                  <div>
                    <label className="block text-gray-700 mb-2">System Language</label>
                    <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-700 mb-2">Time Zone</label>
                    <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                      <option>GMT</option>
                      <option>PST</option>
                      <option>EST</option>
                      <option>CST</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
