import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
  // updating an assignment
  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    console.log("Updating assignment with ID:", assignmentId);
    const status = await assignmentsDao.updateAssignment(
      assignmentId,
      assignmentUpdates
    );
    res.send(status);
  });

  // delete an assignment
  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    console.log("Deleting  ${assignmentId}");
    const status = await assignmentsDao.deleteAssignment(assignmentId);
    res.send(status);
  });

  // get all assignments
  app.get("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignment = assignmentsDao.findAssignment(assignmentId);
    res.json(assignment);
  });
}
