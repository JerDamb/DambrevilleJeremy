import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isEmail = () =>{
    let mail = document.getElementById('not-mail');
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(email.match(regex)) {
      mail.style.display="none";
      return true;
    } else {
      mail.style.display = "block";
      mail.style.animation = "dongle .8s";
      setTimeout(() => {
        mail.style.animation = "none";
      }, 1000);
      return false;
    }
  }

  const failMessage = (message) =>{
    let formMess = document.querySelector('.form-message');

    formMess.innerHTML = message;
    formMess.style.opacity = '1';

    document.getElementById('name').classList.add('error');
    document.getElementById('email').classList.add('error');
    document.getElementById('message').classList.add('error');
  }


  const successMessage = () =>{
    let formMess = document.querySelector('.form-message');

    formMess.innerHTML = 'Message envoyé ! Je vous recontaterai dès que possible.';
    formMess.style.background = "green";
    formMess.style.opacity = '1';

    document.getElementById('name').classList.remove('error');
    document.getElementById('email').classList.remove('error');
    document.getElementById('message').classList.remove('error');

    setTimeout(() => {
        formMess.style.opacity = '0';
    }, 2000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && isEmail() && message) {
      sendFeedback("template_4n3gfxl", {
        name,
        company,
        phone,
        email,
        message,
      });
    } else {
      failMessage("Merci de remplir correctemet les champs.");
    }
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        successMessage();
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) => {
          failMessage("Une erreur s'est produite, veuillez réessayer.")
        }
      );
  };

  return (
    <form className="contact-form">
      <div className="form-content">
        <div className="separation">
          <span className="formTitle">nom</span>
        </div>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          // placeholder="nom *"
          value={name}
          autoComplete="off"
        />
        <div className="separation">
          <span className="formTitle">email</span>
        </div>
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            // placeholder="email *"
            value={email}
            autoComplete="off"
          />
        </div>
        <div className="separation">
          <span className="formTitle">message</span>
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          // placeholder="message *"
          value={message}
        />
      </div>
      <input
        className="button"
        type="button"
        value="Envoyer"
        onClick={handleSubmit}
      />
      <div className="form-message"></div>
    </form>
  );
};

export default App;
