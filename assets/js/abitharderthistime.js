$('.omni').click(function() {
  const well = $('<div></div>').addClass("modal fade")
  const done = $('<div></div>').addClass("modal-dialog modal-fullscreen")

  const share = $('<div></div>').attr("data-bs-dismiss", "modal").addClass("modal-content border-0").css("background-image", "url(./assets/images/bg.webp)").css("background-size", "cover").css("background-position", "center")

  const screenshot = $('<div></div>').addClass("modal-body text-center")
  const on = $('<img>').css("max-width", "500px").attr("src","./assets/images/eet.svg")
  const discord = $('<h1>Aptos Fomo</h1>').addClass("text-black")

  const ee = well.append(done.append(share.append(screenshot.append([on, discord]))))
  ee.modal('show');
})