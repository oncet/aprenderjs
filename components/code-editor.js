import dynamic from 'next/dynamic'

const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false })

export default function CodeEditor(props) {
  return (
    <MonacoEditor
      language='javascript'
      {...props}
    />
  )
}