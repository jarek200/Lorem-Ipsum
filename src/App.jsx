import lorem from './data'
import { useState } from 'react'
const App = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    let amount = parseInt(count)
    if (count <= 0) amount = 1
    if (count > 8) amount = 8
    setText(lorem.slice(0, amount))
  }

  return (
    <section className='section-center'>
      <h4>Tired of boring lorem ipsum</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='count'>Paragraphs:</label>
        <input type='number' name='count' id='count' value={count} onChange={e => setCount(e.target.value)} />
        <button type='submit' className='btn'>
          Generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}
export default App
