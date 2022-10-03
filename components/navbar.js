const navbar = () => {
    return `<div id="top-nav">
    <a href="./home.html" id="logo"><svg aria-label="BestBuy.com" role="img" class="block" height="40" width="68" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 92"><path d="M127.6 66.66h31.33v25.09h-31.34l-7.8-7.34V74.06l7.81-7.4z" fill="#fff200"></path><path d="M126.03 79.19c0 .86-.69 1.55-1.55 1.55-.86 0-1.55-.69-1.55-1.55 0-.86.69-1.55 1.55-1.55.85 0 1.55.7 1.55 1.55z" fill="#1d252c"></path><path d="M127.2 57.76c0-1.17.94-2.12 2.12-2.12 1.2 0 2.12.94 2.12 2.11 0 1.19-.93 2.11-2.12 2.11-1.17 0-2.12-.9-2.12-2.1zm3.96-.01c0-1.07-.78-1.85-1.84-1.85-1.05 0-1.83.79-1.83 1.86 0 1.08.81 1.84 1.83 1.84 1.04 0 1.84-.77 1.84-1.85zm-2.55-1.13h.71c.48 0 .79.21.79.64v.01c0 .33-.21.51-.51.57l.64.97h-.35l-.61-.92h-.33v.92h-.33l-.01-2.19zm.72 1.03c.31 0 .46-.12.46-.37v-.01c0-.28-.16-.37-.46-.37h-.38v.75h.38zM30.21 19.81l.61-.22c5.92-3.18 6.93-11.05 1.16-15.36-2.58-2.06-6.09-3.09-10.55-3.09H2.1v39.61h20.47c5.25 0 16.12-.98 16.12-11.33-.01-7.91-8.29-9.54-8.48-9.61zM14.9 10.42h4.72c1.74-.04 3.23 1.18 3.21 2.9.02 1.73-1.48 2.94-3.21 2.9H14.9v-5.8zm8.82 20.12c-.74.7-1.67 1.04-2.78 1.04H14.9v-7.11h6.03c3.28-.18 5.27 3.8 2.79 6.07zM40.39 63.65l.61-.22c5.92-3.18 6.93-11.05 1.16-15.36-2.58-2.06-6.1-3.09-10.55-3.09h-19.3v39.61h20.43c5.25 0 16.12-.98 16.12-11.33 0-7.91-8.28-9.53-8.47-9.61zm-15.27-9.39h4.68c1.74-.04 3.23 1.18 3.22 2.9.01 1.73-1.48 2.94-3.22 2.9h-4.68v-5.8zm8.78 20.13c-.74.7-1.67 1.04-2.78 1.04h-6v-7.11h6c3.27-.18 5.26 3.8 2.78 6.07zM71.48 31.13H52.33v-6.21h15.63v-9.06H52.33v-5.08h19.19V1.13h-32v39.61h31.96v-9.61zM104.23 1.13v9.64h10.47v29.97h12.73V10.77h10.47V1.13h-33.67z" fill="#fff"></path><path d="M89.75 30.5c-2.8 2.33-8.08-.25-10.16-2.38l-7.56 7.18.48.48c6.71 6.62 20.86 8.59 27.98 2.21 5.84-4.61 6.03-14.52-.04-18.59-2.29-1.46-5.4-2.86-7.97-3.52-1.31-.3-2.64-.73-3.53-1.25-2.85-1.53-.43-4.43 2.13-4.16 2.59 0 4.17 1.16 4.99 2l7.58-7.2-.14-.16C97.4-.99 84.27-1.92 77.89 3.77c-2.9 2.51-4.35 5.47-4.35 8.85-.16 8.34 7.15 11.23 13.83 13.19 1.42.6 3.28.97 3.44 2.47-.01.87-.36 1.61-1.06 2.22zM71.52 68.52c-.19 6.29-9.33 6.29-9.52 0V44.99H49.18v22.93c-.03 9.76 8.2 17.54 17.92 17.12 9.46 0 17.12-7.66 17.12-17.12V45h-12.7v23.52zM106.13 58.47 97.73 45H84.89l14.83 25.47v14.14h12.81V70.46L127.36 45h-12.84l-8.39 13.47z" fill="#fff"></path></svg></a>
    <button id="menu-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xml:space="preserve" width="32" height="32" fill="white"><path d="M19.25 7.5H4.75c-.41 0-.75-.34-.75-.75S4.34 6 4.75 6h14.5c.41 0 .75.34.75.75s-.34.75-.75.75zm0 5.25H4.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14.5c.41 0 .75.34.75.75s-.34.75-.75.75zm0 5.25H4.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14.5c.41 0 .75.34.75.75s-.34.75-.75.75z"></path></svg>Menu</button>
    <input type="search" id="search" placeholder="Search Best Buy">
    <div id="top-nav-right">
        <button id="aiea"><svg aria-hidden="true" role="img" viewBox="0 0 100 100" width="30" height="31" fill="#fff"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" xml:space="preserve"><path d="M28.9 11.92h-3.78a.98.98 0 0 0 0 1.96h3.79c.14 0 .25.12.25.25V28c0 .14-.11.26-.25.26h-5.03v-4.6c0-.84-.68-1.52-1.52-1.52h-9.72c-.82 0-1.44.65-1.44 1.52v4.6H6.24a.27.27 0 0 1-.27-.27V16.47h15.7c.54 0 .98-.44.98-.98V2.84a.98.98 0 0 0-.98-.97H5.8c-.25 0-.49.1-.67.26L1.2 5.85c-.2.19-.3.45-.3.72v5.1c0 .26.1.51.3.7l2.84 2.77c0 .05-.03.09-.03.14v12.7c0 1.23 1 2.23 2.23 2.23H28.9c1.22 0 2.2-1 2.2-2.21V14.13a2.2 2.2 0 0 0-2.2-2.2zM2.86 7 6.2 3.82h14.5v10.69H6.2l-3.35-3.26V7zm19.08 21.27h-3.48V24.1h3.48v4.16zm-8.78-4.16h3.34v4.16h-3.34V24.1zM6.38 9.06a.98.98 0 0 1-1.96 0c0-.54.45-.98.98-.98.55 0 .98.44.98.98z"></path></svg></svg>Aiea</button>
        <a href="./addtocart.html"><button id="cart"><svg aria-label="Cart Icon" role="img" width="26px" height="26px" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 32 32" xml:space="preserve"><path d="M9.829 19.824h17.575c.452 0 .845-.31.951-.75l2.9-12.137a.978.978 0 0 0-.952-1.205H9.876a.978.978 0 0 0 0 1.955h19.188L26.632 17.87H9.829c-.064 0-.124.015-.188.019L6.107 1.818a.978.978 0 0 0-.955-.769H1.697a.978.978 0 0 0 0 1.956h2.669l3.418 15.543a3.465 3.465 0 0 0-1.432 2.797c0 1.304.73 2.428 1.793 3.023a3.994 3.994 0 0 0-.932 2.548 4.04 4.04 0 0 0 4.034 4.035 4.04 4.04 0 0 0 4.035-4.035c0-.77-.228-1.482-.603-2.094h7.59a3.999 3.999 0 0 0-.597 2.094c0 2.225 1.809 4.035 4.034 4.035s4.034-1.81 4.034-4.035c0-1.926-.914-2.916-1.682-3.407-.936-.6-1.956-.647-2.247-.647-.024 0-.042.004-.065.005H9.83a1.523 1.523 0 0 1-1.521-1.522c0-.838.682-1.521 1.521-1.521zm1.418 9.172a2.082 2.082 0 0 1-2.079-2.08c0-1.146.933-2.08 2.08-2.08s2.078.934 2.078 2.08-.932 2.08-2.079 2.08zm16.539-2.08c0 1.147-.934 2.08-2.08 2.08a2.082 2.082 0 0 1-2.08-2.08c0-1.146.934-2.08 2.08-2.08H25.719c.06 0 .119-.006.175-.017.29.013.91.113 1.34.515.366.341.552.874.552 1.582z"></path></svg>Cart</button></a>
    </div>
</div>
<div id="horizontal-line"></div>
<div id="down-nav">
    <div id="down-nav-left">
        <a href="./topdeals.html">Top Deals</a>
        <a href="">Deal of the Day</a>
        <a href="#">Totaltech Membership</a>
        <a href="#">Credit Cards</a>
        <a href="#">Gift Cards</a>
        <a href="#">Gift Ideas</a>
        <a href="./helth-wellness.html">Health & Wellness</a>
        <a href="./laptop.html">More</a>
    </div>
    <div id="down-nav-right">
        <button class="dropbtn"><i class="fa-solid fa-address-card"></i>Account<i class="fa-solid fa-chevron-down"></i></button>
        <a href="#">Recently Viewed</a>
        <a href="#">Order Status</a>
        <a href="#">Saved Items</a>
    </div>
</div>
<div class="dropdown hide">
    <div class="sub-menu">
        <p>Becoming a My Best Buy® member comes with easy order tracking, rewards, offers and more.</p>
        <a href="./login.html"><button id="sign-in-btn">Sign ln</button></a>
        <a href="./signup.html"><button id="sign-up-btn">Create Account</button></a>
    </div>
</div>`
}

export { navbar };