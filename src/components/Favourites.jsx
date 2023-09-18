import { useSelector } from "react-redux";
import Job from "./Job";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Favourites = () => {
  const favComp = useSelector(state => state.favComp.content);

  return (
    <>
      <Container>
        <Link to="/">home</Link>
        {favComp.map((elm, i) => (
          <Job key={elm._id + i} job={elm} />
        ))}
      </Container>
    </>
  );
};

export default Favourites;
