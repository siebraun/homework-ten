
//navigation
var homeContent = `<div class="home-wrapper">
<div class="hero">

    <div class="hero-text">
        <h1>travel-fly</h1>

        <p> <em> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Fugiat aliquid minus nemo sed est. </em></p>

        <div class="read-more">
            <p>READ MORE</p>
        </div>
    </div>
</div>

<section class="promo-tours">
    <div class="promo" id="promo1">
        <h2>Israel</h2>
        <h3>from $1000</h3>
        <div class="promo-button"><a id="isreal" href="#">LEARN MORE</a></div>
    </div>


    <div class="promo" id="promo2">
        <h2>U.S.A</h2>
        <h3>from $1500</h3>
        <div class="promo-button"><a id="usa"  href="#">LEARN MORE</a></div>
    </div>


    <div class="promo" id="promo3">
        <h2>australia</h2>
        <h3>from $1800</h3>
        <div class="promo-button"><a id="australia" href="#">LEARN MORE</a></div>
    </div>
</section>

<section class="booking-form">
    <h1>Booking Form</h1>


    <div class="booking-row">
        <form>
            <input type="text" class="name" name="name" value="name...">
        </form>

        <form>
            <input type="text" class="email" name="email" value="email...">
        </form>
    </div>



    <div class="booking-row">
        <form>
            <input type="text" class="country" name="country" value="country...">
        </form>

        <form>
            <input type="text" class="hotel" name="hotel" value="hotel...">
        </form>
    </div>



    <div class="booking-row">
        <div class="check-in-out"><p>Check-in</p></div>
        <div class="check-in-out-date">
            <p>05/10/2020</p>
            <img src="img/calendar.svg" alt="">
        </div>
    </div>

    <div class="booking-row">
        <div class="check-in-out"><p>Check-out</p></div>
        <div class="check-in-out-date">
            <p>05/20/2020</p>
            <img src="img/calendar.svg" alt="">
        </div>
    </div>

    <div class="booking-row">


        <label for="adults">Adults</label>
        <div class="guests">
            <select name="adults" class="guests">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>


        <label for="children">Children</label>
        <div class="guests">
             <select name="children" class="guests">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>

        <label for="rooms">Rooms</label>
        <div class="guests">
            <select name="rooms" class="guests">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
    </div>

    <div class="booking-row">
        <form>
            <input type="text" class="message" name="message" value="message...">
        </form>
    </div>

    <div class="submit-button">
        <p>SUBMIT</p>
    </div>
</section>
</div>`

var aboutContent = `<div class="about">
<div class="about-top-section">
    <h1>About:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="about-bottom-section">


    <h3>Client Quotes:</h3>


    <div class="client">


        <div class="client1-img">
        </div>



        <div class="client-quote">
            <p> <em>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            </em></p>

            <div class="client-name">
                <p>- Miranda Brown</p>
            </div>
        </div>
    </div>




    <div class="client">

        <div class="client2-img">
        </div>

        <div class="client-quote">
            <p> <em>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            </em> </p>

            <div class="client-name"> 
                <p>- Jonathan Wes</p>
            </div>
        </div>
    </div>
</div>
</div>`

var toursContent = `    
<div class="tours-hero">
    <h1>Tours:</h1>
</div>



<section class="tours-menu">
    <div class="tour" id="tour1">
        <h2>Israel</h2>
        <h3>from $1000</h3>
        <div class="tour-button"><a id="israel" href="#">LEARN MORE</a></div>
    </div>


    <div class="tour" id="tour2">
        <h2>U.S.A</h2>
        <h3>from $1500</h3>
        <div  class="tour-button"><a id="usa" href="#">LEARN MORE</a></div>
    </div>


    <div class="tour" id="tour3">
        <h2>australia</h2>
        <h3>from $1800</h3>
        <div class="tour-button"><a id="australia" href="#>LEARN MORE</a></div>
    </div>
</section>

<section class="tours-menu"></section>

<section class="tours-menu">
    <div class="tour" id="tour4">
        <h2>New Zealand</h2>
        <h3>from $1200</h3>
        <div class="tour-button"><a id="newzealand" href="#">LEARN MORE</a></div>
    </div>


    <div class="tour" id="tour5">
        <h2>France</h2>
        <h3>from $2500</h3>
        <div class="tour-button"><a id="france" href=#">LEARN MORE</a></div>
    </div>


    <div class="tour" id="tour6">
        <h2>egypt</h2>
        <h3>from $900</h3>
        <div class="tour-button"><a id="egypt" href="#">LEARN MORE</a></div>
    </div>
</section>

<section class="tours-menu">
    <div class="tour" id="tour7">
        <h2>Japan</h2>
        <h3>from $1300</h3>
        <div class="tour-button"><a id="japan" href="#">LEARN MORE</a></div>
    </div>


    <div class="tour" id="tour8">
        <h2>Canada</h2>
        <h3>from $2000</h3>
        <div class="tour-button"><a id="canada" href="#">LEARN MORE</a></div>
    </div>


    <div class="tour" id="tour9">
        <h2>U.A.E.</h2>
        <h3>from $3000</h3>
        <div class="tour-button"><a id="uae" href="#">LEARN MORE</a></div>
    </div>
</section>`

