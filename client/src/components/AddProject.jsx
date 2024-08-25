import React, { useState } from 'react';
import { FaProjectDiagram, FaFileAlt, FaUpload, FaTags, FaCheckCircle } from 'react-icons/fa';

const AddProject = () => {
  const [project, setProject] = useState({
    title: '',
    content: '',
    file: null,
    status: 'ongoing',
    keywords: []
  });
  const [keyword, setKeyword] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProject(prevProject => ({
      ...prevProject,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProject(prevProject => ({
        ...prevProject,
        file: file
      }));
    }
  };

  const handleKeywordAdd = (e) => {
    e.preventDefault();
    if (keyword && !project.keywords.includes(keyword)) {
      setProject(prevProject => ({
        ...prevProject,
        keywords: [...prevProject.keywords, keyword]
      }));
      setKeyword('');
    }
  };

  const handleKeywordRemove = (keywordToRemove) => {
    setProject(prevProject => ({
      ...prevProject,
      keywords: prevProject.keywords.filter(k => k !== keywordToRemove)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Project data to be submitted:', project);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
          <h1 className="text-3xl font-semibold text-center mb-6">Add Project</h1>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="flex items-center border-b border-gray-300 py-2">
                <FaProjectDiagram className="text-gray-400 mr-3" />
                <input
                  type="text"
                  name="title"
                  value={project.title}
                  onChange={handleInputChange}
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="Project Title"
                />
              </div>

              <div className="py-2">
                <FaFileAlt className="text-gray-400 mb-2" />
                <textarea
                  name="content"
                  value={project.content}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  rows="4"
                  placeholder="Project Content"
                ></textarea>
              </div>

              <div className="flex items-center border-b border-gray-300 py-2">
                <FaUpload className="text-gray-400 mr-3" />
                <input
                  type="file"
                  id="project-file"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label htmlFor="project-file" className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg">
                  Upload File
                </label>
                {project.file && <span className="ml-3">{project.file.name}</span>}
              </div>

              <div className="flex items-center border-b border-gray-300 py-2">
                <FaCheckCircle className="text-gray-400 mr-3" />
                <select
                  name="status"
                  value={project.status}
                  onChange={handleInputChange}
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                >
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              <div className="py-2">
                <FaTags className="text-gray-400 mb-2" />
                <div className="flex flex-wrap mb-2">
                  {project.keywords.map((kw, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                      {kw}
                      <button onClick={() => handleKeywordRemove(kw)} className="ml-1 text-red-500">&times;</button>
                    </span>
                  ))}
                </div>
                <div className="flex">
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="flex-grow px-3 py-2 text-gray-700 border rounded-l-lg focus:outline-none"
                    placeholder="Add keyword"
                  />
                  <button
                    onClick={handleKeywordAdd}
                    className="bg-blue-500 text-white px-4 rounded-r-lg"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
              >
                Add Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProject;