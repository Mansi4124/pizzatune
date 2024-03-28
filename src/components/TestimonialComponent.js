import "./TestimonialComponent.css";
const TestimonialComponent = () => {
  return (
    <main class="test-container">
      <p class="a">What others say?</p>
      <h2>REVIEWS</h2>
      <div
        id="testimonialCarousel"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2500"
      >
        <div class="carousel-indicators">
          <button
            id="b1"
            data-bs-target="#testimonialCarousel"
            data-bs-slide-to="0"
          ></button>
          <button
            id="b2"
            data-bs-target="#testimonialCarousel"
            data-bs-slide-to="1"
          ></button>
          <button
            id="b3"
            data-bs-target="#testimonialCarousel"
            data-bs-slide-to="2"
            class="active"
          ></button>
          <button
            id="b4"
            data-bs-target="#testimonialCarousel"
            data-bs-slide-to="3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item">
            <div class="row">
              <div class="col d-none d-lg-block">
                <div class="testimonial-card">
                  <span class="quote-icon">
                    <i class="fas fa-quote-left fa-lg"></i>
                  </span>
                  <p class="testimonial-text">Great service and ambience</p>
                  <div class="testimonial-info">
                    <div class="testimonial-image">
                      <i class="fas fa-user"></i>
                    </div>
                    <div class="testimonial-details">
                      <h4>Jay Patel</h4>
                      <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="testimonial-card active-card">
                  <span class="quote-icon">
                    <i class="fas fa-quote-left fa-lg"></i>
                  </span>
                  <p class="testimonial-text">
                    Amazing food it was.we ordered delicious 9-cheesy pizza 
                  </p>
                  <div class="testimonial-info">
                    <div class="testimonial-image">
                    <i class="fas fa-user"></i>
                    </div>
                    <div class="testimonial-details">
                      <h4>Suman Sood</h4>
                      <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col d-none d-lg-block">
                <div class="testimonial-card">
                  <span class="quote-icon">
                    <i class="fas fa-quote-left fa-lg"></i>
                  </span>
                  <p class="testimonial-text">
                    Nice interior and delicious food
                  </p>
                  <div class="testimonial-info">
                    <div class="testimonial-image">
                    <i class="fas fa-user"></i>
                    </div>
                    <div class="testimonial-details">
                      <h4>Jyoti Dave</h4>
                      <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col d-none d-lg-block">
                <div class="testimonial-card">
                  <span class="quote-icon">
                    <i class="fas fa-quote-left fa-lg"></i>
                  </span>
                  <p class="testimonial-text">
                    Loved the place
                  </p>
                  <div class="testimonial-info">
                    <div class="testimonial-image">
                    <i class="fas fa-user"></i>
                    </div>
                    <div class="testimonial-details">
                      <h4>Abhira Sharma</h4>
                      <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="testimonial-card active-card">
                  <span class="quote-icon">
                    <i class="fas fa-quote-left fa-lg"></i>
                  </span>
                  <p class="testimonial-text">
                  The elegant ambiance was perfect for our meeting, and the staff ensured everything ran smoothly
                  </p>
                  <div class="testimonial-info">
                    <div class="testimonial-image">
                    <i class="fas fa-user"></i>
                    </div>
                    <div class="testimonial-details">
                      <h4>Aman Modi</h4>
                      <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col d-none d-lg-block">
                <div class="testimonial-card">
                  <span class="quote-icon">
                    <i class="fas fa-quote-left fa-lg"></i>
                  </span>
                  <p class="testimonial-text">
                    Must visit place for pizza lovers! 
                  </p>
                  <div class="testimonial-info">
                    <div class="testimonial-image">
                    <i class="fas fa-user"></i>
                    </div>
                    <div class="testimonial-details">
                      <h4>Athrva Shah</h4>
                      <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item active">
            <div class="row">
              <div class="col d-none d-lg-block">
                <div class="testimonial-card">
                  <span class="quote-icon">
                    <i class="fas fa-quote-left fa-lg fa-lg"></i>
                  </span>
                  <p class="testimonial-text">
                  The restaurant has a cozy atmosphere and the food is simply amazing.
                  </p>
                  <div class="testimonial-info">
                    <div class="testimonial-image">
                    <i class="fas fa-user"></i>
                    </div>
                    <div class="testimonial-details">
                      <h4>Harshad Agrawal</h4>
                      <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="testimonial-card active-card">
                  <span class="quote-icon">
                    <i class="fas fa-quote-left fa-lg fa-lg"></i>
                  </span>
                  <p class="testimonial-text">
                  I celebrated my birthday here, and it was an unforgettable experience!    </p>
                  <div class="testimonial-info">
                    <div class="testimonial-image">
                    <i class="fas fa-user"></i>
                    </div>
                    <div class="testimonial-details">
                      <h4>Rajesh Wagle</h4>
                      <div className="reviews">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col d-none d-lg-block">
                <div class="testimonial-card">
                  <span class="quote-icon">
                    <i class="fas fa-quote-left fa-lg"></i>
                  </span>
                  <p class="testimonial-text">
                  The restaurant has a charming ambiance and the menu offers a great variety of dishes
                  </p>
                  <div class="testimonial-info">
                    <div class="testimonial-image">
                    <i class="fas fa-user"></i>
                    </div>
                    <div class="testimonial-details">
                      <h4>Anjali Patel</h4>
                      <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col d-none d-lg-block">
                <div class="testimonial-card">
                  <span class="quote-icon">
                    <i class="fas fa-quote-left fa-lg"></i>
                  </span>
                  <p class="testimonial-text">
                  Great place for a family dinner! 
                  </p>
                  <div class="testimonial-info">
                    <div class="testimonial-image">
                    <i class="fas fa-user"></i>
                    </div>
                    <div class="testimonial-details">
                      <h4>Mamta Sharma</h4>
                      <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="testimonial-card active-card">
                  <span class="quote-icon">
                    <i class="fas fa-quote-left fa-lg"></i>
                  </span>
                  <p class="testimonial-text">
                  I had a wonderful dining experience here. The food was exquisite and the service was top-notch
                  </p>
                  <div class="testimonial-info">
                    <div class="testimonial-image">
                    <i class="fas fa-user"></i>
                    </div>
                    <div class="testimonial-details">
                      <h4>Ananya Bhatt</h4>
                      <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col d-none d-lg-block">
                <div class="testimonial-card">
                  <span class="quote-icon">
                    <i class="fas fa-quote-left fa-lg"></i>
                  </span>
                  <p class="testimonial-text">
                  Excellent service and atmosphere. Highly recommended!
                  </p>
                  <div class="testimonial-info">
                    <div class="testimonial-image">
                    <i class="fas fa-user"></i>
                    </div>
                    <div class="testimonial-details">
                      <h4>Rashmi Gupta</h4>
                      <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TestimonialComponent;
