'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { useChat } from 'ai/react'

export default function UserPreferencesChat() {
  const [open, setOpen] = useState(false)
  const [userPreferences, setUserPreferences] = useState<Record<string, any>>({})

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        id: 'initial-message',
        role: 'system',
        content: `You are a friendly AI assistant helping users set their preferences for a developer platform. Ask the following questions one at a time, waiting for the user's response before moving to the next question. After each response, summarize the preference in a JSON format prefixed with 'PREFERENCES:'. Here are the questions:

1. What programming languages are you most comfortable with? (e.g., JavaScript, Python, Java, C++)
2. Which frameworks or libraries do you work with? (e.g., React, Angular, Django, Express)
3. Which development tools do you use frequently? (e.g., VS Code, Git, Docker)
4. What type of projects are you interested in? (Web Development, Mobile Apps, Data Science, Machine Learning, AI, Game Development, Blockchain, etc.)
5. What stage of development do you prefer working on? (Frontend, Backend, Full Stack, DevOps, UI/UX Design, Data Engineering, etc.)
6. What are your main career goals? (Landing a job, Freelancing, Building a product, Growing a technical blog, Contributing to open-source, etc.)
7. What specific skills or areas are you currently focused on improving? (Problem-solving (DSA), Code optimization, Cloud computing, Project management, Testing, Security, etc.)
8. What type of content would you like to see more of? (Tutorials, Project ideas, Coding challenges, Debugging tips, Industry news, Case studies)
9. Are you interested in collaborating with others on projects? (Yes/No)
10. Would you like to receive personalized project recommendations? (Yes/No)
11. How frequently do you want to receive new project suggestions or challenges? (Daily, Weekly, Monthly, Only upon request)
12. What is your dream project to work on?
13. Any specific technologies or frameworks you'd like to learn?

Start by introducing yourself and asking the first question.`
      }
    ],
    onFinish: (message) => {
      if (message.content.startsWith('PREFERENCES:')) {
        try {
          const preferences = JSON.parse(message.content.replace('PREFERENCES:', ''))
          setUserPreferences(prevPreferences => ({ ...prevPreferences, ...preferences }))
        } catch (error) {
          console.error('Failed to parse preferences:', error)
        }
      }
    },
  })

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button onClick={handleOpen}>Set User Preferences</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>User Preferences Chat</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-4 mb-4">
              {messages.slice(1).map(m => (
                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`rounded-lg px-4 py-2 max-w-[80%] ${m.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                    {m.content}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Type your response..."
              className="flex-grow"
            />
            <Button type="submit">Send</Button>
          </form>
        </DialogContent>
      </Dialog>
      {Object.keys(userPreferences).length > 0 && (
        <div className="mt-4 p-4 bg-white rounded shadow max-w-md w-full">
          <h2 className="text-xl font-bold mb-2">User Preferences:</h2>
          <pre className="whitespace-pre-wrap overflow-x-auto">
            {JSON.stringify(userPreferences, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}