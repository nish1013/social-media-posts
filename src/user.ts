interface User {
    isAdmin: boolean;
    isLoggedIn: boolean;
}

const user: User = {
    isAdmin: true,
    isLoggedIn: true
};

// Original logic
if (!user.isAdmin && !user.isLoggedIn) {
    // Code to execute if user is neither admin nor logged in
}

// Equivalent using De Morgan's law
if (!(user.isAdmin || user.isLoggedIn)) {
    // Code to execute if user is neither admin nor logged in
}
