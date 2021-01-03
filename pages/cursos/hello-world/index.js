import { useState } from 'react'
import Head from 'next/head'
import CodeEditor from '../../../components/code-editor'
import Button from '../../../components/button'

export default function HelloWorld() {
  const [codeExecuted, setCodeExecuted] = useState(false)
  const [code, setCode] = useState(`const foo = 'bar'; return foo;`)
  const [codeOutput, setCodeOutput] = useState()
  const handleOnClick = () => {
    setCodeExecuted(true)
    const result = Function(`"use strict"; ${code}`)(); // TODO Move out
    setCodeOutput(result)
  }
  return (
    <>
      <Head>
        <title>Hello world!</title>
      </Head>
      <h1>Hello world!</h1>
      <p>Some description...</p>
      <CodeEditor
        language='javascript'
        height='80px'
        onChange={(newCode) => setCode(newCode)}
        value={code}
      />
      <Button onClick={handleOnClick}>Probar código</Button>
      {codeExecuted && (
        <>
          <h2>Resultados</h2>
          <output className="block mt-4 ml-2">
            <pre>
              {codeOutput ? codeOutput : typeof codeOutput}
            </pre>
          </output>
        </>
      )}
    </>
  )
}
