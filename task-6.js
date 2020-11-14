  const input = document.querySelector('#validation-input');

  input.addEventListener('change', e => {
    input.classList.add("invalid");
      if (e.target.value.length === 6 ) {
        input.classList.remove("invalid");
        input.classList.add("valid");
 
    }
  })