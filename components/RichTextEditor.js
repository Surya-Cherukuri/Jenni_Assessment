import { HocuspocusProvider } from '@hocuspocus/provider'
import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, {
  useState,
} from 'react'
import * as Y from 'yjs'
const colors = ['#958DF1', '#F98181', '#FBBC88', '#FAF594', '#70CFF8', '#94FADB', '#B9F18D']
const names = [
  'Cristiano Ronaldo',
  'Lionel Messi',
  'Zinadane Zidane',
  'Diego Maradona',
  'David Beckham',
  'Sergio Ramos',
  'Luka Modric'
]
const getRandomElement = list => list[Math.floor(Math.random() * list.length)]
const getRandomColor = () => getRandomElement(colors)
const getRandomName = () => getRandomElement(names)
const getInitialUser = () => {
  return JSON.parse(localStorage.getItem('currentUser')) || {
    name: getRandomName(),
    color: getRandomColor(),
  }
}
export default function RichTextEditor() {
  const ydoc = new Y.Doc()
  const [currentUser] = useState(getInitialUser)

  const provider = new HocuspocusProvider({
    url: 'ws://127.0.0.1:1234',
    name: 'example-document',
    document: ydoc
  })
 
  const editor = useEditor({
    extensions: [
      StarterKit,
      Collaboration.configure({
        document: ydoc
      }),
      CollaborationCursor.configure({
        provider,
        user: { name: currentUser.name, color: currentUser.color }
      })
    ],
    content: '<p>Hello World! 🌎️</p>',
    editorProps: {
      attributes: {
        class:
          'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none'
      }
    }
  })
 
  return <EditorContent editor={editor} />
}