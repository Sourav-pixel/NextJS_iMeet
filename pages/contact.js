

import React from 'react'
import Navbar from './user/Navbar'
import Footer from './user/Footer'
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const Contact = () => {
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone_number: Yup.string().required('Phone number is required'),
    message: Yup.string().required('Message is required'),
  });

   const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };
  return (
    <>
<div class="relative w-full bg-gray-200">
      
      <Navbar />
    
  
  <div class="mx-auto max-w-7xl px-4">
    <div class="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
      <div class="mx-auto max-w-max rounded-full border bg-gray-50 p-1 px-3">
        <p class="text-center text-xs font-semibold leading-normal md:text-sm">
          Share your thoughts
        </p>
      </div>
      <p class="text-center text-3xl font-bold text-white md:text-5xl md:leading-10">
        Love to hear from you
      </p>
      <p class="mx-auto max-w-4xl text-center text-base text-white md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        veritatis voluptates neque itaque repudiandae sint, explicabo assumenda
        quam ratione placeat?
      </p>
    </div>
    <div class="mx-auto max-w-7xl py-12 md:py-24">
      <div class="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
        <div class="flex items-center justify-center">
          <div class="px-2 md:px-12">
            <p class="text-2xl font-bold text-white md:text-4xl">
              Get in touch
            </p>
            <p class="mt-4 text-lg text-white">
              Our friendly team would love to hear from you.
            </p>
            <Formik
      initialValues={{
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <form className="mt-8 space-y-4">
          <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
            <div className="grid w-full  items-center gap-1.5">
              <label htmlFor="first_name" className="text-sm font-medium leading-none text-gray-700">
                First Name
              </label>
              <Field
                type="text"
                id="first_name"
                name="first_name"
                placeholder="First Name"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              />
              <ErrorMessage name="first_name" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <label htmlFor="last_name" className="text-sm font-medium leading-none text-gray-700">
                Last Name
              </label>
              <Field
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Last Name"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              />
              <ErrorMessage name="last_name" component="div" className="text-red-500 text-sm" />
            </div>
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <label htmlFor="email" className="text-sm font-medium leading-none text-gray-700">
              Email
            </label>
            <Field
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <label htmlFor="phone_number" className="text-sm font-medium leading-none text-gray-700">
              Phone number
            </label>
            <Field
              type="tel"
              id="phone_number"
              name="phone_number"
              placeholder="Phone number"
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
            />
            <ErrorMessage name="phone_number" component="div" className="text-red-500 text-sm" />
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <label htmlFor="message" className="text-sm font-medium leading-none text-gray-700">
              Message
            </label>
            <Field
              as="textarea"
              id="message"
              name="message"
              placeholder="Leave us a message"
              cols="3"
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
            />
            <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-blue-200 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </Formik>
          </div>
        </div>
        <img
          alt="Contact us"
          class="hidden max-h-full w-full rounded-lg object-cover lg:block"
          src="/work.svg"
        />
      </div>
    </div>
  </div>

  


  <Footer />
</div>
    </>
  )
}

export default Contact