var specialContent = `<div class="special-offers">
<h3>Special Offers:</h3>

<div class="offer-wrapper">
    <div class="offer-01-img"></div>

    <div class="offer-text">
        <div class="offer-header">
            <h3>Barcelona, Spain</h3>
            <h4>(20% off!)</h4>
        </div>

        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
        </p>

        <div class="button"><p>LEARN MORE</p></div>
    </div>
</div>



<div class="offer-wrapper">
    <div class="offer-02-img"></div>

    <div class="offer-text">
        <div class="offer-header">
            <h3>Bangkok, Thailand</h3>
            <h4>(10% off!)</h4>
        </div>

        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
        </p>

        <div class="button"><p>LEARN MORE</p></div>
    </div>
</div>

</div>`

var blogContent = `<div class="blog">
<h3>Blog:</h3>

<div class="blog-imgs">
    <div class="date">
        <h1>06</h1>
        <h2>JUN</h2>
    </div>
    <div class="header-img"></div>
</div>

<div class="blog-text">
    <h5>Sed et persipiatis unde omnis iste natus</h5>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
</div>


<div class="blog-imgs">
    <div class="date">
        <h1>06</h1>
        <h2>JUN</h2>
    </div>
    <div class="header-img"></div>
</div>

<div class="blog-text">
    <h5>Sed et persipiatis unde omnis iste natus</h5>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
</div>

</div>`

var contactContent = `<div class="contact-us">
<h3>Contact us:</h3>

<div class="contact-wrapper">
    <div class="contact-info">
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.4814465418535!2d-86.17019618462353!3d39.77374967944512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50b62a230249%3A0x4c6d48e226095245!2sICTC%20Building!5e0!3m2!1sen!2sus!4v1616368423554!5m2!1sen!2sus" width="400" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>

        <div class="info">
            <p>travel-fly Inc.</p>
            <p>8901 Marmora Road,</p>
            <p>Glasgow, D04 89GR.</p>
            <p>Freephone:+1 800 559 6580</p>
            <p>Telephone:+1 800 603 6035</p>
            <p>FAX:+1 800 889 9898</p>
            <p>E-mail: mail@travelfly.org</p></div>
    </div>

    <div class="contact-form">
        <div class="form-row">
            <form>
                <input type="text" class="name" name="name" value="Your name...">
            </form>
        </div>

        <div class="form-row">
            <form>
                <input type="text" class="email" name="email" value="Email Address...">
            </form>
        </div>

        <div class="form-row">
            <form>
                <input type="text" class="company" name="company" value="Company...">
            </form>
        </div>

        <div class="message-row">
            <form>
                <input type="text" class="message" name="message" value="Message...">
            </form>
        </div>

        <div class="button">SEND MESSAGE</div>
    </div>
</div>
</div>`


//tours pages
var australiaContent = ` <div class="tours-header" id="australia-header">
<h1>Australia Tour Package:</h1>

<h2>Starting from $1800</h2>
</div>

<div class="tours-sub-header">
<div class="tours-sub-photo" id="australia-photo-01"></div>
<div class="tours-sub-photo" id="australia-photo-02"></div>
<div class="tours-sub-photo" id="australia-photo-03"></div>
</div>

<div class="tours-days">
<h1>Day #1:</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="tours-days">
<h1>Day #2:</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="tours-days">
<h1>Day #3:</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="book-now-button"> <p>BOOK NOW</p> </div>`

