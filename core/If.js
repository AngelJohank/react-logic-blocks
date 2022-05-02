function If({ condition, children, fallback }) {
	return <>{condition ? children : fallback}</>
}

export { If }
