export function Reveal({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={className} style={delay ? {animationDelay: `${delay}ms`} : undefined}>
      {children}
    </div>
  );
}
