## PassSafe: Your Complete Password Manager

PassSafe is a secure web application designed to help you **manage your passwords efficiently and securely**. It allows you to save, retrieve, update, and delete passwords for various accounts with robust encryption and user-specific access.

---

### Key Features

* **Secure Authentication:** Powered by **Auth0** for secure user login.
* **Encrypted Storage:** All sensitive data is **AES-256 encrypted** before being stored in **MongoDB**.
* **User-Specific Access:** Your passwords are private and isolated.
* **CRUD Operations:** Easily **add, view, update, and delete** your password entries.
* **Smart Search:** Quickly find entries by searching any field except the password itself.
* **Password Strength Checker:** Get **visual feedback (colored borders)** on password strength as you type.
* **Password Generator:** Create strong, unique passwords with custom options.
* **Responsive Design:** Works seamlessly across all your devices.

---

### How It Works

PassSafe utilizes a **React frontend** for a user-friendly experience, communicating with a **Node.js/Express backend**. **Mongoose** manages data in **MongoDB**, and **Auth0** handles secure authentication. All sensitive data is encrypted using **AES-256** for maximum security.

---

### Getting Started

To run PassSafe locally:

1.  **Clone the repository:** `git clone https://github.com/ramkumar03ace/PassSafe.git`
2.  **Set up Backend:**
    * `cd backend`
    * Create a `.env` file with `AUTH0_DOMAIN`, `AUTH0_AUDIENCE`, `MONGO_URI`, `ENCRYPTION_KEY`, and `PORT=5000`.
    * `npm install`
    * `npm start`
3.  **Set up Frontend:**
    * `cd frontend`
    * `npm install`
    * `npm run dev`
4.  **Access:** Open your browser to `http://localhost:5173`.

---

### Contributions

We welcome contributions! Feel free to open an issue or submit a pull request for bug fixes or new features.
