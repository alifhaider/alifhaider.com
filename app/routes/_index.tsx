import { useState, useRef, useEffect } from "react";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import {
  json,
  type ActionFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import {
  CommandResponse,
  Content,
  initialState,
  processCommand,
} from "~/utils/command";

export const meta: MetaFunction = () => {
  return [
    { title: "Alif" },
    { name: "description", content: "A Software Engineer" },
  ];
};

// Action function for processing commands
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const command = formData.get("command") as string;
  const output = processCommand(command);
  return json({ output });
}

// Terminal component
export default function Terminal() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const isSubmitting = navigation.state === "submitting";

  const [history, setHistory] = useState<CommandResponse[]>([initialState]);

  useEffect(() => {
    if (!actionData || !actionData.output) return;
    if (actionData.output.cmd === "clear") {
      setHistory([
        {
          cmd: "clear",
          title: "Terminal Cleared",
          contents: [{ text: "" }],
        },
      ]);
      if (outputRef.current) {
        outputRef.current.scrollTop = 0;
      }
    } else if (actionData.output.cmd === "reset") {
      setHistory([initialState]);
    } else {
      setHistory((prev) => [...prev, actionData.output]);
    }
  }, [actionData]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current?.reset();
      inputRef.current?.focus();
    }
  }, [isSubmitting]);

  const getContent = (content: Content) => {
    if ("text" in content) {
      return content.text;
    }
    return (
      <a
        href={content.link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        {content.link.text}
      </a>
    );
  };

  return (
    <div className="mx-auto flex h-screen max-w-4xl flex-col rounded-md border-4 border-gray-800 bg-black p-4 font-mono text-green-500 shadow-lg">
      <div
        ref={outputRef}
        className="mb-4 flex-grow overflow-y-auto rounded-lg border border-gray-700 bg-black p-4 text-sm  sm:text-base"
        aria-live="polite"
      >
        {history.map((line, index) => (
          <div key={index} className="mb-1">
            {index > 0 && <div className="text-white">&gt; {line.cmd}</div>}
            <div className="text-green-500"> {line.title}</div>

            {line.contents.map((content, i) => (
              <div key={i} className="ml-4">
                {getContent(content)}
              </div>
            ))}
          </div>
        ))}
      </div>
      <Form
        ref={formRef}
        method="post"
        className="flex items-center rounded-md bg-gray-900 p-2"
      >
        <label htmlFor="command" className="sr-only">
          Enter command
        </label>
        <span className="mr-2" aria-hidden="true">
          {">"}
        </span>
        <input
          ref={inputRef}
          type="text"
          id="command"
          name="command"
          className="relative flex-grow border-none bg-transparent text-sm text-white outline-none sm:text-base"
          aria-label="Enter command"
          autoComplete="off"
          disabled={isSubmitting}
        />

        <button
          type="submit"
          className="ml-2 rounded-md bg-green-500 px-4 py-1 text-sm font-bold text-black sm:text-base"
          disabled={isSubmitting}
        >
          Run
        </button>
      </Form>
    </div>
  );
}
