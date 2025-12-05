#  Mind Balance: Wellness Studio Website

<img width="2242" height="1308" alt="image" src="https://github.com/user-attachments/assets/a47f0f28-3e48-4e9b-a406-c2406ede0e92" />


Mind Balance is a multi-page, responsive website designed for a modern wellness studio offering yoga, meditation, and mindfulness classes. The site aims to provide a calming, professional user experience while driving class sign-ups and registrations through clear calls to action.

---
## Table of contents

- [Introduction to project](#introduction-to-project)
- [Goals](#goals)
- [Overview of uers and needs](#overview-of-users-and-needs)  
- [Specified user stories](#specified-user-stories)
    - [Responsiveness and accessibility](#user-story-responsiveness-and-accessibility)
    - [Contact information](#user-story-contact-information)
    - [Find additional resources](#user-story-find-additional-resources)
    - [Social media](#user-story-social-media)
    - [Additional pictures](#user-story-additional-pictures)
    - [Membership area, part 1](#user-story-membership-area-part-1)
    - [Membership area, part 2](#user-story-membership-area-part-2)
- [Discussion of user stories](#discussion-of-user-stories)
- [Basic design of website and page requirements](#basic-design-of-website-and-page-requirements)
- [Alternative outlines considered or tried](#alternative-outlines-considered-or-tried)
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

The site uses a **Muted Olive, Porcelain, Graphite and Light Bronze** palette to evoke a sense of calm, nature, and professionalism.

<img width="2880" height="992" alt="image" src="https://github.com/user-attachments/assets/78ae655c-87e1-411f-a0f6-7036e780b98e" />


| Colour Name | HEX Code | Usage |
| :--- | :--- | :--- |
| **Muted Olive** | `#8FBC8F` | Primary color, used for headings, icons, borders, and buttons. |
| **Porcelain** | `#FAF9F6` | Main background color (`--bg-color`). |
| **Graphite** | `#333333` | Primary text color (`--text-color`), used for high-contrast text and the dark footer background. |
| **Light Bronze** | `#d4a373` | Secondary accent color, used sparingly in the footer titles. |

### Fonts

* **Headings (`h1`, `h2`, `h3`):** **Playfair Display**, a serif font used for its elegant and sophisticated appearance, reinforcing the quality of the brand.
* **Body Text:** **Lato**, a clean, highly readable sans-serif font used for all body text, navigation, and form labels, ensuring accessibility.

### Imagery

The **Hero Section** on the Home page features a calming, natural image (a sunset or beach scene) set with a parallax effect to provide an immersive and tranquil first impression. All icons (using Font Awesome) are chosen to represent wellness, scheduling, and community.

---

## 💻 Features

### 1. Navigation and Header
* **4-Tab Navigation:** Consistent navigation bar across all four pages (`Home`, `Classes`, `About`, `Contact`).
* **Styled Logo:** The logo (`Mind Balance`) uses the Sage Green icon and Playfair Display font for immediate brand recognition.

### 2. Custom Styling & Responsiveness
* **Custom Buttons:** The main call-to-action button uses a custom "pill" shape and the primary Sage Green color, overriding default Bootstrap styles.
* **Offer Box Overrides (Fix 2.3):** Custom CSS was added to ensure the special offer box border is Sage Green and the internal text/underline is Charcoal, overriding strong Bootstrap defaults.
* **`bg-light-sage` Utility Class:** A custom utility class was created and applied to the Classes page to provide visual separation between sections.

### 3. Core Pages
* **Classes Page (`classes.html`):** Includes a clear Class Schedule and an embedded, working **Registration Form** for direct client sign-ups.
* **About Page (`about.html`):** Features detailed Company History and the studio's Mission & Values, using the cohesive design structure.
* **Home Page (`index.html`):** Features the Parallax Hero Image and the 3-column Features/Benefits section.

### 4. Functionality
* **Form Submission Alerts (Fix 1.2):** Both the main Contact form (`contact.html`) and the Registration form (`classes.html`) provide a simple JavaScript pop-up alert to confirm submission, giving the user immediate feedback.
* **Modern Footer (Fix 1.3):** A 3-column structured footer provides easy access to Brand info, Contact details, and Social Media links on all pages.

---

## ⚙️ Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript**
* **Bootstrap 4.5.2:** Used for responsive grid structure and basic form styling.
* **Google Fonts:** For 'Playfair Display' and 'Lato' typography.
* **Font Awesome 5.15.4:** Used for all icons across the site (Logo, Features, Footer Contact).

---

## 5. Testing

The website was extensively tested across multiple devices and viewport sizes to ensure responsiveness and correct functionality.

### Functional Testing
* **Navigation:** All four links (Home, Classes, About, Contact) successfully direct the user to the correct page.
* **Forms:** Both the 'Get In Touch' form and the 'Registration' form correctly trigger a success alert upon submission.
* **Custom Styling:** The Sage Green button (`btn-success`) and the custom border/text colors on the 'Introductory Offer' box render correctly, demonstrating successful CSS overrides.
* **Footer Links:** Contact details are present, and social media links have correct `target="_blank"` and `aria-label` attributes for usability.

### 5.5 Validator Testing
The HTML and CSS have been checked for errors. 



CSS have been validated with jigsaw.w3.org without any errors

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
