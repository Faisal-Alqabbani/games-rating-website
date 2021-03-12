// Base url
// my_key=207c28c6241c4bb192cfff9755f5619b
const base_url = "https://api.rawg.io/api/";

// Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
// current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=15`;
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=15`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=15`;
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcomingGames}`;
export const newGamesUrl = () => `${base_url}${newGames}`;
export const gameDetailsUrl = (game_id) => `${base_url}games/${game_id}`;
export const gameScreenShotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots`;
export const searchGameUrl = (game_name) =>
  `${base_url}games?search=${game_name}&game_size=9`;
