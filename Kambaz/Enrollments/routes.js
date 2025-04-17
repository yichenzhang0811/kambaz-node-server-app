import * as enrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app) {
  app.delete(
    "/api/enrollments/users/:userId/courses/:courseId",
    async (req, res) => {
      const { userId, courseId } = req.params;
      const status = await enrollmentsDao.deleteEnrollment(userId, courseId);
      res.send(status);
    }
  );
  app.post(
    "/api/enrollments/users/:userId/courses/:courseId",
    async (req, res) => {
      const { userId, courseId } = req.params;
      const newEnrollment = await enrollmentsDao.createEnrollment(
        userId,
        courseId
      );
      res.send(newEnrollment);
    }
  );
  app.get("/api/enrollments", async (req, res) => {
    const enrollments = await enrollmentsDao.findAllEnrollments();
    res.send(enrollments);
  });
}
