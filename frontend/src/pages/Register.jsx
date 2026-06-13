import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      // 1. Register User Auth
      const res = await axios.post(`${import.meta.env.VITE_API_URL || 'https://volunteerb.onrender.com'}/api/auth/register`, {
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
        role: 'Volunteer'
      });

      const userAuth = res.data;
      
      // 2. Create Volunteer Profile
      await axios.post(`${import.meta.env.VITE_API_URL || 'https://volunteerb.onrender.com'}/api/volunteers`, {
        dob: data.dob,
        gender: data.gender,
        address: {
          city: data.city,
          state: data.state,
          postalCode: data.postalCode
        },
        professionalDetails: {
          education: data.education,
          skills: data.skills ? data.skills.split(',').map(s => s.trim()) : [],
          interests: data.interests ? data.interests.split(',').map(s => s.trim()) : [],
          experience: data.experience
        },
        availability: data.availability,
        emergencyContact: {
          name: data.emergencyName,
          relation: data.emergencyRelation,
          phoneNumber: data.emergencyPhone
        }
      }, {
        headers: { Authorization: `Bearer ${userAuth.token}` }
      });

      // 3. Login User manually and redirect to dashboard
      localStorage.setItem('user', JSON.stringify(userAuth));
      toast.success("Registration successful!");
      setTimeout(() => {
        window.location.href = '/volunteer';
      }, 1500);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error registering');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="card">
        <h2 className="text-3xl font-bold text-gray-text mb-6 text-center">Volunteer Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
          {/* Personal Information */}
          <section>
            <h3 className="text-xl font-semibold text-primary mb-4 border-b pb-2">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-text mb-1">Full Name</label>
                <input {...register("name", { required: "Name is required" })} className="input-field" />
                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-text mb-1">Email</label>
                <input type="email" {...register("email", { required: "Email is required" })} className="input-field" />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-text mb-1">Phone Number</label>
                <input type="tel" {...register("phone", { required: "Phone is required" })} className="input-field" />
                {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-text mb-1">Date of Birth</label>
                <input type="date" {...register("dob", { required: "DOB is required" })} className="input-field" />
                {errors.dob && <span className="text-red-500 text-sm">{errors.dob.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-text mb-1">Gender</label>
                <select {...register("gender")} className="input-field">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
            </div>
          </section>

          {/* Address */}
          <section>
            <h3 className="text-xl font-semibold text-primary mb-4 border-b pb-2">Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-text mb-1">City</label>
                <input {...register("city")} className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-text mb-1">State</label>
                <input {...register("state")} className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-text mb-1">Postal Code</label>
                <input {...register("postalCode")} className="input-field" />
              </div>
            </div>
          </section>

          {/* Professional Details */}
          <section>
            <h3 className="text-xl font-semibold text-primary mb-4 border-b pb-2">Professional Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-text mb-1">Education</label>
                <input {...register("education")} className="input-field" placeholder="Highest degree or current study" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-text mb-1">Experience</label>
                <input {...register("experience")} className="input-field" placeholder="Any relevant volunteer/work experience" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-text mb-1">Skills (comma separated)</label>
                <input {...register("skills")} className="input-field" placeholder="e.g. Teaching, First Aid, Web Design" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-text mb-1">Interests (comma separated)</label>
                <input {...register("interests")} className="input-field" placeholder="e.g. Environment, Education, Health" />
              </div>
            </div>
          </section>

          {/* Availability & Emergency Contact */}
          <section>
            <h3 className="text-xl font-semibold text-primary mb-4 border-b pb-2">Availability & Emergency</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-text mb-1">Availability</label>
                <select {...register("availability")} className="input-field">
                  <option value="">Select Availability</option>
                  <option value="Weekdays">Weekdays</option>
                  <option value="Weekends">Weekends</option>
                  <option value="Both">Both</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-text mb-1">Password</label>
                <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Min length is 6" } })} className="input-field" />
                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
              </div>
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="md:col-span-3"><h4 className="font-medium text-gray-text">Emergency Contact</h4></div>
                <div>
                  <label className="block text-sm font-medium text-gray-text mb-1">Name</label>
                  <input {...register("emergencyName")} className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-text mb-1">Relation</label>
                  <input {...register("emergencyRelation")} className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-text mb-1">Phone</label>
                  <input type="tel" {...register("emergencyPhone")} className="input-field" />
                </div>
              </div>
            </div>
          </section>

          <div className="pt-4 flex justify-center">
            <button type="submit" className="btn-primary w-full md:w-auto md:px-12 py-3 text-lg">Submit Registration</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Register;
