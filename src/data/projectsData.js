import github from "../assets/github.png"

const projectsData = [{
  id: 1,
  name: 'AI Recipe Generator',
  text: 'Recipe generator by providing your ingredients and the AI will provide you a recipe based on your provided ingredients.',
  skill: 'React • Hugging Face API',
  image: 'https://i.ibb.co/nqRrhTX8/pic1.jpg',
  repo: 'https://github.com/jonelcubio/chef-claude',
  repologo: {github},
  webpage: 'https://chef-claude-jonelle.vercel.app/',
  data: 'fade-right',
},{
  id: 2,
  name: 'Hotel Booking Webpage',
  text: 'Hotel booking webpage for a fictional company that provides a way for users to book their dream vacation.',
  skill: 'React • Landing Page',
  image: 'https://i.ibb.co/KxPqyqL0/pic1.jpg',
  repo: 'https://github.com/jonelcubio/sapphire-shores',
  repologo: {github},
  webpage: 'https://sapphire-shores.vercel.app/', 
  data: 'fade-left',
}, {
  id: 3,
  name: 'Vibe Matcher Web App',
  text: 'Vibe Matcher is a fun web app where users select their mood, and the app generates a random track from a curated Spotify playlist.',
  skill: 'React • Spotify API',
  image: 'https://i.ibb.co/93hLLkg4/pic1.jpg',
  repo: 'https://github.com/jonelcubio/vibe-matcher',
  repologo: {github},
  webpage: 'https://vibe-matcher.vercel.app/',
  data: 'fade-right',
}];

export default projectsData;