import React from 'react';

import background from './assets/images/background.jpg';
import gallery1 from './assets/images/gallery1.jpg';
import gallery2 from './assets/images/gallery2.jpg';
import gallery3 from './assets/images/gallery3.jpg';
import gallery4 from './assets/images/gallery4.jpg';
import chat from './assets/images/chat.jpg';
import telephone from './assets/svg/telephone.svg';
import envelope from './assets/svg/envelope.svg';
import placeholder from './assets/svg/placeholder.svg';

import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <header className='header'>
        <div className='header__top'>
          <div className='container'>
            <div className='header__top-inner'>
              <div className='logo'>
                <span className='logo__name'>
                  GENIUS
                </span>
              </div>
              <nav className='menu'>
                <ul className='menu__list'>
                  <li className='menu__list-item'>
                    <a className='menu__link' href='#'>
                    PREISE
                    </a>
                  </li>
                  <li className='menu__list-item'>
                    <a className='menu__link' href='#'>
                    REFERENZEN
                    </a>
                  </li>
                  <li className='menu__list-item'>
                    <a className='menu__link' href='#'>
                    KONTAKT
                    </a>
                  </li>
                </ul>
              </nav>
              <div className='dropdown'>
                <span className='dropdown-vector'><svg width="2" height="89" viewBox="0 0 2 89" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 -1L0.999996 88.5195" stroke="#C7C7C7"/></svg></span>
                <button className='dropdown_button'>
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='header__content'>
          <div className='container'>
            <div className='header__content-inner'>
              <img className='header__content-image' src={background} alt='background'/>
            </div>
          </div>
        </div>
      </header>
      <section className='info'>
        <div className='container'>
          <div className='info__inner'>
            <div className='info__title'>
              <h1 className='title'>
                Referenzen
              </h1>
            </div>
            <div className='info__text'>
              <p className='text'>
              Von unseren Designern gestaltet, von 
              unseren Entwicklern programmiert, von unserem Team realisiert — in enger Abstimmung mit dem Kunden. Zum 
              Festpreis.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='info-1'>
      <div className='container'>
          <div className='info1__inner'>
            <div className='info1__title'>
              <img className='info1__image' src={gallery1} />
              <h1 className='title1'>
                Webdesign Agentur
              </h1>
            </div>
            <div className='info1__text'>
              <p className='text1'>
                Webdesign Agentur
              </p>
              <p className='text11'>
                Wir sind ein wirksames Team von Programmierern und Designer und bieten professionelle Dienstlei stungen rund um’s Thema Webdesign und Online-Marketing an. Seit 2006 kultivieren wir.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='info-2'>
      <div className='container'>
          <div className='info2__inner'>
            <div className='info2__text'>
            <p className='text2'>
                Webdesign Agentur
              </p>
              <p className='text22'>
                Wir sind ein wirksames Team von Programmierern und Designer und bieten professionelle Dienstlei stungen rund um’s Thema Webdesign und Online-Marketing an. Seit 2006 kultivieren wir.
              </p>
            </div>
            <div className='info2__title'>
              <img className='info2__image' src={gallery2} />
              <h1 className='title2'>
                Webdesign Agentur
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className='info-3'>
      <div className='container'>
          <div className='info3__inner'>
            <div className='info3__title'>
              <img className='info3__image' src={gallery3} />
              <h1 className='title3'>
                Webdesign Agentur
              </h1>
            </div>
            <div className='info3__text'>
            <p className='text3'>
                Webdesign Agentur
            </p>
            <p className='text33'>
                Wir sind ein wirksames Team von Programmierern und Designer und bieten professionelle Dienstlei stungen rund um’s Thema Webdesign und Online-Marketing an. Seit 2006 kultivieren wir.
            </p>
            </div>
          </div>
        </div>
      </section>
      <section className='info-4'>
      <div className='container'>
          <div className='info4__inner'>
            <div className='info4__text'>
            <p className='text4'>
              Webdesign Agentur
              </p>
              <p className='text44'>
              Wir sind ein wirksames Team von Programmierern und Designer und bieten professionelle Dienstlei stungen rund um’s Thema Webdesign und Online-Marketing an. Seit 2006 kultivieren wir.
              </p>
            </div>
            <div className='info4__title'>
              <img className='info4__image' src={gallery4} />
              <h1 className='title4'>
                Webdesign Agentur
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div className='chat'>
        <img src={chat} />
      </div>
      <footer className='footer'>
        <div className='container'>
          <div className='footer__menu-box'>
            <ul className='menu__list'>
                  <li className='menu__list-item'>
                    <a className='menu__link' href='#'>
                    PREISE
                    </a>
                  </li>
                  <li className='menu__list-item'>
                    <a className='menu__link' href='#'>
                    REFERENZEN
                    </a>
                  </li>
                  <li className='menu__list-item'>
                    <a className='menu__link' href='#'>
                    KONTAKT
                    </a>
                  </li>
            </ul>
          </div>
          <div className='footer__content'>
            <div className='footer__content-contact'>
            <span className='footer__address'><img className='footer__image' src={placeholder} /> Poststr, 45, 44890 Hamburg</span>
            <span className='footer__address'><img className='footer__image' src={envelope} /> HELLO@TRATATA.DE</span>
            <span className='footer__address'><img className='footer__image' src={telephone} /> 040 380-33- 44</span>
          </div>
          <div className='footer__content-form'>
            <p className='footer__form-title'>Schreiben Sie uns!</p>
            <form action="#">
              <input className='form__input-text' type="text" name="user_name" placeholder='Firma / Organisation' /><br />
              <input className='form__input-email' type="email" name="user_email" placeholder='E-mail' />
              <input className='form__input-telephone' type="tel" name="user_phone" placeholder='Telephone' /><br />
              <textarea className='form__input-textarea' name='user_message' placeholder='Was ist ihr Anliegen?' rows="10" cols="50"></textarea><br />
              <input className='form__input-button' type="submit" value="SENDEN" />
            </form>
          </div>
          </div>
          <div className='footer__copyright'>
              © 2019  Genius Web Agentur. Alle Rechte vorbehalten
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
