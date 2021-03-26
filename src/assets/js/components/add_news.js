let main = document.querySelector('.main')

for (let key of news) {
  main.innerHTML += `
  <section class="news">
    <h3>Mission ${key.Mission}</h3>
    <h2>${key.title}<new/h2>
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
  </section>
  <!-- /.news -->`
}