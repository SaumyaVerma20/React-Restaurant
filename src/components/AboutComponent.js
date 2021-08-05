import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, CardImg, CardText,
    CardTitle,Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderLeader({leader}){
    return(
     <div key={leader.id} >
      {/*   <Media tag="li">
             <Media left middle>
                 <Media object src={leader.image} alt={leader.name}/>
             </Media>
             <Media body className="ml-5">
                  <Media heading>{leader.name}</Media>
                    <p>{leader.description}</p>
                 </Media> 
    </Media>*/}

       <Card>
           <CardImg width="60%" src={leader.image} alt={leader.name}/>
           <CardBody>
               <CardTitle>{leader.name}</CardTitle>
               {leader.designation ? <cardSubtitle>{leader.designation}</cardSubtitle>:null}
               <CardText>{leader.description}</CardText>
           </CardBody>
       </Card>
     </div>
    );
}


function About(props) {

    const leaders = props.leaders.map((leader) => {
        return (
            <RenderLeader leader={leader} />   
        );
    });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Welcome to Playland American Italiano Family Restaurant, we are proud of our freshly prepared food, warm welcome and relaxing atmosphere. It’s the ideal place for those that seek genuine value, whether for a family meal, a relaxing drink or a bite to eat with friends.

Playland American Italiano Family Restaurant is a newly established Restaurant located on the eastern coast of Guyana in South America. It is owned and operated by an American trained Chef with over 25 years of culinary experience.
All our meals are prepared in the traditional uncompromising style, with fresh imported ingredients and cooked to perfection. 

We have available a wide assortment of local beverages and a list of hand selected wines and champagne  from around the world to compliment our unique cuisine. we know that at times you may have that special bottle that you would like to share with friends and family to celebrate a special occasion, bring it along with you, your own wines are welcomed.</p>
                    
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="text-white abouthead">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {leaders}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;    