function header(){
    fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  })
  .catch(error => console.error('Error loading header:', error));
};

function title(){
  fetch('title.html')
.then(response => response.text())
.then(data => {
  document.getElementById('title').innerHTML = data;
})
.catch(error => console.error('Error loading title:', error));
};

function footer(){
  fetch('footer.html')
.then(response => response.text())
.then(data => {
  document.getElementById('footer').innerHTML = data;
})
.catch(error => console.error('Error loading footer:', error));
};