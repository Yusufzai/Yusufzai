"use client";

import { useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialErrors = { name: "", email: "", projectType: "", budget: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState(initialErrors);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  function validate() {
    const next = { ...initialErrors };
    let isValid = true;

    if (!values.name.trim()) {
      next.name = "Please enter your name.";
      isValid = false;
    }

    if (!values.email.trim()) {
      next.email = "Please enter your email.";
      isValid = false;
    } else if (!EMAIL_REGEX.test(values.email.trim())) {
      next.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!values.projectType) {
      next.projectType = "Please select a project type.";
      isValid = false;
    }

    if (!values.budget) {
      next.budget = "Please select a budget range.";
      isValid = false;
    }

    if (!values.message.trim()) {
      next.message = "Please tell me a bit about your project.";
      isValid = false;
    }

    setErrors(next);
    return isValid;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setValues({ name: "", email: "", projectType: "", budget: "", message: "" });
    }
  }

  const inputClass =
    "w-full rounded-xl border border-line dark:border-white/10 px-4 py-3 text-sm text-ink dark:text-cream bg-offwhite dark:bg-white/5 focus:bg-white dark:focus:bg-white/10 placeholder:text-muted/60 dark:placeholder:text-white/30 transition-colors";

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 mx-auto rounded-full bg-accent text-white flex items-center justify-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-serif text-xl mt-5">Message sent</p>
        <p className="text-muted text-sm mt-2 dark:text-white/60">
          Thanks for reaching out — I&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Jane Smith"
            value={values.name}
            onChange={handleChange}
            className={`${inputClass} ${errors.name ? "border-red-500" : ""}`}
          />
          {errors.name && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="jane@example.com"
            value={values.email}
            onChange={handleChange}
            className={`${inputClass} ${errors.email ? "border-red-500" : ""}`}
          />
          {errors.email && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.email}</p>}
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium mb-1.5">
              Project type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={values.projectType}
              onChange={handleChange}
              className={`${inputClass} ${errors.projectType ? "border-red-500" : ""}`}
            >
              <option value="">Select...</option>
              <option>Website</option>
              <option>Web App</option>
              <option>Branding</option>
              <option>Redesign</option>
              <option>Other</option>
            </select>
            {errors.projectType && (
              <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.projectType}</p>
            )}
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium mb-1.5">
              Budget range
            </label>
            <select
              id="budget"
              name="budget"
              value={values.budget}
              onChange={handleChange}
              className={`${inputClass} ${errors.budget ? "border-red-500" : ""}`}
            >
              <option value="">Select...</option>
              <option>Under $2,000</option>
              <option>$2,000 – $5,000</option>
              <option>$5,000 – $10,000</option>
              <option>$10,000+</option>
              <option>Let&apos;s discuss</option>
            </select>
            {errors.budget && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.budget}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1.5">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell me about your project..."
            value={values.message}
            onChange={handleChange}
            className={`${inputClass} resize-none ${errors.message ? "border-red-500" : ""}`}
          />
          {errors.message && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-3.5 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-dark transition-colors"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
