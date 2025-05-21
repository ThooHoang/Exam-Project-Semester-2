// User data - in a real app this would come from a database
let userData = {
    name: "Janek Solecki",
    userNumber: "66772040",
    profileImage: "./src/assets/janek.png",
    storyProgress: 75,
    achievements: {
        completed: 5,
        total: 20
    },
    language: "English"
};

// Translation data
const translations = {
    "English": {
        "editProfile": "Edit Profile",
        "name": "Name",
        "userNumber": "User Number",
        "userNumberCannotBeChanged": "User number cannot be changed",
        "profileImageUrl": "Profile Image URL",
        "enterValidImageUrl": "Enter a valid image URL (jpg, png, gif, etc.)",
        "invalidImageUrl": "Invalid image URL. Please enter a valid image URL.",
        "cannotSaveInvalidImage": "Invalid image URL. Cannot save with invalid image.",
        "saveChanges": "Save Changes",
        "profileUpdated": "Profile updated successfully",
        "collection": "Collection",
        "yourCollection": "Your Collection",
        "openingCollection": "Opening your collection...",
        "profile": "Profile",
        "accountDetails": "Account Details",
        "general": "General",
        "language": "Language",
        "selectLanguage": "Select Language",
        "languageChanged": "Language changed to",
        "helpAndSupport": "Help & Support",
        "needHelp": "Need Help?",
        "connectingToSupport": "Connecting to support...",
        "faq": "FAQ",
        "openingFaq": "Opening FAQ...",
        "giveFeedback": "Give Us Feedback",
        "feedbackType": "Feedback Type",
        "selectType": "Select type",
        "bugReport": "Bug Report",
        "featureRequest": "Feature Request",
        "generalFeedback": "General Feedback",
        "yourFeedback": "Your Feedback",
        "submitFeedback": "Submit Feedback",
        "thankYouFeedback": "Thank you for your feedback!",
        "legal": "Legal",
        "termsAndConditions": "Terms and Conditions",
        "openingTerms": "Opening Terms and Conditions...",
        "privacyPolicy": "Privacy Policy",
        "openingPrivacy": "Opening Privacy Policy...",
        "preview": "Preview",
        "pleaseEnterImageUrl": "Please enter an image URL",
        "logOut": "Log Out",
        "logoutConfirm": "Are you sure you want to log out?",
        "loggedOutSuccess": "You have been logged out successfully",
        "storyGame": "Story Game",
        "achievements": "Achievements"
    },
    "Danish": {
        "editProfile": "Rediger Profil",
        "name": "Navn",
        "userNumber": "Brugernummer",
        "userNumberCannotBeChanged": "Brugernummer kan ikke ændres",
        "profileImageUrl": "Profil billede URL",
        "enterValidImageUrl": "Indtast en gyldig billede URL (jpg, png, gif, osv.)",
        "invalidImageUrl": "Ugyldig billede URL. Indtast venligst en gyldig billede URL.",
        "cannotSaveInvalidImage": "Ugyldig billede URL. Kan ikke gemme med ugyldigt billede.",
        "saveChanges": "Gem Ændringer",
        "profileUpdated": "Profil opdateret med succes",
        "collection": "Samling",
        "yourCollection": "Din Samling",
        "openingCollection": "Åbner din samling...",
        "profile": "Profil",
        "accountDetails": "Kontooplysninger",
        "general": "Generelt",
        "language": "Sprog",
        "selectLanguage": "Vælg Sprog",
        "languageChanged": "Sprog ændret til",
        "helpAndSupport": "Hjælp & Support",
        "needHelp": "Brug for hjælp?",
        "connectingToSupport": "Forbinder til support...",
        "faq": "FAQ",
        "openingFaq": "Åbner FAQ...",
        "giveFeedback": "Giv os feedback",
        "feedbackType": "Feedback Type",
        "selectType": "Vælg type",
        "bugReport": "Fejlrapport",
        "featureRequest": "Funktionsønske",
        "generalFeedback": "Generel Feedback",
        "yourFeedback": "Din Feedback",
        "submitFeedback": "Send Feedback",
        "thankYouFeedback": "Tak for din feedback!",
        "legal": "Juridisk",
        "termsAndConditions": "Vilkår og betingelser",
        "openingTerms": "Åbner vilkår og betingelser...",
        "privacyPolicy": "Privatlivspolitik",
        "openingPrivacy": "Åbner privatlivspolitik...",
        "preview": "Forhåndsvisning",
        "pleaseEnterImageUrl": "Indtast venligst en billede URL",
        "logOut": "Log Ud",
        "logoutConfirm": "Er du sikker på, at du vil logge ud?",
        "loggedOutSuccess": "Du er blevet logget ud med succes",
        "storyGame": "Story Spil",
        "achievements": "Præstationer"
    }
};

// Get current language
function getCurrentTranslation() {
    return translations[userData.language] || translations["English"];
}

