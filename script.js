const labels = document.querySelectorAll('.form-control label');

//take node list of each form-control label and put spans around each letter
labels.forEach((label) => {
  label.innerHTML = label.innerText //grab the label text
    .split('') //split the label text into an array of individual letters
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 25}ms">${letter}</span>`
    ) // wrap a span around each letter using the map funtion
    .join(''); //join the letters back together again;
});
