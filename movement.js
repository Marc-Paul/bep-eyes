
    const eye1 = document.querySelector('.eye-left');
    const eye2 = document.querySelector('.eye-right')
    window.addEventListener('mousemove', (evt) => {
      var x = -(window.innerWidth / 2 - evt.pageX) / 2;
      var y = -(window.innerHeight / 2 - evt.pageY) / 2;
      x = Math.min(Math.max(-25, x), 20);
      y = Math.min(Math.max(-25, y), 20);
      eye1.style.transform = `translateY(${y}px) translateX(${x}px)`;
      eye2.style.transform = `translateY(${y}px) translateX(${x}px)`;
    });
