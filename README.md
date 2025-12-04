# Mind Balance: Wellness Studio - Project Report

This document serves as the final report for the Mind Balance website project, detailing the planning, design, feature implementation, testing, and deployment processes. The project utilizes HTML5, CSS3, JavaScript, and the Bootstrap framework to deliver a fully responsive, professional website for a wellness studio.

# 1. Project Planning and Structure

This section outlines the initial project architecture, visual planning, and the checklist used to guide development.

1.1 Project Checklist and Requirements Tracking

A comprehensive checklist was maintained throughout the project lifecycle to ensure all mandatory functional and design requirements were met, including specific color overrides and form linking.

[IMAGE: Screenshot of the final, fully checked Project Checklist]

# 1.2 Wireframes and Initial Layout

Wireframes were created to define the structural hierarchy and ensure consistency across the four main pages. This planning step ensured that key elements, such as the registration form and class schedule, were placed intuitively.

|

| Page | Key Structural Elements Planned |
| Home | Fixed Header, Parallax Hero Section, 3-Column Feature Area, Modern Footer. |
| Classes | Class Schedule Grid, Explicit Introductory Offer Box, Dedicated Registration Form. |
| About | Company History Narrative, Mission & Values Feature Blocks. |
| Contact | Simplified 'Get In Touch' Form, Detailed Contact Information. |

[IMAGE: Wireframe of the Home Page (Desktop View)] [IMAGE: Wireframe of the Classes Page (Mobile View)]

## 2. User Experience (UX) and Strategy

The core strategy for Mind Balance was to create a sense of calm while maximizing client conversion through clear calls-to-action.

# 2.1 Business Goals and Conversion Strategy

The website is designed to fulfill the following primary business objectives:

Lead Generation: Convert visitors into registered clients using prominent, custom-styled forms.

Brand Building: Establish credibility and trust via the mission and values detailed on the About page.

Information Access: Provide immediate access to class schedules and contact information on all pages.

# 2.2 User Stories Implemented

| User Role | Goal | Success Feature |
| Potential Client | Easily understand pricing and sign up for an introductory session. | Classes Page: Clear 'Special Introductory Offer' box and Registration Form. |
| Returning User | Find the contact number or social media links quickly. | Global Feature: Persistent, 3-column modern footer. |
| Mobile User | Navigate the site without layout issues. | Global Feature: Bootstrap responsiveness and collapsing navigation bar. |

## 3. Design Specification

The design uses a clean, natural palette and professional typography, all managed using CSS variables for high consistency.

# 3.1 Color Scheme Variables

The color palette reinforces the theme of wellness and nature. These colors are defined in the :root block of styles.css.

| Variable | Usage | HEX Code |
| --primary-color | Primary highlights, headings, buttons, icons. | #8FBC8F (Sage Green) |
| --bg-color | Main page and header background. | #FAF9F6 (Cream/Off-White) |
| --text-color | Body text, footer background. | #333333 (Charcoal Grey) |

[IMAGE: Screenshot of the :root variables block in styles.css showing the color definitions]

# 3.2 Typography

Headings: Playfair Display (Elegant Serif) is used for titles (h1, h2, h3) to convey a professional brand identity.

Body Text: Lato (Clean Sans-Serif) is used for all descriptive text, labels, and navigation for optimal readability.

# 3.3 Aesthetic Components

Logo & Header: The logo is styled with the primary Sage Green color and a spa-related icon, visible within the fixed header.

Custom Buttons: The standard Bootstrap btn-success class was overridden with custom CSS to apply the Sage Green color and a unique "pill" shape, creating a distinct call-to-action style.

[IMAGE: Screenshot of the Home Page (Desktop View) showcasing the logo and typography in use]

## 4. Key Features Implementation

# 4.1 Global Features

Fixed Navigation: The header remains locked at the top of the viewport, enhancing accessibility.

Modern Footer: A 3-column dark footer provides structured access to contact, social, and brand information.

# 4.2 Home Page Features (index.html)

Parallax Effect: The hero background image utilizes background-attachment: fixed to create a subtle parallax effect upon scrolling, adding visual depth.

3-Column Feature Grid: A responsive grid presents the core services of the studio.

# 4.3 Forms and Functionality

Registration Form: Fully implemented on classes.html with fields for name, email, phone, and class selection.

Contact Form: Simplified form on contact.html for general inquiries.

Success Alerts: Both forms are linked to JavaScript functions to show an immediate, confirming pop-up alert upon submission, improving user feedback.

[IMAGE: Screenshot of the Classes Page (Mobile View) showing the Offer Box, Schedule, and Registration Form]

## 5. Development and Bug Resolution

This section tracks the necessary adjustments made to the code to ensure full adherence to the project specification and functionality.

# 5.1 Critical Fixes and Proof

The most critical functional fix involved ensuring both forms provided user feedback.

| Bug Description | File Affected | Resolution Implemented |
| Missing Form Link: The form in contact.html was not linked to the JavaScript handler in script.js. | contact.html | Added id="signup-form" to the form tag, connecting it to the existing JS function. |
| Styling Override: The border and text color of the Introductory Offer box were initially defaulting to Bootstrap colors. | styles.css | Used !important and specific CSS selectors to enforce the Sage Green and Charcoal colors as required. |

[IMAGE: Code snippet from contact.html showing the corrected <form id="signup-form"> element]

# 5.2 Test Features

All interactive elements were tested to ensure smooth operation:

Form Submission: Confirmed the JavaScript success alert fires for both contact.html and classes.html.

Responsiveness: Verified the layout adapts correctly at breakpoints (mobile, tablet, desktop).

Navigation: Checked that the fixed header and all navigation links function correctly.

[IMAGE: Screenshot showing the successful JavaScript alert after form submission]

## 6. Testing, Validation, and Deployment

# 6.1 Code Validation

The source code was validated against official standards to ensure compliance and best practices.

HTML Validation: Passed W3C HTML Validator with no errors.

CSS Validation: Passed W3C CSS Validator with no errors.

# 6.2 Deployment Status

The Mind Balance project is hosted on GitHub and deployed via the GitHub Pages service.

Deployment Method: Deployed from the main branch.

Live Site URL: [Insert Live Site Link Here]

Repository URL: [Insert GitHub Repository Link Here]

[IMAGE: Screenshot of the GitHub Pages Settings page confirming successful deployment]

# 6.3 Deployment History Proof

The deployment history confirms that recent fixes were successfully processed and pushed to the live environment.

[IMAGE: Screenshot of the GitHub Deployment History showing recent successful deployments]

## 7. Credits

Code & Development: [Your Name]

Frameworks & Libraries: Bootstrap 4.5.2, Font Awesome 5.15.4, Google Fonts (Lato & Playfair Display).

Visual Inspiration: Project structure and design standards were based on the PTC Consultants project methodology.
