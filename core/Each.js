// <Each items={array} defaultIndex={true} component={imported_component} aditional={{ props }} />
function Each({ items, defaultIndex, Component, additional }) {
	if (defaultIndex)
		return items.map((item, i) => (<Component key={i} {...item} {...additional} />))
	else
		return items.map((item) => (<Component key={item.id} {...item} {...additional} />))
}

export default Each
