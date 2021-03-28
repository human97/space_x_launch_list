let main = document.querySelector('.main')


// цикл добавления новостей на страницу
for (let key of news) {
  main.innerHTML += 
  `<section class="news">

    <h3>Mission ${key.Mission}</h3>
    <h2>${key.title}</h2>
    <p class="news--text">${key.text}</p>
    <div class="icons_block">
      <div class="icon_block data">
        <img src="assets/img/icons/calendar.png" alt="calendar">
        <div class="data--number">${key.data}</div>
      </div>
      <div class="icon_block time">
        <img src="assets/img/icons/time.png" alt="calendar">
        <div class="time--number">${key.time}</div>
      </div>
      <div class="icon_block rocket">
        <img src="assets/img/icons/rocket.png" alt="calendar">
        <div class="rocket--name">${key.rocket}</div>
      </div>
    </div>
    <!-- /.icons_block -->

    <div class="block_img">

    <picture class="block_img--mission_img">

      <source class="mission_img" srcset="assets/img/missions/mission_img_${key.Mission}.avif" type="image/avif">

      <source class="mission_img" srcset="assets/img/missions/mission_img_${key.Mission}.webp" type="image/webp">

      <img class="mission_img" src="assets/img/missions/mission_img_${key.Mission}.png" alt="image">

    </picture>

  </div>

  </section>
  <!-- /.news -->`
}