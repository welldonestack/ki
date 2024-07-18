
:root {
  --ki-color: rgb(63, 0, 255);
  /* Define the custom color variable */
}

hr {
  margin - top: 0;
  border: none;
  /* Remove default border */
  border - top: 0.5px solid #D3D3D3;
}

.col - md - 6 {
  padding - top: 5px;
}

.col - md - 3 {
  position: relative;
  width: 100 %;
  min - height: 1px;
}

.footer {
  display: flex;
  justify - content: space - between;
  align - items: center;
  width: 94 %;
  margin: 0px auto;
  max - width: 94 %;
  padding - top: 0.5rem;
  padding - bottom: 0.5rem;
  padding - right: 0px;
  padding - left: 0px;
}

.mt - min {
  margin - top: 0.2rem!important;
}

.caption - text {
  color: #696969;
  max - width: 220px;
  position: relative;
  font - size: small;
  font - family: "IBM Plex Sans", sans - serif;
  font - weight: 500;
  font - style: normal;
}


.image -with-caption {
  display: block;
  align - items: center;
  /* Align items vertically */
}

.image -with-caption img {
  max - width: 30 %;
  /* Ensure image does not exceed container width */
  transition: max - width 0.5s ease;
  /* Smooth transition for max-width */
}

.image -with-caption img:hover {
  max - width: 50 %;
  /* Scale up image on hover */
}

.image -with-caption.caption {
  margin: 0;
  /* Remove default margin */
  font - size: smaller;
}

.container - page {
  width: 94 %;
  margin: 0px auto;
  max - width: 94 %;
  padding - top: 0.5rem;
  padding - bottom: 0.5rem;
  padding - right: 0px;
  padding - left: 0px;
}

.form - body {
  width: 100 %;
  /* or any width you prefer for the form */
}

.form - control:focus {
  color: #495057;
  background - color: #fff;
  border - color: #000;
  outline: 0;
  -webkit - box - shadow: none;
  box - shadow: none;
}

.form - control:: -webkit - input - placeholder {
  color: #D3D3D3;
  opacity: 1;
}

.form - control: -ms - input - placeholder {
  color: #D3D3D3;
  opacity: 1;
}

.form - control:: -ms - input - placeholder {
  color: #D3D3D3;
  opacity: 1;
}

.form - control::placeholder {
  color: #D3D3D3;
  opacity: 1;
}

.credits {
  font - family: "Sofia Sans Extra Condensed", sans - serif;
  font - weight: 1;
  font - style: normal;
  font - size: 11pt;
  margin - right: 1px;
  /* Adjust the right margin between links */
  text - transform: uppercase;
  /* Make text all uppercase */
  word - spacing: 0.01em;
}

.btn {
  font - size: small;
  font - weight: 300;
}

.navbar - toggler {
  border: none!important;
  /* Remove any border from the toggler button */
  outline: none!important;
  /* Remove the outline */
  box - shadow: none!important;
  /* Remove any box shadow */
  background - color: transparent;
  /* Make the background transparent if necessary */
  padding - left: 0!important;
  padding - right: 0!important;
}

.navbar - toggler - icon {
  display: inline - block;
  width: 1em;
  /* Adjust the width to make the icon smaller */
  height: 1em;
  /* Adjust the height accordingly */
  vertical - align: middle;
  background: no - repeat center center;
  background - size: 100 % 100 %;
  border: none!important;
  /* Remove any border */
}


/* Home - Card - HashTag */
/* _includes\card-post\ -> change <a class="btn btn-sm btn-trans mb-1"*/
/* change here to change the menu color*/
.navbar - nav.nav - item.nav - link,
.navbar - nav.nav - item.dropdown - item {
  font - weight: 350;
  padding - right: 0!important;
  padding - left: 17px!important;
  color: #D3D3D3!important;
  /* Force the desired color */
}

/* change here to change the menu-hover color*/
.navbar - nav.nav - item.nav - link: hover,
.navbar - nav.nav - item.dropdown - item:hover {
  color: #000!important;
  /* Force the desired hover color */
}


.navbar {
  width: 94 %;
  margin: 0px auto;
  max - width: 94 %;
  padding - top: 0.5rem;
  padding - bottom: 0.5rem;
  padding - right: 0px;
  padding - left: 0px;
}


a:hover {
  text - decoration: none;
}

img {
  max - width: 100 %;
}

a,
.a:hover {
  -webkit - transition: all 0.2s;
  transition: all 0.2s;
}

.container - fluid {
  width: 94 %;
  margin: 0px auto;
  max - width: 94 %;
  padding - right: 0px;
  padding - left: 0px;
}

.border - round - 0 {
  border - radius: 0;
}

blockquote {
  border - left: 7px solid #333;
  padding - left: 20px;
  margin - left: 20px;
  font - style: italic;
}

