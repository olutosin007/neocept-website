import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { SEO } from '../components/SEO';
import { fadeUp, fadeIn } from '../lib/animations';

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
  honeypot: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const PROJECT_TYPES = [
  'Brand Strategy',
  'AI Solutions',
  'Creative Consulting',
  'Communication Design',
  'Other',
];

export function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
    honeypot: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us about your project';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide a bit more detail (at least 20 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          projectType: formData.projectType,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (status === 'success') {
    return (
      <>
        <SEO
          title="Message Sent — Neocept"
          description="Thank you for reaching out. We'll be in touch shortly."
        />
        <SuccessState />
      </>
    );
  }

  return (
    <>
      <SEO
        title="Contact — Neocept"
        description="Start a conversation with the Neocept team. Let's discuss how we can help your brand lead."
      />

      {/* Hero */}
      <section className="bg-[#1764ae] grid-pattern-cta pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C9A84C]/60" />
        <HeroSection />
      </section>

      {/* Form */}
      <section className="bg-[#F8F5EF] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          {status === 'error' && (
            <div
              className="mb-8 p-4 bg-red-50 border border-red-200 text-red-800 font-body text-sm"
              role="alert"
              aria-live="polite"
            >
              Something went wrong. Please try again or email us directly at{' '}
              <a
                href="mailto:hello@neocept.com"
                className="underline hover:no-underline"
              >
                hello@neocept.com
              </a>
            </div>
          )}

          <ContactForm
            formData={formData}
            errors={errors}
            status={status}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </section>
    </>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <motion.div
            className="w-16 h-0.5 bg-white/40 mb-8"
            variants={fadeIn}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0}
          />
          <motion.h1
            className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.1}
          >
            Let's Build What's Next.
          </motion.h1>
          <motion.p
            className="mt-5 font-body text-base text-white/80 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.25}
          >
            We partner with brands that are ready to lead, not follow.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col gap-4"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0.35}
        >
          <a
            href="mailto:hello@neocept.com"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/50 text-white font-body text-sm tracking-wide hover:border-white transition-all duration-200"
            style={{ borderRadius: 0 }}
          >
            hello@neocept.com
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

interface ContactFormProps {
  formData: FormData;
  errors: FormErrors;
  status: FormStatus;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}

function ContactForm({
  formData,
  errors,
  status,
  onChange,
  onSubmit,
}: ContactFormProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.form
      ref={ref}
      onSubmit={onSubmit}
      className="space-y-8"
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={0}
      noValidate
    >
      {/* Honeypot field */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={onChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block font-body text-xs text-navy/70 tracking-[0.12em] uppercase mb-2"
          >
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={onChange}
            className={`w-full px-4 py-3 bg-white border ${
              errors.name ? 'border-red-500' : 'border-navy/20'
            } font-body text-navy focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition-all duration-200`}
            style={{ borderRadius: 0 }}
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={errors.name ? 'true' : 'false'}
          />
          {errors.name && (
            <p
              id="name-error"
              className="mt-2 font-body text-sm text-red-600"
              role="alert"
            >
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block font-body text-xs text-navy/70 tracking-[0.12em] uppercase mb-2"
          >
            Your Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            className={`w-full px-4 py-3 bg-white border ${
              errors.email ? 'border-red-500' : 'border-navy/20'
            } font-body text-navy focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition-all duration-200`}
            style={{ borderRadius: 0 }}
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && (
            <p
              id="email-error"
              className="mt-2 font-body text-sm text-red-600"
              role="alert"
            >
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="block font-body text-xs text-navy/70 tracking-[0.12em] uppercase mb-2"
          >
            Company (Optional)
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={onChange}
            className="w-full px-4 py-3 bg-white border border-navy/20 font-body text-navy focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition-all duration-200"
            style={{ borderRadius: 0 }}
          />
        </div>

        {/* Project Type */}
        <div>
          <label
            htmlFor="projectType"
            className="block font-body text-xs text-navy/70 tracking-[0.12em] uppercase mb-2"
          >
            Project Type (Optional)
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={onChange}
            className="w-full px-4 py-3 bg-white border border-navy/20 font-body text-navy focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition-all duration-200 appearance-none"
            style={{ borderRadius: 0 }}
          >
            <option value="">Select a project type</option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block font-body text-xs text-navy/70 tracking-[0.12em] uppercase mb-2"
        >
          Tell us about your project *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={onChange}
          rows={6}
          className={`w-full px-4 py-3 bg-white border ${
            errors.message ? 'border-red-500' : 'border-navy/20'
          } font-body text-navy focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition-all duration-200 resize-none`}
          style={{ borderRadius: 0 }}
          aria-describedby={errors.message ? 'message-error' : undefined}
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        {errors.message && (
          <p
            id="message-error"
            className="mt-2 font-body text-sm text-red-600"
            role="alert"
          >
            {errors.message}
          </p>
        )}
      </div>

      {/* Privacy notice */}
      <p className="font-body text-xs text-navy/50 leading-relaxed">
        By submitting this form, you agree to our{' '}
        <Link to="/privacy" className="underline hover:text-navy/70">
          Privacy Policy
        </Link>{' '}
        and{' '}
        <Link to="/terms" className="underline hover:text-navy/70">
          Terms of Use
        </Link>
        . We'll use your information to respond to your enquiry and may contact
        you about relevant services.
      </p>

      {/* Submit */}
      <div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center px-8 py-4 bg-[#1764ae] text-white font-body font-medium text-sm tracking-wide hover:bg-navy transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ borderRadius: 0 }}
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message →'}
        </button>
      </div>
    </motion.form>
  );
}

function SuccessState() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="min-h-screen bg-[#0F1B35] flex items-center justify-center pt-16">
      <div ref={ref} className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          className="w-16 h-0.5 bg-[#C9A84C] mx-auto mb-8"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        />

        <motion.h1
          className="font-display text-4xl md:text-5xl text-white mb-6"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0.1}
        >
          We've received your message.
        </motion.h1>

        <motion.p
          className="font-body text-lg text-white/70 mb-10"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0.2}
        >
          We'll be in touch within 24 hours.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0.3}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-navy font-body font-medium text-sm tracking-wide hover:bg-[#F8F5EF] transition-all duration-200"
            style={{ borderRadius: 0 }}
          >
            Back to Home →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
