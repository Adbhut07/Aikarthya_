import React from 'react';
import { FaBook, FaSearch, FaBell, FaEdit, FaEllipsisV } from 'react-icons/fa';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

const SideBar = () => {
  return (
    <Card className="h-[calc(100vh-2rem)] w-64 p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Edit Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip value="user" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
};

const Dashboard = () => {
  const projects = [
    { title: 'Neural Underpinnings of Decoupled Ethical Behavior in Adolescents', status: 'Ongoing', tasks: ['Data analysis', 'Write discussion'], color: 'border-yellow-400' },
    { title: 'Calibration of off-the-shelf low-cost wearable EEG headset', status: 'Completed', tasks: ['Review feedback', 'Prepare presentation'], color: 'border-purple-400' },
    { title: 'ERP Investigation of Impact of Brief Mindfulness Intervention', status: 'Ongoing', tasks: ['Conduct experiments', 'Analyze ERP data'], color: 'border-orange-400' },
    { title: 'Teaching Values to Children Using Game Designs', status: 'Planning', tasks: ['Design game prototype', 'Plan neurophysiological study'], color: 'border-blue-400' },
    { title: 'Cognitive Neuroscience Research Project', status: 'Proposed', tasks: ['Literature review', 'Develop hypothesis'], color: 'border-green-400' },
    { title: 'EEG Signal Processing Study', status: 'Ongoing', tasks: ['Implement algorithms', 'Test on datasets'], color: 'border-red-400' },
  ];

  const recentActivities = [
    { title: 'Research Meeting', course: 'Neural Ethics Study', color: 'bg-yellow-100' },
    { title: 'Data Collection', course: 'EEG Calibration', color: 'bg-purple-100' },
    { title: 'Literature Review', course: 'Mindfulness Study', color: 'bg-orange-100' },
    { title: 'Experiment Design', course: 'Game-based Values Study', color: 'bg-blue-100' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-serif font-bold text-gray-800">Manya Singh</h1>
              <p className="text-gray-600 mt-1">Indian Institute of Technology Delhi | Department of Humanities and Social Sciences</p>
            </div>
            <div className="flex space-x-4 text-gray-600">
              <button className="hover:text-gray-800 transition-colors"><FaBell size={24} /></button>
              <button className="hover:text-gray-800 transition-colors"><FaEdit size={24} /></button>
            </div>
          </div>
        </header>

        {/* Search Bar */}
        <div className="relative w-1/2 mb-8">
          <input
            type="text"
            placeholder="Search Projects"
            className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow"
          />
          <FaSearch className="absolute left-3 top-3.5 text-gray-400" />
        </div>

        {/* Project Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif font-bold text-gray-800">My Research Projects</h2>
          <div>
            <label htmlFor="sort" className="mr-2 text-gray-600">Sort By</label>
            <select id="sort" className="border-none bg-transparent text-gray-600 focus:outline-none">
              <option>Status</option>
              <option>Date</option>
              <option>Priority</option>
            </select>
          </div>
        </div>

        {/* Project List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${project.color} hover:shadow-lg transition-shadow`}>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.status}</p>
              <ul className="list-disc list-inside mb-4">
                {project.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="text-gray-600">{task}</li>
                ))}
              </ul>
              <div className="flex justify-end items-center">
                <button className="text-gray-400 hover:text-gray-600 transition-colors"><FaEllipsisV /></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-1/4 bg-white p-6 shadow-lg">
        {/* Research Stats */}
        <div className="mb-8">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-800">Research Statistics</h2>
          <div className="text-center bg-gray-50 p-4 rounded-lg">
            <h3 className="text-3xl font-bold text-blue-600">4</h3>
            <p className="text-gray-600 mb-2">Publications</p>
            <h3 className="text-2xl font-bold text-green-600">307</h3>
            <p className="text-gray-600 mb-2">Reads</p>
            <h3 className="text-2xl font-bold text-orange-600">0</h3>
            <p className="text-gray-600">Citations</p>
          </div>
        </div>

        {/* Recent Activities */}
        <div>
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-800">Recent Activities</h2>
          {recentActivities.map((activity, index) => (
            <div key={index} className={`flex justify-between items-center mb-4 p-3 rounded-lg hover:bg-gray-50 transition-colors ${activity.color}`}>
              <div className="flex items-center">
                <div className={`w-3 h-3 ${activity.color} rounded-full mr-3`}></div>
                <div>
                  <h3 className="font-semibold text-gray-800">{activity.title}</h3>
                  <p className="text-gray-600 text-sm">{activity.course}</p>
                </div>
              </div>
              <FaBook className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
