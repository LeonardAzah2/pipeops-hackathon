import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Dashboard = () => {
  const fallbackData = {
    appointments: [
      { date: '04-May-2023', title: 'Dental Treatment' },
      { date: '05-May-2023', title: 'Consultation' },
      { date: '04-June-2023', title: 'Malaria Test' }
    ],
    supplements: [
      { name: 'Vitamin D', dosage: '600-800 IU' },
      { name: 'Nootropic', dosage: '10 Capsules' },
      { name: 'Probiotics', dosage: '1-10 billion CFUs' }
    ],
    doctors: [
      { name: 'James Adewale', diagnosis: 'Cavities', status: '64%', contact: '+2(3)8164275', date: '24 May, 2024' },
      { name: 'Jenny Peter', diagnosis: 'MIR Scan', status: '64%', contact: '+2(3)8164275', date: '24 May, 2024' },
      { name: 'James Linda', diagnosis: 'Consultation', status: '64%', contact: '+2(3)8164275', date: '24 May, 2024' }
    ]
  };

  const [data, setData] = useState(fallbackData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://shy-lake.typical-sleep-production.svc.pipeops.internal/api/dashboard');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex-1 lg:ml-32 p-6">
        <Header />
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-2">Your Health Is 100% Important</h2>
          <p className="mb-4">Health is a state of complete physical, mental, and social well-being, and not merely the absence of disease or infirmity (– World Health Organization)</p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg">See Appointment</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Appointment Timeline</h3>
            <ul>
              {data.appointments.map((appointment, index) => (
                <li key={index} className="border-b py-2">{appointment.date}: {appointment.title}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Medical Supplement</h3>
            <ul>
              {data.supplements.map((supplement, index) => (
                <li key={index} className="border-b py-2">{supplement.name}: {supplement.dosage}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-xl font-semibold mb-4">My Doctors</h3>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Doctor's Name</th>
                <th className="px-4 py-2">Diagnosis</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Contact</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {data.doctors.map((doctor, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{doctor.name}</td>
                  <td className="border px-4 py-2">{doctor.diagnosis}</td>
                  <td className="border px-4 py-2">{doctor.status}</td>
                  <td className="border px-4 py-2">{doctor.contact}</td>
                  <td className="border px-4 py-2">{doctor.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
