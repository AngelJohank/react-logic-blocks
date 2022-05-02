// {["propname", state.propname]} + {[state, setState]} area={boolean} otherAttrs={{ id: "example" }}
function TextInput({ data, bind, area, otherAttrs }) {
	const [state, setState] = bind

	const handleChange = (e) => {
		if (is_text) {
			// Is a pure text state
			setState(e.target.value)
		} else {
			// Is inside an object
			setState({
				...state,
				[e.target.name]: e.target.value,
			})
		}
	}

	// Is text or an object ?
	const is_text = !data ? true : false
	const name = is_text ? null : data[0]
	const value = is_text ? state : data[1]

	// Input attrs
	const attr = { name, value, ...otherAttrs, onChange: handleChange }
	return area ? <textarea {...attr} /> : <input type="text" {...attr} />
}

export default TextInput
