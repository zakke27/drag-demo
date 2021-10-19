import { v4 as uuidv4 } from 'uuid'

interface Task {
  id: string
  title: string
  status: string
}

const PREPARE = 'PREPARE'
const LEARNING = 'STATUS_DOING'
const COMPLETE = 'STATUS_DONE'

const STATUS_CODE = {
  PREPARE: 'prepare',
  LEARNING: 'learning',
  COMPLETE: 'complete'
}

let taskList: Task[] = [
  // { id: uuidv4(), title: '吃饭', status: PREPARE },
  // { id: uuidv4(), title: '睡觉', status: PREPARE },
  // { id: uuidv4(), title: '打豆豆', status: PREPARE },
  // { id: uuidv4(), title: '记单词', status: PREPARE }
]

export { STATUS_CODE, taskList }
