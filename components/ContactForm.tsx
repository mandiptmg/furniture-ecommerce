// components/ContactForm.tsx
'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react'

interface FormData {
  firstName: string
  lastName: string
  email: string
  message: string
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
    // You can send the form data to an API or perform other actions
  }

  return (
    <form className='pt-20 gap-y-6 grid' onSubmit={handleSubmit}>
      <div className='grid items-center gap-6 grid-cols-2'>
        <label className='grid'>
          First name:
          <input
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder='Enter your first name'
            className='w-full rounded-lg p-2 border focus:outline-[#6D9281]'
          />
        </label>

        <label className='grid'>
          Last name:
          <input
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder='Enter your last name'
            className='w-full rounded-lg p-2 border focus:outline-[#6D9281]'
          />
        </label>
      </div>

      <label className='grid'>
        Email address:
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
          placeholder='Enter your email address'
          className='w-full rounded-lg p-2 border focus:outline-[#6D9281]'
        />
      </label>

      <label className='grid'>
        Message:
        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          required
          placeholder='Type your message here'
          className='w-full rounded-lg p-2 resize-none border focus:outline-[#6D9281]'
        ></textarea>
      </label>

      <button
        className='capitalize font-semibold text-lg ligreen text-white px-4 py-3 rounded-lg duration-700 hover:scale-105'
        type='submit'
      >
        send message
      </button>
    </form>
  )
}

export default ContactForm
