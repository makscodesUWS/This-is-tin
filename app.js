// Sample accounts for demo purposes
const users = {
  Liam: {
    username: 'Liam',
    password: 'password1',
    email: 'Liam!',
    role: 'You have 3 tin credits',
    bio: 'More features coming soon',
  },
  Johnny: {
    username: 'Johnsidus the Third',
    password: 'password2',
    email: 'Johnsidius the third!',
    role: 'You have 3 tin credits',
    bio: 'More features coming soon',
  },
  Kevin: {
    username: 'Kevin',
    password: 'password3',
    email: 'Kevin!',
    role: 'you have 0 tin credits',
    bio: 'More features coming soon',
  },
  Maks: {
    username: 'Maks',
    password: 'password4',
    email: 'Maks!',
    role: 'you have 100000000000 tin credits',
    bio: 'More features coming soon',
  },
};
document.getElementById('citizenship-test-form')?.addEventListener('submit', function (event) {
  event.preventDefault();
  window.location.href = 'index.html';
});
// Handle login form submission (on login page)
document.getElementById('login-form')?.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form data
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the username and password match any user
  const user = users[username];
  if (user && user.password === password) {
    // Store user info in localStorage (for demo purposes)
    localStorage.setItem('username', username);
    // Redirect directly to user info page
    window.location.href = 'user-info.html';
  } else {
    // Display error message if login fails
    document.getElementById('error-message').textContent = 'Invalid username or password';
  }
});

// On homepage (index.html), check if user is logged in and show relevant buttons
window.onload = function () {
  const username = localStorage.getItem('username');

  if (username) {
    const user = users[username];
    document.getElementById('welcome-message').textContent = `Hello, ${user.username}!`;
    document.getElementById('login-btn').style.display = 'none';
    document.getElementById('logout-btn').style.display = 'block';
    document.getElementById('profile-btn').style.display = 'block';
  } else {
    document.getElementById('welcome-message').textContent = 'You are not logged in.';
    document.getElementById('login-btn').style.display = 'block';
    document.getElementById('logout-btn').style.display = 'none';
    document.getElementById('profile-btn').style.display = 'none';
  }

  // Handle logout
  document.getElementById('logout-btn')?.addEventListener('click', function () {
    localStorage.removeItem('username');
    window.location.reload();
  });

  // Handle profile redirection
  document.getElementById('profile-btn')?.addEventListener('click', function () {
    window.location.href = 'user-info.html';
  });
};

// On user-info.html, display user info
if (window.location.pathname.includes('user-info.html')) {
  const username = localStorage.getItem('username');
  if (username) {
    const user = users[username];
    document.getElementById('user-name').textContent = ` Hello, ${user.username}`;
    document.getElementById('user-role').textContent = ` Congrats: ${user.role}`;
    document.getElementById('user-bio').textContent = `Dont worry! ${user.bio}`;
  } else {
    // Redirect to login if user is not logged in
    window.location.href = 'login.html';
  }

  document.getElementById('back-btn').addEventListener('click', function () {
    window.location.href = 'index.html';
  });
}
