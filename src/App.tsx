import React, { useState } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

import Landing from './components/Landing/Landing'
import DragSection from './components/DragSection/DragSection'
import TaskItem from './components/TaskItem/TaskItem'

import { STATUS_CODE, taskList } from './utils/data'

const App: React.FC = () => {
  const [tasks, setTasks] = useState(taskList)
  const [currentTaskId, setCurrentTaskId] = useState<any>(null)

  // 记录被拖拽任务项的id
  const handleDragStart = (id: string) => {
    setCurrentTaskId(id)
  }

  // 拖放成功执行
  const handleDrop = (status: string) => {
    let task: any = tasks.find(task => {
      return task.id === currentTaskId
    })

    if (task.status !== status) {
      task.status = status
      setTasks(tasks)
    }
    // 清除当前被拖拽任务项任务id
    setCurrentTaskId(null)
  }

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/main">
          {
            // 取到三种状态分类
            Object.keys(STATUS_CODE).map(status => (
              <DragSection
                key={status}
                status={status}
                handleDrop={handleDrop}
                setTasks={setTasks}
              >
                {tasks
                  .filter(task => task.status === status) // 过滤掉其他分类，只获取与自己匹配的，
                  .map(task => (
                    <TaskItem
                      key={task.id}
                      id={task.id}
                      title={task.title}
                      handleDragStart={handleDragStart}
                      setCurrentTaskId={setCurrentTaskId}
                      tasks={tasks}
                      setTasks={setTasks}
                    />
                  ))}
              </DragSection>
            ))
          }
        </Route>
      </Switch>
    </div>
  )
}

export default App
