import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {MovieState} from '../movieState';
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';
function MovieDetail() {
  const history = useHistory();
  // checks the path of current page
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  console.log(movie);

  return (
    <>
      {/* check if movie is loaded or not */}
      {movie && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit">
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="img" />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="img" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
}
const Details = styled(motion.div)`
  color: white;
`;
const Headline = styled.div`
  min-height: 70vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1200px) {
    display: block;
    padding: 2rem 2rem;
  }
`;

const AwardTitle = styled.div`
  padding: 3rem;
  h3 {
    font-size: 1.1rem;
  }
  p {
    font-size: 1rem;
    padding: 2rem 0rem;
  }
  .line {
    width: 70%;
    background: #23d997;
    height: 0.2rem;
    margin: 1rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

//Award component

const Award = ({title, description}) => {
  return (
    <AwardTitle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardTitle>
  );
};

export default MovieDetail;
