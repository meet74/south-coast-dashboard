import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SideBar from "../../../../components/SideBar"; // Adjust the import path as needed
import Topbar from "../../../../components/TopBar"; // Adjust the import path as needed
import { useNavigate } from "react-router-dom";
import { dayScreenPath } from "../../../../routes/pathNames";

const WSIBFormPage = () => {
  const [formData, setFormData] = useState({
    claimNumber: "",
    injuryType: "",
    lastName: "",
    firstName: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    telephone: "",
    dateOfBirth: new Date(),
    dateOfInjury: new Date(),
    jobTitle: "",
    employmentStatus: "",
    healthProfessionalName: "",
    profession: "",
    providerID: "",
    facilityName: "",
    healthProfessionalTelephone: "",
    reportDate: new Date(),
    healthProfessionalAddress: "",
    healthProfessionalCity: "",
    healthProfessionalProvince: "",
    healthProfessionalPostalCode: "",
    assessmentDate: new Date(),
    referralHealthProfessional: "",
    referralDate: new Date(),
    injuryHistory: "",
    investigations: "",
    medicalInformation: "",
    currentSymptoms: "",
    physicalAssessment: "",
    occupationalDiagnosis: "",
    recoveryFactors: [],
    outcomeMeasures: [],
    treatmentPlan: "",
    additionalReferrals: "",
    returnToWorkGoals: "",
    returnToWorkDiscussion: "",
    abilities: {},
    restrictions: {},
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDateChange = (name, date) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate(dayScreenPath)
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <SideBar />
      <div className="flex-grow">
        <Topbar />
        <div className="p-10">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-6">WSIB Form</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Injured person and employer information */}
              <section>
                <h3 className="text-xl font-semibold mb-4">
                  A. Injured person and employer information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Claim Number
                    </label>
                    <input
                      type="text"
                      name="claimNumber"
                      value={formData.claimNumber}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Injury Type
                    </label>
                    <input
                      type="text"
                      name="injuryType"
                      value={formData.injuryType}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  {/* Additional fields for address, city, province, etc. */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Province
                    </label>
                    <input
                      type="text"
                      name="province"
                      value={formData.province}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Telephone
                    </label>
                    <input
                      type="text"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Date of Birth
                    </label>
                    <DatePicker
                      selected={formData.dateOfBirth}
                      onChange={(date) => handleDateChange("dateOfBirth", date)}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Date of Injury
                    </label>
                    <DatePicker
                      selected={formData.dateOfInjury}
                      onChange={(date) =>
                        handleDateChange("dateOfInjury", date)
                      }
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Employment Status
                    </label>
                    <input
                      type="text"
                      name="employmentStatus"
                      value={formData.employmentStatus}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  {/* Continue adding fields based on the PDF structure */}

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Injury History
                    </label>
                    <textarea
                      name="injuryHistory"
                      value={formData.injuryHistory}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Investigations
                    </label>
                    <textarea
                      name="investigations"
                      value={formData.investigations}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Objective Findings
                    </label>
                    <textarea
                      name="objectiveFindings"
                      value={formData.objectiveFindings}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Provisional Diagnosis
                    </label>
                    <textarea
                      name="provisionalDiagnosis"
                      value={formData.provisionalDiagnosis}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Treatment Plan
                    </label>
                    <textarea
                      name="treatmentPlan"
                      value={formData.treatmentPlan}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Goals of Treatment
                    </label>
                    <textarea
                      name="goalsOfTreatment"
                      value={formData.goalsOfTreatment}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Return to Work Status
                    </label>
                    <textarea
                      name="returnToWorkStatus"
                      value={formData.returnToWorkStatus}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Barriers to Recovery
                    </label>
                    <textarea
                      name="barriersToRecovery"
                      value={formData.barriersToRecovery}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Prognosis
                    </label>
                    <textarea
                      name="prognosis"
                      value={formData.prognosis}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Comments
                    </label>
                    <textarea
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    ></textarea>
                  </div>
                </div>
              </section>
              {/* Regulated health professional information */}
              <section>
                <h3 className="text-xl font-semibold mb-4">
                  B. Regulated health professional information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Health Professional Name
                    </label>
                    <input
                      type="text"
                      name="healthProfessionalName"
                      value={formData.healthProfessionalName}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Profession
                    </label>
                    <input
                      type="text"
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Provider ID
                    </label>
                    <input
                      type="text"
                      name="providerID"
                      value={formData.providerID}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Facility Name
                    </label>
                    <input
                      type="text"
                      name="facilityName"
                      value={formData.facilityName}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Health Professional Telephone
                    </label>
                    <input
                      type="text"
                      name="healthProfessionalTelephone"
                      value={formData.healthProfessionalTelephone}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Report Date
                    </label>
                    <DatePicker
                      selected={formData.reportDate}
                      onChange={(date) => handleDateChange("reportDate", date)}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Health Professional Address
                    </label>
                    <input
                      type="text"
                      name="healthProfessionalAddress"
                      value={formData.healthProfessionalAddress}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Health Professional City
                    </label>
                    <input
                      type="text"
                      name="healthProfessionalCity"
                      value={formData.healthProfessionalCity}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Health Professional Province
                    </label>
                    <input
                      type="text"
                      name="healthProfessionalProvince"
                      value={formData.healthProfessionalProvince}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Health Professional Postal Code
                    </label>
                    <input
                      type="text"
                      name="healthProfessionalPostalCode"
                      value={formData.healthProfessionalPostalCode}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                </div>
              </section>
              {/* Clinical information */}

              {/* Treatment plan and additional referral recommendations */}
              <section>
                <h3 className="text-xl font-semibold mb-4">
                  D. Treatment plan and additional referral recommendations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Assessment Date
                    </label>
                    <DatePicker
                      selected={formData.assessmentDate}
                      onChange={(date) =>
                        handleDateChange("assessmentDate", date)
                      }
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Referral Health Professional
                    </label>
                    <input
                      type="text"
                      name="referralHealthProfessional"
                      value={formData.referralHealthProfessional}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Referral Date
                    </label>
                    <DatePicker
                      selected={formData.referralDate}
                      onChange={(date) =>
                        handleDateChange("referralDate", date)
                      }
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                </div>
              </section>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-sm"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WSIBFormPage;
