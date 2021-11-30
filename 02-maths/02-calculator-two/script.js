// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        var op1 = parseInt(document.getElementById("op-one").value);
        var op2 = parseInt(document.getElementById("op-two").value);

        switch (operation) {
            case "addition":
                var result = op1 + op2;
                window.alert("Answer is " + result);
                break;
            case "substraction":
                var result = op1 - op2;
                window.alert("Answer is " + result);
                break;
            case "multiplication":
                var result = op1 * op2;
                window.alert("Answer is " + result);
                break;
            case "division":
                var result = op1 / op2;
                window.alert("Answer is " + result);
                break;
            default:
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();