import React, { useRef, useState, useEffect } from 'react'
import './DragSection.scss'
import { v4 as uuidv4 } from 'uuid'

interface Props {
  status: string
  handleDrop: (status: string) => void
  setTasks: (tasks: any) => void
}

const DragSection: React.FC<Props> = ({ status, handleDrop, setTasks, children }) => {
  const [isInput, setIsInput] = useState(false)
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [isDragIn, setIsDragIn] = useState(false)

  const inputRef = useRef<any>(null)

  useEffect(() => {
    inputRef.current && inputRef.current.focus()
  })

  // 输入框失焦后
  const handleBlur = () => {
    setIsInput(false)
    // 判断是否为空
    if (!newTaskTitle || newTaskTitle.trim() === '') {
      return
    } else {
      const newTask = {
        id: uuidv4(),
        title: newTaskTitle,
        status: 'PREPARE'
      }
      // 插入新任务
      setTasks((tasks: any) => [...tasks, newTask])
      setIsInput(false)
    }

    setNewTaskTitle('')
  }

  const handleDragEnter = () => {
    setIsDragIn(true)
  }
  const handleDragLeave = () => {
    setIsDragIn(false)
  }

  return (
    <div className="DragSection">
      <header className={status}>{status}</header>
      <main
        className={`${status}` + (isDragIn ? ' active' : '')}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={event => event.preventDefault()} // 不阻止默认行为onDrop就不会生效
        onDrop={() => {
          handleDrop(status)
          setIsDragIn(false)
        }}
      >
        {children}

        {isInput && (
          <input
            type="text"
            ref={inputRef}
            onBlur={handleBlur}
            onChange={e => setNewTaskTitle(e.target.value)}
          />
        )}
        {status === 'PREPARE' && (
          <button className="btn" onClick={() => setIsInput(true)}>
            +
          </button>
        )}
      </main>
    </div>
  )
}

export default DragSection
