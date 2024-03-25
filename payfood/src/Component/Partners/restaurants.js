import React, { useEffect, useState } from "react";
import ReactGA from './../../analytics';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "./payfood-logo.svg"
import phone from "./test.svg";


function Restaurants() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        company: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        //need to change url when starting ngrok
        fetch('https://payfood.org:4000/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((response) => {
            if (response.status === 200) {
              toast.success(`Merci ${formData.company} ! Nous vous contacterons bientôt.`, {
                position: toast.POSITION.TOP_RIGHT,
              });
              console.log("Form submission success.", response.status)
              setFormData({
                name: '',
                email: '',
                number: '',
                company: '',
              });
            }
          })
          .catch((error) => {
            console.log("Form submission failed.")
            console.error('Error:', error);
            toast.error("Échec de l'envoi du formulaire. Merci de réessayer.", {
              position: toast.POSITION.TOP_RIGHT,
            });
          });
    
        ReactGA.event({
          category: 'Contact Form',
          action: 'Submit',
        });
        console.log('Event sent');
      };
    
      ReactGA.pageview("/#contact-us" + window.location.search);

      
  return (
    <div className="landing-page">
      <div>
        <main className="contenaire">
          <section className="hero partners">
            <div className="content partners">
              <div className="decouvert partners">
                <p>Bientôt chez <span>Payfood !</span></p>
              </div>
              <div className="text partners">
                <p>
                On est en plein travaux de construction du site mais restez dans les parages, ça arrive bientôt! <br></br><br></br>Merci de votre patience et à très bientôt !                </p>
              </div>
            </div>
          </section>
          <section className="deuxieme partners" id="contact-us">
            <div className="container partners">
              <div className="left partners">
                <span>Rejoignez l'expérience</span>
                <span>&nbsp;Payfood</span>
                <p>Découvrez l'interface Payfood et toutes ses fonctionnalités. <br></br>Renseignez vos coordonnées pour être rappelé(e) rapidement et organiser une démo.</p>
              </div>
              <div className="right">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nom et prénom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="number"
                    placeholder="Téléphone"
                    value={formData.number}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Entreprise"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                  <div className="button-container">
                    {/* <button type="submit" onClick={() => gaEventTracker('form')}>Envoyez</button> */}
                    <button type="submit">Envoyer</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main >
        <div className="pg-footer">
          <footer className="footer">
            <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
              <path className="footer-wave-path partners" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
            </svg>
            <div className="footer-content">
              <div className="footer-content-column">
                <div className="footer-logo">
                  <a className="footer-logo-link" href="#">
                    <span className="hidden-link-text"></span>
                    <img src={logo} alt='logo de payfood' style={{}}></img>
                  </a>
                </div>
              </div>
              <div className="footer-content-column">
                <div className="footer-menu">
                  <h2 className="footer-menu-name">A propos</h2>
                  <ul id="menu-get-started" className="footer-menu-list">
                    <li className="menu-item menu-item-type-post_type menu-item-object-product">
                      <a href="#about-us">Blog</a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-product">
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-content-column">
                <div className="footer-menu">
                  <h2 className="footer-menu-name">Comment ça marche ?</h2>
                  <ul id="menu-company" className="footer-menu-list">
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                      <a href="#">Pour les restaurateurs</a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="#restaurants-partenaires">Restaurants partenaires</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-content-column">
                <div className="footer-call-to-action">
                  <h2 className="footer-call-to-action-title">Rejoignez-nous !</h2>
                  <p className="footer-call-to-action-link-wrapper"> <a className="footer-call-to-action-link" href="tel:+33690295563" target="_blank">+33 6 90 29 55 63</a></p>
                  <p className="footer-call-to-action-link-wrapper"> <a className="footer-call-to-action-link" target="_blank">16 rue des Mimosas</a></p>
                  <p className="footer-call-to-action-link-wrapper"> <a className="footer-call-to-action-link" target="_blank">75009 Paris France</a></p>
                </div>
              </div>
              <div className="footer-content-column">
                <div className="footer-menu">
                  <h2 className="footer-menu-name">Légal</h2>
                  <ul id="menu-legal" className="footer-menu-list">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                      <a href="#">Avis de confidentialité</a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                      <a href="#">Conditions d'utilisation</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-social-links"> <svg className="footer-social-amoeba-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
                <path className="footer-social-amoeba-path" d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"></path>
              </svg>
                <a className="footer-social-link linkedin" href="#" target="_blank">
                  <span className="hidden-link-text">Linkedin</span>
                  <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                    <path className="footer-social-icon-path" d="M 25.855469 5.574219 C 24.914063 5.992188 23.902344 6.273438 22.839844 6.402344 C 23.921875 5.75 24.757813 4.722656 25.148438 3.496094 C 24.132813 4.097656 23.007813 4.535156 21.8125 4.769531 C 20.855469 3.75 19.492188 3.113281 17.980469 3.113281 C 15.082031 3.113281 12.730469 5.464844 12.730469 8.363281 C 12.730469 8.773438 12.777344 9.175781 12.867188 9.558594 C 8.503906 9.339844 4.636719 7.246094 2.046875 4.070313 C 1.59375 4.847656 1.335938 5.75 1.335938 6.714844 C 1.335938 8.535156 2.261719 10.140625 3.671875 11.082031 C 2.808594 11.054688 2 10.820313 1.292969 10.425781 C 1.292969 10.449219 1.292969 10.46875 1.292969 10.492188 C 1.292969 13.035156 3.101563 15.15625 5.503906 15.640625 C 5.0625 15.761719 4.601563 15.824219 4.121094 15.824219 C 3.78125 15.824219 3.453125 15.792969 3.132813 15.730469 C 3.800781 17.8125 5.738281 19.335938 8.035156 19.375 C 6.242188 20.785156 3.976563 21.621094 1.515625 21.621094 C 1.089844 21.621094 0.675781 21.597656 0.265625 21.550781 C 2.585938 23.039063 5.347656 23.90625 8.3125 23.90625 C 17.96875 23.90625 23.25 15.90625 23.25 8.972656 C 23.25 8.742188 23.246094 8.515625 23.234375 8.289063 C 24.261719 7.554688 25.152344 6.628906 25.855469 5.574219 "></path>
                  </svg>
                </a>
                <a className="footer-social-link twitter" href="#" target="_blank">
                  <span className="hidden-link-text">Tiktok</span>
                  <svg fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"></path></g></svg>
                </a>
                <a className="footer-social-link youtube" href="#" target="_blank">
                  <span className="hidden-link-text">Instagram</span>
                  <svg fill="white" viewBox="0 0 2476 2476" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5"></path></g></svg>              </a>
                <a className="footer-social-link github" href="#" target="_blank">
                  <span className="hidden-link-text">Facebook</span>
                  <svg fill="white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path></g></svg>
                </a>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="footer-copyright-wrapper">
                <p className="footer-copyright-text">
                  <a className="footer-copyright-link" href="#" target="_self"> © 2024 | Payfood@Marci. | Tous droits réservés. </a>
                </p>
              </div>
            </div>
          </footer>
        </div >
        <ToastContainer />
      </div >
    </div >
  );
}

export default Restaurants;
