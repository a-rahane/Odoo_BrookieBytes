# ReWear Authentication System

A modern, secure user authentication system built with vanilla JavaScript, featuring email/password authentication and social media login options.

## 🌟 Features

### 🔐 Authentication Methods
- **Email/Password Authentication**: Secure login and signup with email validation
- **Social Media Login**: One-click authentication with Google, Facebook, GitHub, and Twitter
- **Password Security**: Strong password requirements with real-time strength indicator
- **Session Management**: Automatic session tracking with inactivity timeout

### 🎨 User Interface
- **Modern Design**: Beautiful gradient backgrounds and smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Real-time Validation**: Instant feedback on form inputs
- **Password Visibility Toggle**: Show/hide password functionality
- **Success/Error Messages**: Clear user feedback for all actions

### 🔒 Security Features
- **Password Strength Checker**: Real-time password strength validation
- **Form Validation**: Comprehensive client-side validation
- **Session Management**: Secure session handling with localStorage
- **Auto-logout**: Automatic logout after 30 minutes of inactivity
- **Data Persistence**: User data stored securely in browser localStorage

## 📁 File Structure

```
Odoo_BrookieBytes/
├── index.html          # Main login page with toggle to signup
├── Signup.html         # Dedicated signup page
├── dashboard.html      # User dashboard after successful login
├── README.md          # This documentation file
└── Problem Statements_ Odoo Hackathon '25.pdf
```

## 🎨 Color Palette

| Color        | Hex Code  | Use                             |
| ------------ | --------- | ------------------------------- |
| Soft Beige   | `#D9C9C3` | Backgrounds                     |
| Neutral Pink | `#D8A2BD` | CTA buttons, highlights         |
| Plum         | `#6D4C6E` | Icons, secondary buttons, tags  |
| Charcoal     | `#24221E` | Text, navbar, footer            |
| Taupe/Khaki  | `#B8A690` | Cards, borders, labels          |
| Off-white    | `#F3F0EC` | Backgrounds, modals, containers |

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required - built with vanilla JavaScript

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. Start using the authentication system!

## 📖 Usage Guide

### For Users

#### Creating an Account
1. Navigate to the signup page (`Signup.html` or click "Sign up" on login page)
2. Fill in your details:
   - Full Name (required)
   - Email Address (required)
   - Phone Number (optional)
   - Password (minimum 8 characters)
   - Confirm Password
3. Accept Terms of Service and Privacy Policy
4. Optionally subscribe to newsletters
5. Click "Create Account" or use social media login

#### Logging In
1. Open `index.html` (main login page)
2. Enter your email and password
3. Click "Sign In" or use social media login
4. You'll be redirected to the dashboard upon successful authentication

#### Dashboard Features
- View your profile information
- See authentication statistics
- Monitor session time
- Logout functionality
- Auto-logout after 30 minutes of inactivity

### For Developers

#### Key Features Implementation

**Password Strength Checker:**
```javascript
function checkPasswordStrength(password) {
    let strength = 0;
    // Checks for length, lowercase, uppercase, numbers, special characters
    return { strength, feedback };
}
```

**Form Validation:**
```javascript
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
```

**Session Management:**
```javascript
// Store user session
localStorage.setItem('currentUser', JSON.stringify(user));

// Check authentication
const user = JSON.parse(localStorage.getItem('currentUser'));
```

## 🎯 Features in Detail

### Email/Password Authentication
- **Real-time validation**: Email format and password strength checked as you type
- **Error handling**: Clear error messages for invalid inputs
- **Success feedback**: Confirmation messages for successful actions
- **Password requirements**: Minimum 8 characters with strength indicator

### Social Media Authentication
- **Multiple providers**: Google, Facebook, GitHub, Twitter
- **Simulated integration**: Ready for real OAuth implementation
- **Consistent UX**: Same user experience across all providers
- **Profile creation**: Automatic user profile creation from social login

### Security Features
- **Password visibility toggle**: Eye icon to show/hide passwords
- **Session timeout**: Automatic logout after 30 minutes of inactivity
- **Data validation**: Comprehensive client-side validation
- **Secure storage**: User data stored in browser localStorage

### User Experience
- **Responsive design**: Works on all device sizes
- **Smooth animations**: Hover effects and transitions
- **Accessibility**: Proper form labels and keyboard navigation
- **Modern UI**: Clean, professional design with gradients

## 🔧 Customization

### Styling
The system uses CSS custom properties and can be easily customized:
- Color scheme: Modify gradient colors in CSS
- Typography: Change font family and sizes
- Layout: Adjust container widths and spacing

### Functionality
- Add new social login providers
- Implement server-side validation
- Add email verification
- Integrate with backend APIs

## 📱 Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🔒 Security Considerations

### Current Implementation
- Client-side validation (for demo purposes)
- localStorage for data persistence
- Simulated social authentication

### Production Recommendations
- Implement server-side validation
- Use secure authentication APIs (Firebase Auth, Auth0, etc.)
- Add HTTPS enforcement
- Implement proper password hashing
- Add rate limiting for login attempts
- Use secure session management

## 🚀 Future Enhancements

### Planned Features
- [ ] Email verification system
- [ ] Password reset functionality
- [ ] Two-factor authentication
- [ ] User profile management
- [ ] Activity logging
- [ ] Admin dashboard
- [ ] API integration
- [ ] Database backend

### Technical Improvements
- [ ] Server-side rendering
- [ ] Progressive Web App (PWA) features
- [ ] Offline functionality
- [ ] Real-time notifications
- [ ] Advanced analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for the Odoo Hackathon '25. Feel free to use and modify for your own projects.

## 📞 Support

For questions or support, please refer to the project documentation or create an issue in the repository.

---