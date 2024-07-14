/* Define custom color variable */
:root {
  --gray-color: #D3D3D3;
  --ki-color: rgb(63, 0, 255);
}

/* General Layout and Structure */
body {
  font-family: 'IBM Plex Mono', monospace;
  font-variant-numeric: slashed-zero;
  font-size: 11pt;
  word-spacing: -0.1em;
}

.container-fluid, .container-page {
  width: 94%;
  margin: 0 auto;
  max-width: 94%;
  padding: 0.5rem 0;
}

.container-fluid {
  padding: 0;
}

.card {
  background-color: #ffffff;
  border: 0;
  transition: ease 0.1s;
}

.card-body {
  text-align: left;
  font-style: italic;
  padding: 0 !important;
}

.card-title {
  color: var(--gray-color); /* Use custom color variable */
  text-align: center;
  font-size: 0.9em;
  margin-bottom: 0;
}

.card-pin.raco .card-title {
  text-align: left;
}

h2 {
  color: var(--gray-color); /* Use custom color variable */
  font-size: 3.5rem;
  font-family: "Bebas Neue", sans-serif;
  font-weight: normal;
  margin-bottom: 0;
}

h3 {
  color: var(--gray-color); /* Use custom color variable */
  font-family: "Bebas Neue", sans-serif;
  font-weight: normal;
  margin-bottom: 0;
}

h4 {
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
}

h5 {
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 400;
  font-style: italic;
  font-size: 1.5rem;
}

/* Buttons and Links */
.btn {
  font-weight: 300;
}

.btn-gray {
  background-color: #efefef;
  color: #333;
}

.btn-trans {
  background-color: #ffffff;
  color: var(--gray-color); /* Use custom color variable */
  border: 1px solid var(--gray-color); /* Use custom color variable */
  text-decoration: none !important;
}

.btn-trans:hover {
  background-color: #ffffff;
  color: #000000;
  border: 1px solid var(--gray-color); /* Use custom color variable */
}

.card-body a {
  color: var(--gray-color); /* Use custom color variable */
  text-decoration: underline;
}

.card-body a:hover {
  color: #000;
  text-decoration: none;
}

/* Forms and Inputs */
.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #000;
  outline: 0;
  box-shadow: none;
}

.form-control::-webkit-input-placeholder {
  color: var(--gray-color); /* Use custom color variable */
  opacity: 1;
}

.form-control:-ms-input-placeholder {
  color: var(--gray-color); /* Use custom color variable */
  opacity: 1;
}

.form-control::-ms-input-placeholder {
  color: var(--gray-color); /* Use custom color variable */
  opacity: 1;
}

.form-control::placeholder {
  color: var(--gray-color); /* Use custom color variable */
  opacity: 1;
}

/* Navigation and Menu */
.navbar {
  width: 94%;
  margin: 0 auto;
  max-width: 94%;
  padding: 0.5rem 0;
}

.navbar-nav .nav-item .nav-link,
.navbar-nav .nav-item .dropdown-item {
  font-weight: 350;
  padding-right: 0 !important;
  padding-left: 17px !important;
  color: var(--gray-color) !important; /* Use custom color variable */
}

.navbar-nav .nav-item .nav-link:hover,
.navbar-nav .nav-item .dropdown-item:hover {
  color: #000 !important;
}

/* Hover Effects and Transitions */
.image-with-caption img {
  max-width: 30%;
  transition: max-width 0.5s ease;
}

.image-with-caption img:hover {
  max-width: 50%;
}

/* Footer */
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 94%;
  margin: 0 auto;
  max-width: 94%;
  padding: 0.5rem;
}
