export default function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-100 mask-[radial-gradient(circle_at_top,black,transparent_80%)]">
      <div className="h-full w-full bg-[linear-gradient(rgba(232,163,61,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(232,163,61,0.035)_1px,transparent_1px)] bg-size-[48px_48px]" />
    </div>
  );
}
