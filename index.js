window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  //   AFTER DOM FULLY LOADED
  let mediaBreakpointSize = 768;
  if (document.documentElement.clientWidth > mediaBreakpointSize) {
    console.log(document.documentElement.clientWidth + "desktop");

    var storeDiv = document.getElementsByClassName("store-div");

    for (let x = 0; x < storeDiv.length; x++) {
      var header = storeDiv[x].parentElement.offsetParent.parentElement;

      storeDiv[x].addEventListener("mouseover", function () {
        header.style.backgroundColor = "rgba(22, 22, 23)";
        header.style.transition = "0.3s";
        var headerChildren = header.parentElement.children;
        for (let index = 2; index < headerChildren.length; index++) {
          headerChildren[index].style.filter = "blur(5px)";
          headerChildren[index].style.transition = "1s";
        }
      });
      storeDiv[x].addEventListener("mouseout", function () {
        header.style.backgroundColor = "rgba(67, 67, 68, 0.9)";
        var headerChildren = header.parentElement.children;
        for (let index = 2; index < headerChildren.length; index++) {
          headerChildren[index].style.filter = "none";
        }
      });
    }

    document
      .getElementById("search-button")
      .addEventListener("click", function () {
        document.getElementById("search-input").focus();
      });

    document
      .getElementById("input-clear-button")
      .addEventListener("click", function () {
        document.getElementById("search-input").value = "";
        document.getElementById("search-input").focus();
        document.getElementById("input-clear-button").style.opacity = "0%";
      });

    let input = document.getElementById("search-input");
    let button = document.getElementById("input-clear-button");

    button.style.opacity = "0%";

    input.addEventListener("keyup", function (event) {
      let val = event.target.value;

      if (val === "") {
        button.style.opacity = "0%";
      } else {
        button.style.opacity = "100%";
      }
    });
    // -------------------------------------------------------------------------------------------
    // SILDER SECTION for desktop
    var slides = document.querySelectorAll(".slide-div");

    console.dir(slides[0].children[0]);
    var intervalId = window.setInterval(function () {
      for (let x = 0; x < slides.length; x++) {
        slides[x].style.opacity = "40%";
        slides[x].children[0].style.opacity = "0";
        slides[x].children[0].style.bottom = "10px";
        slides[x].children[0].style.transition = "1s";
        slides[x].children[1].style.opacity = "0";
        slides[x].children[1].style.bottom = "10px";
        slides[x].children[1].style.transition = "1s";

        slides[x].style.transition = "1s";
      }
      for (let x = 0; x < slides.length; x++) {
        if (slides[x].parentElement.classList.contains("is-selected")) {
          slides[x].style.opacity = "100%";
          slides[x].children[0].style.opacity = "1";
          slides[x].children[0].style.bottom = "40px";
          slides[x].children[0].style.transition = "1s";
          slides[x].children[1].style.opacity = "1";
          slides[x].children[1].style.bottom = "35px";
          slides[x].children[1].style.transition = "1s";

          slides[x].style.transition = "1s";
        }
      }
      var selectedSlide = document.querySelector(".is-selected");
    }, 80);
    // END OFSILDER SECTION
    // -------------------------------------------------------------------------------------------
    // FOOTER HIDDEN LINKS SECTION
    // var footerMobileLinks = document.querySelector(
    //   ".footer-mobile-hidden-div-clickable-link"
    // );
    // var footerHiddenDiv = document.querySelector(".fmh-hidden-div");
    // var plus1 = document.querySelector(".plus1");
    // console.log(plus1);
    // footerMobileLinks.addEventListener("click", function () {
    //   if (footerHiddenDiv.style.display == "") {
    //     footerHiddenDiv.style.display = "block";
    //     plus1.style.transform = "rotate(45deg)";
    //     plus1.style.transition = "0.4s";
    //   } else if (footerHiddenDiv.style.display == "block") {
    //     footerHiddenDiv.style.display = "";
    //     plus1.style.transform = "";
    //   }
    // });

    var footerMobileLinkDivs = document.querySelectorAll(
      ".footer-mobile-hidden-div-clickable-link"
    );
    for (let x = 0; x < footerMobileLinkDivs.length; x++) {
      footerMobileLinkDivs[x].addEventListener("click", function () {
        var nextHiddenDiv = footerMobileLinkDivs[x].nextElementSibling;
        var plusek = footerMobileLinkDivs[x].children[1];
        var hiddeUl = nextHiddenDiv.children[0];

        if (nextHiddenDiv.style.display == "") {
          nextHiddenDiv.style.display = "block";
          plusek.style.transform = "rotate(45deg)";
          plusek.style.transition = "0.4s";
        } else if (nextHiddenDiv.style.display == "block") {
          nextHiddenDiv.style.display = "";
          plusek.style.transform = "";
        }
      });
    }
  } else {
    //mobile js
    console.log(document.documentElement.clientWidth + " mobile");

    var Searchbutton = document.getElementById("search");
    var BagButton = document.getElementById("bagbag");
    var BarsButton = document.getElementById("bars");

    //Search button
    var hiddenSearch = document.getElementsByClassName("header-hidden-div2");
    var htmlBody = hiddenSearch[0].parentElement.parentElement;

    Searchbutton.addEventListener("click", function () {
      hiddenSearch[0].style.top = "0px";
      hiddenSearch[0].style.transition = "0.8s";
      htmlBody.style.height = "100%";
      htmlBody.style.overflowY = "hidden";
      hiddenSearch[0].parentElement.children[1].style.backgroundColor =
        "rgba(22, 22, 23)";
      hiddenSearch[0].parentElement.children[1].style.transition = "0.3s";
    });

    var mobileSearchCloseButton = document.getElementById(
      "mobile-close-search"
    );
    mobileSearchCloseButton.addEventListener("click", function () {
      hiddenSearch[0].style.top = "-1000px";
      htmlBody.style.removeProperty("height");
      htmlBody.style.removeProperty("overflow-y");
      document.getElementById("mobile-search-input").value = "";
      hiddenSearch[0].parentElement.children[1].style.backgroundColor =
        "rgb(67, 67, 68)";
      hiddenSearch[0].parentElement.children[1].style.transition = "0.3s";
    });

    document
      .getElementById("search-button")
      .addEventListener("click", function () {
        document.getElementById("mobile-search-input").focus();
      });

    document
      .getElementById("mobile-clear-input")
      .addEventListener("click", function () {
        document.getElementById("mobile-search-input").value = "";
        document.getElementById("mobile-search-input").focus();
        document.getElementById("mobile-clear-input").style.opacity = "0%";
        document.getElementById("mobile-clear-input").style.transition = "0.5s";
      });

    let mobileSearchInput = document.getElementById("mobile-search-input");
    let mobileClearButton = document.getElementById("mobile-clear-input");

    mobileClearButton.style.opacity = "0%";

    mobileSearchInput.addEventListener("keyup", function (event) {
      let val = event.target.value;

      if (val === "") {
        mobileClearButton.style.opacity = "0%";
        mobileClearButton.style.transition = "0.5s";
      } else {
        mobileClearButton.style.opacity = "100%";
        mobileClearButton.style.transition = "0.5s";
      }
    });

    //BAG BUTTON
    var bagHiddenDiv = document.getElementsByClassName("header-hidden-div3");
    console.log(bagHiddenDiv[0]);
    BagButton.addEventListener("click", function () {
      bagHiddenDiv[0].style.top = "0px";
      bagHiddenDiv[0].style.transition = "0.8s";
      htmlBody.style.height = "100%";
      htmlBody.style.overflowY = "hidden";
      hiddenSearch[0].parentElement.children[1].style.backgroundColor =
        "rgba(22, 22, 23)";
      hiddenSearch[0].parentElement.children[1].style.transition = "0.3s";
    });
    document
      .getElementById("mobile-close-bag")
      .addEventListener("click", function () {
        bagHiddenDiv[0].style.top = "-1000px";
        htmlBody.style.removeProperty("height");
        htmlBody.style.removeProperty("overflow-y");

        hiddenSearch[0].parentElement.children[1].style.backgroundColor =
          "rgb(67, 67, 68)";
        hiddenSearch[0].parentElement.children[1].style.transition = "0.3s";
      });

    //BARS BUTTON
    var barsHiddenDiv = document.getElementsByClassName("header-hidden-div4");
    console.log(barsHiddenDiv[0]);
    BarsButton.addEventListener("click", function () {
      barsHiddenDiv[0].style.top = "0px";
      barsHiddenDiv[0].style.transition = "0.8s";
      htmlBody.style.height = "100%";
      htmlBody.style.overflowY = "hidden";
      hiddenSearch[0].parentElement.children[1].style.backgroundColor =
        "rgba(22, 22, 23)";
      hiddenSearch[0].parentElement.children[1].style.transition = "0.3s";
    });
    document
      .getElementById("mobile-close-bars")
      .addEventListener("click", function () {
        barsHiddenDiv[0].style.top = "-1000px";
        htmlBody.style.removeProperty("height");
        htmlBody.style.removeProperty("overflow-y");

        hiddenSearch[0].parentElement.children[1].style.backgroundColor =
          "rgb(67, 67, 68)";
        hiddenSearch[0].parentElement.children[1].style.transition = "0.3s";
      });
    // -------------------------------------------------------------------
    // SLIDE SECTION for mobile
    var slides = document.querySelectorAll(".slide-div");

    console.dir(slides[0].children[0]);
    var intervalId = window.setInterval(function () {
      for (let x = 0; x < slides.length; x++) {
        slides[x].style.opacity = "40%";
        slides[x].children[0].style.opacity = "0";
        slides[x].children[0].style.bottom = "10px";
        slides[x].children[0].style.transition = "1s";
        slides[x].children[1].style.opacity = "0";
        slides[x].children[1].style.bottom = "10px";
        slides[x].children[1].style.transition = "1s";

        slides[x].style.transition = "1s";
      }
      for (let x = 0; x < slides.length; x++) {
        if (slides[x].parentElement.classList.contains("is-selected")) {
          slides[x].style.opacity = "100%";
          slides[x].children[0].style.opacity = "1";
          slides[x].children[0].style.bottom = "40px";
          slides[x].children[0].style.transition = "1s";
          slides[x].children[1].style.opacity = "1";
          slides[x].children[1].style.bottom = "35px";
          slides[x].children[1].style.transition = "1s";

          slides[x].style.transition = "1s";
        }
      }
      var selectedSlide = document.querySelector(".is-selected");
    }, 80);
    var car = document.querySelector(".carousel");

    // -------------------------------------------------------

    // FOOTER HIDDEN LINKS SECTION
    // var footerMobileLinks = document.querySelector(
    //   ".footer-mobile-hidden-div-clickable-link"
    // );
    // var footerHiddenDiv = document.querySelector(".fmh-hidden-div");
    // var plus1 = document.querySelector(".plus1");
    // console.log(plus1);
    // footerMobileLinks.addEventListener("click", function () {
    //   if (footerHiddenDiv.style.display == "") {
    //     footerHiddenDiv.style.display = "block";
    //     plus1.style.transform = "rotate(45deg)";
    //     plus1.style.transition = "0.4s";
    //   } else if (footerHiddenDiv.style.display == "block") {
    //     footerHiddenDiv.style.display = "";
    //     plus1.style.transform = "";
    //   }
    // });

    var footerMobileLinkDivs = document.querySelectorAll(
      ".footer-mobile-hidden-div-clickable-link"
    );
    for (let x = 0; x < footerMobileLinkDivs.length; x++) {
      footerMobileLinkDivs[x].addEventListener("click", function () {
        var nextHiddenDiv = footerMobileLinkDivs[x].nextElementSibling;
        var plusek = footerMobileLinkDivs[x].children[1];
        var hiddeUl = nextHiddenDiv.children[0];

        if (nextHiddenDiv.style.display == "") {
          nextHiddenDiv.style.display = "block";
          plusek.style.transform = "rotate(45deg)";
          plusek.style.transition = "0.4s";
        } else if (nextHiddenDiv.style.display == "block") {
          nextHiddenDiv.style.display = "";
          plusek.style.transform = "";
        }
      });
    }
  }
});
