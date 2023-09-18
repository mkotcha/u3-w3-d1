import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getJobsAction } from "../redux/actions";

const CompanySearchResults = () => {
  const jobs = useSelector(state => state.jobs.content);
  const params = useParams();
  const dispatch = useDispatch();

  useState(() => {
    dispatch(getJobsAction(params.company, "company"));
  }, []);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          <Link to="/">Home</Link>
          <Link to="/favourites">Fav</Link>
          {jobs.map(jobData => (
            <Job key={jobData._id} job={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