body {
  font - family: 'IBM Plex Mono', monospace;
  font - variant - numeric: slashed - zero;
  /* Enable alternative zero glyph */
  font - size: 10pt;
  letter - spacing: -0.01em;
  padding - top: 70px;
}

.special - char {
  font - family: 'IBM Plex Sans', sans - serif;
  font - style: normal;
}

article h1,
article h4,
article h5,
article h6 {
  margin-bottom: 2rem; /* Fixed spacing around the hyphen */
}

article h3,
h2 {
  margin-top: 3rem; /* Fixed spacing around the hyphen */
}

article.card - body {
  padding: 1.25rem 0rem;
}


h1,
  h2,
  h5,
  h6,
.h1,
.h2,
.h5,
.h6 {
  font - weight: 700;
}

h1.display - 1 {
  font - family: "Bebas Neue", sans - serif;
  font - style: normal;
  font - size: 4rem;
  font - weight: 400;
  line - height: 0.9;
  margin - top: 1rem;

}

h2 {
  color: #D3D3D3;
  font - size: 3rem;
  font - weight: normal;
  /* Ensure h3 is not bold */
  font - family: "Bebas Neue", sans - serif;
  font - style: normal;
  margin - bottom: 8px;
  line - height: 0.9;
}

h3 {
  color: #D3D3D3;
  font - style: normal;
  font - weight: normal;
  /* Ensure h3 is not bold */
  font - family: "Bebas Neue", sans - serif;
  margin - bottom: 0;
}

h5 {
  font - family: 'IBM Plex Mono', monospace;
  font - weight: 400;
  font - style: italic;
  font - size: 1.5rem;
}

h4 {
  color: #D3D3D3;
  font - family: "IBM Plex Sans", sans - serif;
  font - weight: 600;
  font - style: normal;
  font - size: 1.2rem;
}

.mt - neg100 {
  margin - top: -100px;
}

.min - 50vh {
  min - height: 50vh;
}

.dropdown - header {
  font - size: 1.5rem;
}

.fixed - top {
  border - bottom: 1px solid #f1f1f1;
}

footer.footer {
  border - top: 1px solid #f1f1f1;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100 %;
  width: 100 %;
  opacity: 0;
  -webkit - transition: .2s ease;
  transition: .2s ease;
  background - color: #008CBA;
}

.card {
  background - color: transparent;
  border: 0;
  transition: ease .1s;
}

.more {
  color: white;
  font - size: 14px;
  position: absolute;
  bottom: 9px;
  right: 10px;
  text - transform: uppercase;
  -webkit - transform: translate(-20 %, -20 %);
  transform: translate(-20 %, -20 %);
  -ms - transform: translate(-50 %, -50 %);
}

.card - img {
  width: 100 %;
  border - radius: 0
}

.card - body {
  text - align: left;
  font - style: italic;
  padding - top: 0px!important;
  padding - bottom: 0px!important;
}

/* Post - Body - Link */
.card - body a {
  color: #D3D3D3;
  /* Default link color */
  text - decoration: underline;
  /* Remove underline */
}

.card - body a:hover {
  color: #000;
  /* Hover link color */
  text - decoration: none;
  /* Optional: add underline on hover */
}

/* Making image working as a link to the post*/
.card - pin.raco {
  position: relative;
  /* Ensure relative positioning for the card */
}

.card - pin {
  position: relative;
  /* Ensure relative positioning for the card */
}

/* Image overlay styles. Control Hover Effect on Cards*/
.content - area.image - area.image - overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100 %;
  height: 100 %;
  opacity: 0;
  /* Initially hidden */
  background - color: #f1f1f1;
  transition: opacity 0.2s ease -in -out;
  /* Smooth transition for opacity */
}

.card - pin: hover.image - area.image - overlay,
.card - pin: hover.title - area {
  opacity: 0.8;
  /* Show the overlay on hover */
  cursor: pointer;
  /* Change cursor to pointer on hover */
}

.content - area.image - area.image - overlay:hover {
  opacity: 0.5;
  /* Show the overlay on hover */
  cursor: pointer;
  /* Change cursor to pointer on hover */
}

.overlay - link {
  display: block;
  width: 100 %;
  height: 100 %;
}

/* Title area styles for index page only */
.index - page.title - area {
  position: absolute;
  width: 100 %;
  bottom: -1px;
  /* Position title near the bottom of the image */
  color: black;
  /* Title color */
  background - color: rgba(255, 255, 255, 1);
  /* Background color with transparency */
  opacity: 0;
  /* Initially hidden */
  transition: opacity 0.2s ease -in -out;
  /* Smooth transition for opacity */
}

.index - page.image - area: hover.title - area {
  opacity: 1;
  /* Show the title on hover */
}

.card - title {
  color: #D3D3D3;
  z - index: 2;
  /* Ensure the title is above the overlay */
  text - align: center;
  font - size: 0.9em;
  margin - bottom: 0;
}

.card - pin: hover.card - title {
  color: #000;
  transition: ease .2s;
}

