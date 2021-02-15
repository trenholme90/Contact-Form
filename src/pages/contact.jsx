import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import ContactForm from '../components/contactForm.jsx'
import SuccessMessage from '../components/successMessage.jsx'
import logo from '../assets/logo.svg'

const Contact = () => {
	const [isSuccess, setIsSuccess] = useState(false)

	function handleSuccess(newValue) {
		setIsSuccess(newValue)
	}

	return (
		<CSSTransition appear={true} in={true} timeout={750} classNames='fade'>
			<div className='container container--overlap-logo container__background-dots'>
				<img src={logo} alt='site-logo' className='logo logo--overlap'></img>

				<CSSTransition
					appear={!isSuccess}
					exit={isSuccess}
					in={!isSuccess}
					timeout={{
						appear: 1000,
						exit: 300,
					}}
					mountOnEnter={true}
					unmountOnExit
					classNames='fade-in-slide-out'>
					<ContactForm successHandler={handleSuccess} />
				</CSSTransition>

				<CSSTransition
					appear={isSuccess}
					exit={!isSuccess}
					in={isSuccess}
					timeout={300}
					mountOnEnter={true}
					classNames='slide'>
					<SuccessMessage />
				</CSSTransition>
			</div>
		</CSSTransition>
	)
}

export default Contact
