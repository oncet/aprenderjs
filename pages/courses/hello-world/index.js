import { useState } from 'react'
import Header from '../../../components/header'
import CodeEditor from '../../../components/code-editor'
import Button from '../../../components/button'

export default function HelloWorld() {
  const [code, setCode] = useState(`const foo = 'bar'`)
  const [codeOutput, setCodeOutput] = useState()
  const runCode = () => {
    const result = Function(`"use strict"; ${code}`)();
    setCodeOutput(result)
  }
  return (
    <>
      <Header>Hello world!</Header>
      <p>Some description...</p>
      <CodeEditor
        height={'80px'}
        onChange={(newCode) => setCode(newCode)}
        value={code}
      />
      <Button className="mt-2" onClick={runCode}>Probar código</Button>
      <output className="block mt-4 ml-2">
        <pre>
          {codeOutput ? (
            codeOutput
          ) : typeof codeOutput}
        </pre>
      </output>
    </>
  )
}
