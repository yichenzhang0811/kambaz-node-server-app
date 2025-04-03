import * as enrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app) {
  app.get("/api/enrollments", (req, res) => {
    const enrollments = enrollmentsDao.findAllEnrollments();
    res.send(enrollments);
  });
  app.post("/api/enrollments/users/:userId/courses/:courseId", (req, res) => {
    const { userId, courseId } = req.params;
    const newEnrollment = enrollmentsDao.createEnrollment(userId, courseId);
    res.send(newEnrollment);
  });
  app.delete(
    "/api/enrollments/users/:userId/courses/:courseId",
    async (req, res) => {
      const { userId, courseId } = req.params;
      const status = await enrollmentsDao.deleteEnrollment(userId, courseId);
      res.send(status);
    }
  );
}
