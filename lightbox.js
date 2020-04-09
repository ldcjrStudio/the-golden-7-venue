// $(window).load(function () {
//   $("body").removeClass("preload");
// });

$(".photos a").on("click", function (ev) {
  ev.preventDefault();
  $("#photos .modal").fadeIn(500);

  const content = $(this).html();

  $("#photos .modal-content").html(content);
});

$("#photos .modal-background, #photos .modal-close").on("click", function (ev) {
  $("#photos .modal").fadeOut(500);
  ev.preventDefault();
});
