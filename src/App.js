// import React from "react";
import './App.css';
import './carousel.js';
import logo from './img/logo.svg';
import nature from './img/nature.png';
import close from './img/close.svg';
import block_first from './img/block_1.png';
import block_second from './img/block_2.png';
import block_third from './img/block_3.png';
import porjects_1 from './img/projects_blog-1.png';
import porjects_2 from './img/projects_blog-2.png';
import porjects_3 from './img/projects_blog-3.png';
import porjects_4 from './img/projects_blog-4.png';
import porjects_5 from './img/projects_blog-5.png';
import porjects_6 from './img/projects_blog-6.png';
import porjects_7 from './img/projects_blog-7.png';
import porjects_8 from './img/projects_blog-8.png';
import porjects_9 from './img/projects_blog-9.png';
import twitter from './img/twitter.svg';
import instagram from './img/instagram.svg';
import internet from './img/internet.svg';
import Be from './img/Be.svg';
import In from './img/in.svg';
import message from './img/message.svg';
import facebook from './img/facebook.svg';
import elnuranvarbek from './img/elnuranvarbek.jpg';
import ron_swanson from './img/ron swanson.png';
import julia_depish from './img/julia depish.png';
import danny_devry from './img/danny devry.png';
import Julius_on_berstien from './img/Julius Von Uberstien.png';
import rachel_stamos from './img/Rachel Stamos.png';
import emblema from './img/emblema.svg';
import heart from './img/heart.svg';
import social_network from './img/social-network.svg';
import location from './img/location.svg';
import bg from './img/bg.png';
import footer_emblema from './img/footer-emblema.svg';

