import { WordFlip } from "@/components/ui/word-flip"

export default function FlipPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <WordFlip words={["Hello", "dude", "how", "are", "you?"]} />
        </div>
    )
}