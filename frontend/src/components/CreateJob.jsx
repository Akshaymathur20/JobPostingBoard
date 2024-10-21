import { useState } from 'react';
import API from '../services/api';

const CreateJob = () => {
  const [jobData, setJobData] = useState({
    jobTitle: '',
    jobDescription: '',
    experienceLevel: '',
    candidateEmail: '',
    endDate: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/jobs/create', jobData);
      setMessage(res.data.msg);
    } catch (error) {
      setMessage('Job creation failed',error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h1 className="text-2xl font-bold mb-6">Post a Job</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            value={jobTitle}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Enter job title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Job Description</label>
          <textarea
            name="jobDescription"
            value={jobDescription}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Enter job description"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Experience Level</label>
          <input
            type="text"
            name="experienceLevel"
            value={experienceLevel}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Enter experience level"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Candidate Email</label>
          <input
            type="email"
            name="candidateEmail"
            value={candidateEmail}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Enter candidate email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">End Date</label>
          <input
            type="date"
            name="endDate"
            value={endDate}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Create Job
        </button>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
};

export default CreateJob;
