const paragraphs = [
    "Every morning, I wake up to the sound of birds singing. I stretch, yawn, and slowly get out of bed. My first task is to brush my teeth and wash my face. Then, I drink a glass of water to start my day. I often go for a short walk to breathe in the fresh air. The streets are quiet, and the sun rises slowly. It is a peaceful way to begin the day. When I return home, I make breakfast—usually toast, eggs, or cereal. After eating, I sit at my desk, ready to start my work. Having a simple and calm morning routine helps me stay focused and relaxed throughout the day. It gives me a good start and sets a positive tone. No matter how busy life gets, I try to keep this habit because it brings peace to my mind.",
    "Out of all four seasons, my favorite is spring. The cold of winter fades away, and the flowers begin to bloom. Trees start to grow green leaves again, and the air smells fresh and clean. I like how the days get longer, and the sun feels warm but not too hot. Birds return and sing in the trees. Spring is full of new life. People come outside more often, and the parks become busy with families, kids, and joggers. It’s a great time to go for walks, fly a kite, or just sit in the sun. I also enjoy spring showers. The sound of gentle rain on the roof is relaxing. Everything feels alive in spring, and it reminds me of a new beginning. It’s the best time to grow plants, learn something new, and enjoy nature’s beauty all around.",
   "Last weekend, I visited the zoo with my family. It was a sunny day, and we were excited to see the animals. First, we saw the lions. They were resting in the shade, looking calm but powerful. Then we walked to the monkey area. The monkeys were swinging, playing, and making funny noises. It made us laugh. We also saw elephants, zebras, and giraffes. I was amazed at how tall the giraffes were. One of them was eating leaves from the highest branch. We stopped to have lunch near the penguin pool. The penguins swam quickly and dived into the water. My favorite part was the reptile house. I saw snakes, turtles, and a big lizard with colorful skin. At the end of the day, I was tired but happy. The zoo was fun and full of learning. I can’t wait to go again.",
      "The internet, as we know it today, began as a military project in the 1960s called ARPANET. It was designed to allow computers to communicate over long distances. Over the years, this technology grew and evolved. In the 1980s and 1990s, the World Wide Web was created by Tim Berners-Lee, making the internet accessible to the public. Websites, emails, and online services started to become common. By the early 2000s, internet use exploded worldwide. People could shop, chat, learn, and even work online. Today, the internet connects billions of devices, from computers to smartphones. It has changed the way we live, communicate, and do business. With social media, cloud computing, and online streaming, the internet continues to grow. It is now one of the most powerful tools of our time, shaping everything from culture to science and education.",
      "Honeybees are amazing insects with an important role in nature. A bee colony has three types of bees: the queen, the workers, and the drones. The queen lays eggs, while worker bees gather nectar, build the hive, and take care of the young. Drones are male bees whose main role is to mate with the queen. Bees collect nectar from flowers and turn it into honey inside their hives. During this process, they also pollinate flowers, which helps fruits and vegetables grow. Bees communicate by dancing. A special “waggle dance” tells other bees where to find flowers. A single bee can visit hundreds of flowers in a day. Despite their small size, bees are crucial to the environment and food production. Sadly, bee populations are declining due to habitat loss, pesticides, and climate change. Protecting bees is important for our planet’s future.",
      "Coding is the language of computers. It allows us to tell machines what to do by writing instructions in a programming language. There are many languages, like Python, JavaScript, C++, and Java. Each one is used for different kinds of tasks. Coding can build websites, mobile apps, games, and even control robots. Learning to code takes time and patience, but it is a very useful skill. It teaches you how to think logically and solve problems step by step. Coders use functions, loops, variables, and conditions to make software work. Debugging is also a big part of coding—finding and fixing errors in the code. With code, we can automate tasks, create tools, and build systems that make life easier. Today, coding is a skill in high demand, and it opens doors to many career paths in technology, science, and engineering.",
      "Our solar system is made up of the Sun and everything that orbits it, including eight planets, moons, asteroids, and comets. The four inner planets—Mercury, Venus, Earth, and Mars—are small and rocky. The outer planets—Jupiter, Saturn, Uranus, and Neptune—are large gas giants. Earth is the only planet known to support life. Mars has been explored by rovers, and scientists are studying it for signs of water and life. Jupiter, the largest planet, has a massive storm called the Great Red Spot. Saturn is famous for its beautiful rings. Beyond Neptune lies the Kuiper Belt, home to icy objects like Pluto. Space probes like Voyager and New Horizons have helped us learn about the far edges of the system. The universe is vast and full of mysteries. Exploring space helps us understand where we came from and what lies beyond our small world.",
      "Artificial Intelligence (AI) refers to the development of machines that can simulate human thinking, learning, and decision-making. Modern AI uses techniques like machine learning, deep learning, and natural language processing to analyze data and perform tasks without being explicitly programmed for each scenario. From chatbots and virtual assistants to self-driving cars and medical diagnostics, AI is reshaping industries. However, building intelligent systems is a complex challenge. AI models require large datasets, high computing power, and careful tuning to ensure accuracy and fairness. Ethical concerns also arise—bias in algorithms, job displacement, and data privacy are major topics of debate. Despite these challenges, AI continues to advance rapidly. Understanding its potential and limitations is crucial as it becomes more embedded in our daily lives. The future of AI holds great promise, but it must be developed with care, responsibility, and a focus on human benefit.",
      "Climate change is one of the most critical challenges facing our planet. Caused primarily by the increase in greenhouse gases such as carbon dioxide and methane, it leads to rising global temperatures, sea level rise, and more frequent extreme weather events. Human activities—especially burning fossil fuels, deforestation, and industrial agriculture—are major contributors. Climate change affects biodiversity, water resources, and food production, impacting both natural ecosystems and human societies. Addressing it requires global cooperation and swift action. Governments must enforce policies that reduce emissions, while individuals can make eco-conscious choices like using renewable energy, reducing waste, and supporting sustainable practices. Technological innovations like electric vehicles, carbon capture, and green infrastructure offer hope. But time is limited. Acting now is essential to prevent irreversible damage. The future of Earth depends on our collective efforts to protect and restore the planet’s delicate balance.",
      "Creative expression—through art, music, writing, and design—is a powerful force that connects people, cultures, and ideas. It allows individuals to convey thoughts, emotions, and experiences in ways that transcend language. Throughout history, creativity has shaped civilizations, sparked revolutions, and influenced generations. Whether it’s a painting that stirs emotion, a novel that inspires change, or a melody that brings comfort, creativity touches every part of human life. In today’s fast-paced digital world, creative skills are more important than ever. They foster innovation, critical thinking, and empathy. Creative work challenges norms and invites new perspectives. However, creativity also requires vulnerability and courage, as it often involves sharing something deeply personal. By nurturing creative habits, we open the door to deeper self-understanding and meaningful communication with others. Everyone has creative potential—it just needs to be discovered, practiced, and shared."
];
  const type = document.querySelector(".type p");
  let charIndex = 0;
  const input = document.querySelector("input");


