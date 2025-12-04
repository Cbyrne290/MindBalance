🧘 Mind Balance: Holistic Wellness Studio

Mind Balance is a multi-page, fully responsive website for a modern wellness studio offering classes in yoga, meditation, and mindfulness. This project demonstrates proficiency in HTML5, CSS3, JavaScript, and the Bootstrap framework, focusing on clean design and robust functionality to drive client registration.

1. 📋 Planning & Project Goals

This section documents the initial concept and structural planning for the Mind Balance website, ensuring alignment between design and functional requirements.

1.1 Wireframes (Structure & Layout)

Initial wireframes were created to define the high-level layout of the four core pages (Home, Classes, About, Contact) and ensure consistent navigation and footer placement across all views.

Page

Key Structural Elements

Home

Hero Image with Parallax, 3-Column Feature Section

Classes

Class Schedule Grid, Registration Form, Special Offer Box

About

Mission/Values Feature Boxes, Company History

Contact

Simplified Contact Form, Detailed Address/Contact Information

1.2 Initial Checklist & Requirements

A detailed checklist was followed to ensure all required components for the project were included, addressing both static content and dynamic features (like forms and styling overrides).

2. 🎯 User Experience (UX)

The UX strategy was centered on clarity, tranquility, and conversion efficiency.

2.1 Strategy: Client-Focused Goals

Goal

Implementation

Drive Registration

Prominent "Special Introductory Offer" box on the Classes page, custom Sage Green call-to-action buttons.

Establish Trust

Dedicated "Our Mission & Values" section on the About page using clean feature boxes.

Accessibility

Fixed-position navigation bar and modern footer with clear social and contact links on every page.

2.2 User Stories

Role

Goal

Success Metric

New Client

Find class schedules and register easily.

Form submission results in immediate success alert.

Existing Client

Quickly find contact info or social media links.

Contact details visible in the fixed, modern footer.

Mobile User

Navigate the site comfortably on a small screen.

Bootstrap collapsing navbar (hamburger menu) functions correctly.

3. 🎨 Design

The aesthetic uses a calming, nature-inspired palette and professional typography to create a sense of balance and quality.

3.1 Colour Scheme

The entire site is built using three primary colors, defined in the CSS :root variables for consistency:

Variable

Colour

HEX Code

Usage

--primary-color

Sage Green

#8FBC8F

Headings, icons, buttons, and the border of the Offer Box.

--bg-color

Cream/Off-White

#FAF9F6

Main page background color.

--text-color

Charcoal Grey

#333333

Body text, footer background, and high-contrast elements.

3.2 Typography

Headings (h1, h2, h3): Playfair Display, an elegant serif font, used to convey sophistication.

Body Text & Navigation: Lato, a clean, highly readable sans-serif font, used for all content.

3.3 Visual Consistency

Logo: The "Mind Balance" logo uses a styled leaf/spa icon (fas fa-spa) and is consistently colored with the --primary-color.

Buttons: All primary buttons use a custom "pill" shape with a Sage Green background, overriding default Bootstrap styling.

4. 💻 Features

4.1 Navigation and Header

A fixed-position header ensures the navigation bar is always accessible regardless of scroll position.

The header features the responsive Bootstrap collapsing menu for excellent mobile usability.

4.2 Home Page (index.html)

Parallax Hero: The main hero section uses a fixed background attachment for a subtle parallax scrolling effect, enhancing the tranquil aesthetic.

Features Section: A 3-column, responsive grid details the primary benefits of the studio.

4.3 Classes Page (classes.html)

Structured Schedule: Clear presentation of class times, names, and instructor details.

Special Offer Box: A prominent section using custom CSS to feature the Introductory Offer, drawing attention with its Sage Green border and Charcoal text.

Registration Form: A fully functional form linked to a JavaScript alert for instant feedback.

4.4 Contact and About Pages

Contact Page (contact.html): Features a simplified "Get In Touch" form and detailed location/phone information.

About Page (about.html): Includes the 'Our Journey to Mind Balance' narrative and 'Mission & Values' feature boxes.

4.5 Modern Footer

A dark, 3-column structure providing brand identity, contact links, and social media icons with aria-label for accessibility.

5. 🐛 Bugs and Fixes

During development, attention was paid to identifying and resolving inconsistencies and functionality issues to ensure a smooth user experience.

Bug ID

Description of Issue

Resolution & Proof

B-1.2

The 'Contact Us' form in contact.html was not triggering the JavaScript success alert.

The <form> tag was missing the necessary id="signup-form" attribute. Fix: Added the ID attribute to correctly link the form to script.js.

B-3.3

Custom colors were not applying to all elements (e.g., the Offer Box border was defaulting to gray).

Used !important tags within the custom CSS rules for the Offer Box to successfully override conflicting Bootstrap styles.

B-4.5

Initial footer layout was not responsive on mobile.

Implemented Bootstrap's col-md-4 and col-12 classes to ensure the columns stacked vertically on mobile devices.

6. 🧪 Testing

The site was rigorously tested to verify all functional and design requirements were met.

6.1 Functional Testing Features

Feature

Test Procedure

Expected Result

Actual Result

Contact Form

Fill out and click 'Send Message'.

A JavaScript alert/pop-up confirms submission.

✔️ Success

Registration Form

Select a class and click 'Register Now'.

A JavaScript alert/pop-up confirms submission.

✔️ Success

Navigation

Click all 4 links and test the mobile hamburger menu.

All links resolve correctly; mobile menu toggles smoothly.

✔️ Success

Offer Box Styling

Inspect the Offer Box border and text color.

Border is Sage Green; text is Charcoal.

✔️ Success

6.2 Code & Accessibility Validation

HTML: Tested using the W3C HTML Validator. Result: No errors found.

CSS: Tested using the W3C CSS Validator. Result: No errors found.

Responsiveness: Manually tested on Chrome Dev Tools for mobile, tablet, and desktop views.

7. 🚀 Deployment

The Mind Balance project is hosted on GitHub and deployed using GitHub Pages.

7.1 Deployment Method

The project files (HTML, CSS, JS) were pushed to the main branch of the GitHub repository.

GitHub Pages was activated, targeting the main branch.

The project was automatically deployed to the specified public URL.

7.2 Repository and Live URL

GitHub Repository: [Insert Repository Link Here]

Live Site URL: [Insert Live Site Link Here]

8. 🤝 Credits

Code: Developed entirely by Callum Byrne.

Frameworks & Libraries: Bootstrap, Font Awesome, Google Fonts.

Imagery: The hero image is sourced from Unsplash (URL provided in styles.css).

Inspiration: Project structure and detailed documentation modeled after the comprehensive PTC Consultants project report.
