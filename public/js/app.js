const taskItems = document.querySelectorAll('.task-item');


taskItems.forEach(taskItem => {
  const checkbox = taskItem.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      taskItem.classList.add('completed'); // Add completed class if checkbox is checked
    } else {
      taskItem.classList.remove('completed'); // Remove completed class if checkbox is unchecked
    }
  });
});


  // Get the current day and date
  const currentDate = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Find the h1 element with the class "day-holder"
  const dayHolderElement = document.querySelector('.day-holder');
  const footerElement = document.querySelector('.footerr');

  // Update the day and date in the h1 element
  dayHolderElement.textContent = `${days[currentDate.getDay()]}, ${months[currentDate.getMonth()]} ${currentDate.getDate()}`;
  footerElement.textContent = `${currentDate.getFullYear()}`;



