import { useState } from "react";

function ImageSearch ({onSubmit}) {
    const [term, setTerm] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(term)
    }
    const handleChange = (e) => {
        setTerm(e.target.value)
    }
  return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
            <input value={term} onChange={handleChange} />
        </form>
    </div>
    </>
  );
}

export default ImageSearch ;