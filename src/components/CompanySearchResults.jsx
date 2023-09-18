import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getJobsAction } from "../redux/actions";

const CompanySearchResults = () => {
  const jobs = useSelector(state => state.jobs.content);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobsAction(params.company, "company"));
  }, [dispatch, params.company]);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map(job => (
            <Job key={"c" + job._id} job={job} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
