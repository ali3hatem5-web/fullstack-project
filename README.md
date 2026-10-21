# Fullstack Project (Laravel 13 + React 19)

A fullstack application composed of `backend/` (Laravel 13 API) and `frontend/` (React 19.3.1 + Vite + TypeScript + Tailwind CSS v4 + shadcn/ui).

---

## Versions

- **PHP:** 8.3.35 (CLI)
- **Composer:** 2.x
- **Laravel Framework:** 13.38.0
- **Database:** MariaDB 10.4.18 (XAMPP MySQL)
- **Node.js:** v24.22.1 / npm 11.19.1
- **React:** 19.3.1
- **Vite:** 8.3.5
- **TypeScript:** 6.0.3
- **Tailwind CSS:** 4.x (`@tailwindcss/vite`)
- **UI:** shadcn/ui (`Button` component via Radix UI Slot & CVA)

---

## Prerequisites & Installation

### 1. PHP 8.3+ & Composer
XAMPP desktop comes bundled with PHP 8.2 (or older). Laravel 13 requires PHP 8.3+.

1. Install PHP 8.3 via winget:
   ```powershell
   winget install --id PHP.PHP.8.3 --source winget
   ```
2. Enable required extensions in `php.ini`:
   ```ini
   extension_dir = "ext"
   extension=curl
   extension=fileinfo
   extension=mbstring
   extension=openssl
   extension=pdo_mysql
   extension=zip
   ```
3. Download `composer.phar` and place `composer.bat` in your PHP folder to execute globally.

### 2. Database (XAMPP MySQL)
1. Open **XAMPP Control Panel** and click **Start** next to **MySQL**.
2. Open **phpMyAdmin** (`http://localhost/phpmyadmin`) and create the database:
   ```sql
   CREATE DATABASE fullstack_db;
   ```
3. Backend `.env` configuration:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=fullstack_db
   DB_USERNAME=root
   DB_PASSWORD=
   ```

---

## Setup & Running the Application

### Backend (`backend/`)

1. Navigate to the backend directory:
   ```powershell
   cd backend
   ```
2. Run database migrations:
   ```powershell
   php artisan migrate
   ```
3. Start the Laravel development server:
   ```powershell
   php artisan serve --port=8000
   ```
4. Verify API health check:
   - Endpoint: `GET http://127.0.0.1:8000/api/health`
   - Response: `{"status":"ok","database":"connected"}`

### Frontend (`frontend/`)

1. Navigate to the frontend directory:
   ```powershell
   cd frontend
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Start Vite dev server:
   ```powershell
   npm run dev
   ```
   Open `http://127.0.0.1:5173/` in your browser.
4. Verify production build:
   ```powershell
   npm run build
   ```
