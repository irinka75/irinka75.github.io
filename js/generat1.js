function rand()
    {
        let max = document.getElementById("max").value;
        let min = document.getElementById("min").value;

        let output = document.getElementById("output");

        let random = Math.floor(Math.random() * (max - min + 1) + min);

        output.value = random;
    }