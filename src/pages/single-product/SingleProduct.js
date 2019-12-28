import React from 'react';
import './App.css';

class SingleProduct extends React.Component {
    render() {
        return (
            <header className="main_menu home_menu">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-11">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="index.html"> <img src="img/logo.png" alt="logo"/> </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="menu_icon"><i className="fas fa-bars"></i></span>
                                </button>

                                <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="index.html">Home</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="blog.html"
                                               id="navbarDropdown_1"
                                               role="button" data-toggle="dropdown" aria-haspopup="true"
                                               aria-expanded="false">
                                                Shop
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                                                <a className="dropdown-item" href="category.html"> shop category</a>
                                                <a className="dropdown-item" href="single-product.html">product
                                                    details</a>

                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="blog.html"
                                               id="navbarDropdown_3"
                                               role="button" data-toggle="dropdown" aria-haspopup="true"
                                               aria-expanded="false">
                                                pages
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown_2">
                                                <a className="dropdown-item" href="login.html">
                                                    login

                                                </a>
                                                <a className="dropdown-item" href="tracking.html">tracking</a>
                                                <a className="dropdown-item" href="checkout.html">product checkout</a>
                                                <a className="dropdown-item" href="cart.html">shopping cart</a>
                                                <a className="dropdown-item" href="confirmation.html">confirmation</a>
                                                <a className="dropdown-item" href="elements.html">elements</a>
                                            </div>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="blog.html"
                                               id="navbarDropdown_2"
                                               role="button" data-toggle="dropdown" aria-haspopup="true"
                                               aria-expanded="false">
                                                blog
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown_2">
                                                <a className="dropdown-item" href="blog.html"> blog</a>
                                                <a className="dropdown-item" href="single-blog.html">Single blog</a>
                                            </div>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="hearer_icon d-flex">
                                    <div className="dropdown cart">
                                        <a className="dropdown-toggle" href="#" id="navbarDropdown3" role="button"
                                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="ti-bag"></i>
                                        </a>

                                    </div>
                                    <a id="search_1" href="javascript:void(0)"><i className="ti-search"></i></a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="search_input" id="search_input_box">
                    <div className="container ">
                        <form className="d-flex justify-content-between search-inner">
                            <input type="text" className="form-control" id="search_input" placeholder="Search Here"/>
                                <button type="submit" className="btn"></button>
                                <span className="ti-close" id="close_search" title="Close Search"></span>
                        </form>
                    </div>
                </div>
            </header>

        <section className="breadcrumb breadcrumb_bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="breadcrumb_iner">
                            <div className="breadcrumb_iner_item">
                                <p>Home/Shop/Single product</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="product_image_area section_padding">
            <div className="container">
                <div className="row s_product_inner">
                    <div className="col-lg-5">
                        <div className="product_slider_img">
                            <div id="vertical">
                                <div data-thumb="img/product_details/prodect_details_1.png">
                                    <img src="img/product_details/prodect_details_1.png"/>
                                </div>
                                <div data-thumb="img/product_details/prodect_details_2.png">
                                    <img src="img/product_details/prodect_details_2.png"/>
                                </div>
                                <div data-thumb="img/product_details/prodect_details_3.png">
                                    <img src="img/product_details/prodect_details_3.png"/>
                                </div>
                                <div data-thumb="img/product_details/prodect_details_4.png">
                                    <img src="img/product_details/prodect_details_4.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <div className="s_product_text">
                            <h3>Faded SkyBlu Denim Jeans</h3>
                            <h2>$149.99</h2>
                            <ul className="list">
                                <li>
                                    <a className="active" href="#">
                                        <span>Category</span> : Household</a>
                                </li>
                                <li>
                                    <a href="#"> <span>Availibility</span> : In Stock</a>
                                </li>
                            </ul>
                            <p>
                                Mill Oil is an innovative oil filled radiator with the most modern technology. If you
                                are looking for something that can make your interior look awesome, and at the same
                                time.
                            </p>
                            <div className="card_area">
                                <div className="product_count d-inline-block">
                                    <span className="inumber-decrement"> <i className="ti-minus"></i></span>
                                    <input className="input-number" type="text" value="1" min="0" max="10"/>
                                        <span className="number-increment"> <i className="ti-plus"></i></span>
                                </div>
                                <div className="add_to_cart">
                                    <a href="#" className="btn_3">add to cart</a>
                                    <a href="#" className="like_us"> <i className="ti-heart"></i> </a>
                                </div>
                                <div className="social_icon">
                                    <a href="#" className="fb"><i className="ti-facebook"></i></a>
                                    <a href="#" className="tw"><i className="ti-twitter-alt"></i></a>
                                    <a href="#" className="li"><i className="ti-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="product_description_area">
            <div className="container">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab"
                           aria-controls="home"
                           aria-selected="true">Description</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                           aria-controls="profile"
                           aria-selected="false">Specification</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                           aria-controls="contact"
                           aria-selected="false">Comments</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" id="review-tab" data-toggle="tab" href="#review" role="tab"
                           aria-controls="review"
                           aria-selected="false">Reviews</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <p>
                            Beryl Cook is one of Britain’s most talented and amusing artists
                            .Beryl’s pictures feature women of all shapes and sizes enjoying
                            themselves .Born between the two world wars, Beryl Cook eventually
                            left Kendrick School in Reading at the age of 15, where she went
                            to secretarial school and then into an insurance office. After
                            moving to London and then Hampton, she eventually married her next
                            door neighbour from Reading, John Cook. He was an officer in the
                            Merchant Navy and after he left the sea in 1956, they bought a pub
                            for a year before John took a job in Southern Rhodesia with a
                            motor company. Beryl bought their young son a box of watercolours,
                            and when showing him how to use it, she decided that she herself
                            quite enjoyed painting. John subsequently bought her a child’s
                            painting set for her birthday and it was with this that she
                            produced her first significant work, a half-length portrait of a
                            dark-skinned lady with a vacant expression and large drooping
                            breasts. It was aptly named ‘Hangover’ by Beryl’s husband and
                        </p>
                        <p>
                            It is often frustrating to attempt to plan meals that are designed
                            for one. Despite this fact, we are seeing more and more recipe
                            books and Internet websites that are dedicated to the act of
                            cooking for one. Divorce and the death of spouses or grown
                            children leaving for college are all reasons that someone
                            accustomed to cooking for more than one would suddenly need to
                            learn how to adjust all the cooking practices utilized before into
                            a streamlined plan of cooking that is more efficient for one
                            person creating less
                        </p>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                <tr>
                                    <td>
                                        <h5>Width</h5>
                                    </td>
                                    <td>
                                        <h5>128mm</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Height</h5>
                                    </td>
                                    <td>
                                        <h5>508mm</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Depth</h5>
                                    </td>
                                    <td>
                                        <h5>85mm</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Weight</h5>
                                    </td>
                                    <td>
                                        <h5>52gm</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Quality checking</h5>
                                    </td>
                                    <td>
                                        <h5>yes</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Freshness Duration</h5>
                                    </td>
                                    <td>
                                        <h5>03days</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>When packeting</h5>
                                    </td>
                                    <td>
                                        <h5>Without touch of hand</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Each Box contains</h5>
                                    </td>
                                    <td>
                                        <h5>60pcs</h5>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="comment_list">
                                    <div className="review_item">
                                        <div className="media">
                                            <div className="d-flex">
                                                <img src="img/product/single-product/review-1.png" alt=""/>
                                            </div>
                                            <div className="media-body">
                                                <h4>Blake Ruiz</h4>
                                                <h5>12th Feb, 2017 at 05:56 pm</h5>
                                                <a className="reply_btn" href="#">Reply</a>
                                            </div>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo
                                        </p>
                                    </div>
                                    <div className="review_item reply">
                                        <div className="media">
                                            <div className="d-flex">
                                                <img src="img/product/single-product/review-2.png" alt=""/>
                                            </div>
                                            <div className="media-body">
                                                <h4>Blake Ruiz</h4>
                                                <h5>12th Feb, 2017 at 05:56 pm</h5>
                                                <a className="reply_btn" href="#">Reply</a>
                                            </div>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo
                                        </p>
                                    </div>
                                    <div className="review_item">
                                        <div className="media">
                                            <div className="d-flex">
                                                <img src="img/product/single-product/review-3.png" alt=""/>
                                            </div>
                                            <div className="media-body">
                                                <h4>Blake Ruiz</h4>
                                                <h5>12th Feb, 2017 at 05:56 pm</h5>
                                                <a className="reply_btn" href="#">Reply</a>
                                            </div>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="review_box">
                                    <h4>Post a comment</h4>
                                    <form className="row contact_form" action="contact_process.php" method="post"
                                          id="contactForm"
                                          noValidate="novalidate">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="name" name="name"
                                                       placeholder="Your Full name"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="email" className="form-control" id="email" name="email"
                                                       placeholder="Email Address"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="number" name="number"
                                                       placeholder="Phone Number"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                      <textarea className="form-control" name="message" id="message" rows="1"
                                placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12 text-right">
                                            <button type="submit" value="submit" className="btn_3">
                                                Submit Now
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row total_rate">
                                    <div className="col-6">
                                        <div className="box_total">
                                            <h5>Overall</h5>
                                            <h4>4.0</h4>
                                            <h6>(03 Reviews)</h6>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="rating_list">
                                            <h3>Based on 3 Reviews</h3>
                                            <ul className="list">
                                                <li>
                                                    <a href="#">5 Star
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> 01</a>
                                                </li>
                                                <li>
                                                    <a href="#">4 Star
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> 01</a>
                                                </li>
                                                <li>
                                                    <a href="#">3 Star
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> 01</a>
                                                </li>
                                                <li>
                                                    <a href="#">2 Star
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> 01</a>
                                                </li>
                                                <li>
                                                    <a href="#">1 Star
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i> 01</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_list">
                                    <div className="review_item">
                                        <div className="media">
                                            <div className="d-flex">
                                                <img src="img/product/single-product/review-1.png" alt=""/>
                                            </div>
                                            <div className="media-body">
                                                <h4>Blake Ruiz</h4>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo
                                        </p>
                                    </div>
                                    <div className="review_item">
                                        <div className="media">
                                            <div className="d-flex">
                                                <img src="img/product/single-product/review-2.png" alt=""/>
                                            </div>
                                            <div className="media-body">
                                                <h4>Blake Ruiz</h4>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo
                                        </p>
                                    </div>
                                    <div className="review_item">
                                        <div className="media">
                                            <div className="d-flex">
                                                <img src="img/product/single-product/review-3.png" alt=""/>
                                            </div>
                                            <div className="media-body">
                                                <h4>Blake Ruiz</h4>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="review_box">
                                    <h4>Add a Review</h4>
                                    <p>Your Rating:</p>
                                    <ul className="list">
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-star"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-star"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-star"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-star"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-star"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <p>Outstanding</p>
                                    <form className="row contact_form" action="contact_process.php" method="post"
                                          noValidate="novalidate">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="name"
                                                       placeholder="Your Full name"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="email"
                                                       placeholder="Email Address"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="number"
                                                       placeholder="Phone Number"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea className="form-control" name="message" rows="1"
                                                          placeholder="Review"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12 text-right">
                                            <button type="submit" value="submit" className="btn_3">
                                                Submit Now
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="product_list best_seller padding_bottom">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="section_tittle text-center">
                            <h2>Best Sellers</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_category_product">
                            <div className="single_category_img">
                                <img src="img/category/category_2.png" alt=""/>
                                    <div className="category_social_icon">
                                        <ul>
                                            <li><a href="#"><i className="ti-heart"></i></a></li>
                                            <li><a href="#"><i className="ti-bag"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="category_product_text">
                                        <a href="single-product.html"><h5>Long Sleeve TShirt</h5></a>
                                        <p>$150.00</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_category_product">
                            <div className="single_category_img">
                                <img src="img/category/category_3.png" alt=""/>
                                    <div className="category_social_icon">
                                        <ul>
                                            <li><a href="#"><i className="ti-heart"></i></a></li>
                                            <li><a href="#"><i className="ti-bag"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="category_product_text">
                                        <a href="single-product.html"><h5>Long Sleeve TShirt</h5></a>
                                        <p>$150.00</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_category_product">
                            <div className="single_category_img">
                                <img src="img/category/category_4.png" alt=""/>
                                    <div className="category_social_icon">
                                        <ul>
                                            <li><a href="#"><i className="ti-heart"></i></a></li>
                                            <li><a href="#"><i className="ti-bag"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="category_product_text">
                                        <a href="single-product.html"><h5>Long Sleeve TShirt</h5></a>
                                        <p>$150.00</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_category_product">
                            <div className="single_category_img">
                                <img src="img/category/category_5.png" alt=""/>
                                    <div className="category_social_icon">
                                        <ul>
                                            <li><a href="#"><i className="ti-heart"></i></a></li>
                                            <li><a href="#"><i className="ti-bag"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="category_product_text">
                                        <a href="single-product.html"><h5>Long Sleeve TShirt</h5></a>
                                        <p>$150.00</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="shipping_details section_padding border_top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_shopping_details">
                            <img src="img/icon/icon_1.png" alt=""/>
                                <h4>Free shipping</h4>
                                <p>Divided face for bearing the divide unto seed winged divided light Forth.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_shopping_details">
                            <img src="img/icon/icon_2.png" alt=""/>
                                <h4>Free shipping</h4>
                                <p>Divided face for bearing the divide unto seed winged divided light Forth.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_shopping_details">
                            <img src="img/icon/icon_3.png" alt=""/>
                                <h4>Free shipping</h4>
                                <p>Divided face for bearing the divide unto seed winged divided light Forth.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_shopping_details">
                            <img src="img/icon/icon_4.png" alt=""/>
                                <h4>Free shipping</h4>
                                <p>Divided face for bearing the divide unto seed winged divided light Forth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="instagram_photo">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="instagram_photo_iner">
                            <div className="single_instgram_photo">
                                <img src="img/instagram/inst_1.png" alt=""/>
                                    <a href="#"><i className="ti-instagram"></i></a>
                            </div>
                            <div className="single_instgram_photo">
                                <img src="img/instagram/inst_2.png" alt=""/>
                                    <a href="#"><i className="ti-instagram"></i></a>
                            </div>
                            <div className="single_instgram_photo">
                                <img src="img/instagram/inst_3.png" alt=""/>
                                    <a href="#"><i className="ti-instagram"></i></a>
                            </div>
                            <div className="single_instgram_photo">
                                <img src="img/instagram/inst_4.png" alt=""/>
                                    <a href="#"><i className="ti-instagram"></i></a>
                            </div>
                            <div className="single_instgram_photo">
                                <img src="img/instagram/inst_5.png" alt=""/>
                                    <a href="#"><i className="ti-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer className="footer_part">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-sm-6 col-lg-2">
                        <div className="single_footer_part">
                            <h4>Category</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">Male</a></li>
                                <li><a href="#">Female</a></li>
                                <li><a href="#">Shoes</a></li>
                                <li><a href="#">Fashion</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <div className="single_footer_part">
                            <h4>Company</h4>
                            <ul className="list-unstyled">
                                <li><a href="">About</a></li>
                                <li><a href="">News</a></li>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="single_footer_part">
                            <h4>Address</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">200, Green block, NewYork</a></li>
                                <li><a href="#">+10 456 267 1678</a></li>
                                <li><span>contact89@winter.com</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="single_footer_part">
                            <h4>Newsletter</h4>
                            <div id="mc_embed_signup">
                                <form target="_blank"
                                      action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                      method="get" className="subscribe_form relative mail_part">
                                    <input type="email" name="email" id="newsletter-form-email"
                                           placeholder="Email Address"
                                           className="placeholder hide-on-focus" onFocus="this.placeholder = ''"
                                           onBlur="this.placeholder = ' Email Address '"/>
                                        <button type="submit" name="submit" id="newsletter-submit"
                                                className="email_icon newsletter-submit button-contactForm">subscribe
                                        </button>
                                        <div className="mt-10 info"></div>
                                </form>
                            </div>
                            <div className="social_icon">
                                <a href="#"><i className="ti-facebook"></i></a>
                                <a href="#"><i className="ti-twitter-alt"></i></a>
                                <a href="#"><i className="ti-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        );
    }
}

export default SingleProduct;
