interface StepProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

export function Step({ number, title, children }: StepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-gray-200">{number}</div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <div className="mt-1 text-gray-600">{children}</div>
      </div>
    </div>
  );
}
