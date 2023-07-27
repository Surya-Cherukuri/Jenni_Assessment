import { TiptapCollabProvider } from '@hocuspocus/provider'
import CharacterCount from '@tiptap/extension-character-count'
import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
import Highlight from '@tiptap/extension-highlight'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, {
  useCallback, useEffect,
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
  'Luka Modric',
  'Iker Casillas',
  'Toni Kroos',
  'Kylian Mbappe',
  'Neymar',
  'Karim Benzema',
  'Erling Haaland'
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
const ydoc = new Y.Doc()
const websocketProvider = new TiptapCollabProvider({
  appId: 'EOK0LJK4',
  name: 'Jenni',
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTA0OTAxNjYsIm5iZiI6MTY5MDQ5MDE2NiwiZXhwIjoxNjkwNTc2NTY2LCJpc3MiOiJodHRwczovL2NvbGxhYi50aXB0YXAuZGV2IiwiYXVkIjoiaGVsbG9Ac293bWl0aC5kZXYifQ.Ex0bxtFuj4laGd0KfrjlDnagsUJdVjX6MpICCsGlpnk',
  document: ydoc,
})
export default function RichTextEditor() {
  const [status, setStatus] = useState('connecting')
  const [currentUser, setCurrentUser] = useState(getInitialUser)

 
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      Highlight,
      TaskList,
      TaskItem,
      CharacterCount.configure({
        limit: 10000,
      }),
      Collaboration.configure({
        document: ydoc,
      }),
      CollaborationCursor.configure({
        provider: websocketProvider,
      }),
    ],
  })

  useEffect(() => {
    // Update status changes
    websocketProvider.on('status', event => {
      setStatus(event.status)
    })
  }, [])

    // Save current user to localStorage and emit to editor
    useEffect(() => {
      if (editor && currentUser) {
        localStorage.setItem('currentUser', JSON.stringify(currentUser))
        editor.chain().focus().updateUser(currentUser).run()
      }
    }, [editor, currentUser])

  const setName = useCallback(() => {
    const name = (window.prompt('Name') || '').trim().substring(0, 32)

    if (name) {
      return setCurrentUser({ ...currentUser, name })
    }
  }, [currentUser])
 
  return <EditorContent editor={editor} />
}
