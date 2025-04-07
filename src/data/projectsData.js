import github from "../assets/github.png"

const projectsData = [{
  id: 1,
  name: 'AI Recipe Generator',
  text: 'Recipe generator by providing your ingredients and the AI will provide you a recipe based on your provided ingredients.',
  skill: 'React • Hugging Face API',
  image: 'https://i.postimg.cc/yYzDmNjf/kjgff.jpg',
  repo: 'https://github.com/mynameisjonelledev/chef-claude',
  repologo: {github},
  webpage: 'https://chef-claude-jonelle.vercel.app/',
  data: 'fade-right',
},{
  id: 2,
  name: 'Hotel Booking Webpage',
  text: 'Hotel booking webpage for a fictional company that provides a way for users to book their dream vacation.',
  skill: 'React • Landing Page',
  image: 'https://i.postimg.cc/Gp0D5jxC/fdgdlk.jpg',
  repo: 'https://github.com/mynameisjonelledev/sapphire-shores',
  repologo: {github},
  webpage: 'https://sapphire-shores.vercel.app/', 
  data: 'fade-left',
}, {
  id: 3,
  name: 'Vibe Matcher Web App',
  text: 'Vibe Matcher is a fun web app where users select their mood, and the app generates a random track from a curated Spotify playlist.',
  skill: 'React • Spotify API',
  image: 'https://i.postimg.cc/Dy8bfNCh/jrlkr.jpg',
  repo: 'https://github.com/mynameisjonelledev/vibe-matcher',
  repologo: {github},
  webpage: 'https://vibe-matcher.vercel.app/',
  data: 'fade-right',
}];

export default projectsData;