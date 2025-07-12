# ReWear - Sustainable Fashion Exchange Platform

A modern web application for swapping and exchanging fashion items, built with HTML, CSS, JavaScript, and Firebase.

## 🚀 Complete User Flow

### 1. Landing Page (`landing.html`)
- **Purpose**: Main homepage displaying all available items
- **Features**:
  - Hero section with rotating slides
  - Dynamic items grid loaded from Firebase
  - Category filtering (All, Women, Men, Shoes, Bags, Accessories)
  - Responsive design with loading states
  - Authentication-aware navigation

### 2. Authentication Flow
- **Login** (`index.html`): Email/password and social login options
- **Signup** (`Signup.html`): User registration with profile creation
- **Auto-redirect**: Authenticated users are automatically redirected to landing page

### 3. User Dashboard (`dashboard.html`)
- **Purpose**: User's personal space showing their listings and swaps
- **Features**:
  - Profile section with user info
  - Dynamic display of user's items from Firebase
  - Swap management (ongoing/completed)
  - Empty state with call-to-action

### 4. Add Item (`add_item.html`)
- **Purpose**: Form for users to list new items
- **Features**:
  - Image upload (up to 2 images)
  - Category selection
  - Title, description, and price fields
  - Firebase Storage for images
  - Firestore for item data
  - Auto-redirect to landing page after submission

### 5. Item Details (`item_detail.html`)
- **Purpose**: Detailed view of individual items
- **Features**:
  - Dynamic loading from Firebase
  - Image gallery with navigation
  - Item information display
  - Action buttons for swapping

## 🔧 Firebase Integration

### Authentication
- Email/password authentication
- Social login (Google, Facebook, GitHub, Twitter)
- User session management
- Protected routes

### Firestore Database
- **Collections**:
  - `items`: Stores all item listings
  - `users`: Stores user profile information

### Firebase Storage
- Image upload and storage
- Secure file access
- Automatic URL generation

## 📁 File Structure

```
Odoo_BrookieBytes/
├── index.html          # Login page
├── Signup.html         # Registration page
├── landing.html        # Main homepage
├── dashboard.html      # User dashboard
├── add_item.html       # Add new item form
├── item_detail.html    # Item details page
├── firebase.js         # Firebase configuration
└── README.md          # This file
```

## 🎨 Design System

### Color Palette
- **Timberwolf**: `#dbcdc6`
- **Champagne Pink**: `#ead7d1`
- **Amaranth Pink**: `#dd99bb`
- **Chinese Violet**: `#7b506f`
- **Dark Purple**: `#1f1a38`
- **White Pink**: `#feebf5`

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 🚀 Getting Started

1. **Setup Firebase**:
   - Create a Firebase project
   - Enable Authentication (Email/Password + Social providers)
   - Enable Firestore Database
   - Enable Firebase Storage
   - Update `firebase.js` with your configuration

2. **Run the Application**:
   - Serve the files using a local server
   - Open `landing.html` in your browser

3. **Test the Flow**:
   - Sign up for a new account
   - Add some items
   - Browse items on the landing page
   - View your dashboard

## 🔒 Security Features

- Authentication required for protected pages
- User-specific data isolation
- Secure image upload with validation
- Input sanitization and validation

## 📱 Responsive Design

- Mobile-first approach
- Responsive grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **UI Framework**: Custom CSS with modern design patterns
- **Icons**: Font Awesome 6.0
- **Fonts**: Google Fonts (Inter)

## 🔄 Data Flow

1. **User Registration** → Firebase Auth → User Profile Created
2. **Add Item** → Firebase Storage (images) → Firestore (item data)
3. **Landing Page** → Firestore Query → Display Items
4. **Dashboard** → Firestore Query (user-specific) → Display User Items
5. **Item Details** → Firestore Query (by ID) → Display Item Details

## 🎯 Key Features

- ✅ Complete user authentication flow
- ✅ Real-time data from Firebase
- ✅ Image upload and storage
- ✅ Category-based filtering
- ✅ Responsive design
- ✅ User-specific dashboards
- ✅ Item management system
- ✅ Modern UI/UX design

---

## 🙌 Thank You!

ReWear is now complete. Thank you for supporting our mission to make fashion more sustainable and community-driven!