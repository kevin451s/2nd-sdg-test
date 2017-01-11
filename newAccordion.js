  $('.fit-navbar').on("click", function() {
    $(".fit-content").toggleClass("hidden")
    $('.fit-navbar').toggleClass("responsive")
    $('.accordion-icon').html('<span class="accordion-icon"> - </span>')

    $('.care-navbar').removeClass("responsive")
    $('.materials-navbar').removeClass("responsive")
    $(".care-content").addClass("hidden")
    $(".materials-content").addClass("hidden")
  })
  $('.care-navbar').on("click", function() {
    $(".care-content").toggleClass("hidden")
    $('.care-navbar').toggleClass("responsive")

    $('.fit-navbar').removeClass("responsive")
    $('.materials-navbar').removeClass("responsive")
    $(".fit-content").addClass("hidden")
    $(".materials-content").addClass("hidden")
  })
  $('.materials-navbar').on("click", function() {
    $(".materials-content").toggleClass("hidden")
    $('.materials-navbar').toggleClass("responsive")

    $('.fit-navbar').removeClass("responsive")
    $('.care-navbar').removeClass("responsive")
    $(".care-content").addClass("hidden")
    $(".fit-content").addClass("hidden")
  })