// Translate a key
function translate(key) {
    const currentTranslation = getCurrentTranslation();
    return currentTranslation[key] || key;
}

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    // Profile elements
    const editButton = document.querySelector('.edit-button');
    const profileImg = document.querySelector('.profile-img');
    const nameElement = document.querySelector('.name-section h2');
    const userNumberElement = document.querySelector('.user-number');
    const progressBar = document.querySelector('.progress');
    const progressPercentage = document.querySelector('.percentage');
    const achievementsCompleted = document.querySelector('.completed');
    const logoutButton = document.querySelector('.logout-button');
    
    // Initialize page data
    updateProfileDisplay();
    translateUI();
    
    // Edit profile functionality
    editButton.addEventListener('click', () => {
        openEditProfileModal();
    });
    
    // Logout functionality
    logoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm(translate('logoutConfirm'))) {
            alert(translate('loggedOutSuccess'));
            // In a real app, this would redirect to login page
            // window.location.href = 'login.html';
        }
    });
    
    // Add click event listeners to all navigation links
    document.querySelectorAll('.links-list a').forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    
    // Functions
    function updateProfileDisplay() {
        nameElement.textContent = userData.name;
        userNumberElement.textContent = userData.userNumber;
        profileImg.src = userData.profileImage;
        progressBar.style.width = `${userData.storyProgress}%`;
        progressPercentage.textContent = `${userData.storyProgress}%`;
        achievementsCompleted.textContent = userData.achievements.completed;
    }
    
    function translateUI() {
        // Translate static elements
        document.querySelector('.story-game h3').textContent = translate('storyGame');
        document.querySelector('.achievements h3').textContent = translate('achievements');
        document.querySelectorAll('.section-label').forEach(label => {
            if (label.textContent === 'Collection') label.textContent = translate('collection');
            if (label.textContent === 'Profile') label.textContent = translate('profile');
            if (label.textContent === 'General') label.textContent = translate('general');
            if (label.textContent === 'Help & Support') label.textContent = translate('helpAndSupport');
            if (label.textContent === 'Legal') label.textContent = translate('legal');
        });
        document.querySelectorAll('.links-list a span').forEach(span => {
            if (span.textContent === 'Your Collection') span.textContent = translate('yourCollection');
            if (span.textContent === 'Account Details') span.textContent = translate('accountDetails');
            if (span.textContent === 'Language') span.textContent = translate('language');
            if (span.textContent === 'Need Help?') span.textContent = translate('needHelp');
            if (span.textContent === 'FAQ') span.textContent = translate('faq');
            if (span.textContent === 'Give Us Feedback') span.textContent = translate('giveFeedback');
            if (span.textContent === 'Terms and Conditions') span.textContent = translate('termsAndConditions');
            if (span.textContent === 'Privacy Policy') span.textContent = translate('privacyPolicy');
        });
        document.querySelector('.logout-button span').textContent = translate('logOut');
    }
    
    function openEditProfileModal() {
        // Create modal container
        const modal = document.createElement('div');
        modal.className = 'edit-profile-modal';
        
        // Create modal content
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2>${translate('editProfile')}</h2>
                <form id="profile-edit-form">
                    <div class="form-group">
                        <label for="profile-name">${translate('name')}</label>
                        <input type="text" id="profile-name" value="${userData.name}" required>
                    </div>
                    <div class="form-group">
                        <label for="profile-number">${translate('userNumber')}</label>
                        <input type="text" id="profile-number" value="${userData.userNumber}" readonly>
                        <small>${translate('userNumberCannotBeChanged')}</small>
                    </div>
                    <div class="form-group">
                        <label for="profile-image">${translate('profileImageUrl')}</label>
                        <div class="image-input-container">
                            <input type="text" id="profile-image" value="${userData.profileImage}">
                            <button type="button" id="preview-image-btn" class="preview-btn">${translate('preview')}</button>
                        </div>
                        <div id="image-preview-container" class="image-preview-container">
                            <img src="${userData.profileImage}" id="image-preview" class="image-preview">
                        </div>
                        <small>${translate('enterValidImageUrl')}</small>
                    </div>
                    <div id="image-error" class="error-message" style="display: none;"></div>
                    <button type="submit" class="save-button">${translate('saveChanges')}</button>
                </form>
            </div>
        `;
        
        // Add modal to body
        document.body.appendChild(modal);
        
        // Add event listeners
        modal.querySelector('.close-modal').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        // Add image preview functionality
        const previewBtn = modal.querySelector('#preview-image-btn');
        const imageInput = modal.querySelector('#profile-image');
        const imagePreview = modal.querySelector('#image-preview');
        const imageError = modal.querySelector('#image-error');
        
        // Add live preview functionality
        imageInput.addEventListener('input', function() {
            previewImage(this.value.trim());
        });
        
        // Preview button click
        previewBtn.addEventListener('click', () => {
            const imageUrl = imageInput.value.trim();
            previewImage(imageUrl);
        });
        
        // Function to preview image
        function previewImage(imageUrl) {
            if (!imageUrl) {
                imageError.style.display = 'block';
                imageError.textContent = translate('pleaseEnterImageUrl');
                return;
            }
            
            imagePreview.src = imageUrl;
            imagePreview.onerror = function() {
                imageError.style.display = 'block';
                imageError.textContent = translate('invalidImageUrl');
                this.src = userData.profileImage; // Fallback to current image
            };
            imagePreview.onload = function() {
                imageError.style.display = 'none';
            };
        }
        
        // Form submission
        modal.querySelector('#profile-edit-form').addEventListener('submit', (e) => {
            e.preventDefault();
            
            const newName = document.getElementById('profile-name').value;
            const newImageUrl = document.getElementById('profile-image').value;
            
            // Simple URL validation - not perfect but catches common issues
            const isValidUrl = newImageUrl && (
                newImageUrl.startsWith('http') || 
                newImageUrl.startsWith('./') || 
                newImageUrl.startsWith('/')
            );
            
            if (!isValidUrl) {
                imageError.style.display = 'block';
                imageError.textContent = translate('invalidImageUrl');
                return;
            }
            
            // Update user data directly
            userData.name = newName;
            userData.profileImage = newImageUrl;
            
            // Update display
            updateProfileDisplay();
            
            // Close modal
            document.body.removeChild(modal);
            
            // Show success message
            showToast(translate('profileUpdated'));
        });
    }
    
    function handleNavigation(e) {
        e.preventDefault();
        const linkText = e.currentTarget.querySelector('span').textContent;
        
        // Get the English key for the link text
        let actionKey = '';
        Object.entries(getCurrentTranslation()).forEach(([key, value]) => {
            if (value === linkText) {
                // Find the English key
                Object.entries(translations['English']).forEach(([enKey, enValue]) => {
                    if (enKey === key) actionKey = enValue;
                });
            }
        });
        
        // If no match found in translations, use the linkText directly
        if (!actionKey) actionKey = linkText;
        
        switch(actionKey) {
            case 'Your Collection':
                showToast(translate('openingCollection'));
                break;
            case 'Account Details':
                openEditProfileModal();
                break;
            case 'Language':
                openLanguageSelector();
                break;
            case 'Need Help?':
                showToast(translate('connectingToSupport'));
                break;
            case 'FAQ':
                showToast(translate('openingFaq'));
                break;
            case 'Give Us Feedback':
                openFeedbackForm();
                break;
            case 'Terms and Conditions':
                showToast(translate('openingTerms'));
                break;
            case 'Privacy Policy':
                showToast(translate('openingPrivacy'));
                break;
            default:
                showToast('Feature coming soon!');
        }
    }
    
    function openLanguageSelector() {
        // Only English and Danish
        const languages = ['English', 'Danish'];
        
        // Create modal for language selection
        const modal = document.createElement('div');
        modal.className = 'edit-profile-modal';
        
        // Create language options
        const languageOptions = languages.map(lang => 
            `<div class="language-option ${lang === userData.language ? 'selected' : ''}">
                <span>${lang}</span>
                ${lang === userData.language ? '<i class="fas fa-check"></i>' : ''}
            </div>`
        ).join('');
        
        // Create modal content
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2>${translate('selectLanguage')}</h2>
                <div class="language-list">
                    ${languageOptions}
                </div>
            </div>
        `;
        
        // Add modal to body
        document.body.appendChild(modal);
        
        // Add event listeners
        modal.querySelector('.close-modal').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        modal.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', () => {
                const language = option.querySelector('span').textContent;
                userData.language = language;
                translateUI(); // Update all UI text
                showToast(`${translate('languageChanged')} ${language}`);
                document.body.removeChild(modal);
            });
        });
    }
    
    function openFeedbackForm() {
        // Create modal
        const modal = document.createElement('div');
        modal.className = 'edit-profile-modal';
        
        // Create modal content
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2>${translate('giveFeedback')}</h2>
                <form id="feedback-form">
                    <div class="form-group">
                        <label for="feedback-type">${translate('feedbackType')}</label>
                        <select id="feedback-type" required>
                            <option value="">${translate('selectType')}</option>
                            <option value="bug">${translate('bugReport')}</option>
                            <option value="feature">${translate('featureRequest')}</option>
                            <option value="general">${translate('generalFeedback')}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="feedback-text">${translate('yourFeedback')}</label>
                        <textarea id="feedback-text" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="save-button">${translate('submitFeedback')}</button>
                </form>
            </div>
        `;
        
        // Add modal to body
        document.body.appendChild(modal);
        
        // Add event listeners
        modal.querySelector('.close-modal').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        modal.querySelector('#feedback-form').addEventListener('submit', (e) => {
            e.preventDefault();
            showToast(translate('thankYouFeedback'));
            document.body.removeChild(modal);
        });
    }
    
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast-message';
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        // Show the toast
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        // Hide and remove the toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }
});
