import { GoogleGenerativeAI } from '@google/generative-ai'
import { GoogleGenerativeAIStream, StreamingTextResponse, Message } from 'ai'

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '')

export const runtime = 'edge'

export async function POST(req: Request) {
  const { messages } = await req.json()

  const geminiMessages = messages
    .filter((message: Message) => message.role !== 'system')
    .map((message: Message) => ({
      role: message.role === 'user' ? 'user' : 'model',
      parts: [{ text: message.content }],
    }))

  const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

  const chat = model.startChat({
    history: geminiMessages.slice(0, -1),
    generationConfig: {
      maxOutputTokens: 1000,
    },
  })

  const result = await chat.sendMessageStream([
    { text: geminiMessages[geminiMessages.length - 1].parts[0].text },
  ])

  const stream = GoogleGenerativeAIStream(result)

  return new StreamingTextResponse(stream)
}