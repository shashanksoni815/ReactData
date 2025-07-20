import { useEffect, useState } from 'react'
import * as webllm from "@mlc-ai/web-llm";
import './app.scss';

function App() {
  const [messages, setMessages] = useState([
    // {
    // role: "user",
    // content: "Hello!"
    // },
    {
    role: "system",
    content: "Hello, how can I help you?"
    },
    // {
    // role: "user",
    // content: "Hello, how are you?"
    // },
    // {
    // role: "tool",
    // content: "I am fine, thank you!"
    // },
    // {
    // role: "user",
    // content: "What is your name?"
    // },
    // {
    // role: "tool",
    // content: "My name is WebLLM cereated by Shashank."
    // },
  ]);
  const [input, setInput] = useState("")
  const [engine, setEngine] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const selectedModel = "Llama-3.1-8B-Instruct-q4f32_1-MLC";

    webllm.CreateMLCEngine(
      selectedModel,
      {
        initProgressCallback: (initProgress) => {
          console.log("initProgress", initProgress)
        }
      }
    ).then(engine => {
      setEngine(engine)
    })
  }, [])

  async function sendMessageToLlm() {
    const tempMessage = [...messages]
    tempMessage.push({
      role: "user",
      content: input
    })

    setMessages(tempMessage)
    setInput('')

    const reply = await engine.chat.completion.create({
      messages: tempMessage,
    });

    const text = reply.choices[0].message.content

    tempMessage.push({
      role: "tool",
      content: text
    })

    console.log("reply", reply)
  }

  return (
    <main>
      <section>
        <div className="conversation-area">

          <div className="messages">
            {
              messages.filter(message => message.role !== "system").map((message, index) => {
                return (
                  <div className={`message ${message.role}`} key={index}>
                    {message.content}
                  </div>
                )
              })
            }
          </div>

          <div className="input-area">
            <input
              onChange={(e) => {
                setInput(e.target.value)
              }}
              value={input}
              onKeyDown={(e) => {
                if(e.key === "Enter") {
                  sendMessageToLlm()
                }
              }}
            type="text" placeholder="Message LLM"/>
            <button
              onClick={() => {
                sendMessageToLlm()
              }}
              className='send-button'
            >send</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
