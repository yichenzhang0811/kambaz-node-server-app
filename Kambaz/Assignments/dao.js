import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";
// retrive assignments
export function findAssignmentsForCourse(courseId) {
  const { assignments } = Database;
  return assignments.filter((assignment) => assignment.course === courseId);
}

export function findAssignment(assignmentId) {
  const { assignments } = Database;
  return assignments.find((assignment) => assignment._id === assignmentId);
}
//create assignment
export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: uuidv4() };
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
}
// delete assignment
export function deleteAssignment(assignmentId) {
  const { assignments } = Database;
  Database.assignments = assignments.filter(
    (assignment) => assignment._id !== assignmentId
  );
}

// update assignment
export function updateAssignment(assignmentId, assignmentUpdates) {
  const { assignments } = Database;
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  if (!assignment) {
    console.log("No assignment found for ID:", assignmentId);
    return null;
  }
  console.log(assignment);
  Object.assign(assignment, assignmentUpdates);
  return assignment;
}
