import { useAddNewDreamMutation, useGetDreamByIdQuery, useUpdateDreamMutation } from "@/entities"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

const emptyData = {
	title: '',
	description: '',
	year: '',
	withWhom: '',
	category: ''
}

function useManageDream() {
	const [formData, setFormData] = useState(() => emptyData)
	const [emptyInputs, setEmptyInputs] = useState([])
	const [addNewDream, { isLoading: isAddLoading, isSuccess: isAddSuccess, error: addError }] = useAddNewDreamMutation()
	const [updateDream, { isLoading: isUpdateLoading, isSuccess: isUpdateSuccess, error: updateError }] = useUpdateDreamMutation()
	const { id } = useParams()
	const { data: initialData } = useGetDreamByIdQuery(id, { skip: !id })

	const isLoading = id ? isUpdateLoading : isAddLoading
	const isSuccess = id ? isUpdateSuccess : isAddSuccess
	const error = id ? updateError : addError

	useEffect(() => {
		if (initialData && Object.keys(initialData).length > 1) {
			setFormData(initialData)
		}
	}, [initialData])

	const handleChange = (e) => {
		const { name, value } = e.target

		setFormData(prev => ({
			...prev,
			[name]: value,
		}))

		if (value.trim()) {
			setEmptyInputs(prev => prev.filter(field => field !== name))
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const empty = Object.entries(formData).filter(([_, value]) => !value?.toString().trim()).map(([key]) => key)

		if (empty.length > 0) {
			setEmptyInputs(empty)
			return
		}

		if (id) {
			updateDream({ id, data: formData })
		} else {
			addNewDream(formData)
			setFormData(() => emptyData)
		}
	}
	return {
		formData,
		handleChange,
		handleSubmit,
		isLoading,
		error,
		isSuccess,
		emptyInputs
	}
}

export default useManageDream