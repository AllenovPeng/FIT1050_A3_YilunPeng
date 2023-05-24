window.onload = () => {
  const subscribeBtnDom = document.querySelector('#subscribe-btn');
  subscribeBtnDom.addEventListener('click', () => {
    const email = document.querySelector('#email-address-input').value;
    if (!email) {
      alert('Please enter your email address.');
    } else {
      // validate email 
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(email)) {
        alert('Please enter correct email format.');
        return;
      }
      alert('Subscribe successfully!');
    }
  });
};

// Show or hide the scroll-to-top button based on the scroll position
window.addEventListener('scroll', function() {
  var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// Scroll to the top of the page when the button is clicked
document.getElementById('scrollToTopBtn').addEventListener('click', function() {
  document.documentElement.scrollTop = 0;
});
