import express from 'express';
import { academicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { academicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { buildingRoutes } from '../modules/building/building.routes';
import { courseRoutes } from '../modules/course/course.routes';
import { roomRoutes } from '../modules/room/room.routes';
import { studentRoutes } from '../modules/student/student.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semesters',
    routes: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    routes: academicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    routes: academicDepartmentRoutes,
  },
  {
    path: '/students',
    routes: studentRoutes,
  },
  {
    path: '/buildings',
    routes: buildingRoutes,
  },
  {
    path: '/rooms',
    routes: roomRoutes,
  },
  {
    path: '/courses',
    routes: courseRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
