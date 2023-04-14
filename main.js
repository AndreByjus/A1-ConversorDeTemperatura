function K()
{
    document.getElementById("info").innerHTML = 'Graus Kelvin';
    using = 'K';
    console.log(using);
}

function F()
{
    document.getElementById("info").innerHTML = 'Graus Fahrenheit';
    using = '°F';
    console.log(using);
}

function iniciar()
{
    result = document.getElementById("Celsius").value;

    if (using = 'K')
    {
        result1 = parseInt(result) + 273;
        console.log(result1);
    }

    if (using = '°F')
    {
        part1 = result * 9;
        part2 = parseInt(part1) / 5;
        result1 = parseInt(part2) + 32;

        console.log(part1);
        console.log(part2);
        console.log(result1);
    }

    document.getElementById("result").innerHTML = 'O resulado é: '+ result1 + using;
}