import { GitHub, Instagram, Linkedin, Mail} from "assets/icons/social";
//Importamos de social.js
export const API_BASE_URL = "https://api.themoviedb.org/3";
export const IMG_BASE_URL = "https://image.tmdb.org/t/p";
export const DEFAULT_BANNER = "https://coolwallpapers.me/th700/1030538-curtain.jpg";
export const REACT_APP_API_KEY = 'cadfbc7dd7852934ebad229372e564aa'; //aqui se ingresa la clave de la api  
//api key
export const Social = [
	{
		link: "https://www.instagram.com/saul_sainz_/",
		icon: <Instagram />,
		title: "Saul_Sainz's instagram",
	},
	{
		link: "https://github.com/SaulEZ2",
		icon: <GitHub />,
		title: "Saul Sainz's GitHub",
	},
	{
		link: "https://www.linkedin.com/in/sa%C3%BAl-espinosa-s%C3%A1inz-688240192/",
		icon: <Linkedin />,
		title: "Saul Sainz's LinkedIn",
	},
	{
		link: "mailto:saulsainz208@gmail.com",
		icon: <Mail />,
		title: "Saulsainz's Email",
	},
]; //redes sociales 
