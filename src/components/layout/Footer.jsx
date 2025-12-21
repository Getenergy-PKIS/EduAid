'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Newsletter subscription:', email);
      setSubmitSuccess(true);
      setEmail('');
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#0F2A0F] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image 
                src="/images/logo/logo (1).png" 
                alt="EduAid Africa" 
                width={150} 
                height={60}
                unoptimized={true}
              />
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>eduaidafrica@somecreations.org</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+2349034932688</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+2349034932688</span>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="bg-transparent border border-white rounded-full p-2 hover:bg-white hover:text-[#0F2A0F] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </Link>
              <Link href="https://instagram.com" className="bg-transparent border border-white rounded-full p-2 hover:bg-white hover:text-[#0F2A0F] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link href="https://twitter.com" className="bg-transparent border border-white rounded-full p-2 hover:bg-white hover:text-[#0F2A0F] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link href="https://linkedin.com" className="bg-transparent border border-white rounded-full p-2 hover:bg-white hover:text-[#0F2A0F] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Take actions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Take actions</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/donate" className="hover:text-[#1F892B] transition-colors duration-300">Donate</Link></li>
              <li><Link href="/fundraiser" className="hover:text-[#1F892B] transition-colors duration-300">Start a Fundraiser</Link></li>
              <li><Link href="/scholarships" className="hover:text-[#1F892B] transition-colors duration-300">Apply for scholarships</Link></li>
              <li><Link href="/career-counseling" className="hover:text-[#1F892B] transition-colors duration-300">Get Career Counseling</Link></li>
              <li><Link href="/support-project" className="hover:text-[#1F892B] transition-colors duration-300">Support a project</Link></li>
            </ul>
          </div>
          
          {/* Career */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Career</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/employment" className="hover:text-[#1F892B] transition-colors duration-300">Apply for employment</Link></li>
              <li><Link href="/internship" className="hover:text-[#1F892B] transition-colors duration-300">Apply for internship</Link></li>
              <li><Link href="/volunteer" className="hover:text-[#1F892B] transition-colors duration-300">Join as Volunteer</Link></li>
              <li><Link href="/career-counseling" className="hover:text-[#1F892B] transition-colors duration-300">Get Career Counseling</Link></li>
              <li><Link href="/support-project" className="hover:text-[#1F892B] transition-colors duration-300">Support a Project</Link></li>
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/scholarships" className="hover:text-[#1F892B] transition-colors duration-300">Scholarships & Grants</Link></li>
              <li><Link href="/training" className="hover:text-[#1F892B] transition-colors duration-300">Training and Certifications</Link></li>
              <li><Link href="/workshops" className="hover:text-[#1F892B] transition-colors duration-300">Workshop Conferences</Link></li>
              <li><Link href="/my-career" className="hover:text-[#1F892B] transition-colors duration-300">My Career, My Life</Link></li>
            </ul>
            
            {/* Get Involved */}
            <h3 className="text-lg font-semibold mb-4 mt-8">Get Involved</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/become-member" className="hover:text-[#1F892B] transition-colors duration-300">Become a member</Link></li>
              <li><Link href="/local-chapter" className="hover:text-[#1F892B] transition-colors duration-300">Join a local chapter</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter Subscription */}
        <div className="mb-12">
          <p className="text-sm mb-4">Sign up to our Newsletter to get the latest news from EduAid Africa</p>
          <form onSubmit={handleSubmit} className="flex max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="flex-grow px-4 py-2 bg-white text-gray-800 border-none focus:outline-none"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#1F892B] text-white px-4 py-2 hover:bg-[#176e22] transition-colors duration-300"
            >
              {isSubmitting ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              )}
            </button>
          </form>
        </div>
        
        {/* Copyright and Terms */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700 text-sm">
          <p>© 2025, EduAidAfrica.com</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-[#1F892B] transition-colors duration-300">Privacy</Link>
            <Link href="/terms" className="hover:text-[#1F892B] transition-colors duration-300">Terms and Conditions</Link>
          </div>
        </div>
        
        {/* Large Background Text */}
        <div className="relative mt-16">
          <h2 className="text-[#1A3A1A] text-8xl md:text-9xl font-bold opacity-10">EduAid Africa</h2>
        </div>
      </div>
    </footer>
  );
}
