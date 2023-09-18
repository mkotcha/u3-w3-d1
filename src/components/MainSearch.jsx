import { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Job from "./Job";
import { getJobsAction, unsetJobsAction } from "../redux/actions";

const MainSearch = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs.content);

  const [query, setQuery] = useState("");

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(getJobsAction(query, "search"));
  };

  useEffect(() => {
    dispatch(unsetJobsAction());
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map(job => (
            <Job key={"m" + job._id} job={job} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
