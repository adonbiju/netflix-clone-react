import React from 'react'
import { Link } from "react-router-dom";
import ImageContentData from "../../StartingPageData/ImageContentData.json";
import ImageContent from "../ImageContent/ImageContent";
import FrequentlyAskedQuestions from "../FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import faqData from "../../StartingPageData/faq.json";
import './StartingPageContent.css'

function StartingPageContent() {
  return (
    <div className="landing">
      <div className="landing__main">
        <div className="landing__nav clearfix">
          <Link to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix logo" />
          </Link>
        
        <Link to='/Signin'>        
          <button  type="button">
            Sign In
          </button>
        </Link>  
        </div>
        <div className="landing__text">
          <div className="landing__headings">
            <h1 className="landing__heading">
              Unlimited movies, TV shows and more.
            </h1>
            <div className="landing__subheading">
              Watch anywhere. Cancel anytime.
            </div>
          </div>
          <h2>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h2>
          <form className="landing__email" >
            <input required type="email" placeholder="Email address" />
            <button type="submit">
              Get started&nbsp;
             
            </button>
          </form>
        </div>
      </div>

      <div>
        <div className="jumbotrones">
          {ImageContentData.map((data) => (
            <ImageContent
              key={data.id}
              img={data.img}
              img_position={data.img_position}
              alt={data.alt}
              title={data.title}
              content={data.content}
            />
          ))}
        </div>
        <div className="faq">
          <h1>Frequently Asked Questions</h1>
          <div className="collapsibles">
            {faqData.map((data) => (
              <FrequentlyAskedQuestions 
                key={data.id}
                header={data.header}
                body={data.body}
              />
            ))}
          </div>
          <h2>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h2>
          <form className="landing__email">
            <input required type="email" placeholder="Email address" />
            <button type="submit">
              Get Started&nbsp;
           
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default StartingPageContent
