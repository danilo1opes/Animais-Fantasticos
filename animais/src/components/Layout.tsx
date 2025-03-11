export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[1fr_120px_minmax(300px,_800px)_1fr] bg-[#faf6ed] text-[#222] min-h-screen">
      {children}
    </div>
  );
}
