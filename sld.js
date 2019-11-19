@charset(utf-8);

html{
    font-size:100%;
}

body{
    line-height: 1.7;
    margin:0px;
    padding:0px;
}
a{
    text-decoration: none;
}
img{
    max-width:100%;
}
.nav{
    display: flex;
    justify-content:space-around;
    background:white;
    height:60px;
    opacity:0.7;
    margin-top:0px;
}
.navli{
    line-height:40px;
    list-style:none;
    width:200px;
    text-align:center;
    font-size:15px;
    font-weight:bolder;
}
.navli:hover{
}
.wrapper{
    max-width:1100px;
    margin:0 auto;
    padding:0.4%;
    text-align:center;
}
.wrapper2{
    max-width:100vw;
    margin:0 auto;
    padding:0.4%;
    text-align:center;
}
.home-content{
    text-align:center;
    margin-top:10%;
    color:aliceblue;
}
.home-content p{
    font-size:1.125rem;
    margin:10px 0.42px;
}

.page-title{
    font-size:5rem;
    font-family: 'Philosopher',serif;
    text-transform:uppercase;
    font-weight:normal;
    margin-bottom:0px;
    margin-top:50px;
    padding-top:0px;
}
.page-title2{
    font-size:5rem;
    font-family: 'Philosopher',serif;
    text-transform:uppercase;
    font-weight:normal;
    margin-top:0px;
    margin-bottom:0px;
    padding-top:0px;
}

.button{
    font-size:1.175rem;
    background:#0bd;
    color:#fff;
    border-radius:5px;
    padding:18px 32px;
    margin:0 auto;
    transition: 0.5s; 
}

.button2{
    font-size:1.175rem;
    background:#0bd;
    color:#fff;
    border-radius:50px;
    padding:25px 32px;
    margin:0 auto;
    font-size:25px;
    transition: 0.5s; 
}


.button:hover{
    background:#0090aa;
    padding:18px 42px;
}
.button2:hover{
     background:#0090aa;
    font-size:28px;
    padding:28px 35px;
}

#home{
      margin:0px;
    padding:0px;
    background-image:url(image/main.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width:100vw;
}
#osusume{
    background-image:url(image/top.jpg);
    height:270px;
    margin-bottom:40px;
}
#osusume .page-title{
    text-align:center;
}
footer{
    background:#432;
    padding:26px 0px;
    clear:both;
}
footer p{
    color:#fff;
    font-size:0.875rem;
}

article{
    width:73%;
}

aside{
    width:24%;
}

.osusume-contents{
    display:flex;
    justify-content: space-between;
    margin-bottom:50px;
}

.post-info{
    position:relative;
    padding-top:4px;
    margin-bottom:40px;
}
.post-date{
    background:#0bd;
    border-radius:50%;
    color:#fff;
    width:100px;
    height:100px;
    font-size:1.625rem;
    text-align:center;
    position:absolute;
    top:0;
    padding-top:5px;
    line-height: 90px;
    
}

.post-title{
    font-family:"Yu mincho";
    font-size:2rem;
    font-weight:nomal;

}

.post-tilte,{
    margin-left:120px;
}
.gazo{
     width: 600px; 
    height: 350px;; 
}

.post-title{
    
    border-bottom:dotted 1px;
}
.kaisetu{
    text-align:left;
}
.page-header{
    padding:0px;
    margin:0 auto;
    width:100%;
}
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 10px;
}

.sub-title{
    font-size:1.375rem;
    padding:0 8px 8px;
    border-bottom:2px #0bd solid;
    font-weight:normal;
}

.sub-manu{
    margin-bottom:60px;
    list-style:none;
    padding-left:0px;
}
.sub-manu li{
    border-bottom:1px #ddd solid;
}
.sub-manu a{
    color:#432;
    padding:10px;
    display:block;
}
.sub-manu a:hover{
    color:#0bd;
}
#topback{
    float:right;
    padding:0px;
}
#why{
      margin:0px;
    padding:0px;
    background-image:url(image/why.jpg);
     background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width:100%;
}
#why2{
      margin:0px;
    padding:0px;
    background-image:url(image/why2.jpg);
     background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width:100%;
}

.gazoubun{
    display:flex;
}
.subsub{
    font-size:1.775rem;
    font-family:serif;
}

.grid{
    display:grid;
    gap:26px;
    grid-template-columns: 1fr 1fr;
    margin-top:6%;
    margin-bottom:50px;
}



.figure-inner {
  position: relative;
  width: 400px;
  -webkit-perspective: 1000;
  perspective: 1000;
  width: 400px;
  height: 300px;
  -webkit-transition: .5s;
  transition: .5s;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
    margin:0 auto;
}
.image,
figcaption {
  position: absolute;
  width: 400px;
  height: 300px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.image {
  z-index: 2;
}
figcaption {
  background: #fff;
  border: 2px solid #666;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
figure:hover .figure-inner,
figcaption {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
h3{
    margin:5px;
    padding:0px;
}

.kaisetu2{
    font-size:20px;
    border:1px solid;
    width:400px;
    margin:0 auto;
    border-radius:5px;
    padding:0px;
}

.fadein {
    opacity : 0.1;
    transform : translate(0, 20px);
    transition : all 700ms;
    }

/* 画面内に入った状態 */
.fadein.scrollin {
    opacity : 1;
    transform : translate(0, 0);
    }

#whywhy{
    box-sizing:border-box;
}

.bg-slider {
	width: 100vw;
	height: 100vh;
	background-position:center center;
	background-size: cover;
	align-items: center;
	justify-content: center;
}

@import url(https://fonts.googleapis.com/css?family=Raleway:400,500);
.snip1189 {
  font-family: 'Raleway', Arial, sans-serif;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
}
.snip1189 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.snip1189 li {
  display: inline-block;
  list-style: outside none none;
  margin: 0 1em;
  padding: 0;
}
.snip1189 a {
  padding: 0.5em 0.8em;
  margin: 0.2em 0;
  display: block;
  color: rgba(10, 10, 10, 0.5);
  position: relative;
  text-decoration: none;
}
.snip1189 a:before,
.snip1189 a:after {
  height: 14px;
  width: 14px;
  position: absolute;
  content: '';
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  opacity: 0;
}
.snip1189 a:before {
  left: 0;
  top: 0;
  border-left: 3px solid #c0392b;
  border-top: 3px solid #c0392b;
  -webkit-transform: translate(100%, 50%);
  transform: translate(100%, 50%);
}
.snip1189 a:after {
  right: 0;
  bottom: 0;
  border-right: 3px solid #c0392b;
  border-bottom: 3px solid #c0392b;
  -webkit-transform: translate(-100%, -50%);
  transform: translate(-100%, -50%);
}
.snip1189 a:hover,
.snip1189 .current a {
  color:brown;
}
.snip1189 a:hover:before,
.snip1189 .current a:before,
.snip1189 a:hover:after,
.snip1189 .current a:after {
  -webkit-transform: translate(0%, 0%);
  transform: translate(0%, 0%);
  opacity: 1;
}

