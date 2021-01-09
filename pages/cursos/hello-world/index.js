import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import CodeEditor from "../../../components/code-editor";
import Button from "../../../components/button";
import Spinner from "../../../components/spinner";

export default function HelloWorld() {
  const [isCodeBeingExecuted, setIsCodeBeingExecuted] = useState(false);
  const [codeExecuted, setCodeExecuted] = useState(false);
  const [code, setCode] = useState(`const foo = 'bar'; return foo;`);
  const [codeOutput, setCodeOutput] = useState();
  const handleOnClick = () => {
    setIsCodeBeingExecuted(true);
    setTimeout(() => {
      setCodeExecuted(true);
      setCodeOutput(undefined);
      try {
        const result = Function(`"use strict"; ${code}`)(); // TODO Move out
        setIsCodeBeingExecuted(false);
        setCodeOutput(result);
      } catch (error) {
        setIsCodeBeingExecuted(false);
        setCodeOutput(`${error.name} ${error.message}`);
      }
    }, 350);
  };
  return (
    <>
      <Head>
        <title>Hello world!</title>
      </Head>
      <h1>Hello world!</h1>
      <p>Some description...</p>
      <CodeEditor
        language="javascript"
        height="80px"
        onChange={(newCode) => setCode(newCode)}
        value={code}
      />
      <div className="mb-2">
        <Button className="inline-block" onClick={handleOnClick}>
          Probar código
        </Button>
        {isCodeBeingExecuted && (
          <motion.div
            initial="pageInitial"
            animate="pageAnimate"
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
            }}
            className="ml-2 inline-block "
          >
            <Spinner />
          </motion.div>
        )}
      </div>
      {codeExecuted && (
        <motion.div
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
          key={!!codeOutput}
        >
          <h2>Resultados</h2>
          <output className="block mt-4 ml-2">
            <pre>{codeOutput ? codeOutput : typeof codeOutput}</pre>
          </output>
        </motion.div>
      )}
    </>
  );
}
