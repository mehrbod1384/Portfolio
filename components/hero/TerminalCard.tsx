import TypingText from "./TypingText";

export default function TerminalCard() {
  return (
    <div className="absolute -bottom-8 sm:-right-8 w-72 rounded-lg overflow-hiddenrounded-xl border border-(--line) bg-(--surface-2) shadow-2xl">
      <div className="flex gap-2 border-b border-(--line) p-4">
        <span className="h-3 w-3 rounded-full bg-red-500" />

        <span className="h-3 w-3 rounded-full bg-yellow-400" />

        <span className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      <div className="space-y-2 p-5 font-mono text-sm">
        <p>
          <span className="text-(--teal)">$</span> whoami
        </p>

        <TypingText />
      </div>
    </div>
  );
}
