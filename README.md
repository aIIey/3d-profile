# Website Documentation

## Overview
This repository contains the source code for a personal website built using **React**, **Next.js**, and **Tailwind CSS**. The site showcases a user profile card with a dynamic 3D effect and includes sections for a banner, profile details, and an "About Me" section.

## Features
- **Interactive 3D Card**: Designed with reusable components (`CardContainer`, `CardBody`, `CardItem`) for modularity and ease of customization.
- **Responsive Design**: Optimized for different screen sizes using Tailwind CSS utilities.
- **Dynamic Content**:
  - Banner and avatar images.
  - Profile details and social links.
- **About Me Section**: Highlighting skills and personal details.

## Technologies Used
- **React**
- **Next.js**
- **Tailwind CSS**
- **TypeScript**

## Components
1. **CardContainer**: The main container for the 3D card.
2. **CardBody**: Defines the card's structure and styling.
3. **CardItem**: Used for layering and creating the 3D depth effect.

## Project Structure
```plaintext
/pages
  |_ index.tsx  // Main entry point
/components
  |_ ui/3d-card  // Reusable 3D card components
/public
  |_ banner2.jpg  // Banner image
  |_ pp2.png  // Profile avatar image
```

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Contact
For inquiries, email me at [i@clu.ng](mailto:i@clu.ng).

## Notes
- Credits to sye (check fork for original)

