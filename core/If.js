function If({ condition, children, fallback }) {
	return <>{condition ? children : fallback}</>
}

export default If