function App() {
  return (
    <div className='App'>
      <header className="header">
        <div className="container">
            <div className="header__main">
              <div className="header__main-logo">
                  <img src={logo} alt="MINIMAL" />
              </div>
              <div className="header__main-navigation">
                  <button className="header__main-navigations">process</button>
                  <button className="header__main-navigations">projects</button>
                  <button className="header__main-navigations">team</button>
                  <button className="header__main-navigations" id='last-blog'>contact</button>
              </div>
              <div class="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" id='menu__btn' for="menu__toggle">
                  <span></span>
                </label>
                <ul class="menu__box">
                  <button className="header__main-navigations">process</button>
                  <button className="header__main-navigations">projects</button>
                  <button className="header__main-navigations">team</button>
                  <button className="header__main-navigations">contact</button>
                </ul>
              </div>
            </div>
        </div>
      </header>,
      <section className="making-section">
        <img src={nature} alt='Nature' className="background-image" />
        <div className="container">
          <div className="making__top">
            <div className="making__top-title" id="last-blog">Making brands stand out</div>
            <div className="making__top-title making__top-title_second">is our obsession</div> 
            <div className="line"></div>
            <div className="making__top-subtitle">Let us help your brand stand out.</div>
          </div>
        </div>
      </section>,
      <section className="wrapper">
        <div className="container">
          <div className="wrapper__main">
            <img src={close} alt='' className="wrapper__main-close" />
            <div className="wrapper__main-text">Minimalist is a full-service digital creative agency located in Ontorio Canada. We focus on design, consulting, technology, and photography. We’ve been building unique digital products, platforms, and experiences for the past 6 years. Let us help your company grow.</div>
            <button className="button">Get In Touch</button>
          </div>
        </div>
      </section>,
      <section className='block-section'>
        <div className='container'>
          <div className='block-section__title'>How we make brands thrive</div>
          <div className="line"></div>
          <div className='block__main'>
            <div className='block'>
              <div className='block__img-wrapper'>
                <img src={block_first} alt="" />
              </div>
              <div className='block__title'>SET a target</div>
              <div className='block__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
            </div>
            <div className='block'>
              <div className='block__img-wrapper'>
                <img src={block_second} alt="" />
              </div>
              <div className='block__title'>design a solution</div>
              <div className='block__subtitle'>Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</div>
            </div>
            <div className='block'>
              <div className='block__img-wrapper'>
                <img src={block_third} alt="" />
              </div>
              <div className='block__title'>track the progress</div>
              <div className='block__subtitle'>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</div>
            </div>
          </div>
        </div>
      </section>,
      <section className='projects'>
        <div className='container'>
          <div className='projects__title'>recent projects</div>
          <div className='line'></div>
          <div className='projects__main'>
            <div className='projects__main-blog'>
              <img src={porjects_1} />
              <div className='projects__blog-title'>woods</div>
              <div className='projects__blog-subtitle'>Photography</div>
            </div>
            <div className='projects__main-blog'>
              <img src={porjects_2} />
              <div className='projects__blog-title'>path</div>
              <div className='projects__blog-subtitle'>Website • Photography</div>
            </div>
            <div className='projects__main-blog'>
              <img src={porjects_3} />
              <div className='projects__blog-title'>darkness</div>
              <div className='projects__blog-subtitle'>Website</div>
            </div>
            <div className='projects__main-blog'>
              <img src={porjects_4} />
              <div className='projects__blog-title'>waves</div>
              <div className='projects__blog-subtitle'>Photography</div>
            </div>
            <div className='projects__main-blog'>
              <img src={porjects_5} />
              <div className='projects__blog-title'>drops</div>
              <div className='projects__blog-subtitle'>Website</div>
            </div>
            <div className='projects__main-blog'>
              <img src={porjects_6} />
              <div className='projects__blog-title'>ocean</div>
              <div className='projects__blog-subtitle'>Website</div>
            </div>
            <div className='projects__main-blog'>
              <img src={porjects_7} />
              <div className='projects__blog-title'>town</div>
              <div className='projects__blog-subtitle'>Website</div>
            </div>
            <div className='projects__main-blog'>
              <img src={porjects_8} />
              <div className='projects__blog-title'>mountain</div>
              <div className='projects__blog-subtitle'>Website</div>
            </div>
            <div className='projects__main-blog'>
              <img src={porjects_9} />
              <div className='projects__blog-title'>camera</div>
              <div className='projects__blog-subtitle'>Website</div>
            </div>
          </div>
        </div>
      </section>,
      <section className='team'>
        <div className='container'>
          <div className='team__title'>our team</div>
          <div className='line'></div>
            <div className='team__main'>
              <div className='team__main-blog'>
                <img src={ron_swanson} alt='Ron Swanson' className='img' />
                <div className='team__blog-name'>ron swanson</div>
                <div className='team__blog-about'>Founder</div>
                <div className='team__blog-icons'>
                  <a href='#' className='team__blog-icon'><img src={twitter} /></a>
                  <a href='#' className='team__blog-icon'><img src={In} /></a>
                  <a href='#' className='team__blog-icon' id='last-blog'><img src={message} /></a>
                </div>
              </div>
              <div className='team__main-blog'>
                <img src={julia_depish} alt='Julia Depish' className='img' />
                <div className='team__blog-name'>julia depish</div>
                <div className='team__blog-about'>Marketing</div>
                <div className='team__blog-icons'>
                <a href='#' className='team__blog-icon'><img src={twitter} /></a>
                  <a href='#' className='team__blog-icon'><img src={In} /></a>
                  <a href='#' className='team__blog-icon' id='last-blog'><img src={message} /></a>
                </div>
              </div>
              <div className='team__main-blog'>
                <img src={danny_devry} alt='Danny Devry' className='img' />
                <div className='team__blog-name'>danny devry</div>
                <div className='team__blog-about'>Disigner</div>
                <div className='team__blog-icons'>
                  <a href='#' className='team__blog-icon'><img src={instagram} /></a>
                  <a href='#' className='team__blog-icon'><img src={twitter} /></a>
                  <a href='#' className='team__blog-icon'><img src={Be} /></a>
                  <a href='#' className='team__blog-icon'><img src={internet} /></a>
                  <a href='#' className='team__blog-icon' id='last-blog'><img src={message} /></a> 
                </div>
              </div>
              <div className='team__main-blog'>
                <img src={elnuranvarbek} alt='Elnur Anvarbek' className='img' />
                <div className='team__blog-name'>elnur anvarbek</div>
                <div className='team__blog-about'>Developer</div>
                <div className='team__blog-icons'>
                  <a href='#' className='team__blog-icon'><img src={twitter} /></a>
                  <a href='#' className='team__blog-icon'><img src={In} /></a>
                  <a href='#' className='team__blog-icon' id='last-blog'><img src={message} /></a>
                </div>
              </div>
            </div>
            <div className='main__carousel' aria-label="Newest Photos">
              <div className="carousel" data-carousel>
                <button className="carousel-button prev" data-carousel-button="prev">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                </button>
                <button className="carousel-button next" data-carousel-button="next">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                </button>
                <ul data-slides>
                  <li className="slide" data-active>
                    <div className='team__main-blog'>
                      <img src={ron_swanson} alt='Ron Swanson' className='img' />
                      <div className='team__blog-name'>ron swanson</div>
                      <div className='team__blog-about'>Founder</div>
                      <div className='team__blog-icons'>
                        <a href='#' className='team__blog-icon'><img src={twitter} /></a>
                        <a href='#' className='team__blog-icon'><img src={In} /></a>
                        <a href='#' className='team__blog-icon' id='last-blog'><img src={message} /></a>
                      </div>
                    </div>
                  </li>
                  <li className="slide">
                    <div className='team__main-blog'>
                      <img src={julia_depish} alt='Julia Depish' className='img' />
                      <div className='team__blog-name'>julia depish</div>
                      <div className='team__blog-about'>Marketing</div>
                      <div className='team__blog-icons'>
                      <a href='#' className='team__blog-icon'><img src={twitter} /></a>
                        <a href='#' className='team__blog-icon'><img src={In} /></a>
                        <a href='#' className='team__blog-icon' id='last-blog'><img src={message} /></a>
                      </div>
                    </div>
                  </li>
                  <li className="slide">
                    <div className='team__main-blog'>
                      <img src={danny_devry} alt='Danny Devry' className='img' />
                      <div className='team__blog-name'>danny devry</div>
                      <div className='team__blog-about'>Disigner</div>
                      <div className='team__blog-icons'>
                        <a href='#' className='team__blog-icon'><img src={instagram} /></a>
                        <a href='#' className='team__blog-icon'><img src={twitter} /></a>
                        <a href='#' className='team__blog-icon'><img src={Be} /></a>
                        <a href='#' className='team__blog-icon'><img src={internet} /></a>
                        <a href='#' className='team__blog-icon' id='last-blog'><img src={message} /></a> 
                      </div>
                    </div>
                  </li>
                  <li className="slide">
                    <div className='team__main-blog'>
                      <img src={elnuranvarbek} alt='Elnur Anvarbek' className='img' />
                      <div className='team__blog-name'>elnur anvarbek</div>
                      <div className='team__blog-about'>Developer</div>
                      <div className='team__blog-icons'>
                        <a href='#' className='team__blog-icon'><img src={twitter} /></a>
                        <a href='#' className='team__blog-icon'><img src={In} /></a>
                        <a href='#' className='team__blog-icon' id='last-blog'><img src={message} /></a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </section>,
      <section className='comments'>
        <div className='container'>
          <div className='emblema'>
            <img src={emblema} />
          </div>
          <div className='comments__main'>
            <div className='comments__main-blog'>
              <div className='comments__blog-title'>“I love these guys! They did a great job. I would recommend them to anyone.”</div>
              <img src={Julius_on_berstien} alt="Julius Von Uberstien" className='comments__blog-client' />
              <div className='comments__blog-name'>Julius Von Uberstien</div>
            </div>
            <div className='comments__main-blog'>
              <div className='comments__blog-title last-child'>“Elexis Corp. has grown immensely with the help of Minimal.”</div>
              <img src={rachel_stamos} alt="Rachel Stamos" className='comments__blog-client' />
              <div className='comments__blog-name'>Rachel Stamos</div>
            </div>
          </div>
        </div>
      </section>,
      <section className='about-me'>
        <img src={bg} className='about-me__img' />
        <div className='container'>
          <div className='about-me__title'>let's get in touch</div>
          <div className='line'></div>
          <div className='about-me__main'>
            <div className='about-me__main-blog'>
              <div className='about-me__main-image'>
                <img src={location} />
              </div>
              <div className='about-me__blog-title'>MEET US IN PERSON</div>
              <div className='about-me__blog-subtitle'>8776 Juniper Street</div>
              <div className='about-me__blog-subtitle'>Unit #204</div>
              <div className='about-me__blog-subtitle'>Merriweather, Ontorio</div>
              <div className='about-me__blog-subtitle'>Canada</div>
            </div>
            <div className='about-me__main-blog'>
              <div className='about-me__main-image'>
                <img src={social_network} />
              </div>
              <div className='about-me__blog-title'>The traditional way</div>
              <div className='about-me__blog-subtitle'>Email us</div>
              <div className='about-me__blog-subtitle'>contact@minimal.com</div>
              <div className='blog'>
                <div className='about-me__blog-subtitle'>Contact form</div>
                <div className='about-me__blog-subtitle'>Scroll down</div>
              </div>
            </div>
            <div className='about-me__main-blog'>
              <div className='about-me__main-image'>
                <img src={heart} />
              </div>
              <div className='about-me__blog-title'>Let's get social</div>
              <div className='about-me__blog-main'>
                <img src={facebook} className='icon' />
                <div className='about-me__blog-subtitle'>Facebook</div>
              </div>
              <div className='about-me__blog-main'>
                <img src={twitter} className='icon' />
                <div className='about-me__blog-subtitle'>Twitter</div>
              </div>
              <div className='about-me__blog-main'>
                <img src={In} className='icon' />
                <div className='about-me__blog-subtitle'>Linkedin</div>
              </div>
            </div>
          </div>
        </div>
      </section>,
      <footer className='footer'>
        <div className='container'>
          <input type="name" placeholder="Name" className='input' />
          <input type="email" placeholder="Email" className='input dark-black' />
          <input type="num" placeholder="Budget" className='input' />
          <textarea placeholder="Describe youre project..." ></textarea>
          <div className='footer__main'>
            <button className='button'>Send Message</button>
            <img src={footer_emblema} className='footer__emblema' />
            <div className='text'>Minimal Template made in Webflow. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
