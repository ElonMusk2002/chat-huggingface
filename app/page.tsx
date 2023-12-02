'use client'

import { useChat } from 'ai/react'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white">
    {/* Header */}
    <div className="flex items-center px-4 py-3 bg-opacity-80 backdrop-blur-lg">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white truncate flex items-center">
          Chat Hugging Face UI
        </h2>
        <a
          href="https://github.com/ElonMusk2002/chat-huggingface"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 md:w-10 md:h-10 ml-2 fill-current text-dark-400 hover:text-gray-500"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 0C4.475 0 0 4.475 0 10c0 4.411 2.865 8.141 6.839 9.458.5.092.682-.213.682-.474 0-.233-.009-.853-.014-1.674-2.782.604-3.37-1.338-3.37-1.338-.455-1.177-1.11-1.492-1.11-1.492-.908-.619.07-.607.07-.607 1.004.07 1.531 1.031 1.531 1.031.892 1.525 2.34 1.084 2.912.829.091-.646.349-1.085.634-1.334-2.22-.251-4.555-1.107-4.555-4.936 0-1.09.39-1.984 1.032-2.682-.104-.252-.448-1.269.098-2.642 0 0 .84-.268 2.75 1.024a9.527 9.527 0 012.475-.333 9.568 9.568 0 012.475.333c1.91-1.292 2.748-1.024 2.748-1.024.546 1.373.202 2.39.098 2.641.642.698 1.032 1.592 1.032 2.682 0 3.837-2.337 4.683-4.563 4.928.358.309.678.917.678 1.847 0 1.334-.012 2.408-.012 2.727 0 .263.18.567.688.473C17.138 18.141 20 14.412 20 10c0-5.525-4.475-10-10-10z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>

    {/* Chat Messages */}
    <div className="flex-1 p-4 md:p-8 overflow-y-auto">
      <div className="flex flex-col space-y-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`p-4 rounded-lg ${
                m.role === 'user'
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-right w-40 lg:w-2/5'
                  : 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 text-left w-40 lg:w-2/5'
              }`}
            >
              <div className="rounded-lg">
                <span className="font-medium">{m.role === 'user' ? 'You' : 'AI'}</span>: {m.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* User Input */}
    <form onSubmit={handleSubmit} className="flex items-center px-4 py-3 bg-gray-800">
      <input
        className="flex-1 px-4 py-2 text-white bg-gray-700 bg-opacity-60 border rounded-full placeholder-white::placeholder focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
        type="text"
        placeholder="Say something..."
        value={input}
        onChange={handleInputChange}
      />

      <button
        type="submit"
        className="ml-4 p-2 text-blue-400 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </button>
        {messages.length > 0 && (
          <a
            href="https://github.com/ElonMusk2002/chat-huggingface"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white ml-4 hover:text-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 0C4.475 0 0 4.475 0 10c0 4.411 2.865 8.141 6.839 9.458.5.092.682-.213.682-.474 0-.233-.009-.853-.014-1.674-2.782.604-3.37-1.338-3.37-1.338-.455-1.177-1.11-1.492-1.11-1.492-.908-.619.07-.607.07-.607 1.004.07 1.531 1.031 1.531 1.031.892 1.525 2.34 1.084 2.912.829.091-.646.349-1.085.634-1.334-2.22-.251-4.555-1.107-4.555-4.936 0-1.09.39-1.984 1.032-2.682-.104-.252-.448-1.269.098-2.642 0 0 .84-.268 2.75 1.024a9.527 9.527 0 012.475-.333 9.568 9.568 0 012.475.333c1.91-1.292 2.748-1.024 2.748-1.024.546 1.373.202 2.39.098 2.641.642.698 1.032 1.592 1.032 2.682 0 3.837-2.337 4.683-4.563 4.928.358.309.678.917.678 1.847 0 1.334-.012 2.408-.012 2.727 0 .263.18.567.688.473C17.138 18.141 20 14.412 20 10c0-5.525-4.475-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        )}
      </form>
    </div>
  )
}
