# ⚡ EV Analytics Dashboard

A premium, high-performance analytics dashboard designed to visualize Electric Vehicle (EV) population data with a focus on adoption trends, market share, and vehicle metrics.


## 🚀 Key Features

- **Fleet Overview**: High-level stats showing total inventory, average battery range, and CAFV eligibility.
- **Adoption Curve**: Interactive area chart visualizing EV registration trends over time.
- **Market Dynamics**: Breakdown of top manufacturers and their market share.
- **Advanced Filtering**: Dynamic filtering by vehicle make to drill down into specific manufacturer data.
- **Responsive Analytics**: Fully responsive design optimized for various device sizes.
- **Modern UI**: Dark-themed, glassmorphic design system with smooth micro-animations.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Visualizations**: [Recharts](https://recharts.org/)
- **Data Parsing**: [PapaParse](https://www.papaparse.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Hooks & Context API

## 📦 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm / yarn / pnpm

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd analytics-dashboard-assessment/frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to see the dashboard.

## 📂 Project Structure

```text
/frontend
├── app/               # Next.js App Router (pages and layouts)
├── components/        # Reusable dashboard & UI components
│   ├── dashboard/     # Charts, stats cards, filters, and loading screens
│   └── layout/        # Header and Sidebar components
├── hooks/             # Custom React hooks (e.g., useEVData for CSV loading)
├── public/            # Static assets (data files, icons, images)
│   └── data/          # Contains the EV population CSV dataset
└── tailwind.config.ts # Custom theme & brand color configuration
```

## 🏗️ Core Components

### `useEVData` Hook

Client-side hook that asynchronously fetches and parses the EV dataset using PapaParse, providing real-time data status and error handling.

### `MainChart` Component

A versatile visualization component that dynamically switches between **Area Charts** (for adoption trends) and **Pie Charts** (for market share) based on props.

### `StatsCard` Component

Displays summarized metrics with hover effects and specialized icons to represent key performance indicators.

## 📜 License

This project is part of a technical assessment. All rights reserved.
