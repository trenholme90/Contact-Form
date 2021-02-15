const formikConfig = {
	initialValues: {
		name: '',
		email: '',
		messgae: '',
	},
	validate,
	onSubmit: (values) => {
		// POST request form data to backend controller
		console.log(JSON.stringify(values))
	},
}

function validate(values) {
	const errors = {}
	if (!values.name) {
		errors.name = 'Required'
	} else if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i.test(values.name)) {
		errors.name = 'Invalid name'
	}

	if (!values.email) {
		errors.email = 'Required'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address'
	} else if (/test@test+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address'
	}

	if (!values.message) {
		errors.message = 'Required'
	}
	return errors
}

export { formikConfig }
