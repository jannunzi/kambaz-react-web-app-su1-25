import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import * as db from "./Database";
export default function Dashboard({
  courses,
  setCourse,
  course,
  addNewCourse,
  updateCourse,
  deleteCourse,
}: {
  courses: any[];
  setCourse: (course: any) => void;
  course: any;
  addNewCourse: () => void;
  updateCourse: () => void;
  deleteCourse: (courseId: string) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard ({currentUser.username})</h1> <hr />
      <h5>
        New Course
        <button className="btn btn-primary float-end" onClick={addNewCourse}>
          Add
        </button>
        <Button
          variant="success"
          className="float-end me-2"
          onClick={updateCourse}
        >
          Update
        </Button>
        <br />
        <input
          value={course.name}
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
          className="form-control mb-2"
        />
        <textarea
          value={course.description}
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
          className="form-control"
        />
      </h5>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses
            .filter((course) =>
              enrollments.some(
                (enrollment) =>
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id
              )
            )
            .map((course: any) => (
              <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Link to={`/Kambaz/Courses/${course._id}/Home`}>
                    <Card.Img
                      src="/images/reactjs.jpg"
                      variant="top"
                      width="100%"
                      height={160}
                    />
                    <Card.Body className="card-body">
                      <Card.Title
                        className="wd-dashboard-course-title
                        text-nowrap overflow-hidden"
                      >
                        {course.name}
                      </Card.Title>
                      <Card.Text
                        className="wd-dashboard-course-description
                       overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {course.description}{" "}
                      </Card.Text>
                      <Button variant="primary"> Go </Button>

                      <Button
                        variant="danger"
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="float-end"
                      >
                        Delete
                      </Button>
                      <Button
                        variant="warning"
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="me-2 float-end"
                      >
                        Edit
                      </Button>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}
