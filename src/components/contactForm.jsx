import React from 'react'
import { useFormik } from 'formik'
import { formikConfig } from '../functions/contactFormValidation'
import chevron from '../assets/chevron.svg'

const ContactForm = (props) => {
	const { handleSubmit, handleChange, handleBlur, touched, errors } = useFormik(
		formikConfig
	)

	function setSuccessToTrue() {
		console.log('fired')
		props.successHandler(true)
	}

	return (
		<div className='container__inner'>
			<header>
				<h1>Get in touch</h1>
				<p>
					Fill in this form and we’ll get in touch soon! Alternatively, please email
					me directly at <strong>hello@jamestrenholme.com</strong>
				</p>
			</header>
			<main>
				<form onSubmit={handleSubmit}>
					<div className='form-row'>
						<div
							className={`form-row__element ${
								touched.name && errors.name ? 'error' : ''
							} ${touched.name && !errors.name ? 'success' : ''}`}>
							<input
								type='text'
								id='name'
								autoComplete='name'
								placeholder='Your Name'
								required
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<div className='form-row__element-icon'></div>
							{touched.name && errors.name ? (
								<div className='error-message'>{errors.name}</div>
							) : null}
						</div>
						<div
							className={`form-row__element ${
								touched.email && errors.email ? 'error' : ''
							} ${touched.email && !errors.email ? 'success' : ''}`}>
							<input
								type='text'
								id='email'
								autoComplete='email'
								placeholder='Your Email'
								required
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<div className='form-row__element-icon'></div>
							{touched.email && errors.email ? (
								<div className='error-message'>{errors.email}</div>
							) : null}
						</div>
					</div>
					<div className='form-row'>
						<div
							className={`form-row__element ${
								touched.message && errors.message ? 'error' : ''
							} ${touched.message && !errors.message ? 'success' : ''}`}>
							<textarea
								type='text'
								id='message'
								placeholder='Your Message'
								required
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<div className='form-row__element-icon'></div>
							{touched.message && errors.message ? (
								<div className='error-message'>{errors.message}</div>
							) : null}
						</div>
					</div>
					<button
						className='button'
						disabled={errors.name || errors.email || errors.message}
						name='send message'
						type='submit'
						value='Send message'
						onClick={() => {
							if (!errors.name && !errors.email && !errors.message) setSuccessToTrue()
						}}>
						Send Message
						<img
							src={chevron}
							width='6px'
							height='11px'
							alt='right-arrow'
							className='button__icon'></img>
					</button>
				</form>
			</main>
		</div>
	)
}

export default ContactForm
