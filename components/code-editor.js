import dynamic from "next/dynamic";
import Spinner from "../components/spinner";

const MonacoEditor = dynamic(import("react-monaco-editor"), {
  ssr: false,
  loading: Spinner,
});

export default function CodeEditor(props) {
  return (
    <div className="mb-2">
      <MonacoEditor
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          lineNumbers: false,
          fontSize: 18,
          contextmenu: false,
          padding: { top: 10 },
          renderLineHighlight: "none",
        }}
        {...props}
      />
    </div>
  );
}
