import React from "react";
import { Card } from "react-bootstrap";
import "./Portfolio.css";


const Portfolio = () => {
  return (
    <div className="row mt-5">
      <div className="jumbotron">
        <h1 className="portfolio">Portfolio</h1>
        <hr className="my-4" />
        <div className="row">
          <div className="col-sm-6">
            <Card className="bg-dark text-white">
              <Card.Img
                className="portfolio-pic"
                src="https://github.com/CrystalWatkins/crystal-watkins-portfolio/blob/master/public/Images/finalproject.png?raw=true"
                alt="The Borrowers"
              />
              <Card.ImgOverlay>
                <div>
                  <Card.Title className="title">The Borrowers</Card.Title>
                  <Card.Text className="description">
                    Have extra books lying around and want some new material?
                    Our site allows you to post your books and borrow from your
                    local neighbors! You post your books and are able to search
                    through books posted in your area. You then create a social
                    contract with the other user swapping books. Once
                    communication begins you’re ready to enjoy your new books
                    after pick up!
                  </Card.Text>
                  <Card.Text className="technology">
                    Technology: MERN stack, full CRUD functionality, Google
                    Books API, jwt and hashing passwords, Bulma CSS,
                    DBdiagram.io, Sketch, Trello
                  </Card.Text>
                  <Card.Text className="links">
                    <a href="https://desolate-caverns-47449.herokuapp.com/">
                      Deployed Website
                    </a>
                    <br />
                    <a href="https://github.com/CrystalWatkins/final-project">
                      Github Repo
                    </a>
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="col-sm-6">
            <Card className="bg-dark text-white">
              <Card.Img
                className="portfolio-pic"
                src="https://github.com/CrystalWatkins/crystal-watkins-portfolio/blob/master/public/Images/googlebooks.png?raw=true"
                alt="React Google Books"
              />
              <Card.ImgOverlay>
                <div>
                  <Card.Title className="title">React Google Books</Card.Title>
                  <Card.Text className="description">
                    Description: This is built using Full Stack. We are using
                    the Google Books API to be able to search for books by title
                    and then are able to save those books. You are also able to
                    go to the saved page and it will show you all your saved
                    books and allow you to delete any books you do not want
                    saved.
                  </Card.Text>
                  <Card.Text className="technology">
                    Technology: MERN stack, CRUD functionality, and Google Books
                    API
                  </Card.Text>
                  <Card.Text className="links">
                    <a href="https://gt-hw-react-google-books.herokuapp.com/search">
                      Deployed Website
                    </a>
                    <br></br>
                    <a href="https://github.com/CrystalWatkins/gt-hw-google-books">
                      Github Repo
                    </a>
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-6">
            <Card className="bg-dark text-white">
              <Card.Img
                className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/DonenDusted.png?raw=true"
                alt="Done N Dusted"
              />
              <Card.ImgOverlay>
                <div>
                  <Card.Title className="title">Done N Dusted</Card.Title>
                  <Card.Text className="description">
                    Description: Once you log on to our app, you can upload a
                    receipt from any store. You will then receive an itemized
                    list of your purchases that you can edit and take on your
                    next trip to the store!
                  </Card.Text>
                  <Card.Text className="technology">
                    {" "}
                    Technology: Veryfi API, dbdiagram.io, Sketch,
                    Materializecss, NPM packages: express, express-handlebars,
                    passport, mysql 2, express-session, bcrypt,
                    @handlebars/allow-prototype-access, Sequelize, MVC, CRUD
                  </Card.Text>
                  <Card.Text className="links">
                    <a href="https://fathomless-sands-26873.herokuapp.com/">
                      Deployed Website
                    </a>
                    <br></br>
                    <a href="https://github.com/CrystalWatkins/grocr-receipt-app">
                      Github Repo
                    </a>
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </div>

          <div className="col-sm-6">
            <Card className="bg-dark text-white">
              <Card.Img
                className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/EmployeeMngmt.png?raw=true"
                alt="Employee Summary"
              />
              <Card.ImgOverlay>
                <div>
                  <Card.Title className="title">Employee Summary</Card.Title>
                  <Card.Text className="description">
                    Description: This is a homework requirement for GT Full
                    Stack Flex Program. This node express is designed to create
                    a webpage when you fill out a prompt of questions through
                    the terminal. It will ask you multiple questions that you
                    will answer for who is working in your office and their
                    information. Then it will be created or updated under the
                    Output Folder as team.html where the page is created based
                    on the office input!
                  </Card.Text>
                  <Card.Text className="technology">
                    {" "}
                    Technology: Node express, HTML tests, javascript{" "}
                  </Card.Text>
                  <Card.Text className="links">
                    <a href="https://crystalwatkins.github.io/gt-hw-object-oriented-programming-employee-summary/">
                      Deployed Website
                    </a>
                    <br></br>
                    <a href="https://github.com/CrystalWatkins/gt-hw-object-oriented-programming-employee-summary">
                      Github Repo
                    </a>
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-sm-6">
            <Card className="bg-dark text-white">
              <Card.Img
                className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/Project1.png?raw=true"
                alt="Remote island"
              />
              <Card.ImgOverlay>
                <div>
                  <Card.Title className="title">Remote Island</Card.Title>
                  <Card.Text className="description">
                    Description: Remote Island allows a user to choose a travel
                    destination from a list of options.  Once a location type is
                    selected, the user will be presented with their travel
                    amenities.  The user will view a livestream video, pulled from 
                    a location similar to location-type they selected.  The user will also be
                    presented with  a random drink, and optional
                    recipe.  Lastly, the user will be presented with current
                    weather information in relation to location selected.
                  </Card.Text>
                  <Card.Text className="technology">
                    Technology: OpenWeather API and CocktailDB API, HTML, CSS,
                    Bootstrap, and Javascript/jQuery. Images from Freepik.
                  </Card.Text>
                  <Card.Text className="links">
                    <a href="https://crystalwatkins.github.io/gt-project-1/">
                      Deployed Website
                    </a>
                    <br></br>
                    <a href="https://github.com/CrystalWatkins/gt-project-1">
                      Github Repo
                    </a>
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="col-sm-6">
            <Card className="bg-dark text-white">
              <Card.Img
                className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/mysqlemployee.png?raw=true"
                alt="Employee Tracker"
              />
              <Card.ImgOverlay>
                <div>
                  <Card.Title className="title">
                    My SQL Employee Tracker
                  </Card.Title>
                  <Card.Text className="description">
                    Description: This mySQL webpage is designed to create an
                    employee database that combines three different tables to be
                    manipulated and changed by the user for the specific needs
                    of a company. You can assign an employee to a different
                    department, get information about specific data within your
                    company, add different aspects to the company and delete
                    employee information.
                  </Card.Text>
                  <Card.Text className="technology">
                    {" "}
                    Technology: MySQL and JavaScript
                  </Card.Text>
                  <Card.Text className="links">
                    <a href="https://drive.google.com/file/d/1Xy5LKlEEk7d3nxKSND_KHRTo8ax-7uxZ/view">
                      Video Demonstration
                    </a>
                    <br></br>
                    <a href="https://github.com/CrystalWatkins/gt-hw-my-sql-employee-tracker">
                      Github Repo
                    </a>
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-6">
            <Card className="bg-dark text-white">
              <Card.Img
                className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/burger.png?raw=true"
                alt="Burger App"
              />
              <Card.ImgOverlay>
                <div>
                  <Card.Title className="title">Burger App</Card.Title>
                  <Card.Text className="description">
                    Description: This is a homework requirement for GT Full
                    Stack Flex Program. This node express burger app and webpage
                    is designed to utilize server side rendering using MVC. When you open website,
                    you can add a burger that you want to
                    eat. It will put it in the "Burgers To Be Eaten"
                    column, where you can choose to "eat" the burger and then it will move to the "devoured"
                    column. You can say you are still hungry and it
                    will move the burger back to the "Burgers To Be Eaten"
                    column!
                  </Card.Text>
                  <Card.Text className="technology">
                    {" "}
                    Technology: MVC Paradigm, JavaScript, HTML, Heroku,
                    Controllers, CSS{" "}
                  </Card.Text>
                  <Card.Text className="links">
                    <a href="https://evening-ravine-28370.herokuapp.com/">
                      Deployed Website
                    </a>
                    <br></br>
                    <a href="https://github.com/CrystalWatkins/gt-hw-mvc-burger-app">
                      Github Repo
                    </a>
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="col-sm-6">
            <Card className="bg-dark text-white">
              <Card.Img
                className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/reactportfolio.png?raw=true"
                alt="React User Directory"
              />
              <Card.ImgOverlay>
                <div>
                  <Card.Title className="title">
                    React User Directory
                  </Card.Title>
                  <Card.Text className="description">
                    Description: This is a homework requirement for GT Full Stack
                    Flex Program. We are using react to create an employee user
                    directory. When you click on the name, the list sorts
                    alphabetically by the first name. When you search, you
                    receive the search for the employee you searched. With more,
                    the app will be de-structured to be more re-usable. This is
                    calling on the API random user.
                  </Card.Text>
                  <Card.Text className="technology">
                    Technology: React
                  </Card.Text>
                  <Card.Text className="links">
                    <a href="https://crystalwatkins.github.io/gt-hw-react-user-directory-app/">
                      Deployed Website
                    </a>
                    <br></br>
                    <a href="https://github.com/CrystalWatkins/gt-hw-react-user-directory-app">
                      Github Repo
                    </a>
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
