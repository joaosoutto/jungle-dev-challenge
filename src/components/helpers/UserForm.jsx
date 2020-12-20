import React, { useState } from 'react';
import axios from 'axios';

import styles from './UserForm.module.css';
import Error from './Error';

const UserForm = () => {
  const [postName, setPostName] = useState('');
  const [postEmail, setPostEmail] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const postUser = () => {
    const user = {
      name: postName,
      email: postEmail,
    };

    axios
      .post('https://api.jungledevs.com/api/v1/challenge-newsletter/ ', user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const validateForm = () => {
    const emailRegex = /\S+@\S+\.\S+/;

    if (postName.length < 1 || postEmail.length < 1) {
      setErr('Please, insert a value.');
    } else if (!emailRegex.test(postEmail)) {
      setErr('Please, insert a valid email.');
    } else {
      setErr('');
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        postUser();
      }, 3000);
    }
  };

  const showName = (e) => {
    e.preventDefault();

    validateForm();
  };

  return (
    <div className={styles.content}>
      <form onSubmit={showName}>
        <input
          type="text"
          placeholder="Your name"
          onChange={(e) => setPostName(e.target.value)}
          name="postName"
        />
        <input
          type="text"
          placeholder="Your email"
          onChange={(e) => setPostEmail(e.target.value)}
        />
        <button disabled={loading} type="submit">
          Send
        </button>
      </form>
      {err && <Error error={err} />}
    </div>
  );
};

export default UserForm;
