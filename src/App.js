
import React from 'react';
import './App.css';

class App extends React.Component{
  render() {
  return (
    <div className="App">
      <div className="gtco-loader"></div>
	
	<div id="page">

		<nav className="gtco-nav" role="navigation">
			<div className="gtco-container">
				
				<div className="row">
					<div className="col-sm-2 col-xs-12">
						<div id="gtco-logo"><a href="index.html">LB Designers</a></div>
					</div>
					<div className="col-xs-10 text-right menu-1">
						<ul>
							<li className="active"><a href="index.html">Home</a></li>
							<li><a href="about.html">About</a></li>
							<li className="has-dropdown">
								<a href="services.html">Services</a>
								<ul className="dropdown">
									<li>Book Home Visit</li>
									<li>Book Online Meeting</li>
									
								</ul>
							</li>
							
							<li><a href="portfolio.html">Portfolio</a></li>
							<li><a href="contact.html">Contact</a></li> 
						</ul>
					</div>
				</div>
				
			</div>
		</nav>

		<div className="gtco-container">
			<div className="row">
				<div className="col-md-12">
					<div className="owl-carousel owl-carousel-fullwidth">
						<div className="item">
							
								<img src="images/slider_1.jpg" alt=""/>
								<div className="slider-copy">
									<h2>Design #1</h2>
								</div>
						
						</div>
						<div className="item">
							
								<img src="images/slider_2.jpg" alt=""/>
								<div className="slider-copy">
									<h2>Design #2</h2>
								</div>
							
						</div>
						<div className="item">
							
								<img src="images/slider_3.jpg" alt="" />
								<div className="slider-copy">
									<h2>Design #3</h2>
								</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="gtco-section">
			<div className="gtco-container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 gtco-heading text-center">
						<h2>Work</h2>
						<p>Find design ideas from our design gallery or book a meeting with a dedicated design expert</p>
					</div>
				</div>
				<div className="row">

					<div className="col-md-12">
						<div className="owl-carousel owl-carousel-carousel">
							<div className="item">
								<div className="gtco-item">
									<img src="images/img_1.jpg" alt="" className="img-responsive"/>
									<h2>Bedroom</h2>
									
								</div>
							</div>
							<div className="item">
								<div className="gtco-item">
									<img src="images/img_2.jpg" alt="" className="img-responsive"/>
									<h2>Kitchen</h2>
									
								</div>
							</div>
							<div className="item">
								<div className="gtco-item">
									<img src="images/img_3.jpg" alt="" className="img-responsive"/>
									<h2>Bathroom</h2>
									
								</div>
							</div>

							<div className="item">
								<div className="gtco-item">
									<img src="images/img_4.jpg" alt="" className="img-responsive"/>
									<h2>Living area</h2>
									
								</div>
							</div>
							<div className="item">
								<div className="gtco-item">
									<img src="images/img_5.jpg" alt="" className="img-responsive"/>
									<h2>Wardrobe</h2>
									
								</div>
							</div>
							<div className="item">
								<div className="gtco-item">
									<img src="images/img_6.jpg" alt="" className="img-responsive"/>
									<h2>Stairs</h2>
								
								</div>
							</div>

							<div className="item">
								<div className="gtco-item">
									<img src="images/img_7.jpg" alt="" className="img-responsive"/>
									<h2>Art gallery</h2>
									
								</div>
							</div>
							<div className="item">
								<div className="gtco-item">
									<img src="images/img_8.jpg" alt="" className="img-responsive"/>
									<h2>Study Room</h2>
									
								</div>
							</div>
							<div className="item">
								<div className="gtco-item">
									<img src="images/img_9.jpg" alt="" className="img-responsive"/>
									<h2>Workplace</h2>
								
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	

		<div className="gtco-section">
			<div className="gtco-container">
				<div className="row">
					<div className="col-md-6 gtco-news">
						<h2>Happy Homes</h2>	
						<ul>
							<li>
								
									<span className="post-date">Delhi</span>
									<h3>Shanti Niketan</h3>
									<p>Wok done by LB Designers is too good. We have never seen these designs in any of the houses before. So much happy with their service.</p>
								
							</li>

							<li>
								
									<span className="post-date">Mumbai</span>
									<h3>Envi Villa</h3>
									<p>Wok done by LB Designers is too good. We have never seen these designs in any of the houses before. So much happy with their service.</p>
							
							</li>

							<li>
								
									<span className="post-date">Kolkata</span>
									<h3>Maa Durga Niwas</h3>
									<p>Wok done by LB Designers is too good. We have never seen these designs in any of the houses before. So much happy with their service.</p>
							
							</li>
						</ul>
						<p className="btn btn-sm btn-special">More News</p>
					</div>
				
					<div className="col-md-5 col-md-push-1 gtco-testimonials">
						<h2>Designers</h2>
						<blockquote>
							<p>&ldquo;So much happy to work for LB Designers. They know the value of work done by us.&ldquo;</p>
							<p className="author"><cite>&mdash; Sheikh Aman</cite></p>
						</blockquote>
						<blockquote>
							<p>&ldquo;So much happy to work for LB Designers. They know the value of work done by us.&ldquo;</p>
							<p className="author"><cite>&mdash; Jeevan Chauhan</cite></p>
						</blockquote>
					</div>
				</div>
			</div>
		</div>
	

		<div className="gtco-section gto-features">
			<div className="gtco-container">
				<div className="row">
					<div className="col-md-4">
						<div className="feature-left">
							<i className="ti-zip icon"></i>
							<div className="copy">
								<h3>Architect</h3>
								<p>Let us design the pillars of your house and you just enjoy your life.</p>
								<p className="gtco-more">Learn more</p>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="feature-left">
							<i className="ti-hummer icon"></i>
							<div className="copy">
								<h3>Planning</h3>
								<p>Let us plan the walls of your house and you just enjoy your life.</p>
								<p className="gtco-more">Learn more</p>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="feature-left">
							<i className="ti-plug icon"></i>
							<div className="copy">
								<h3>Parks &amp; Events</h3>
								<p>Let us utilize your free space for parks and events. You just enjoy the party.</p>
								<p className="gtco-more">Learn more</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<footer id="gtco-footer" className="gtco-section" role="contentinfo">
			<div className="gtco-container">
				<div className="row row-pb-md">
					<div className="col-md-4 gtco-widget gtco-footer-paragraph">
						<h3>LB Designers</h3>
						<p>Dedicated towards their work to make clients happy when they look even into an empty wall.</p>
					</div>
					<div className="col-md-4">
						<div className="row">
							<div className="col-md-6 gtco-footer-link">
								<h3>Links</h3>
								<ul className="gtco-list-link">
									<li>Home</li>
									<li>Services</li>
									<li>Gallery</li>
									<li>Designers</li>
									<li>Contact</li>
								</ul>
							</div>
							<div className="col-md-6 gtco-footer-link">
								<h3>Work</h3>
								<ul className="gtco-list-link">
									<li>Shanti Niketan</li>
									<li>Envi Villa</li>
									<li>Maa Durga Niwas</li>
									<li>Resorts</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-4 gtco-footer-subscribe">
						<form className="form-inline">
						  <div className="form-group">
						    <label className="sr-only" for="exampleInputEmail3">Email address</label>
						    <input type="email" className="form-control" id="" placeholder="Email"/>
						  </div>
						  <button type="submit" className="btn btn-primary">Send</button>
						</form>
					</div>
				</div>
			</div>
			<div className="gtco-copyright">
				<div className="gtco-container">
					<div className="row">
						
						<div className="col-md-6 text-right">
							<p><small>Designed by Taran Dhod</small> </p>
						</div>
					</div>
				</div>
			</div>
		</footer>
		

	</div>


	
    </div>
  );
}
}

export default App;
