const date = new Date();
document.querySelector('#footerCaption').textContent = `© ${date.getFullYear()} // Jon Connell // Provo, Utah`;

let lastModified = document.lastModified;
document.querySelector('#lastUpdate').textContent = `Last Updated: ${lastModified}`;