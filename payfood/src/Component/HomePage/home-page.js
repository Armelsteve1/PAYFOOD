import React, { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import "./home-style.css";
import phone from "./test.svg";
import logo from "./payfood-logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNinja, faVectorSquare } from "@fortawesome/free-solid-svg-icons";
import resto1 from "./resto1.svg";
import resto2 from "./resto2.svg";
import resto3 from "./resto3.svg";
import resto4 from "./resto4.svg";
import resto5 from "./resto5.svg";
import resto6 from "./resto6.svg";
import resto7 from "./resto7.svg";
import resto8 from "./resto8.svg";
import resto9 from "./resto9.svg";
import resto10 from "./resto10.svg";
import resto11 from "./resto11.svg";
import resto12 from "./resto12.svg";
import resto13 from "./resto13.svg";

import restoGrid1 from "./resto-grid1.svg";
import restoGrid2 from "./resto-grid2.svg";
import restoGrid3 from "./resto-grid3.svg";
import restoGrid4 from "./resto-grid4.svg";
import restoGrid5 from "./resto-grid5.svg";
import restoGrid6 from "./resto-grid6.svg";
import restoGrid7 from "./resto-grid7.svg";

import restoNotes from "./resto-grid-notes.svg";
import restoBestTitle from "./title-resto.svg";

import ReactGA from './../../analytics';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import foodGif from "./food-gif.svg";

function LandingPage() {

  const restoPaths = [resto1, resto2, resto3, resto4, resto5, resto6, resto7, resto8, resto9, resto10, resto11, resto12];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:4000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.status === 200) {
        toast.success(`Merci ${formData.company} ! Nous vous contacterons bientôt.`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        console.log("Form submission success.", response.status);
        console.log(response);
  
        await emailjs.sendForm(
          'service_payfood_gmbr6ps',
          'template_2q2pcvj',
          e.target,
          'GrqY7nKVhCnvqc8Hm'
        );
  
        setFormData({
          name: '',
          email: '',
          number: '',
          company: '',
          message: ''
        });
  
        ReactGA.event({
          category: 'Contact Form',
          action: 'Submit',
        });
        console.log('Event sent');
      } else {
        console.log("Form submission failed. Status:", response.status);
        toast.error("Échec de l'envoi du formulaire. Merci de réessayer.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Échec de l'envoi du formulaire. Merci de réessayer.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  

  ReactGA.pageview("/#contact-us" + window.location.search);

  return (
    <div className="landing-page">
      <div>
        <main className="contenaire">
          <section className="hero">
            <div className="content">
              <div className="decouvert">
                <p>Ne vous</p>
                <p>préoccupez plus</p>
                <p>de <span>l'addition</span>.</p>
              </div>
              <div className="text">
                <p>
                  Maîtrisez la façon dont les clients paient et restent fidèles à votre restaurant.
                </p>
              </div>
              <button className="contact-button" onClick={() => {
                const contactPart = document.getElementById("contact-us");
                if (contactPart) {
                  contactPart.scrollIntoView({ behavior: "smooth" });
                }
              }}>Découvrez notre offre</button>
              <div className="slogan-landing">
                <p>Sans engagement. Essai gratuit pendant 2 mois.</p>
              </div>
            </div>
            <img className="phone" src={phone} alt="Phone" />
          </section>
          <section className="deuxieme" id="contact-us">
            <div className="container">
              <div className="left">
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
                  <input
                    type="text"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
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
          <section className="deuxieme colored">
            <div className="container with-quote">
              <div className="left">
                <div className="quote-saying">
                  <span className="quote-icon">&ldquo;</span>
                  <p>Personnel très accueillant et aimable ! Repas très bon et à petit prix ! Mais surtout, je règle ma commande rapidement !</p>
                  <FontAwesomeIcon icon={faUserNinja} /><span>&nbsp;&nbsp;Mélanie Dubois</span><br></br>
                  <span>Restaurant Asian</span><br></br>
                  <span>Foody - Nice</span>
                </div>
              </div>
              <div className="right">
                <div className="all-in">
                  <span>L'ingrédient dont <br></br>
                  <span className="highlighted-text">tous</span> les restaurants ont besoin.</span>
                  <p>Nous apportons un soutien aux professionnels soucieux de fidéliser leur clientèle en leur offrant un système de paiement par QR code facile à utiliser.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="third" id="about-us">
            <div className="container">
              <div className="section-header">
                <span className="section-title">Goûte ça !</span>
                <span className="section-description">Avec Payfood, vous pourrez réaliser..</span>
              </div>
              <div className="grid-container">
                <div className="grid-item">
                  <h3>&gt; 14m</h3>
                  <p>temps gagné par serveur par table</p>
                </div>
                <div className="grid-item">
                  <h3>&gt; 80%</h3>
                  <p>augmentation du coût moyen d'une commande</p>
                </div>
                <div className="grid-item">
                  <h3>&gt; 100%</h3>
                  <p>des données clients exploitables</p>
                </div>
                <div className="grid-item">
                  <h3>&gt; 250%</h3>
                  <p>taux de rétention et de visites de retour</p>
                </div>
                {/* <div className="grid-item">
                  <h3>&gt; 14m</h3>
                  <p>temps gagné par serveur par table</p>
                </div>
                <div className="grid-item">
                  <h3>&gt; 65%</h3>
                  <p>Deviennent super fans</p> */}
                {/* </div> */}
              </div>
            </div>
          </section>
          <section className="fourth soit-disant">
            <h2>Votre moteur de croissance et d'engagement</h2>
            < div className="container">
              <div className="grid-container">
                <div className="grid-row">
                  <div className="grid-item item1">
                    <h3>Créez votre propre devise</h3>
                    <br></br>
                    <p>Un système de points de fidélité qui transforme chaque achat en récompense.</p>
                  </div>
                  <div className="grid-item item2">
                    <h3>Concentrez-vous sur la cuisine, nous vous amenons les clients</h3>
                    <br></br>
                    <p>Chacun son métier... nous nous chargeons de mettre à votre disposition un vaste réseau de clients potentiels</p>
                  </div>
                </div>
                <div className="grid-row">
                  <div className="grid-item item3">
                    <h3>Payer, gagner, savourer..</h3>
                    <br></br>
                    <p>Chaque repas devient une occasion pour votre client de gagner et de savourer. Surprenez-les avec des recommandations personnalisées.</p>
                  </div>
                  <div className="grid-item item4">
                    <h3>Datalicieux</h3>
                    <br></br>
                    <p>Appropriez-vous vos données et personnalisez l'expérience client pour renforcer l'engagement.</p>
                  </div>
                </div>
                <div className="grid-row">
                  <div className="grid-item item5">
                    <h3>Impactez chaque client</h3>
                    <br></br>
                    <p>Augmentez le nombre de visites et le volume des commandes grâce aux QR codes intelligents et au système de fidélisation de Payfood.</p>
                  </div>
                  <div className="grid-item item6">
                    <h3>Tous les ingrédients pour assurer votre croissance</h3>
                    <br></br>
                    <p>Attirez plus de clients et élargissez votre présence grâce à notre communauté d'utilisateurs avides de nouvelles expériences culinaires.</p>
                  </div>
                </div>
              </div>
            </div>
          </section >
          <section className="fourth">
            <div className="container">
              < div className="all-in">z
                <span>Gusto, ajoutez de la magie à l’expérience avec <span>votre magie virtuelle.</span></span>
                <p>Transformez vos clients occasionnels en véritables ambassadeurs de votre marque.</p>
                <div className="table-without-table">
                  <div className="icon-and-text">
                    <FontAwesomeIcon icon={faVectorSquare} className="task-done-icon" />
                    <p>À chaque fois qu'un client passe commande ou visite votre établissement, il accumule de la monnaie virtuelle, une sorte de points de fidélité modernes, qu'il peut ensuite utiliser pour obtenir des récompenses, des remises ou des offres exclusives. Cela vous permet de récompenser la fidélité de vos clients tout en les encourageant à revenir ! </p>
                  </div>
                  <div className="icon-and-text">
                    <FontAwesomeIcon icon={faVectorSquare} className="task-done-icon" />
                    <p>Chaque repas devient une opportunité de “gagner et de savourer”</p>
                  </div>
                  {/* <div className="icon-and-text">
                    <FontAwesomeIcon icon={faSquareCheck} className="task-done-icon" />
                    <p>Laissez-vous surprendre par des recommandations personnalisées.</p>
                  </div>
                  <div className="icon-and-text">
                    <FontAwesomeIcon icon={faSquareCheck} className="task-done-icon" />
                    <p>Gusto, ajoutez de la magie à votre expérience.</p>
                  </div>
                  <div className="icon-and-text">
                    <FontAwesomeIcon icon={faSquareCheck} className="task-done-icon" />
                    <p>Votre propre monnaie virtuelle.</p>
                  </div> */}
                </div>
              </div>
            </div>
          </section >
          {/* <section className="fifth" id="restaurants-partenaires">
            <div className="container">
              <h2>Découvrez l'ingrédient secret utilisé par<span> xxx, xxx, et xxxx</span> - et apprécié par plus de 500 établissements, dont le nombre augmente de jour en jour.</h2>
              <div className="grid-container">
                {restoPaths.map((restoPath, index) => (
                  <div className="grid-item" key={index}>
                    <img src={restoPath} alt={`Image ${index + 1}`} />
                  </div>
                ))}
              </div >
            </div >
          </section > */}
          <section className="fifth">
            <div className="container">
              {/* <h2>Les meilleurs restaurateurs utilisent <span>Payfood</span></h2> */}
            </div >
            <div className="image-grid">
              <div className="single-image">
                <img src={restoBestTitle} id="title-to-developed" alt=" resto-best-payfood" />
                <img src={restoGrid1} alt="resto-partenaires-1" />
              </div>
              <div className="two-images">
                <img src={restoNotes} alt="resto-notes-avis" />
                <img src={restoGrid2} alt="resto-partenaires-2" />
                <img src={restoGrid3} alt="resto-partenaires-3" />
              </div>
              <div className="three-images">
                <img src={restoGrid4} alt="resto-partenaires-4" />
                <img src={restoGrid5} alt="resto-partenaires-5" />
                <img src={restoGrid6} alt="resto-partenaires-6" />
              </div>
              {/* <div className="single-image">
                <img src={restoNotes} alt="resto-notes-avis" />
                <img src={restoGrid7} alt="resto-partenaires-7" />
              </div> */}
            </div>
          </section >
          <section className="six">
            <div className="container">
              <div className="all-in linear">
                <span>La recette parfaite</span>
                <p>Nous vous procurons tous les ingrédients dont vous avez besoin pour grandir.</p>
              </div>
              <div className="all-in linear">
                <img src={foodGif} alt="food gif moving" />
              </div>
            </div>
          </section>
          <section className="seven">
            <div className="container">
              <div className="all-in-black">
                <span>Envie de goûter ?</span>
                <br></br>
                <span>Cela ne coûte rien de commencer.</span>
                <p>Payfood est une solution taillée sur mesure pour le secteur de l'hôtellerie-restauration, appuyée par une assistance rapide et personnalisée.<br></br>
                <br></br>
                Discutons aujourd'hui et voyons comment nous pouvons aider votre entreprise à se développer.</p>
                <button className="contact-button" onClick={() => {
                  const contactPart = document.getElementById("contact-us");
                  if (contactPart) {
                    contactPart.scrollIntoView({ behavior: "smooth" });
                  }
                }}>Contactez-nous</button>
              </div>
            </div>
          </section>
        </main >
        <div className="pg-footer">
          <footer className="footer">
            <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
              <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
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

export default LandingPage;
