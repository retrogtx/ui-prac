import { Card } from '@/components/ui/card'

export const Content = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <Card
        name="Amrit's Card"
        placeholderText="Hover to reveal"
        details={`just take a moment to know that messi is the greatest of all time`
        }
       />
    </div>
  )
}