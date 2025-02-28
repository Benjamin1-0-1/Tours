import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeroSection from '../components/HeroSection';
import '../styles/HomePage.css'

function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/home')
      .then((res) => setData(res.data))
      .catch((err) => console.error("Failed to fetch home data:", err));
  }, []);

  if (!data) {
    return <div style={{ padding: '2rem' }}>Loading...</div>;
  }

  return (
    <div>
      <HeroSection
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        backgroundImage={data.heroImage}
      />
      <div style={{ padding: '2rem' }}>
        <h2 style={{color : 'green'}}>{data.aboutTitle}</h2>
        <p>{data.aboutText}</p>
        {/* add the images for the different safaris */}
      </div>
      {/* <div>
        <h2>East African Holiday Tours Packages</h2>
        <div className="underline"></div>
        <p>{data.holidayPackagesText}</p>
      </div> */}

      {/* <div>
        <h2>WHY CHOOSE US</h2>
        <div className="underline"></div>
          <div class="container">
            <div class="card">
              <div class="corner top-left"></div>
              <div class="corner bottom-right"></div>
              <div class="icon">&#128062;</div>
              <h3>Leading Tours and Travel Agent</h3>
              <p>Mufasa Travels is one of the best leading Tours and Travel Companies in Kenya, Africa. Offering the most unique and affordable travel packages in Kenya, Uganda, Rwanda & Tanzania. We provide ultimate safaris from the vast savannahs' and into the wild jungles.</p>
            </div>
            <div class="card">
              <div class="corner top-left"></div>
              <div class="corner bottom-right"></div>
              <div class="icon">&#128062;</div>
              <h3>Best Tour Packages</h3>
              <p>We offer all-season holiday tours and safaris upon request. Our tour vehicles are perfectly in new condition and all are four by four (4×4) wheel drives for guaranteed exceptional Safari. Also, they are equipped with modern binoculars, fridge compartments, a charging system, Wi-Fi, and Radio calls.</p>
            </div>
          </div>
      </div> */}

      {/* <div className="icontainer">
        <h2 className="title">THE BIG FIVE OF AFRICA</h2>
        <div className="underline"></div>
        <div className="image-gallery">
          <img src="/images/elephant.jpg" alt="Elephant" />
          <img src="/images/buffalo.jpg" alt="Buffalo" />
          <img src="/images/leopard.jpg" alt="Leopard" />
          <img src="/images/rhino.jpg" alt="Rhinoceros" />
          <img src="/images/lion.jpg" alt="Lion" />
        </div>
      </div> */}

      <h2>TOP EAST AFRICAN TRAVEL DESTINATIONS</h2>
      {/* <div className="underline"></div>
        <div className="container">
          <p>
            East Africa is one of the most enchanting travel destinations in the
            world, with diverse cultures, unique wildlife, and spectacular
            landscapes. Whether you’re a seasoned traveler or a first-timer, East
            Africa offers an unparalleled experience that will mesmerize you. Here
            are some of the top travel destinations in East Africa:
          </p>

          <ul className="destination-list">
            <li>
              <a href="#" className="destination-link"> Maasai Mara National Reserve, Kenya
              </a>
            </li>
            <li>
              <a href="#" className="destination-link">Serengeti National Park, Tanzania
              </a>
            </li>
            <li>
              <a href="#" className="destination-link">Amboseli National Park, Kenya
              </a>
            </li>
            <li>
              <a href="#" className="destination-link">Lake Nakuru, Kenya
              </a>
            </li>
            <li>
              <a href="#" className="destination-link">Zanzibar, Tanzania
              </a>
            </li>
            <li>
              <a href="#" className="destination-link">Bwindi Impenetrable Forest, Uganda
              </a>
            </li>
            <li>
              <a href="#" className="destination-link">Ngorongoro Conservation Area, Tanzania
              </a>
            </li>
            <li>
              <a href="#" className="destination-link">Volcanoes National Park, Rwanda
              </a>
            </li>
            <li>Mount Kilimanjaro, Tanzania</li>
          </ul>

          <p>
            Each of these destinations offers a unique experience that will create
            unforgettable memories. From the vast savannas of the Serengeti to the
            pristine beaches of Zanzibar, East Africa has something for everyone.
          </p>
        </div> */}
    </div>

  );
}

export default HomePage;
//awesome
