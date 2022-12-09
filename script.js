// Replace {movie_id} and {your_api_key} with the actual values
const movie_id = Math.floor(Math.random() * 1000) + 1;

const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=362af9da1ef46b3f25052bb20767461f`;
const movie_name_url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=362af9da1ef46b3f25052bb20767461f`;

//random movie id from 1 to 1000

//fetch the movie name from the API and display it on the page
fetch(movie_name_url)
  .then((response) => response.json())
  .then((data) => {
    const movieTitle = document.getElementById('movie-title');
    movieTitle.innerText = data.title;
    // if movie isnt found, reload the page
    if (data.title === undefined) {
      location.reload();
    }
  });

// Fetch the data from the API and display it
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // Get the after credits element
    const afterCredits = document.getElementById('after-credits');

    // Loop through the cast array
    data.cast.forEach((actor) => {
      // Create a span element for each actor
      const span = document.createElement('span');
      span.innerText = actor.name + ' as ' + actor.character;

      // Add the span element to the after credits element
      afterCredits.appendChild(span);
      afterCredits.appendChild(document.createElement('br'));
    });

    // Create a list of jobs and the names of the people who did each job
    const jobs = {};
    data.crew.forEach((person) => {
      if (jobs[person.job]) {
        jobs[person.job].push(person.name);
      } else {
        jobs[person.job] = [person.name];
      }
    });

    // Loop through the jobs object and if there are more than 1 person for a job, first print the job then list the names of the people who did that job
    for (const job in jobs) {
      if (jobs[job].length > 1) {
        const span = document.createElement('span');
        span.innerText = job + ':\r\n' + jobs[job].join('\r\n');
        afterCredits.appendChild(span);
        afterCredits.appendChild(document.createElement('br'));
      }
    }

    // Loop through the jobs object and if there is only 1 person for a job, first print the job then print the name of the person who did that job
    for (const job in jobs) {
      if (jobs[job].length === 1) {
        const span = document.createElement('span');
        span.innerText = job + ': ' + jobs[job][0];
        afterCredits.appendChild(span);
        afterCredits.appendChild(document.createElement('br'));
      }
    }

    // set the speed of the animation to the number of credits
    afterCredits.style.animationDuration = data.cast.length * 2 + 's';

    // get animation duration in seconds
    const animationDuration = parseFloat(
      window.getComputedStyle(afterCredits).animationDuration
    );
    console.log(animationDuration);

    // reload the page after the animation is done
    setTimeout(() => {
      location.reload();
    }, animationDuration * 750);
    console.log(animationDuration * 800 + 'ms');
    console.log((animationDuration * 800) / 1000 + 's');
    //countdown timer to reload the page console.log
    let timeLeft = (animationDuration * 800) / 1000;
    const timer = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(timer);
      }
      console.log(timeLeft);
      timeLeft -= 1;
    }, 1000);
  });

// event listeners

//on key press flip the page
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    document.body.style.transform = 'rotateX(180deg)';
  } else if (e.key === 'ArrowDown') {
    document.body.style.transform = 'rotateX(0deg)';
  }
});

// array of fonts
const fonts = [
  'Arial',
  'Helvetica',
  'Times New Roman',
  'Courier New',
  'Verdana',
  'Georgia',
  'Palatino',
  'Garamond',
  'Bookman',
  'Comic Sans MS',
  'Trebuchet MS',
  'Arial Black',
  'Impact',
];

// on scroll change the font
document.addEventListener('wheel', (e) => {
  const afterCredits = document.getElementById('after-credits');
  afterCredits.style.fontFamily = fonts[Math.floor(Math.random() * 13)];
});
