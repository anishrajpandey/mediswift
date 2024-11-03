"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";

export default function PatientReport() {
  const [medications, setMedications] = useState([
    { name: "Dulcolax", frequency: "Once a day", duration: "7 Days" },
  ]);

  const addMedication = () => {
    setMedications([...medications, { name: "", frequency: "", duration: "" }]);
  };

  const handleMedicationChange = (index, field, value) => {
    const updatedMedications = [...medications];
    updatedMedications[index][field] = value;
    setMedications(updatedMedications);
  };

  const removeMedication = (index) => {
    const updatedMedications = medications.filter((_, i) => i !== index);
    setMedications(updatedMedications);
  };

  return (
  <>
  <Navbar/>
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-md shadow-md max-w-3xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center justify-between w-full space-x-4">
            <div className="w-full">
              <h2 className="text-xs">Name</h2>
              <p className="border-b border-gray-300 pb-1">Richard Esselman</p>
            </div>
            <div className="w-full">
              <h2 className="text-xs">Date of Birth</h2>
              <p className="border-b border-gray-300 pb-1">Jan 1ˢᵗ, 1989</p>
            </div>
            <div className="w-full">
              <h2 className="text-xs">Sex</h2>
              <p className="border-b border-gray-300 pb-1 ">Male</p>
            </div>
          </div>
        </header>

        <div className="mb-6">
          <h2 className="text-xs">Date of Illness</h2>
          <p className="border-b border-gray-300 pb-1">Nov 3ʳᵈ, 2024</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xs">Symptoms</h2>
          <p className="border-b border-gray-300 pb-1">
            Stomach ache with fever of 102°F. Patient also reported his blood
            pressure to be 110/68. Absence of body pain and muscle pain.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xs">Active Allergies</h2>
          <p className="border-b border-gray-300 pb-1">
            Patient has dust allergy. Upon exposure has bouts of sneezing and
            rashes.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xs">Current Medication</h2>
          <p className="border-b border-gray-300 pb-1">Vitamin D Tablet. 6000 IU, Once a month.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xs">Diagnosis</h2>
          <p className="border border-gray-300 p-2 rounded-md">
            Patient seems to have a case of food poisoning.
          </p>
        </div>


        <div className="flex space-x-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded-md">
            See Next Steps
          </button>
          <button className="bg-gray-300 px-6 py-2 rounded-md">
            Close
          </button>
        </div>
      </div>
    </div>
  </>

  );
}