function getRandomParagraph() {
  input.value = ""; // Clear previous input
type.innerHTML = ""; // Clear previous content
const randomIndex = Math.floor(Math.random() * paragraphs.length);
paragraphs[randomIndex].split("").forEach((char, index) => {
     let span = `<span class="text-gray-800 text-lg md:text-xl">${char}</span>`;
     type.innerHTML += span;
});

type.onclick = () => {
    input.focus();
}

let countMistakes = 0;
const mistakes = document.querySelector("footer h4 span");

const characters = type.querySelectorAll("span");
  characters[charIndex].classList.add("mark");

input.oninput = (e) => {
  let typedChar = input.value.split("")[charIndex];
    if(characters[charIndex].innerText === typedChar) {
      characters[charIndex].classList.add("text-green-500");
      characters[charIndex+1].classList.add("mark");
      characters[charIndex].classList.remove("mark");
      characters[charIndex].classList.remove("text-gray-800");
      charIndex++;

    }
    else if(typedChar == null) {
           charIndex--;
           if(characters[charIndex].classList.contains("text-red-500")) {
           countMistakes--;
          }
           characters[charIndex+1].classList.remove("mark");
           characters[charIndex].classList.add("mark");
      characters[charIndex].classList.remove("text-red-500", "text-green-500");
    }
    else if(characters[charIndex].innerText != typedChar) {
      characters[charIndex].classList.add("text-red-500");
        characters[charIndex+1].classList.add("mark");
      characters[charIndex].classList.remove("mark");
      characters[charIndex].classList.remove("text-gray-800", "text-green-500");
    charIndex++;
    countMistakes++;
    }
console.log(charIndex);
mistakes.innerText = countMistakes;
}


}

getRandomParagraph();


const button = document.querySelector("footer button");
button.onclick = () => {
  getRandomParagraph();
  timer();
  input.disabled = false;
};

const h3 = document.querySelector("h3");
const time = document.querySelector("h3 span");
let min = 2;
let sec = 0;

function timer(){
     let id = setInterval(() => {
    time.innerText = `${min}:${sec}`;
      if(sec == 0 && min > 0){
        min--;
        sec = 60;
      }
      else if(min == 0 && sec == 0){
        input.disabled = true;
        clearInterval(id);
        result();
        min = 2;
        sec = 1;
      }
      sec--;
     },1000);
}
timer();

function result() {
  alert("Time's up! Please click the button to try again.");
}