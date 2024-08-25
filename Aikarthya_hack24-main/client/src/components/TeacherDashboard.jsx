import React from 'react';
import { FaBook, FaSearch, FaBell, FaEdit, FaEllipsisV, FaUserPlus } from 'react-icons/fa';
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
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const SideBar = () => {
  return (
    <Card className="h-[calc(100vh-2rem)] w-64 p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Professor Dashboard
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
          My Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <AcademicCapIcon className="h-5 w-5" />
          </ListItemPrefix>
          Students
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Messages
          <ListItemSuffix>
            <Chip value="3" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
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

const TeacherDashboard = () => {
  const projects = [
    { title: 'Advanced Machine Learning for Climate Modeling', status: 'Ongoing', collaborators: ['Dr. Smith', 'Manya Singh'], color: 'border-green-400' },
    { title: 'Quantum Computing in Cryptography', status: 'Proposed', collaborators: ['Dr. Johnson'], color: 'border-yellow-400' },
    { title: 'Ethical AI in Healthcare Decision Making', status: 'Planning', collaborators: ['Dr. Patel', 'Manya Singh'], color: 'border-blue-400' },
    { title: 'Neuromorphic Computing for Edge Devices', status: 'Ongoing', collaborators: ['Dr. Lee'], color: 'border-purple-400' },
  ];

  const potentialCollaborators = [
    { name: 'Manya Singh', department: 'Humanities and Social Sciences', projects: ['Neural Ethics', 'EEG Signal Processing'], color: 'bg-blue-100' },
    { name: 'Rahul Sharma', department: 'Computer Science', projects: ['Machine Learning', 'Data Mining'], color: 'bg-green-100' },
    { name: 'Priya Patel', department: 'Electrical Engineering', projects: ['IoT', 'Embedded Systems'], color: 'bg-yellow-100' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-serif font-bold text-gray-800">Prof. Amit Kumar</h1>
              <p className="text-gray-600 mt-1">Indian Institute of Technology Delhi | Department of Computer Science</p>
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
            placeholder="Search Projects or Students"
            className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow"
          />
          <FaSearch className="absolute left-3 top-3.5 text-gray-400" />
        </div>

        {/* Project Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif font-bold text-gray-800">Current Research Projects</h2>
          <div>
            <label htmlFor="sort" className="mr-2 text-gray-600">Sort By</label>
            <select id="sort" className="border-none bg-transparent text-gray-600 focus:outline-none">
              <option>Status</option>
              <option>Date</option>
              <option>Collaborators</option>
            </select>
          </div>
        </div>

        {/* Project List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          {projects.map((project, index) => (
            <div key={index} className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${project.color} hover:shadow-lg transition-shadow`}>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-4">Status: {project.status}</p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700">Collaborators:</h4>
                <ul className="list-disc list-inside">
                  {project.collaborators.map((collaborator, colIndex) => (
                    <li key={colIndex} className="text-gray-600">{collaborator}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end items-center">
                <button className="text-gray-400 hover:text-gray-600 transition-colors"><FaEllipsisV /></button>
              </div>
            </div>
          ))}
        </div>

        {/* Potential Collaborators */}
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">Potential Student Collaborators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {potentialCollaborators.map((student, index) => (
            <div key={index} className={`${student.color} p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{student.name}</h3>
              <p className="text-gray-600 mb-2">{student.department}</p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700">Research Interests:</h4>
                <ul className="list-disc list-inside">
                  {student.projects.map((project, projIndex) => (
                    <li key={projIndex} className="text-gray-600">{project}</li>
                  ))}
                </ul>
              </div>
              <button className="flex items-center justify-center w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                <FaUserPlus className="mr-2" /> Invite to Collaborate
              </button>
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
            <h3 className="text-3xl font-bold text-blue-600">42</h3>
            <p className="text-gray-600 mb-2">Publications</p>
            <h3 className="text-2xl font-bold text-green-600">1,207</h3>
            <p className="text-gray-600 mb-2">Citations</p>
            <h3 className="text-2xl font-bold text-orange-600">15</h3>
            <p className="text-gray-600">Active Collaborations</p>
          </div>
        </div>

        {/* Recent Activities */}
        <div>
          <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-800">Recent Activities</h2>
          <div className="flex justify-between items-center mb-4 p-3 rounded-lg hover:bg-gray-50 transition-colors bg-blue-100">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-100 rounded-full mr-3"></div>
              <div>
                <h3 className="font-semibold text-gray-800">New Collaboration Request</h3>
                <p className="text-gray-600 text-sm">From: Manya Singh</p>
              </div>
            </div>
            <FaUserPlus className="text-gray-400" />
          </div>
          <div className="flex justify-between items-center mb-4 p-3 rounded-lg hover:bg-gray-50 transition-colors bg-green-100">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-100 rounded-full mr-3"></div>
              <div>
                <h3 className="font-semibold text-gray-800">Paper Accepted</h3>
                <p className="text-gray-600 text-sm">Journal of AI Ethics</p>
              </div>
            </div>
            <FaBook className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;