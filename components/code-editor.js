import dynamic from 'next/dynamic'

const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false })

export default function CodeEditor(props) {
  return (
    <div className="mb-2">
      <MonacoEditor
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          lineNumbers: false,
        }}
        {...props}
      />
    </div>
  )
}