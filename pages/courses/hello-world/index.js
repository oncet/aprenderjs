import Header from '../../../components/header'
import CodeEditor from '../../../components/code-editor'

export default function HelloWorld() {
  return (
    <>
      <Header>Hello world!</Header>
      <p>Some description...</p>
      <CodeEditor
        height={'600px'}
        onChange={console.log}
        value="const foo = 'bar'"
      />
    </>
  )
}
