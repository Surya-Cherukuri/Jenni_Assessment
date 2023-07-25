'use client';
import dynamic from 'next/dynamic'

const RichTextEditor = dynamic(() => import('../components/RichTextEditor'), {
  ssr: false
})
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <RichTextEditor />
      </div>
    </main>
  )
}
