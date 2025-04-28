"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { useState } from "react";
import { faqQuestions } from "../config";

export default function FAQQuestions({ defaultValue }) {
  const [selectedQuestion, setSelectedQuestion] = useState(defaultValue);

  return (
    <Accordion.Root
      type="single"
      defaultValue="Quais informações conseguirei visualizar?"
      value={selectedQuestion}
    >
      {faqQuestions.map((question) => (
        <Question
          key={question.question}
          question={question.question}
          answer={question.answer}
          selectedQuestion={selectedQuestion}
          setSelectedQuestion={setSelectedQuestion}
        />
      ))}
    </Accordion.Root>
  );
}

function Question({ question, answer, selectedQuestion, setSelectedQuestion }) {
  function handleAccordionClick() {
    if (selectedQuestion === question) {
      setSelectedQuestion("");
      return;
    }
    setSelectedQuestion(question);
  }

  return (
    <Accordion.Item
      value={question}
      className="p-3 max-w-full data-[state=open]:bg-white rounded-lg"
    >
      <Accordion.Header
        onClick={handleAccordionClick}
        className="flex cursor-pointer"
      >
        <Accordion.Trigger className="w-full">
          <h2 className="text-left text-[#1F2937] font-bold">{question}</h2>
        </Accordion.Trigger>
        {selectedQuestion === question ? (
          <div className="relative w-[20px] h-[20px] data-[state=open]:bg-red-10">
            <Image
              src="/landing-page/minus.svg"
              fill
              alt="Sinal de fechar"
              className="object-cover object-center"
            />
          </div>
        ) : (
          <div className="relative w-[20px] h-[20px] data-[state=open]:hidden">
            <Image
              src="/landing-page/plus.svg"
              fill
              alt="Sinal de abrir"
              className="object-cover object-center"
            />
          </div>
        )}
      </Accordion.Header>
      <Accordion.Content className="mt-2 text-sm">{answer}</Accordion.Content>
    </Accordion.Item>
  );
}
