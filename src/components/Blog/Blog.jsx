import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <section className="Blog_section" id="Blog">
      <div className="Blog">
        <h3>OUR NEWS</h3>
        <h1>Latest Blog Feed</h1>
        <div className="Blog_news">
          <div className="Blog_news_card">
            <div className="Blog_news_card_image">
              <img
                src="https://i.insider.com/55c8f5a3dd089599248b4614"
                alt=""
              />
              <div className="Blog_news_card_image_overlay">7 MARCH 2024</div>
            </div>
            <div className="Blog_news_card_content">
              <div className="Blog_news_card_content_title">
                <h3>
                  going to the Gym for the first time?
                </h3>
              </div>
              <div className="Blog_news_card_content_description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quibusdam.
                </p>
              </div>
              <a href="http://">READ MORE</a>
            </div>
          </div>
          <div className="Blog_news_card">
            <div className="Blog_news_card_image">
              <img
                src="https://menslifeadvice.com/wp-content/uploads/2018/04/shutterstock_435565456.jpg"
                alt=""
              />
              <div className="Blog_news_card_image_overlay">7 MARCH 2024</div>
            </div>
            <div className="Blog_news_card_content">
              <div className="Blog_news_card_content_title">
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
              </div>
              <div className="Blog_news_card_content_description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quibusdam.
                </p>
              </div>
              <a href="http://">READ MORE</a>
            </div>
          </div>
          <div className="Blog_news_card">
            <div className="Blog_news_card_image">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt=""
              />
              <div className="Blog_news_card_image_overlay">7 MARCH 2024</div>
            </div>
            <div className="Blog_news_card_content">
              <div className="Blog_news_card_content_title">
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
              </div>
              <div className="Blog_news_card_content_description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quibusdam.
                </p>
              </div>
              <a href="http://">READ MORE</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