var canadaContent = `  <div class="tours-header" id="canada-header">
<h1>canada Tour Package:</h1>

<h2>Starting from $2000</h2>
</div>

<div class="tours-sub-header">
<div class="tours-sub-photo" id="canada-photo-01"></div>
<div class="tours-sub-photo" id="canada-photo-02"></div>
<div class="tours-sub-photo" id="canada-photo-03"></div>
</div>

<div class="tours-days">
<h1>Day #1:</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="tours-days">
<h1>Day #2:</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="tours-days">
<h1>Day #3:</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="book-now-button"> <p>BOOK NOW</p> </div>`

var egyptContent = ` <div class="tours-header" id="egypt-header">
<h1>Egypt Tour Package:</h1>

<h2>Starting from $900</h2>
</div>

<div class="tours-sub-header">
<div class="tours-sub-photo" id="egypt-photo-01"></div>
<div class="tours-sub-photo" id="egypt-photo-02"></div>
<div class="tours-sub-photo" id="egypt-photo-03"></div>
</div>

<div class="tours-days">
<h1>Day #1:</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="tours-days">
<h1>Day #2:</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="tours-days">
<h1>Day #3:</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="book-now-button"> <p>BOOK NOW</p> </div>`

var franceContent = `<div class="tours-header" id="france-header">
<h1>France Tour Package:</h1>

<h2>Starting from $2500</h2>
</div>

<div class="tours-sub-header">
<div class="tours-sub-photo" id="france-photo-01"></div>
<div class="tours-sub-photo" id="france-photo-02"></div>
<div class="tours-sub-photo" id="france-photo-03"></div>
</div>

<div class="tours-days">
<h1>Day #1:</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="tours-days">
<h1>Day #2:</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="tours-days">
<h1>Day #3:</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="book-now-button"> <p>BOOK NOW</p> </div>`

var isrealContent = `<div class="tours-header" id="israel-header">
<h1>Isreal Tour Package:</h1>

<h2>Starting from $1000</h2>
</div>

<div class="tours-sub-header">
<div class="tours-sub-photo" id="israel-photo-01"></div>
<div class="tours-sub-photo" id="israel-photo-02"></div>
<div class="tours-sub-photo" id="israel-photo-03"></div>
</div>

<div class="tours-days">
<h1>Day #1:</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="tours-days">
<h1>Day #2:</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="tours-days">
<h1>Day #3:</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="book-now-button"> <p>BOOK NOW</p> </div>`

var japanContent = `<div class="tours-header" id="japan-header">
<h1>japan Tour Package:</h1>

<h2>Starting from $1300</h2>
</div>

<div class="tours-sub-header">
<div class="tours-sub-photo" id="japan-photo-01"></div>
<div class="tours-sub-photo" id="japan-photo-02"></div>
<div class="tours-sub-photo" id="japan-photo-03"></div>
</div>

<div class="tours-days">
<h1>Day #1:</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="tours-days">
<h1>Day #2:</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="tours-days">
<h1>Day #3:</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="book-now-button"> <p>BOOK NOW</p> </div>`

var uaeContent = `<div class="tours-header" id="uae-header">
<h1>U.A.E Tour Package:</h1>

<h2>Starting from $3000</h2>
</div>

<div class="tours-sub-header">
<div class="tours-sub-photo" id="uae-photo-01"></div>
<div class="tours-sub-photo" id="uae-photo-02"></div>
<div class="tours-sub-photo" id="uae-photo-03"></div>
</div>

<div class="tours-days">
<h1>Day #1:</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="tours-days">
<h1>Day #2:</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="tours-days">
<h1>Day #3:</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="book-now-button"> <p>BOOK NOW</p> </div>`

var usaContent = ` <div class="tours-header" id="usa-header">
<h1>U.S.A Tour Package:</h1>

<h2>Starting from $1500</h2>
</div>

<div class="tours-sub-header">
<div class="tours-sub-photo" id="usa-photo-01"></div>
<div class="tours-sub-photo" id="usa-photo-02"></div>
<div class="tours-sub-photo" id="usa-photo-03"></div>
</div>

<div class="tours-days">
<h1>Day #1:</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="tours-days">
<h1>Day #2:</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="tours-days">
<h1>Day #3:</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>

<div class="book-now-button"> <p>BOOK NOW</p> </div>`
 

export function getPageContent(pageID, callback) {
    $("#app").html(eval(pageID));
    if (callback) {
        callback();
    }

}