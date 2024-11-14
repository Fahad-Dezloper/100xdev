"use client"

import { useState, useEffect, useRef } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
  languages: z.array(z.string()).optional(),
  frameworks: z.array(z.string()).optional(),
  tools: z.array(z.string()).optional(),
  projectType: z.array(z.string()).optional(),
  developmentStage: z.string().optional(),
  careerGoals: z.array(z.string()).optional(),
  skillsImprovement: z.array(z.string()).optional(),
  contentType: z.array(z.string()).optional(),
  collaboration: z.boolean().optional(),
  personalizedRecommendations: z.boolean().optional(),
  suggestionFrequency: z.string().optional(),
  dreamProject: z.string().optional(),
  technologiesToLearn: z.array(z.string()).optional(),
})

const suggestions = {
  languages: ["JavaScript", "Python", "Java", "C++", "TypeScript", "Ruby", "Go", "Rust", "Swift", "Kotlin"],
  frameworks: ["React", "Angular", "Vue.js", "Django", "Flask", "Express", "Spring", "Laravel", "ASP.NET", "Ruby on Rails"],
  tools: ["VS Code", "Git", "Docker", "Kubernetes", "Jenkins", "Jira", "Slack", "Postman", "Webpack", "npm"],
  projectType: ["Web Development", "Mobile Apps", "Data Science", "Machine Learning", "AI", "Game Development", "Blockchain"],
  careerGoals: ["Landing a job", "Freelancing", "Building a product", "Growing a technical blog", "Contributing to open-source"],
  skillsImprovement: ["Problem-solving (DSA)", "Code optimization", "Cloud computing", "Project management", "Testing", "Security"],
  contentType: ["Tutorials", "Project ideas", "Coding challenges", "Debugging tips", "Industry news", "Case studies"],
  technologiesToLearn: ["React Native", "GraphQL", "TensorFlow", "Kubernetes", "Blockchain", "AR/VR", "Serverless", "PWA", "WebAssembly", "Microservices"],
}

