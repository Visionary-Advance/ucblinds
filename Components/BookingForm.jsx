"use client"
import { useState } from "react";

export default function BookingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Contact Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    contactMethod: "phone",
    // Step 2: Services
    serviceType: [],
    blindTypes: [],
    urgency: ""
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContactMethodChange = (method) => {
    setFormData(prev => ({ ...prev, contactMethod: method }));
  };

  const toggleServiceType = (service) => {
    setFormData(prev => ({
      ...prev,
      serviceType: prev.serviceType.includes(service)
        ? prev.serviceType.filter(s => s !== service)
        : [...prev.serviceType, service]
    }));
  };

  const toggleBlindType = (type) => {
    setFormData(prev => ({
      ...prev,
      blindTypes: prev.blindTypes.includes(type)
        ? prev.blindTypes.filter(t => t !== type)
        : [...prev.blindTypes, type]
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = async () => {
    // Prevent double submission
    if (isSubmitting) {
      console.log('Already submitting, ignoring duplicate request');
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Jobber API via our backend
      const response = await fetch('/api/create-jobber-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Success - show success message
        setIsSubmitted(true);
        setHasError(false);
        setIsSubmitting(false);

        // Reset after 4 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setCurrentStep(1);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            company: "",
            contactMethod: "phone",
            serviceType: [],
            blindTypes: [],
            urgency: ""
          });
        }, 4000);
      } else {
        // Show error
        console.error('Jobber API error:', result.error);
        setHasError(true);
        setIsSubmitted(false);
        setIsSubmitting(false);

        // Hide error after 4 seconds but stay on confirmation page
        setTimeout(() => {
          setHasError(false);
        }, 4000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setHasError(true);
      setIsSubmitted(false);
      setIsSubmitting(false);

      setTimeout(() => {
        setHasError(false);
      }, 4000);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setHasError(false); // Clear error when going back
    }
  };

  const handleEdit = (step) => {
    setCurrentStep(step);
    setHasError(false);
  };

  return (
    <div className="w-full lg:min-w-[520px] shadow-2xl lg:max-w-[420px] xl:max-w-[450px] flex-shrink-0 bg-neutral-100 rounded-[20px] overflow-hidden ">
      {/* Form Header */}
      <div className="bg-[#5d5d5d] h-[90px] px-5 pt-6">
        {/* Step Indicators */}
        <div className="flex items-center mb-2">
          {/* Step 1 */}
          <div className="flex flex-col items-center gap-1">
            <div className={`w-[40px] h-[40px] rounded-full flex items-center justify-center transition-colors duration-300 ${
              currentStep >= 1 ? 'bg-brand-blue' : 'bg-[#989898]'
            }`}>
              <span className="font-montserrat font-bold text-white text-[20px]">1</span>
            </div>
            <span className="font-montserrat font-bold text-white text-[12px]">Contact</span>
          </div>

          {/* Line between 1 and 2 */}
          <div className="flex-1 h-[2px] bg-white/40 mx-2 relative overflow-hidden mb-4">
            <div
              className={`absolute top-0 left-0 h-full bg-brand-blue transition-all duration-500 ${
                currentStep >= 2 ? 'w-full' : 'w-0'
              }`}
            ></div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center gap-1">
            <div className={`w-[40px] h-[40px] rounded-full flex items-center justify-center transition-colors duration-300 ${
              currentStep >= 2 ? 'bg-brand-blue' : 'bg-[#989898]'
            }`}>
              <span className="font-montserrat font-bold text-white text-[20px]">2</span>
            </div>
            <span className="font-montserrat font-bold text-white text-[12px]">Services</span>
          </div>

          {/* Line between 2 and 3 */}
          <div className="flex-1 h-[2px] bg-white/40 mx-2 relative overflow-hidden mb-4">
            <div
              className={`absolute top-0 left-0 h-full bg-brand-blue transition-all duration-500 ${
                currentStep >= 3 ? 'w-full' : 'w-0'
              }`}
            ></div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center gap-1">
            <div className={`w-[40px] h-[40px] rounded-full flex items-center justify-center transition-colors duration-300 ${
              currentStep >= 3 ? 'bg-brand-blue' : 'bg-[#989898]'
            }`}>
              <span className="font-montserrat font-bold text-white text-[20px]">3</span>
            </div>
            <span className="font-montserrat font-bold text-white text-[12px]">Confirm</span>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="px-4 pb-5 lg:px-8 pt-5">
        {/* Success Message */}
        {isSubmitted ? (
          <div className="animate-fadeIn flex flex-col items-center justify-center py-16">
            {/* Blue Circle with Checkmark */}
            <div className="w-[100px] h-[100px] rounded-full bg-brand-blue flex items-center justify-center mb-6">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>

            {/* Success Text */}
            <h3 className="font-montserrat font-bold text-black text-[24px] text-center mb-2">
              Form Submitted Successfully!
            </h3>
            <p className="font-montserrat text-black/70 text-[16px] text-center">
              We will reach out soon
            </p>
          </div>
        ) : (
          <>
            {/* Step 1: Contact Information */}
            {currentStep === 1 && (
              <div className="animate-fadeIn">
                {/* Form Title */}
                <div className="mb-8 flex flex-col items-center">
                  <div className="flex items-center gap-2 mb-2">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <h3 className="font-montserrat font-bold text-black text-[22px]">Contact Information</h3>
                  </div>
                  <p className="font-montserrat text-black text-[1rem] text-center">Let&apos;s start with your basic information</p>
                </div>

                {/* Form Fields */}
                <div className="space-y-2">
                  {/* First Name and Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div>
                      <label className="font-montserrat font-bold text-[16px] text-black/50 block mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full h-[40px] bg-neutral-100 border border-black/40 rounded-[5px] px-3 font-inter text-black"
                      />
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="font-montserrat font-bold text-[16px] text-black/50 block mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full h-[40px] bg-neutral-100 border border-black/40 rounded-[5px] px-3 font-inter text-black"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-montserrat font-bold text-[16px] text-black/50 block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full h-[40px] bg-neutral-100 border border-black/40 rounded-[5px] px-3 font-inter text-black"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="font-montserrat font-bold text-[16px] text-black/50 block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full h-[40px] bg-neutral-100 border border-black/40 rounded-[5px] px-3 font-inter text-black"
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="font-montserrat font-bold text-[16px] text-black/50 block mb-2">
                      Company Name (If Applicable)
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full h-[40px] bg-neutral-100 border border-black/40 rounded-[5px] px-3 font-inter text-black"
                    />
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="font-montserrat font-bold text-[16px] text-black/50 block mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => handleContactMethodChange('phone')}
                        className={`flex-1 h-[55px] rounded-[5px] font-montserrat font-bold text-[16px] transition-colors ${
                          formData.contactMethod === 'phone'
                            ? 'bg-brand-blue text-white border border-brand-blue'
                            : 'bg-neutral-100 text-black/50 border border-black/40'
                        }`}
                      >
                        Phone
                      </button>
                      <button
                        type="button"
                        onClick={() => handleContactMethodChange('text')}
                        className={`flex-1 h-[55px] rounded-[5px] font-montserrat font-bold text-[16px] transition-colors ${
                          formData.contactMethod === 'text'
                            ? 'bg-brand-blue text-white border border-brand-blue'
                            : 'bg-neutral-100 text-black/50 border border-black/40'
                        }`}
                      >
                        Text
                      </button>
                      <button
                        type="button"
                        onClick={() => handleContactMethodChange('email')}
                        className={`flex-1 h-[55px] rounded-[5px] font-montserrat font-bold text-[16px] transition-colors ${
                          formData.contactMethod === 'email'
                            ? 'bg-brand-blue text-white border border-brand-blue'
                            : 'bg-neutral-100 text-black/50 border border-black/40'
                        }`}
                      >
                        Email
                      </button>
                    </div>
                  </div>

                  {/* Next Button */}
                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-brand-blue text-white font-montserrat font-bold text-[16px] px-8 py-4 rounded-[5px] h-[55px] hover:opacity-90 transition-opacity"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Services */}
            {currentStep === 2 && (
              <div className="animate-fadeIn">
                {/* Form Title */}
                <div className="mb-8 flex flex-col items-center">
                  <div className="flex items-center gap-2 mb-2">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <h3 className="font-montserrat font-bold text-black text-[20px]">Service Details</h3>
                  </div>
                  <p className="font-montserrat text-black text-[14px] text-center">Tell us what services you need</p>
                </div>

                {/* Form Fields */}
                <div className="space-y-6">
                  {/* Service Type */}
                  <div>
                    <label className="font-montserrat font-bold text-[16px] text-black/50 block mb-2">
                      What service do you need? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Cleaning', 'Repair', 'Sales', 'Consultation'].map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleServiceType(service)}
                          className={`h-[45px] rounded-[5px] font-montserrat font-bold text-[14px] transition-colors ${
                            formData.serviceType.includes(service)
                              ? 'bg-brand-blue text-white border border-brand-blue'
                              : 'bg-neutral-100 text-black/50 border border-black/40'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Blind Types */}
                  <div>
                    <label className="font-montserrat font-bold text-[16px] text-black/50 block mb-2">
                      What type of blinds? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Vertical', 'Horizontal', 'Roller', 'Cellular', 'Wood', 'Faux Wood'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => toggleBlindType(type)}
                          className={`h-[45px] rounded-[5px] font-montserrat font-bold text-[14px] transition-colors ${
                            formData.blindTypes.includes(type)
                              ? 'bg-brand-blue text-white border border-brand-blue'
                              : 'bg-neutral-100 text-black/50 border border-black/40'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Urgency */}
                  <div>
                    <label className="font-montserrat font-bold text-[16px] text-black/50 block mb-2">
                      How soon do you need this service?
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {['ASAP', 'This Week', 'This Month'].map((urgency) => (
                        <button
                          key={urgency}
                          type="button"
                          onClick={() => handleInputChange('urgency', urgency)}
                          className={`h-[45px] rounded-[5px] font-montserrat font-bold text-[14px] transition-colors ${
                            formData.urgency === urgency
                              ? 'bg-brand-blue text-white border border-brand-blue'
                              : 'bg-neutral-100 text-black/50 border border-black/40'
                          }`}
                        >
                          {urgency}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="bg-neutral-100 text-black/70 border border-black/40 font-montserrat font-bold text-[16px] px-8 py-4 rounded-[5px] h-[55px] hover:bg-neutral-200 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-brand-blue text-white font-montserrat font-bold text-[16px] px-8 py-4 rounded-[5px] h-[55px] hover:opacity-90 transition-opacity"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {currentStep === 3 && (
              <div className="animate-fadeIn">
                {/* Form Title */}
                <div className="mb-8 flex flex-col items-center">
                  <div className="flex items-center gap-2 mb-2">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <h3 className="font-montserrat font-bold text-black text-[20px]">Confirm Your Details</h3>
                  </div>
                  <p className="font-montserrat text-black text-[14px] text-center">Please review your information before submitting</p>
                </div>

                {/* Error Message */}
                {hasError && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-400 rounded-[5px] animate-fadeIn">
                    <div className="flex items-start gap-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                      <div>
                        <h4 className="font-montserrat font-bold text-red-700 text-[16px] mb-1">Submission Failed</h4>
                        <p className="font-montserrat text-red-600 text-[14px]">
                          There was an error submitting your form. Please try again or contact us directly.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Summary */}
                <div className="space-y-4 mb-6">
                  {/* Contact Info Summary */}
                  <div className="bg-white p-4 rounded-[5px] border border-black/20">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-montserrat font-bold text-black text-[16px]">Contact Information</h4>
                      <button
                        type="button"
                        onClick={() => handleEdit(1)}
                        className="text-brand-blue font-montserrat font-bold text-[14px] hover:opacity-80"
                      >
                        Edit
                      </button>
                    </div>
                    <div className="space-y-2 font-inter text-[14px] text-black/70">
                      <p><span className="font-semibold">Name:</span> {formData.firstName} {formData.lastName}</p>
                      <p><span className="font-semibold">Email:</span> {formData.email}</p>
                      <p><span className="font-semibold">Phone:</span> {formData.phone}</p>
                      {formData.company && <p><span className="font-semibold">Company:</span> {formData.company}</p>}
                      <p><span className="font-semibold">Preferred Contact:</span> {formData.contactMethod.charAt(0).toUpperCase() + formData.contactMethod.slice(1)}</p>
                    </div>
                  </div>

                  {/* Services Summary */}
                  <div className="bg-white p-4 rounded-[5px] border border-black/20">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-montserrat font-bold text-black text-[16px]">Service Details</h4>
                      <button
                        type="button"
                        onClick={() => handleEdit(2)}
                        className="text-brand-blue font-montserrat font-bold text-[14px] hover:opacity-80"
                      >
                        Edit
                      </button>
                    </div>
                    <div className="space-y-2 font-inter text-[14px] text-black/70">
                      <p><span className="font-semibold">Services:</span> {formData.serviceType.length > 0 ? formData.serviceType.join(', ') : 'None selected'}</p>
                      <p><span className="font-semibold">Blind Types:</span> {formData.blindTypes.length > 0 ? formData.blindTypes.join(', ') : 'None selected'}</p>
                      <p><span className="font-semibold">Urgency:</span> {formData.urgency || 'Not specified'}</p>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="bg-neutral-100 text-black/70 border border-black/40 font-montserrat font-bold text-[16px] px-8 py-4 rounded-[5px] h-[55px] hover:bg-neutral-200 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-brand-blue text-white font-montserrat font-bold text-[16px] px-8 py-4 rounded-[5px] h-[55px] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