.card - pin.raco.card - title {
  text - align: left;
}

.card.card - pin.raco: hover.wrapcat {
  display: -webkit - box;
  /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz - box;
  /* OLD - Firefox 19- (buggy but mostly works) */
  display: -webkit - flex;
  /* NEW - Chrome */
  display: flex;
  /* NEW, Spec - Opera 12.1, Firefox 20+ */
  -webkit - box - flex - direction: row;
  -moz - box - flex - direction: row;
  -webkit - flex - direction: row;
  flex - direction: row;
  border - radius: 0px;
  transition: all 0.2s;
}

.card - pin.raco:hover i.text - muted {
  color: #333!Important;
  transition: all 0.2s;
  position: relative;
}

.car - pin.raco: hover.fa:before {
  -webkit - animation: pulse 2s ease -in;
  -moz - animation: pulse 2s ease -in;
  animation: pulse 2s ease -in;
  -webkit - animation - iteration - count: infinite;
  -moz - animation - iteration - count: infinite;
  animation - iteration - count: infinite;
}

/* Adjust the gotopost button styling to the position of the pinme button */
.gotopost {
  position: absolute;
  top: 10px;
  /* Adjust this value to match the previous position of pinme */
  left: 10px;
  /* Adjust this value to match the previous position of pinme */
  background: #fff;
  font - size: 12px;
  font - weight: 700;
  padding: 0px 5px 1px 5px;
  border - radius: 2px;
  box - shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.social {
  position: relative;
  -webkit - transform: translateY(-50 %);
  transform: translateY(-50 %);
}

.social.fa {
  margin: 0 3px;
}

.socials - media.fab {
  font - size: 20px;
}

.dropdown - item.active,
.dropdown - item:active {
  background - color: transparent;
}

.btn - gray {
  background - color: #efefef;
  color: #333;
}

.btn - gray:hover {
  background - color: #ddd;
}

.btn - trans {
  background - color: #ffffff;
  /* White background */
  color: #D3D3D3;
  /* LightGray text color */
  border: 1px solid #D3D3D3;
  /* Add a 1px solid border with LightGray color */
  text - decoration: none!Important;
  /* Remove underline */
  font - style: italic;
}

.btn - trans:hover {
  background - color: #ffffff;
  /* White background */
  color: #000000;
  /* Black text color */
  border: 1px solid #D3D3D3;
  /* Add a 1px solid border with LightGray color */
}

.navbar - nav.categories a {
  font - size: 15px;
  font - weight: 700;
  margin - left: 15px;
  line - height: 0.8;
}

.content - area {
  position: relative;
  /* Optionally, ensure .content-area is positioned */
}

.wrapcat {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify - content: center;
  align - items: center;
  background - color: rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
}

.showcat {
  margin: auto;
  padding: 0;
}

.wrapcat.btn {
  border: 0;
  padding: 0 6px 2px 6px;
  box - shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  font - size: 13px;
}

.PageNavigation {
  display: flex;
  justify - content: space - between;
  /* Align items with space between them */
}

.PageNavigation a {
  font - size: 25pt!important;
  font - weight: 100!important;
  color: #D3D3D3;
  text - align: center;

  border - radius: 40px;
  font - size: 20px;
  line - height: 1.3;
  background - color: rgba(255, 255, 255, 0);
  /* Transparent background */
  border: none;
  /* Remove any border */
  display: flex;
  /* Enable flexbox for the anchor */
  align - items: center;
  /* Center items vertically within the anchor */

}

/* change here to change the pagination text color */
.pagination {
  color: #D3D3D3;
}

.pagination a {
  color: #D3D3D3;
}

.pagination a:hover {
  background - color: #f1f1f1;
  color: #D3D3D3;
  text - decoration: none;
}

.pagination span,
.pagination a {
  padding: 7px 18px;
  border: 1px solid #eee;
  margin - left: -2px;
  margin - right: -2px;
  display: inline - block;
  font - size: 14px;
  font - weight: 500;
}

.pagination span.webjeda {
  background: #333;
  color: #fff;
  border: 1px solid #333;
}

.pagination a,
.pagination span.prev,
.pagination span.next {
  background - color: #ffffff;
}

.pagination {
  color: #D3D3D3;
}

.pagination a {
  color: #D3D3D3;
}

.pagination a:hover {
  background - color: #f1f1f1;
  color: #D3D3D3;
  text - decoration: none;
}

.pagination {
  text - align: center;
}

.PageNavigation a i {
  font - size: 40px;
  width: 60px;
  height: 60px;
  line - height: 60px;
  border - radius: 50 %;

}
.PageNavigation a:hover {
  color: #333;
}

a.prev {
  position: relative;
}

a.next {
  position: relative;
}

/* Add this to your theme.css */

@keyframes dissolve {
  0 % {
    opacity: 0;
  }
  100 % {
    opacity: 1;
  }
}

.dissolve {
  animation: dissolve 1s ease -in;
}