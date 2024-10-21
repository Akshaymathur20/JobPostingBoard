import Job from '../models/Job.js';
import { sendEmail } from '../utils/sendEmail.js';

// Create a Job
export const createJob = async (req, res) => {
  const { jobTitle, jobDescription, experienceLevel, candidates, endDate } = req.body;

  try {
    const job = new Job({
      jobTitle,
      jobDescription,
      experienceLevel,
      candidates,
      endDate,
      company: req.company.id,
    });

    await job.save();

    // Send emails to candidates
    candidates.forEach(async (candidate) => {
      await sendEmail(candidate.email, 'New Job Posting', `Job Details: ${jobTitle} - ${jobDescription}`);
    });

    res.json(job);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
