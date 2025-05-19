//your JS code here. If required.
function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Apply cookies if they exist
    window.onload = () => {
      const savedFontSize = getCookie('fontsize');
      const savedFontColor = getCookie('fontcolor');

      if (savedFontSize) {
        document.documentElement.style.setProperty('--fontsize', savedFontSize);
        document.getElementById('fontsize').value = parseInt(savedFontSize);
      }

      if (savedFontColor) {
        document.documentElement.style.setProperty('--fontcolor', savedFontColor);
        document.getElementById('fontcolor').value = savedFontColor;
      }
    };

    // Save preferences to cookies on form submit
    document.getElementById('fontForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const fontSize = document.getElementById('fontsize').value;
      const fontColor = document.getElementById('fontcolor').value;

      // Set cookies (expires in 365 days)
      document.cookie = `fontsize=${fontSize}px; path=/; max-age=${365 * 24 * 60 * 60}`;
      document.cookie = `fontcolor=${fontColor}; path=/; max-age=${365 * 24 * 60 * 60}`;

      // Apply immediately
      document.documentElement.style.setProperty('--fontsize', fontSize + 'px');
      document.documentElement.style.setProperty('--fontcolor', fontColor);
    });
