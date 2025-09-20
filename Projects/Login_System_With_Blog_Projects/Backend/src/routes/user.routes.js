import express from 'express'
import e, { Router } from 'express'
import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/user.controller.js'

const router = express.Router()

router.post("/register", createUser)
router.get("/", getUsers)
router.get("/:id", getUserById)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)

export default router;









// import express from 'express'
// import { Router } from 'express'
// import { createStudent , getStudentById , getStudents , updateStudent , deleteStudent } from '../controllers/student.controller.js'

// const router = express.Router()

// router.post("/" , createStudent)
// router.get("/" , getStudents)
// router.get("/:id" , getStudentById)
// router.put("/:id" , updateStudent)
// router.delete("/:id" , deleteStudent)

// export default router