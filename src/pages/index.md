<style>
/*! normalize.css v3.0.2 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}

html {
  box-sizing: border-box;
  font-size: 112.5%;
  line-height: 1.58333em;
  overflow-y: scroll;
  -webkit-transition: all 500ms cubic-bezier(0.555, 0, 0.650, 1.000); /* older webkit */
-webkit-transition: all 500ms cubic-bezier(0.555, -0.600, 0.650, 1.000);
 -moz-transition: all 500ms cubic-bezier(0.555, -0.600, 0.650, 1.000);
   -o-transition: all 500ms cubic-bezier(0.555, -0.600, 0.650, 1.000);
      transition: all 500ms cubic-bezier(0.555, -0.600, 0.650, 1.000); /* custom */

-webkit-transition-timing-function: cubic-bezier(0.555, 0, 0.650, 1.000); /* older webkit */
-webkit-transition-timing-function: cubic-bezier(0.555, -0.600, 0.650, 1.000);
 -moz-transition-timing-function: cubic-bezier(0.555, -0.600, 0.650, 1.000);
   -o-transition-timing-function: cubic-bezier(0.555, -0.600, 0.650, 1.000);
      transition-timing-function: cubic-bezier(0.555, -0.600, 0.650, 1.000); /* custom */
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  color: hsl(0,0%,20%);
  font-family: Roboto;
  font-weight: 400;
  word-wrap: break-word;
  background: #2B2D42;
  text-align: center;
  padding-top: 5rem;
  color: #fff;
}

/* Make image responsive by default */
img {
  max-width: 100%;
}

/* All block elements get one rhythm of bottom margin. */
h1,
h2,
h3,
h4,
h5,
h6,
hgroup,
ul,
ol,
dl,
dd,
p,
figure,
pre,
table,
fieldset,
blockquote,
form,
noscript,
iframe,
img,
hr {
  margin: 0;
  margin-bottom: 1.58333rem;
  padding: 0;
}

blockquote {
  margin: 1.58333rem 3.95833rem;
}

b,
strong {
  font-weight: 700
}

hr {
  background: hsl(0,0%,80%);
  border: none;
  height: 1px;
  margin-bottom: calc(1.58333rem - 1px);
}

ol,
ul {
  list-style-position: outside;
  margin-left: 1.58333rem;
}

ul li,
ol li {
  padding-left: 0;
}

code,
kbd,
pre,
samp {
  font-size: 0.85rem;
  line-height: 1.58333rem;
}

table {
  font-size: 1rem;
  line-height: 2.375rem;
  width: 100%;
}

thead {
  text-align: left;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: hsl(0,100%,100%);
  font-family: Roboto;
  font-weight: 100;
}

h1 {
  font-size: 2.82843rem;
  line-height: 3.16667rem;
}

h2 {
  font-size: 2rem;
  line-height: 2.375rem;
}

h3 {
  font-size: 1.41421rem;
  line-height: 2.375rem;
}

h4 {
  font-size: 1.25992rem;
  line-height: 1.58333rem;
}

h5 {
  font-size: 1.12246rem;
  line-height: 1.58333rem;
}

h6 {
  font-size: 1rem;
  line-height: 1.58333rem;
}

h1 small {
 display: block;
 font-size: 33%;
 margin-top: 10px;
}

a {
  color: #EF233C;
  text-decoration: none;
}

a:hover {
  color: #D90429;
}

.text-threedee {
  text-shadow:0 6px 1px rgba(0,0,0,.1),
              0 0 5px rgba(0,0,0,.1),
              0 1px 3px rgba(0,0,0,.2),
              0 3px 5px rgba(0,0,0,.1),
              0 5px 10px rgba(0,0,0,.1),
              0 10px 10px rgba(0,0,0,.1),
              0 20px 20px rgba(0,0,0,.05);
}

.box-threedee {
  box-shadow:0 6px 1px rgba(0,0,0,.1),
              0 0 5px rgba(0,0,0,.1),
              0 1px 3px rgba(0,0,0,.2),
              0 3px 5px rgba(0,0,0,.1),
              0 5px 10px rgba(0,0,0,.1),
              0 10px 10px rgba(0,0,0,.1),
              0 20px 20px rgba(0,0,0,.05);
}

.rounded {
  border-radius: 1000em;
}

.speech-bubble {
  position: absolute;
  left: 50%;
  margin-left: 2em;
  top: 5rem;
	width: 150px;
	height: 75px;
	text-align: center;
	line-height: 75px;
	background-color: #D90429;
  font-size: 2em;
  color: #fff;
  opacity: 0;
  -webkit-transition: all .4s; /* Safari */
  transition: all .4s;
  margin-top: 1em;
}

.speech-bubble:before {
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
	left: 30px;
	top: 75px;
	border: 15px solid;
	border-color: #D90429 transparent transparent #D90429;
}

.image-wrapper:hover .speech-bubble {
  opacity: 1;
  margin-top: 0;
}

.social-icons svg {
  padding: .5em;
  margin: .5em;
  -webkit-transition: padding .4s; /* Safari */
  transition: padding .4s;
}

.social-icons path {
 fill: rgba(255, 255, 255, .4);
}

.social-icons a:hover path {
  fill: #EF233C;
  -webkit-transition: fill .4s; /* Safari */
  transition: fill .4s;
}

.social-icons a:hover svg {
  padding: 0px;
}
</style>

<span class="image-wrapper">
  <img class="rounded box-threedee" src="me.jpg" alt="me"/>
  <p class="box-threedee speech-bubble">Hey :)</p>
</span>

<h1 class="text-threedee">georg schelkshorn
<small>Co-Founder <a href="http://twitter.com/touchlay">@TouchLay</a>, Developer, Design Enthusiast, Entrepreneur</small></h1>

<span class="social-icons"><a href="http://facebook.com/georg.schelkshorn"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="white" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" /></svg></a><a href="http://twitter.com/georgsche"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="white" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"/></svg></a><a href="https://www.linkedin.com/pub/georg-schelkshorn/ba/655/632?trk=seokp-title_posts_secondary_cluster_res_author_name"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="white" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"/></svg></a><a href="http://github.com/georgs"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/></svg></a><a href="https://plus.google.com/108909583131321326477/posts"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="white" d="M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z"/></svg></a><a href="https://instagram.com/georg_schelkshorn/"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="white" d="M20,6.5A0.5,0.5 0 0,1 19.5,7H17.5A0.5,0.5 0 0,1 17,6.5V4.5A0.5,0.5 0 0,1 17.5,4H19.5A0.5,0.5 0 0,1 20,4.5M4.5,20A0.5,0.5 0 0,1 4,19.5V11H6.09C6.03,11.32 6,11.66 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12C18,11.66 17.96,11.32 17.91,11H20V19.5A0.5,0.5 0 0,1 19.5,20M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M20,2H4C2.89,2 2,2.89 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z"/></svg></a></span>