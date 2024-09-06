import React from 'react'

interface HolderProps {
  borderColor: string;
  children: React.ReactNode;
}

export default function Holder({ borderColor, children }: HolderProps) {
  return (
    <main className={`inline-flex px-3 py-1 border-[1.2px] items-center rounded-full text-sm`} style={{ borderColor }}>
      {children}
    </main>
  )
}
