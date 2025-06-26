import { Link } from 'react-router-dom';
import './ToursList.css';

function ToursList({ tours }) {
  if (!tours || tours.length === 0) {
    return <div>No tours available</div>;
  }

  return (
    <div className="tours-container">
      {tours.map((tour) => {
        const publicPath = tour.image.replace(/^.*public/, '');

        return (
          <div key={tour.id} className="tour-card">
            <img
              src={publicPath}
              alt={tour.title}
              className="tour-image"
            />
            <div className="tour-info">
              <h3>{tour.title}</h3>
              <p>{tour.description}</p>
              <Link to={`/tours/${tour.id}`} className="view-btn">
                View More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ToursList;
