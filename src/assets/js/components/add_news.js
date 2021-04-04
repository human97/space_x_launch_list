let main = document.querySelector('.main')


// цикл добавления новостей на страницу
for (let key of news) {
  main.innerHTML +=
    `<section class="news">

    <h3>Mission ${key.Mission}</h3>
    <h2>${key.title}</h2>
    <div class="news--text">${key.text}</div>
    <div class="icons_block">
      <div class="icon_block data">
      <svg class="icon_block--svg">
      <use xlink:href="#calendar"></use>
    </svg>
        <div class="data--number">${key.data}</div>
      </div>
      <div class="icon_block time">
      <svg class="icon_block--svg">
      <use xlink:href="#time"></use>
    </svg>
        <div class="time--number">${key.time}</div>
      </div>
      <div class="icon_block rocket">
      <svg class="icon_block--svg">
      <use xlink:href="#rocket"></use>
    </svg>
        <div class="rocket--name">${key.rocket}</div>
      </div>
    </div>
    <!-- /.icons_block -->

    <div class="block_img">

    <picture class="block_img--mission_img">

      <source class="mission_img" srcset="assets/img/missions/mission_img_${key.Mission}.avif" media='(min-width: 1220px)' type="image/avif">

      <source class="mission_img" srcset="assets/img/missions/mission_img_${key.Mission}.webp" media='(min-width: 1220px)' type="image/webp">

      <img class="mission_img" src="assets/img/missions/mission_img_${key.Mission}.png" srcset="assets/img/missions/mission_img_${key.Mission}x2.png 2x" alt="image">

    </picture>

  </div>

  </section>
  <!-- /.news -->`
}