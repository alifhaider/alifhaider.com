import { useState, useRef, useEffect } from "react";
import {
  useSearchParams,
  Form,
  useActionData,
  useNavigation,
} from "@remix-run/react";
import { json, ActionFunction } from "@remix-run/node";
import { processCommand } from "~/utils/command";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const command = formData.get("command") as string;
  const output = processCommand(command);
  return json({ output });
};

export default function Terminal() {
  const [searchParams] = useSearchParams();
  const actionData = useActionData<{ output: string[] }>();
  const navigation = useNavigation();
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const isSubmitting = navigation.state === "submitting";

  const [history, setHistory] = useState<string[]>(() => {
    const savedHistory = searchParams.get("history");
    return savedHistory
      ? JSON.parse(savedHistory)
      : ['Hi, I am Alif Haider! Type "help" for a list of commands.'];
  });

  useEffect(() => {
    if (actionData?.output) {
      setHistory((prev) => [...prev, ...actionData.output]);
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

  return (
    <div className="bg-black text-green-500 font-mono min-h-screen p-4">
      <div
        ref={outputRef}
        className="mb-4 h-[calc(100vh-8rem)] overflow-y-auto text-sm sm:text-base"
        aria-live="polite"
      >
        {history.map((line, index) => (
          <div key={index} className="mb-1">
            {line}
          </div>
        ))}
      </div>
      <Form ref={formRef} method="post" className="flex items-center">
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
          className="bg-transparent flex-grow border-none text-sm outline-none sm:text-base"
          aria-label="Enter command"
          autoComplete="off"
          disabled={isSubmitting}
        />
      </Form>
    </div>
  );
}
