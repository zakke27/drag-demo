import React, { useState } from 'react'
import './TaskItem.scss'

interface Props {
  id: string
  title: string
  tasks: any
  handleDragStart: (id: string) => void
  setCurrentTaskId: (id: any) => void
  setTasks: (tasks: any) => void
}

const TaskItem: React.FC<Props> = ({
  id,
  title,
  handleDragStart,
  setCurrentTaskId,
  tasks,
  setTasks
}) => {
  const [isCanDelete, setIsCanDelete] = useState(false)

  // 删除任务 by id
  const deleteTask = () => {
    const temp = tasks.filter((task: any) => {
      return task.id !== id
    })
    setTasks(temp)
  }
  return (
    <div className="TaskItem">
      <main
        draggable="true"
        onDragStart={() => handleDragStart(id)}
        onDragEnd={() => {
          setCurrentTaskId(null)
        }}
        onMouseOver={() => {
          setIsCanDelete(true)
        }}
        onMouseLeave={() => {
          setIsCanDelete(false)
        }}
      >
        {title}
        <button
          className="delete-btn"
          style={{ display: isCanDelete ? 'block' : 'none' }}
          onClick={deleteTask}
        >
          x
        </button>
      </main>
    </div>
  )
}

export default TaskItem
