interface StepProps {
  number: number
  title: string
  children: React.ReactNode
}

export function Step({ number, title, children }: StepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-none w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
        {number}
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <div className="mt-1 text-gray-600">{children}</div>
      </div>
    </div>
  )
} 