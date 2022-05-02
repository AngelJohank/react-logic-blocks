# React Logic Blocks

Some useful React components that emulate common logical operations that you might use during your development to handle conditional rendering, lists and forms.

------------

### If block
It is a rendering block that receives a condition and displays the components according to the result. (You can ignore the fallback if you don't want to display a component in case the condition returns false).

```jsx

import { If } from 'react-logic-blocks/blocks'

function App() {
  return(
    <If contidion={/*Condition*/} fallback={/*Children if false*/} >
       {/*Children if true*/}
    </If>
   )
}

export default App
```
------------

### TextInput block
It is a text input that automatically handles reactivity with object and string States

```jsx
import { useState } from 'react'
import { TextInput } from 'react-logic-blocks/blocks'

function App() {
  const [text, setText] = useState('')
  const [form, setForm] = useState({ name: '' })

  return(
    {/* If you have a string as a State */}
      <TextInput bind={[text, setText]} />
    {/* If you have an object as a State, data={["propname", object.propname]} */}
      <TextInput data={["name", form.name]} bind={[form, setForm]} />
    {/* If you want to change to a textarea field */}
      <TextInput area={true} />
    {/* If you want to add additional attributes */}
      <TextInput otherAttrs={{id: "my-input", placeholder: "hello world"}} />
   )
}

export default App
```

------------

### Each block
It is a component made for rendering items inside an array

**Item.js**
```jsx

function Item({ name }) {
  return(
    <span>{ name }</span>
   )
}

export default App
```

**App.js**
```jsx
import { useState } from 'react'
import { Each } from 'react-logic-blocks/blocks'
import { Item } from './components/Item'

function App() {
  const [array, setArray] = useState([{name: 'pablo'}, {name: 'ramirez'}, {name: 'fer'}])

  return(
    {/* Default Index uses the item index as a key, if defaultIndex is set to false, the component will search for an id property on each item of the array */}
      <Each items={array} defaultIndex={true} component={Item} additional={{ /*Other props*/ }} />
   )
}

export default App
```

**Maybe there will me more components in a future**
