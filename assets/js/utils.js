function transformInfo(title, meetups) {
  let list = ``;
  const icon = {
    'python': './assets/icons/python.png',
    'pyladies': './assets/icons/pyladies.png',
    'pydata': './assets/icons/pydata.png'
  }

  for (meetup in meetups) {
    list += `<li><a href=` + meetups[meetup].url + ` target="blank_" ><img src=` + icon[meetups[meetup].icon] +` class="icon" /><p> ` + meetups[meetup].name + `</p></a></li>`;
  }

  return `
    <b>${title}</b>
    <ul>${list}</ul>
  `
}