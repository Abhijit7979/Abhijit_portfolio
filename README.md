# S. Abhijit Rao - Personal Portfolio for IBM pyspark

A modern, minimal AI-themed portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

## ✨ Features

- Modern, minimal design with dark mode AI theme
- Smooth animations with Framer Motion
- Fully responsive design (mobile, tablet, desktop)
- SEO-optimized with Next.js 15 metadata
- Project filtering by category
- All content easily editable in `/src/data/` files

## 📁 Project Structure

```
src/
├── app/              # Next.js app router
├── components/       # React components
│   ├── sections/     # Hero, About, Experience, Projects, etc.
│   ├── cards/        # Reusable card components
│   ├── layout/       # Navigation, Footer
│   └── animations/   # Framer Motion wrappers
├── data/             # 📝 EDIT YOUR CONTENT HERE!
│   ├── portfolio.ts  # Personal info & contact
│   ├── projects.ts   # Your projects
│   ├── experience.ts # Work experience
│   ├── skills.ts     # Technical skills
│   └── achievements.ts # Awards & education
└── types/            # TypeScript types
```

## 🎨 Customization

### Update Your Content

**All content is in `src/data/` - just edit the TypeScript files!**

1. **Personal Info**: `src/data/portfolio.ts`
2. **Projects**: `src/data/projects.ts` (add GitHub links, descriptions)
3. **Experience**: `src/data/experience.ts`
4. **Skills**: `src/data/skills.ts`

### Add Images

1. **Profile Photo**: Add to `public/images/profile/abhijit-rao.jpg`
2. **Project Screenshots**: Add to `public/images/projects/`
3. **Resume PDF**: Already added at `public/resume/`

### Change Theme Colors

Edit `src/app/globals.css`:

```css
--primary: 192 91% 59%;    /* Cyan */
--secondary: 263 70% 65%;  /* Purple */
--accent: 217 91% 60%;     /* Blue */
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com)

### Other Options

- **Netlify**: Build command: `npm run build`, Publish dir: `.next`
- **AWS Amplify, Railway, Render** - All support Next.js

## 📦 Build Commands

```bash
npm run dev    # Development server
npm run build  # Production build
npm start      # Run production build locally
```

## 🎯 Portfolio Sections

1. **Hero** - Name, role, animated intro
2. **About** - Executive summary
3. **Experience** - Prodigal AI internship
4. **Projects** - 3 projects with filtering
5. **Skills** - Technical & soft skills
6. **Achievements** - Awards & education
7. **Blog** - Placeholder for articles
8. **Contact** - Email, phone, social links

## 💡 Next Steps

- [ ] Add project screenshots to `public/images/projects/`
- [ ] Add your profile photo to `public/images/profile/`
- [ ] Update GitHub URLs in `src/data/projects.ts`
- [ ] Customize colors in `src/app/globals.css`
- [ ] Deploy to Vercel or Netlify

## 📧 Contact

**S. Abhijit Rao**
- Email: sar.abhijit2003@gmail.com
- LinkedIn: [linkedin.com/in/abhijit79](https://linkedin.com/in/abhijit79)
- GitHub: [github.com/Abhijit7979](https://github.com/Abhijit7979)

---

Built with Next.js 15 + TypeScript + Tailwind CSS
