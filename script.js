const rev = {
  year: 365, // one year in seconds
  days: 365.26,
  ab: ["Sun", "Mercury", "Venus", "Earth", "Moon", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
  abTime: [0, 0.24, 0.61, 1, 0.07, 1.88, 11.86, 29.46, 84.01, 164.79], // revolution in years
  info: [
    "Our Sun is a 4.5 billion-year-old star – a hot glowing ball of hydrogen and helium at the center of our solar system. The Sun is about 93 million miles (150 million kilometers) from Earth, and without its energy, life as we know it could not exist here on our home planet, earth.",
    "Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 87.97 Earth days is the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods.",
    "Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. It has the longest rotation period of any planet in the Solar System and rotates in the opposite direction to most other planets. It does not have any natural satellites. It is named after the Roman goddess of love and beauty.",
    "Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago.",
    "The Moon is an astronomical body that orbits planet Earth and is Earth's only permanent natural satellite.",
    "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. It has two moons named Phobos and Demios. Mars carries the name of the Roman God of War.",
    "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a giant planet with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined.",
    "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth.",
    "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
    "Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet."
  ],
  selector: {
    orb: document.querySelectorAll(".orbit"),
    gui: document.querySelector(".gui"),
    title: document.querySelector(".gui h1"),
    par: document.querySelector(".gui p"),
    xBtn: document.querySelector(".close-gui"),
    ys: document.querySelector(".ys"),
    inpt: document.querySelector("#year-in-seconds")
  },

  makeRev() {
    this.selector.ys.textContent = `${this.year}s`;
    for (let i = 1; i < this.selector.orb.length; i++) {
      this.selector.orb[i].style.animationDuration = `${Math.round((this.abTime[i]*this.year)*100)/100}s`;
    }
  },

  changeYS() {
    this.year = this.selector.inpt.value;
    this.makeRev();
  },

  showGUI() {
    const that = this;
    for (let i = 0; i < that.selector.orb.length; i++) {
      that.selector.orb[i].addEventListener("click", function(){
        that.selector.title.textContent = that.ab[i];
        that.selector.par.textContent = that.info[i];
        that.selector.gui.style.opacity = "1";
        that.selector.gui.style.zIndex = "11";
      });
    }
  },

  closeGUI() {
    this.selector.gui.style.opacity = "0";
    this.selector.gui.style.zIndex = "0";
  }
};

function rnd(min, max) {
  return Math.floor(Math.random() * (max - (min) + 1) + (min));
}

function spawnStars(n) {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const starsBG = document.querySelector(".stars-bg");
  for (let i = 0; i <= n; i++) {
    const rndWH = rnd(1, 2); // width and height of the stars
    const posX = rnd(0, w); // position x of the stars
    const posY = rnd(0, h); // position y of the stars
    const opc = Math.round((Math.random() * (0.5 - 0.1 + 0.5) + 0.1) * 100) / 100; // random opacity
    const stars = document.createElement("div");
    stars.setAttribute("style",
                      `width: ${rndWH}px;
                      height: ${rndWH}px;
                      top: ${posY}px;
                      left: ${posX}px;
                      opacity: ${opc};`
                      );
    starsBG.appendChild(stars);
  }
}

function start() {
  rev.makeRev();
  rev.showGUI();
  spawnStars(200);
}