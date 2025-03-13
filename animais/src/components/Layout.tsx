export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#faf6ed] text-[#222]">
      {/* mobile */}
      <div className="flex flex-col md:grid md:grid-cols-[1fr_120px_minmax(300px,_800px)_1fr]">
        {children}
      </div>
    </div>
  );
}
