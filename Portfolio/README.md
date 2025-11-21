# Personal Portfolio

This is a responsive multi-page personal portfolio website designed with a minimalist aesthetic. The portfolio showcases projects, provides information about the creator, and includes contact details.

## Project Structure

```
PORTFOLIO
├── index.html           # Homepage with hero section and contact form
├── about.html          # About page detailing interests and background
├── projects.html       # Projects page featuring a grid of project cards
├── blog.html           # Blog page for articles and posts
├── css
│   ├── style.css       # Main styles for the portfolio
│   ├── about.css       # Specific styles for about page
│   ├── projects.css    # Specific styles for projects page
│   └── blog.css        # Specific styles for blog page
├── js
│   ├── main.js         # Main JavaScript functionality
│   ├── navigation.js   # Navigation active state handling
│   ├── about.js        # About page specific functionality
│   ├── projects.js     # Projects page specific functionality
│   └── blog.js         # Blog page specific functionality
├── assets
│   ├── images          # Directory for image files (logos, photos, icons)
│   │   ├── wa.png       # Website logo
│   │   ├── myphoto.jpg  # Profile photo
│   │   ├── github.png   # GitHub icon
│   │   ├── linkedin.jpg # LinkedIn icon
│   │   ├── gmail.png    # Gmail icon
│   │   └── logo.svg     # Twitter/X icon
│   └── Waqar_Resume.pdf # Resume file
├── vercel.json         # Vercel deployment configuration
└── README.md           # Project documentation
```

## Features

- **Responsive Design**: The website is fully responsive and optimized for various screen sizes with mobile-first approach
- **Minimalist Aesthetic**: Clean and modern design using dark theme with blue accent colors (#2976ff, #00f7ff)
- **Interactive Navigation**: Active navigation highlighting with smooth transitions and hover effects
- **Contact Form**: Integrated contact form with floating labels and validation
- **Social Media Integration**: Direct links to GitHub, LinkedIn, Twitter/X, and email
- **Downloadable Resume**: Direct download link for PDF resume
- **Modern Typography**: Uses Inter and Poppins fonts for clean readability
- **Icon Integration**: SVG icons for navigation and social links
- **Mobile Responsive**: Optimized for mobile devices with proper scaling and layout

## Deployment

This portfolio is configured for deployment on Vercel with the included `vercel.json` configuration file.

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Or connect your GitHub repository to Vercel for automatic deployments.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd PORTFOLIO
   ```

3. Open the `index.html` file in your browser to view the portfolio.

4. For development, you can use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (with live-server)
   npx live-server .
   ```

5. Customize the content in the HTML files to reflect your personal information and projects.

## Technologies Used

- **HTML5**: Semantic markup with modern HTML features
- **CSS3**: Modern CSS with Grid, Flexbox, and CSS Variables
- **JavaScript (ES6+)**: Interactive functionality and navigation handling
- **SVG Icons**: Scalable vector graphics for crisp icons
- **Google Fonts**: Inter and Poppins font families
- **Responsive Web Design**: Mobile-first approach with breakpoints
- **Vercel**: Static site hosting and deployment

## Author

**Waqar Akhtar** - AI & Cloud Engineer  
Contributor @ SSoC'25, SDI'25 & Hacktoberfest

- GitHub: [Waqar080206](https://github.com/Waqar080206)
- LinkedIn: [waqar-akhtar-081954178](https://www.linkedin.com/in/waqar-akhtar-081954178/)
- Twitter/X: [@WaqarAkhtar_08](https://x.com/WaqarAkhtar_08)
- Email: syed.waqar.akhtar08@gmail.com

## License

This project is open source and available under the [MIT License](LICENSE).