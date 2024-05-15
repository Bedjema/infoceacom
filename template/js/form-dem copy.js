$(document).ready(function () {
  if (window.location.hash) {
    setTimeout(function () {
      $("input:text:visible:first").focus();
    }, 200);
    $(".asur-form")
      .find(".form-control")
      .addClass("light")
      .delay(2e3)
      .queue(function () {
        $(".asur-form").find(".form-control").removeClass("light").dequeue();
      });
  }
  $("#Motif").attr("style", "color: #666666 !important;");
  $("#Motif option").attr("style", "color: #000000 !important;");
  $("#Motif").change(function () {
    var _0x576cx1 = $("#Motif").val();
    if (_0x576cx1 != "") {
      $("#Motif").attr("style", "color: #000000 !important;");
    } else {
      $("#Motif").attr("style", "color: #666666 !important;");
    }
  });
  $("#Type").attr("style", "color: #666666 !important;");
  $("#Type option").attr("style", "color: #000000 !important;");
  $("#Type").change(function () {
    var _0x576cx1 = $("#Type").val();
    if (_0x576cx1 != "") {
      $("#Type").attr("style", "color: #000000 !important;");
    } else {
      $("#Type").attr("style", "color: #666666 !important;");
    }
  });
  $(".dem_devis").click(function () {
    $("html,body").animate(
      { scrollTop: $("#form-dem-con").offset().top },
      "slow"
    );
    $("input:text:visible:first").focus();
    $(".asur-form")
      .find(".form-control")
      .addClass("light")
      .delay(2e3)
      .queue(function () {
        $(".asur-form").find(".form-control").removeClass("light").dequeue();
      });
  });
  $("#form_submit_dem").validate({
    errorLabelContainer: "#error-note-dem",
    wrapper: "li",
    rules: {
      Nom: { required: true, maxlength: 50 },
      Prenom: { required: true, maxlength: 50 },
      Telephone: {
        required: true,
        regex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        maxlength: 20,
      },
      CodePostal: {
        required: false,
        regex: /(?!00000)[0-9]{5}/,
        maxlength: 5,
        minlength: 5,
      },
      Marque: { required: false, maxlength: 50 },
      Motif: { required: false, maxlength: 100 },
      Type: { required: false, maxlength: 100 },
      Email: {
        required: true,
        regex: /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i,
        maxlength: 100,
      },
    },
    messages: {
      Nom: {
        required: "- Veuillez saisir votre nom car il est obligatoire.",
        maxlength: "- le champ de nom ne devrait pas dépasser {0} caractères.",
      },
      Prenom: {
        required: "- Veuillez saisir votre prénom car il est obligatoire.",
        maxlength:
          "- le champ de la prénom ne devrait pas dépasser {0} caractères.",
      },
      Telephone: {
        required:
          "- Veuillez saisir votre numéro de téléphone car il est obligatoire.",
        maxlength:
          "- le champ de la numéro de téléphone ne devrait pas dépasser {0} caractères.",
        regex: "- Veuillez saisir un numéro de téléphone valide.",
      },
      CodePostal: {
        minlength:
          "- le champ de code postal ne doit pas être inférieur à {0} chiffres.",
        maxlength:
          "- le champ de code postal ne devrait pas dépasser {0} chiffres.",
        regex: "- Veuillez saisir un code postal valide.",
      },
      Marque: {
        maxlength:
          "- le champ de la marque ne devrait pas dépasser {0} caractères.",
      },
      Motif: {
        maxlength:
          "- le champ de motif ne devrait pas dépasser {0} caractères.",
      },
      Email: {
        required:
          "- Veuillez saisir votre adresse email car il est obligatoire.",
        maxlength:
          "- le champ d'adresse e-mail ne devrait pas dépasser {0} caractères.",
        regex: "- Veuillez saisir un adresse e-mail valide.",
      },
    },
    submitHandler: function (_0x576cx2) {
      _0x576cx2.submit();
    },
  });
});
$(document).ready(function () {
  $(".label_plat").magnificPopup({
    type: "inline",
    items: { src: "#label-plat" },
    closeOnBgClick: false,
    preloader: true,
    modal: true,
    callbacks: { open: function () {}, close: function () {} },
  });
});

$(document).ready(function () {
  if ($(".form_date_mask")[0]) {
    $(".form_date_mask").inputmask({ mask: "99/99/9999" });
  }
});
$("#form_submit_dem_glob").validate({
  errorLabelContainer: "#error-note-dem",
  wrapper: "li",
  rules: {
    Nom: { required: true, maxlength: 50 },
    Prenom: { required: true, maxlength: 50 },
    Telephone: {
      required: true,
      regex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
      maxlength: 20,
    },
    CodePostal: { required: false, regex: /^\d*$/, maxlength: 5, minlength: 5 },
    Email: {
      required: true,
      regex: /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i,
      maxlength: 100,
    },
    Immatriculation: {
      required: true,
      regex: /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i,
      maxlength: 10,
    },
    Solution: { required: true },
  },
  messages: {
    Nom: {
      required: "- Veuillez saisir votre nom car il est obligatoire.",
      maxlength: "- le champ de nom ne devrait pas dépasser {0} caractères.",
    },
    Prenom: {
      required: "- Veuillez saisir votre prénom car il est obligatoire.",
      maxlength:
        "- le champ de la prénom ne devrait pas dépasser {0} caractères.",
    },
    Telephone: {
      required:
        "- Veuillez saisir votre numéro de téléphone car il est obligatoire.",
      maxlength:
        "- le champ de la numéro de téléphone ne devrait pas dépasser {0} caractères.",
      regex: "- Veuillez saisir un numéro de téléphone valide.",
    },
    CodePostal: {
      minlength:
        "- le champ de code postal ne doit pas être inférieur à {0} chiffres.",
      maxlength:
        "- le champ de code postal ne devrait pas dépasser {0} chiffres.",
      regex: "- Veuillez saisir un code postal valide.",
    },
    Email: {
      required: "- Veuillez saisir votre adresse email car il est obligatoire.",
      maxlength:
        "- le champ d'adresse e-mail ne devrait pas dépasser {0} caractères.",
      regex: "- Veuillez saisir un adresse e-mail valide.",
    },
    Immatriculation: {
      required: "- Veuillez saisir votre immatriculation car il est obligatoire.",
      maxlength:
        "- le champ d'immatriculation ne devrait pas dépasser {0} caractères.",
      regex: "- Veuillez saisir une immatriculation valide.",
    },
    Solution: {
      required:
        "- Veuillez sélectionner votre solution d’assurance cherchée car il est obligatoire.",
    },
  },
  submitHandler: function (form) {
    form.submit();
  },
});
