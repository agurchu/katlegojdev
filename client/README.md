# Katlego Mtimane Portfolio - Client

A modern, responsive portfolio website built with React and Vite, showcasing the work and skills of Katlego Mtimane, a Software Engineer specializing in backend development, cloud solutions, and full-stack applications. The site features a WhatsApp-inspired UI design, with sections for projects, skills, experience, and more.

## Features

- **Responsive Design**: Optimized for mobile and desktop using Tailwind CSS.
- **Dynamic Content**: Fetches data from Google Sheets via a custom hook for projects, experience, and education.
- **Interactive Components**: Includes video modals, chat inputs, project cards, and navigation.
- **WhatsApp-Style UI**: Mimics WhatsApp's interface for a familiar user experience.
- **SEO Optimized**: Includes meta tags for social sharing and search engines.
- **Contact Integration**: Sends messages via WhatsApp or email through the backend.

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React, React Icons
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Particles**: TS Particles for background effects
- **Data Fetching**: Custom hook for Google Sheets API
- **Deployment**: Netlify (configured via `netlify.toml`)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/katlegojdev.git
   cd katlegojdev/client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

- Navigate through the app using the bottom navigation or routes.
- View projects, skills, and experience dynamically loaded from Google Sheets.
- Use the chat input to send messages via WhatsApp.
- Access video statuses for projects with video URLs.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build locally.

## Project Structure

```
client/
├── public/
│   ├── favicon.ico
│   └── kj-dev-icon.png
├── src/
│   ├── components/
│   │   ├── BottomNav.jsx
│   │   ├── ChatInput.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── Services.jsx
│   │   ├── ServiceBadge.jsx
│   │   ├── VideoModal.jsx
│   │   └── extractDriveId.js
│   ├── data/
│   │   ├── portfolioData.js
│   │   └── ServicesData.jsx
│   ├── hook/
│   │   └── useGoogleSheet.js
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── ExperienceDetail.jsx
│   │   ├── Home.jsx
│   │   ├── Profile.jsx
│   │   ├── ProjectChat.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Statuses.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── server.js
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── netlify.toml
```

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

- **Email**: katlegoj.dev@gmail.com
- **LinkedIn**: [linkedin.com/in/katlegojdev](https://linkedin.com/in/katlegojdev)
- **GitHub**: [github.com/agurchu](https://github.com/agurchu)

Built with ❤️ by Katlego Mtimane.
