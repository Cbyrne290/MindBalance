#  Mind Balance: Wellness Studio Website

<img width="2242" height="1308" alt="image" src="https://github.com/user-attachments/assets/a47f0f28-3e48-4e9b-a406-c2406ede0e92" />


Mind Balance is a multi-page, responsive website designed for a modern wellness studio offering yoga, meditation, and mindfulness classes. The site aims to provide a calming, professional user experience while driving class sign-ups and registrations through clear calls to action.

---
## Table of contents

- [User Experience](#User-Experience)
    - [Business Goals](#Business-Goals)
    - [Users Stories](#Users-Stories)  

- [Design](#Design)
    - [Colour Scheme](#Colour-Scheme)
    - [Fonts](#Fonts)
    - [Headings](#Headings)
    - [Logo](#Logo)
    - [Imagery](#Imagery)
    
    
- [Features](#Features)
    - [Navigation Bar & Header](#Navigation-Bar-&-Header)
    - [Custom Styling & Responsiveness](#Custom-Styling-&-Responsiveness)
    - [Core Pages](#Core-Pages)
    - [Functionality](#Functionality)
    - [Wireframes](#wireframes)

- [Colors and fonts](#colors-and-fonts)
- [Deployment](#deployment)
- [Testing](#testing)
    - [Lighthouse reports](#lighthouse-reports)
    - [Resolved issues](#resolved-issues)
    - [Remaining issues](#remaining-issues)
- [Finished website](#finished-website)  
- [Credits](#credits)
---
##  User Experience (UX)

The primary goal of this site is to create a welcoming, trustworthy online presence that converts visitors into new clients by making information and registration effortless.

### Business Goals

* **Attract New Clients:** Use a clear **Introductory Offer** and visible **Registration Forms** to drive initial sign-ups.
* **Build Trust & Credibility:** Showcase professional services, certified instructors, and clear mission statements (on the **About** page).
* **Increase Engagement:** Provide essential information like class schedules and contact details easily accessible across all pages.

### User Stories

As a potential new client, I want to:
* Easily find out **what classes** are offered and **when** they run. (Classes page)
* Quickly understand the **cost** of classes and any **special offers**. (Classes Offer Box)
* Be able to **register** for a class directly on the website. (Classes Registration Form)
* Understand the **values and background** of the studio before committing. (About page)
* Easily **contact** the studio via phone, email, or a simple form. (Contact page & Footer)

---

##  Design

The design is built on a modern, natural, and calming color scheme, utilizing custom fonts to distinguish the brand.

### Colour Scheme
The colour scheme was picked with the help of the website Coolors,The palette reflects wellness through calming colours. **Muted Olive** symbolizes harmony and growth. The **Porcelain** background provides a clean, soft canvas that isnt to overwhelming on the users eyes. **Graphite** ensures strong readability for all text elements, while a subtle **Light Bronze** is used sparingly to draw attention to key interactive features.

The site uses a **Muted Olive, Porcelain, Graphite and Light Bronze** palette to evoke a sense of calm, nature, and professionalism.

<img width="2880" height="992" alt="image" src="https://github.com/user-attachments/assets/78ae655c-87e1-411f-a0f6-7036e780b98e" />


| Colour Name | HEX Code | Usage |
| :--- | :--- | :--- |
| **Muted Olive** | `#8FBC8F` | Primary color, used for headings, icons, borders, and buttons. |
| **Porcelain** | `#FAF9F6` | Main background color (`--bg-color`). |
| **Graphite** | `#333333` | Primary text color (`--text-color`), used for high-contrast text and the dark footer background. |
| **Light Bronze** | `#d4a373` | Secondary accent color, used sparingly in the footer titles. |

### Fonts
Fonts were chosen from [Google Fonts](https://fonts.google.com/).

* **Headings (`h1`, `h2`, `h3`):** **Playfair Display**, a serif font used for its elegant and sophisticated appearance, reinforcing the quality of the brand.
* **Body Text:** **Lato**, a clean, highly readable sans-serif font used for all body text, navigation, and form labels, ensuring accessibility.

### Logo
Logo was created with a free online tool called [looka](https://looka.com/)

<img width="536" height="126" alt="image" src="https://github.com/user-attachments/assets/d69ec02f-71e8-4f36-b099-53197fca4687" />

### Imagery

The **Hero Section** on the Home page features a calming, natural image (a sunset or beach scene) set with a parallax effect to provide an immersive and tranquil first impression. All icons (using Font Awesome) are chosen to represent wellness, scheduling, and community.

<img width="2833" height="1591" alt="image" src="https://github.com/user-attachments/assets/281e3e60-e8ab-490e-8142-856469b2a220" />

---

## Features

###  Navigation Bar and Header
* **4-Tab Navigation:** Consistent navigation bar across all four pages (`Home`, `Classes`, `About`, `Contact`).
* **Styled Logo:** The logo (`Mind Balance`) uses the Sage Green icon and Playfair Display font for immediate brand recognition.
  All the pages have a similar navigation bar, which is designed to be responsive to all devices all the way from a mobile phone to a laptop.
  below you can see the similar looking navigation bar on different sized devices to compare.

**Mobile Phone**
<img width="1179" height="375" alt="image" src="https://github.com/user-attachments/assets/2cf43d7f-3294-4b0c-8868-f66adac472d4" />
**Tablet**
<img width="1599" height="196" alt="image" src="https://github.com/user-attachments/assets/476f6015-f542-4a78-b641-af6b2d2ad5db" />
**Laptop**
<img width="2880" height="120" alt="image" src="https://github.com/user-attachments/assets/578e630d-fd04-4f41-a5fa-a71f7ab83283" />

###  Custom Styling & Responsiveness

* **Custom Buttons:** The main call-to-action button uses a custom "pill" shape and the primary Sage Green color, overriding default Bootstrap styles.
<img width="1318" height="500" alt="image" src="https://github.com/user-attachments/assets/d89f51d7-e899-492e-a8e5-0fae691950f8" />
  
* **Offer Box Overrides:** Custom CSS was added to ensure the special offer box border is Sage Green and the internal text/underline is Charcoal, overriding strong Bootstrap defaults.
<img width="912" height="306" alt="image" src="https://github.com/user-attachments/assets/7fcee4b0-dbc3-4148-be72-ae25545415bd" />

* **`bg-light-sage` Utility Class:** A custom utility class was created and applied to the Classes page to provide visual separation between sections.
<img width="2880" height="986" alt="image" src="https://github.com/user-attachments/assets/15428b5d-3c87-4d21-8af1-8d08f0acf898" />

###  Core Pages

* **Home Page (`index.html`):** Features the Parallax Hero Image and the 3-column Features/Benefits section.
<img width="2878" height="1626" alt="image" src="https://github.com/user-attachments/assets/d39f985c-9066-4c9c-a623-9e5d3e2ae8b8" />

* **Classes Page (`classes.html`):** Includes a clear Class Schedule and an embedded, working **Registration Form** for direct client sign-ups.
 <img width="2880" height="1624" alt="image" src="https://github.com/user-attachments/assets/cd6af61a-0412-496e-a148-8fb04f839bfa" />

* **About Page (`about.html`):** Features detailed Company History and the studio's Mission & Values, using the cohesive design structure.
<img width="2880" height="1624" alt="image" src="https://github.com/user-attachments/assets/98779bb9-31a3-49b5-a83d-f06bdfefd810" />

* **Contact Page (`contact.html`):** Inludes a clear contact page for users to message are team and get quick and helpfull answers any problems they might have.
<img width="2880" height="1620" alt="image" src="https://github.com/user-attachments/assets/b985d203-af17-4cfa-a185-f7dcdb43a708" />

### Wireframes

* **Home Page**

  <img width="860" height="1132" alt="image" src="https://github.com/user-attachments/assets/1752940e-1f3c-4b50-bb83-88c9973e3277" />

<img width="750" height="898" alt="image" src="https://github.com/user-attachments/assets/d02b525e-beec-43c3-9073-ca2d36ff4258" />

<img width="1854" height="1064" alt="image" src="https://github.com/user-attachments/assets/e5a8c93e-7b55-4dfe-8245-5316ce933b46" />

* **Classes Page**

  <img width="880" height="1136" alt="image" src="https://github.com/user-attachments/assets/8d434a9f-08be-47b1-be8b-7cf600fe1609" />

<img width="736" height="900" alt="image" src="https://github.com/user-attachments/assets/76ffc6a9-44f1-4755-b963-d6b852185110" />

<img width="1856" height="1146" alt="image" src="https://github.com/user-attachments/assets/bd485392-e31e-457e-97f5-a2d0d78d2ad0" />

* **About Page**

  <img width="864" height="1130" alt="image" src="https://github.com/user-attachments/assets/5b93fb7a-3975-43d7-a2a2-66e632f6e856" />

<img width="732" height="930" alt="image" src="https://github.com/user-attachments/assets/a085e745-f6de-4c94-a91f-1e501a3bd4e4" />

<img width="1856" height="1150" alt="image" src="https://github.com/user-attachments/assets/9602056a-2b5c-4e73-ac5f-4956ba653b87" />

* **Contact Page**

  <img width="890" height="1130" alt="image" src="https://github.com/user-attachments/assets/4b67c01d-0061-48a2-a5cb-2640fabb06a1" />

<img width="726" height="938" alt="image" src="https://github.com/user-attachments/assets/c0947eca-0c0f-4bb6-9a95-7da599bfa188" />

<img width="1854" height="1144" alt="image" src="https://github.com/user-attachments/assets/f17217b2-3dd3-411e-8446-c5ec509841b5" />

---
###  Functionality
* **Form Submission Alerts:** Both the main Contact form (`contact.html`) and the Registration form (`classes.html`) provide a simple JavaScript pop-up alert to confirm submission, giving the user immediate feedback.
  <img width="2866" height="1336" alt="image" src="https://github.com/user-attachments/assets/2ccaba61-9e03-441b-8107-f0dd62582197" />

  <img width="2876" height="1192" alt="image" src="https://github.com/user-attachments/assets/4d7a8a11-fd52-469c-8b3e-2f66fedce4e2" />

* **Modern Footer:** A 3-column structured footer provides easy access to Brand info, Contact details, and Social Media links on all pages.
<img width="2876" height="454" alt="image" src="https://github.com/user-attachments/assets/1de00450-c855-4c07-acd4-e6cddd84a978" />
---

##  Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript**
* **Bootstrap:** Used for responsive grid structure and basic form styling.
* **Google Fonts:** For 'Playfair Display' and 'Lato' typography.
* **Looka:** Used for all icons across the site (Logo, Features, Footer Contact).

---

## 5. Testing

The website was extensively tested across multiple devices and viewport sizes to ensure responsiveness and correct functionality.

### Functional Testing
* **Navigation:** All four links (Home, Classes, About, Contact) successfully direct the user to the correct page.
* **Forms:** Both the 'Get In Touch' form and the 'Registration' form correctly trigger a success alert upon submission.
* **Custom Styling:** The Muted olive button (`btn-success`) and the custom border/text colors on the 'Introductory Offer' box render correctly, demonstrating successful CSS overrides.
* **Footer Links:** Contact details are present, and social media links have correct `target="_blank"` and `aria-label` attributes for usability.

### 5.5 Validator Testing
The HTML and CSS have been checked for errors. 

HTML has been validated with validator.w3.org without any errors
* **index.html**
<img width="2866" height="1436" alt="image" src="https://github.com/user-attachments/assets/b84441e3-47f6-4896-8375-34d479a8d787" />

* **contact.html**
<img width="2858" height="1442" alt="image" src="https://github.com/user-attachments/assets/e88779e7-3b70-477d-aa98-71ac78bb8d7b" />

* **classes.html**
<img width="2866" height="1448" alt="image" src="https://github.com/user-attachments/assets/810b0722-2ab2-4547-a554-3d0984d7635a" />

* **about.html**
<img width="2870" height="1442" alt="image" src="https://github.com/user-attachments/assets/d07ea4c8-a43b-4aaa-9ec3-77a86dc6b631" />

CSS has been validated with jigsaw.w3.org without any errors
<img width="2876" height="384" alt="image" src="https://github.com/user-attachments/assets/2d0088cd-ca1b-4a2a-a6e5-4132682b3e1e" />

<img width="2878" height="770" alt="image" src="https://github.com/user-attachments/assets/7ca95f2d-ef21-41dc-8235-34655211ecd1" />

---
The source code was validated against official standards to ensure compliance and best practices.

HTML Validation: Passed W3C HTML Validator with no errors.

CSS Validation: Passed W3C CSS Validator with no errors.


* **Deployment Status**

The Mind Balance project is hosted on GitHub and deployed via the GitHub Pages service.

Deployment Method: Deployed from the main branch.

Live Site URL: [Insert Live Site Link Here]

Repository URL: [Insert GitHub Repository Link Here]

[IMAGE: Screenshot of the GitHub Pages Settings page confirming successful deployment]

* **Deployment History Proof**

The deployment history confirms that recent fixes were successfully processed and pushed to the live environment.

[IMAGE: Screenshot of the GitHub Deployment History showing recent successful deployments]

## 👏 Credits

* **Code:** Developed entirely by Callum Byrne.
* **Frameworks & Libraries:** Bootstrap, Font Awesome, Google Fonts.
* **Imagery:** The Hero section background image is sourced from Unsplash (URL provided in `styles.css`).