export default function Cli() {
  const [open, setOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [terminalOutput, setTerminalOutput] = useState<string[]>([])
  const [inputValue, setInputValue] = useState("")
  const [currentInputs, setCurrentInputs] = useState<string[]>([])
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      languages: [],
      frameworks: [],
      tools: [],
      projectType: [],
      developmentStage: "",
      careerGoals: [],
      skillsImprovement: [],
      contentType: [],
      collaboration: false,
      personalizedRecommendations: false,
      suggestionFrequency: "",
      dreamProject: "",
      technologiesToLearn: [],
    },
  })

  const steps = [
    { prompt: "Enter your preferred programming languages (press Enter after each, Ctrl+C when done):", field: "languages", multiInput: true },
    { prompt: "Enter your preferred frameworks and libraries:", field: "frameworks", multiInput: true },
    { prompt: "Enter your frequently used development tools:", field: "tools", multiInput: true },
    { prompt: "Select project types:", field: "projectType", multiInput: true },
    { prompt: "Select preferred development stage (enter number):\n1. Frontend\n2. Backend\n3. Full Stack\n4. DevOps\n5. UI/UX Design\n6. Data Engineering", field: "developmentStage" },
    { prompt: "Select career goals:", field: "careerGoals", multiInput: true },
    { prompt: "Select skills to improve:", field: "skillsImprovement", multiInput: true },
    { prompt: "Select preferred content types:", field: "contentType", multiInput: true },
    { prompt: "Are you interested in collaborating with others? (y/n)", field: "collaboration" },
    { prompt: "Would you like to receive personalized project recommendations? (y/n)", field: "personalizedRecommendations" },
    { prompt: "Select suggestion frequency (enter number):\n1. Daily\n2. Weekly\n3. Monthly\n4. Only upon request", field: "suggestionFrequency" },
    { prompt: "Describe your dream project:", field: "dreamProject" },
    { prompt: "List technologies or frameworks you'd like to learn:", field: "technologiesToLearn", multiInput: true },
  ]

  const handleSubmit = (input: string) => {
    const currentField = steps[currentStep].field
    let processedInput = input.trim()

    if (processedInput.toLowerCase() === 'skip') {
      setTerminalOutput(prev => [...prev, `$ ${input}`, `Skipping ${currentField}`])
      setCurrentStep(prev => prev + 1)
      setCurrentInputs([])
      return
    }

    if (steps[currentStep].multiInput) {
      if (processedInput.toLowerCase() === 'ctrl+c') {
        form.setValue(currentField as any, currentInputs)
        setTerminalOutput(prev => [...prev, `$ ${input}`, `Setting ${currentField}: ${currentInputs.join(", ")}`])
        setCurrentStep(prev => prev + 1)
        setCurrentInputs([])
      } else {
        setCurrentInputs(prev => [...prev, processedInput])
        setTerminalOutput(prev => [...prev, `$ ${input}`])
      }
    } else {
      if (currentField === "developmentStage") {
        processedInput = ["Frontend", "Backend", "Full Stack", "DevOps", "UI/UX Design", "Data Engineering"][parseInt(input) - 1]
      } else if (currentField === "suggestionFrequency") {
        processedInput = ["Daily", "Weekly", "Monthly", "Only upon request"][parseInt(input) - 1]
      } else if (["collaboration", "personalizedRecommendations"].includes(currentField)) {
        processedInput = input.toLowerCase() === "y"
      }

      form.setValue(currentField as any, processedInput)
      setTerminalOutput(prev => [...prev, `$ ${input}`, `Setting ${currentField}: ${processedInput}`])

      if (currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1)
      } else {
        setTerminalOutput(prev => [...prev, "Preferences saved successfully!", "Type 'exit' to close the terminal or 'review' to see your answers."])
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const input = e.currentTarget.value
      if (input.toLowerCase() === "exit") {
        setOpen(false)
        return
      }
      if (input.toLowerCase() === "review" && currentStep === steps.length) {
        const answers = form.getValues()
        const review = Object.entries(answers).map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(", ") : value}`).join("\n")
        setTerminalOutput(prev => [...prev, "Your preferences:", review, "Type 'exit' to close the terminal."])
        setInputValue("")
        return
      }
      handleSubmit(input)
      setInputValue("")
    } else if (e.key === "c" && e.ctrlKey) {
      if (steps[currentStep].multiInput) {
        handleSubmit("ctrl+c")
        setInputValue("")
      }
    }
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [terminalOutput, currentInputs])

  useEffect(() => {
    if (open) {
      setTerminalOutput([
        "Welcome to the Developer Preferences Terminal!",
        `You have ${steps.length} questions to answer.`,
        "Type 'skip' to skip a question.",
        "For multiple input questions, press Enter after each input and Ctrl+C when done.",
        "Let's begin!",
        steps[0].prompt
      ])
      setCurrentStep(0)
      setCurrentInputs([])
      form.reset()
    }
  }, [open])

  useEffect(() => {
    if (steps[currentStep].multiInput) {
      const currentSuggestions = suggestions[steps[currentStep].field as keyof typeof suggestions] || []
      setFilteredSuggestions(
        currentSuggestions.filter(suggestion => 
          suggestion.toLowerCase().includes(inputValue.toLowerCase()) &&
          !currentInputs.includes(suggestion)
        ).slice(0, 5)
      )
    } else {
      setFilteredSuggestions([])
    }
  }, [inputValue, currentStep, currentInputs])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Set Developer Preferences</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] sm:max-h-[80vh] bg-gray-900 text-green-500 border-green-500 font-mono">
        <DialogHeader>
          <DialogTitle className="text-green-500">Developer Preferences Terminal</DialogTitle>
          <DialogDescription className="text-green-400">
            Set your preferences using command-line interface. Type your answers and press Enter.
          </DialogDescription>
        </DialogHeader>
        <Progress value={(currentStep / steps.length) * 100} className="w-full h-2 bg-gray-700" />
        <p className="text-xs text-green-400 mb-2">Progress: {currentStep}/{steps.length} questions answered</p>
        <ScrollArea className="h-[40vh] w-full rounded-md border border-green-500 p-4 bg-black" ref={scrollAreaRef}>
          <div className="space-y-2">
            {terminalOutput.map((line, index) => (
              <p key={index} className={line.startsWith("$") ? "text-yellow-500" : ""}>{line}</p>
            ))}
            {currentStep < steps.length && (
              <p className="text-green-500 mt-2">{steps[currentStep].prompt}</p>
            )}
            {currentInputs.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {currentInputs.map((input, index) => (
                  <Badge key={index} variant="secondary">{input}</Badge>
                ))}
              </div>
            )}
          </div>
        </ScrollArea>
        <div className="relative">
          <div className="flex items-center bg-black rounded-md border border-green-500 p-2">
            <span className="text-green-500 mr-2">$</span>
            <input
              type="text"
              className="flex-1 bg-transparent text-green-500 outline-none"
              onKeyDown={handleKeyDown}
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              autoFocus
              ref={inputRef}
            />
          </div>
          {/* {filteredSuggestions.length > 0 && (
            <div className="absolute bottom-full left-0 w-full mb-1 bg-gray-800 border border-green-500 rounded-md overflow-hidden">
              {filteredSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="px-2 py-1 hover:bg-gray-700 cursor-pointer"
                  onClick={() => {
                    setInputValue(suggestion)
                    inputRef.current?.focus()
                  }}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )} */}
        </div>
      </DialogContent>
    </Dialog>
  )
}