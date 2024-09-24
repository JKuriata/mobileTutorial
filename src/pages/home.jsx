import { CarouselComponent } from '../Components/Carousel/CarouselComponent';

export const Home = () => {
  return (
    <>
      <CarouselComponent />
      <h1 className='welcome'>Welcome to Edgewood Art Gallery</h1>

      <section id="about">
        <p>
          Discover a world where creativity knows no bounds. At <strong>Edgewood Art Gallery</strong>, we bring you a carefully curated selection of contemporary art, featuring visionary works from both emerging and established artists. Our gallery is a vibrant space where artistic expression meets inspiration, offering visitors an immersive experience that sparks curiosity and connection.
        </p>
      </section>

      <section id="what-to-expect">
        <h2>What to Expect:</h2>
        <ul>
          <li>Rotating exhibitions showcasing a variety of artistic styles and mediums</li>
          <li>Special events including artist talks, workshops, and guided tours</li>
          <li>A welcoming environment where creativity and community thrive</li>
        </ul>
        <p>
          We invite you to step into Edgewood Art Gallery, where art comes to life. Discover new perspectives, engage with powerful stories, and experience the magic of contemporary art.
        </p>
      </section>

      <section id="current-exhibition">
        <h2>Current Exhibition:</h2>
        <p>
          <strong>[Exhibition Name]</strong><br />
          Visit our latest exhibition, featuring [brief description of featured artists or themes]. Explore the collection now and see the works that are redefining the modern art scene.
        </p>
      </section>

      <section id="upcoming-events">
        <h2>Upcoming Events:</h2>
        <p>
          Stay connected with our events, from artist-led workshops to interactive talks that bring you closer to the creative process. <strong>[Event Name]</strong> is coming soon – don’t miss it!
        </p>
      </section>

      <footer>
        <p>Come visit us at Edgewood Art Gallery, where every visit is a journey into the extraordinary.</p>
      </footer>
    </>
  );
};
