$.validator.setDefaults({
    submitHandler: function() {
        alert("Registrado");
    }
});

$(document).ready(function() {
    $('#signupForm').validate({
        rules: {
            nombre: {
                required: true,
                minlength: 5
            },
            comments: {
                required: true
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true
            },
            agree: "required"
        },
        messages: {
            nombre: {
                required: "Por favor ingresa tu nombre completo",
                minlength: "Tu nombre debe ser de no menos de 5 caracteres"
            },

            password: {
                required: "Por favor ingresa una contraseña",
                minlength: "Tu contraseña debe ser de no menos de 5 caracteres de longitud"
            },
            confirm_password: {
                required: "Ingresa un password",
                minlength: "Tu contraseña debe ser de no menos de 5 caracteres de longitud",
                equalTo: "Por favor ingresa la misma contraseña de arriba"
            },
            email: "Por favor ingresa un correo válido",
            agree: "Por favor acepta nuestra política",

        },
        errorElement: "em",
        errorPlacement: function(error, element) {
            // Add the `help-block` class to the error element
            error.addClass("help-block");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.parent("label"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function(element, errorClass, validClass) {
            $(element).parents(".col-sm-10").addClass("has-error").removeClass("has-success");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parents(".col-sm-10").addClass("has-success").removeClass("has-error");
        }
    });
});